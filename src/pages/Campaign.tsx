import React, { useEffect, useState } from 'react';
import CampaignCard from '../components/CampaignCard';

interface CampaignData {
  planetIndex: number;
  health: number;
  maxHealth: number;
  players: number;
}

const Campaign: React.FC = () => {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://helldiverstrainingmanual.com/api/v1/war/campaign');
      const data = await res.json();
      setCampaigns(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>🌌 Active Campaigns</h2>
      {campaigns.map((c) => (
        <CampaignCard key={c.planetIndex} {...c} />
      ))}
    </div>
  );
};

export default Campaign;
