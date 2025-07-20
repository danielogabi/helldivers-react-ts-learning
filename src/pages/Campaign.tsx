import React, { useEffect, useState } from 'react';
import CampaignCard from '../components/CampaignCard';
import '../styles/components/_campaign-card.scss';

interface CampaignData {
  planetIndex: number;
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
  };
  expireDateTime: string | null;
}

const Campaign: React.FC = () => {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://helldiverstrainingmanual.com/api/v1/war/campaign'
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();

        // Log the raw data for debugging
        console.log('Fetched Campaign Data:', data);

        setCampaigns(data);
      } catch (err: any) {
        console.error('Error fetching campaigns:', err);
        setError(err.message || 'An unknown error occurred');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="campaign-container container mt-4">
      <h2 className="my-5">🌌 Active Campaigns</h2>
      {error && <div className="alert alert-danger">Error: {error}</div>}
      {campaigns.length === 0 && !error && (
        <div>No active campaigns available.</div>
      )}
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.planetIndex} {...campaign} />
      ))}
    </div>
  );
};

export default Campaign;
