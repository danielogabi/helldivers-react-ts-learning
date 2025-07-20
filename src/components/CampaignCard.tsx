import React from 'react';

interface CampaignCardProps {
  name: string;
  faction: string;
  players: number;
  health: number;
  maxHealth: number;
  percentage: number;
  defense: boolean;
  majorOrder: boolean;
  biome: {
    slug: string;
    description: string;
  } | null; // Allow biome to be null
  expireDateTime: string | null;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  name,
  faction,
  players,
  health,
  maxHealth,
  percentage,
  defense,
  majorOrder,
  biome,
  expireDateTime,
}) => {
  return (
    <div className="campaign-card">
      <div className="campaign-card__body">
        <h5 className="campaign-card__title">{name}</h5>
        <p className="campaign-card__faction">
          <strong>Faction:</strong> {faction}
        </p>
        <p className="campaign-card__health">
          <strong>Health:</strong> {health} / {maxHealth} ({percentage.toFixed(2)}%)
        </p>
        <p className="campaign-card__players">
          <strong>Players:</strong> {players}
        </p>
        <p className="campaign-card__biome">
          <strong>Biome:</strong> {biome ? biome.description : 'Unknown'}
        </p>
        <p className="campaign-card__status">
          <strong>Status:</strong> {defense ? 'Defense' : 'Attack'} |{' '}
          {majorOrder ? 'Major Order Active' : 'No Major Order'}
        </p>
        {expireDateTime && (
          <p className="campaign-card__expire">
            <strong>Expires:</strong> {new Date(expireDateTime).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default CampaignCard;