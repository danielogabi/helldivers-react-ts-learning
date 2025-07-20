import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { PlanetStatus } from '../types/types';
import { Planet } from '../types/Planet';

type PlanetCardProps = {
  planet: PlanetStatus | Planet; // Support both types
};

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
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
      {('owner' in planet) && <p>Owner: {planet.owner}</p>} {/* PlanetStatus-specific */}
      {('faction' in planet) && <p>Faction: {planet.faction}</p>} {/* PlanetStatus-specific */}
      {('players' in planet) && <p>Players: {planet.players}</p>} {/* PlanetStatus-specific */}
      {('health' in planet) && <span className="health">{planet.health} HP</span>} {/* PlanetStatus-specific */}
      {('sector' in planet) && <p>Sector: {planet.sector}</p>} {/* Planet-specific */}
      {('biome' in planet) && planet.biome && <p>Biome: {planet.biome.description}</p>} {/* Planet-specific */}
    </motion.div>
  );
};

export default PlanetCard;