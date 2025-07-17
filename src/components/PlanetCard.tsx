import React from 'react';
import { Planet } from '../types/Planet';

interface PlanetCardProps {
  planet: Planet;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <p className="card-text">
          <strong>Sector:</strong> {planet.sector} <br />
          {planet.biome && (
            <>
              <strong>Biome:</strong> {planet.biome.slug}
              <br />
              <strong>Description:</strong> {planet.biome.description}
              <br />
            </>
          )}
        </p>
        {Array.isArray(planet.environmentals) && planet.environmentals.length > 0 && (
          <ul>
            {planet.environmentals.map((effect, index) => (
              <li key={index}>
                {effect.name} – {effect.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PlanetCard;
