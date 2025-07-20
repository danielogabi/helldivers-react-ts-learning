import React, { useEffect, useState } from 'react';
import PlanetCard from '../components/PlanetCard';
import { Planet } from '../types/Planet';

const PlanetsInfo: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await fetch('https://helldiverstrainingmanual.com/api/v1/planets');
        const data = await res.json();

        const parsed: Planet[] = Object.values(data);
        setPlanets(parsed);
      } catch (err) {
        console.error('Error fetching planets:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div className="container planet-info my-5">
      <h2 className="my-5">🪐 Planet Info</h2>
      {loading ? (
        <p>Loading planets...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {planets.map((planet, index) => (
            <div className="col" key={index}>
              <PlanetCard planet={planet} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanetsInfo;