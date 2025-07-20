import React, { useEffect, useState, useRef } from 'react';
import { PlanetStatus } from '../types/types';
import { motion, useAnimation } from 'framer-motion';

const Status: React.FC = () => {
  const [planets, setPlanets] = useState<{
    active: PlanetStatus[];
    inactive: PlanetStatus[];
  }>({
    active: [],
    inactive: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const [statusRes, infoRes, campaignRes] = await Promise.all([
          fetch('https://helldiverstrainingmanual.com/api/v1/war/status'),
          fetch('https://helldiverstrainingmanual.com/api/v1/war/info'),
          fetch('https://helldiverstrainingmanual.com/api/v1/war/campaign'),
        ]);

        if (!statusRes.ok || !infoRes.ok || !campaignRes.ok) {
          throw new Error('Failed to fetch data from one or more endpoints.');
        }

        const [statusJson, infoJson, campaignJson] = await Promise.all([
          statusRes.json(),
          infoRes.json(),
          campaignRes.json(),
        ]);

        const parsedPlanets = statusJson.planetStatus.map((planet: any) => {
          const planetInfo =
            infoJson.planetInfos.find(
              (info: any) => info.index === planet.index
            ) || {};
          const campaignInfo =
            campaignJson.find(
              (campaign: any) => campaign.planetIndex === planet.index
            ) || {};

          return {
            index: planet.index,
            name:
              campaignInfo.name || planetInfo.name || `Planet ${planet.index}`,
            owner: planet.owner === 1 ? 'Helldivers' : 'Enemy',
            faction: campaignInfo.faction || 'N/A',
            health: planet.health || 0,
            players: campaignInfo.players || planet.players || 0,
          };
        });

        const active = parsedPlanets.filter(
          (planet) => planet.faction !== 'N/A'
        );
        const inactive = parsedPlanets.filter(
          (planet) => planet.faction === 'N/A'
        );

        setPlanets({ active, inactive });
      } catch (error) {
        console.error('Failed to fetch status:', error);
        setError('Failed to load planet status. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  const renderPlanetList = (planetList: PlanetStatus[]) => (
    <div className="scroll-section">
      {planetList.map((planet) => (
        <PlanetCard key={planet.index} planet={planet} />
      ))}
    </div>
  );

  return (
    <div className="status-container container">
      <h1 className="mb-4">🌍 Planet Status</h1>
      {loading && <p>Loading status...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="columns">
          {/* Active Planets */}
          <motion.div
            className="column active-planets"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Active Planets</h2>
            {renderPlanetList(planets.active)}
          </motion.div>

          {/* Inactive Planets */}
          <motion.div
            className="column inactive-planets"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Inactive Planets</h2>
            {renderPlanetList(planets.inactive)}
          </motion.div>
        </div>
      )}
    </div>
  );
};

const PlanetCard: React.FC<{ planet: PlanetStatus }> = ({ planet }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0.5, y: 50 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      ref={ref}
      className="planet-card"
      initial={{ opacity: 0.5, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <strong>{planet.name}</strong>
      <p>Owner: {planet.owner}</p>
      <p>Faction: {planet.faction}</p>
      <p>Players: {planet.players}</p>
      <span className="health">{planet.health} HP</span>
    </motion.div>
  );
};

export default Status;
