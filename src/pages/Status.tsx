import React, { useEffect, useState } from 'react';

interface PlanetStatus {
  id: number;
  name: string;
  owner: string;
  health: number;
}

const Status: React.FC = () => {
  const [data, setData] = useState<PlanetStatus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('https://helldiverstrainingmanual.com/api/v1/planets');
        const json = await res.json();
        const parsed: PlanetStatus[] = Object.values(json).map((planet: any) => ({
          id: planet.id,
          name: planet.name,
          owner: planet.owner || 'Unknown',
          health: planet.health || 0,
        }));
        setData(parsed);
      } catch (error) {
        console.error('Failed to fetch status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="mb-4">🌍 Planet Status</h1>
      {loading ? (
        <p>Loading status...</p>
      ) : (
        <ul className="list-group">
          {data.map((planet) => (
            <li key={planet.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{planet.name}</span>
              <span className="badge bg-primary rounded-pill">{planet.health} HP</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Status;
