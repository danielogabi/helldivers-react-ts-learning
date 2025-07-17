import React, { useEffect, useState } from 'react';

interface PlanetStatus {
  index: number;
  name: string;
  owner: string;
  faction: string;
  health: number;
  players: number;
}

const Status: React.FC = () => {
  const [activePlanets, setActivePlanets] = useState<PlanetStatus[]>([]);
  const [inactivePlanets, setInactivePlanets] = useState<PlanetStatus[]>([]);
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

        const statusJson = await statusRes.json();
        const infoJson = await infoRes.json();
        const campaignJson = await campaignRes.json();

        // Merge data from all endpoints
        const parsed: PlanetStatus[] = statusJson.planetStatus.map((planet: any) => {
          const planetInfo = infoJson.planetInfos.find((info: any) => info.index === planet.index) || {};
          const campaignInfo = campaignJson.find((campaign: any) => campaign.planetIndex === planet.index) || {};

          return {
            index: planet.index,
            name: campaignInfo.name || planetInfo.name || `Planet ${planet.index}`, // Prioritize campaign name
            owner: planet.owner === 1 ? 'Helldivers' : 'Enemy',
            faction: campaignInfo.faction || 'N/A', // Use faction from campaign, fallback to "N/A"
            health: planet.health || 0,
            players: campaignInfo.players || planet.players || 0, // Prioritize campaign players
          };
        });

        // Separate active and inactive planets
        const active = parsed.filter((planet) => planet.faction !== 'N/A');
        const inactive = parsed.filter((planet) => planet.faction === 'N/A');

        setActivePlanets(active);
        setInactivePlanets(inactive);
      } catch (error) {
        console.error('Failed to fetch status:', error);
        setError('Failed to load planet status. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="mb-4">🌍 Planet Status</h1>
      {loading && <p>Loading status...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <>
          {/* Active Planets Section */}
          <div className="mb-4">
            <h2>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#activePlanetsCollapse"
                aria-expanded="false"
                aria-controls="activePlanetsCollapse"
              >
                Active Planets
              </button>
            </h2>
            <div className="collapse" id="activePlanetsCollapse">
              <ul className="list-group">
                {activePlanets.map((planet) => (
                  <li key={planet.index} className="list-group-item">
                    <div>
                      <strong>Name:</strong> {planet.name} <br />
                      <strong>Owner:</strong> {planet.owner} | <strong>Faction:</strong> {planet.faction} <br />
                      <strong>Players:</strong> {planet.players}
                    </div>
                    <span className="badge bg-primary rounded-pill">{planet.health} HP</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inactive Planets Section */}
          <div className="mb-4">
            <h2>
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#inactivePlanetsCollapse"
                aria-expanded="false"
                aria-controls="inactivePlanetsCollapse"
              >
                Inactive Planets
              </button>
            </h2>
            <div className="collapse" id="inactivePlanetsCollapse">
              <ul className="list-group">
                {inactivePlanets.map((planet) => (
                  <li key={planet.index} className="list-group-item">
                    <div>
                      <strong>Name:</strong> {planet.name} <br />
                      <strong>Owner:</strong> {planet.owner} | <strong>Faction:</strong> {planet.faction} <br />
                      <strong>Players:</strong> {planet.players}
                    </div>
                    <span className="badge bg-primary rounded-pill">{planet.health} HP</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Status;