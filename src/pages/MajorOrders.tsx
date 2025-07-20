import React, { useEffect, useState } from 'react';
import MajorOrderCard from '../components/MajorOrderCard';

interface MajorOrder {
  desc: string;
  rewards: string;
}

const MajorOrders: React.FC = () => {
  const [orders, setOrders] = useState<MajorOrder[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://helldiverstrainingmanual.com/api/v1/war/major-orders'
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();

        // Log the raw data for debugging
        console.log('Fetched Major Orders:', data);

        // Parse the data to match the MajorOrder interface
        const parsedOrders = data.map((item: any) => ({
          desc: item.setting?.overrideBrief || 'No description available',
          rewards: item.setting?.rewards
            ? item.setting.rewards
                .map((r: any) => `${r.amount} units`)
                .join(', ')
            : 'No rewards available',
        }));

        setOrders(parsedOrders);
      } catch (err: any) {
        console.error('Error fetching major orders:', err);
        setError(err.message || 'An unknown error occurred');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container major-orders-container mt-4">
      <h2 className="my-5">🎯 Major Orders</h2>
      {error && <div className="alert alert-danger">Error: {error}</div>}
      {orders.length === 0 && !error && <div>No major orders available.</div>}
      {orders.map((order, index) => (
        <MajorOrderCard key={index} {...order} />
      ))}
    </div>
  );
};

export default MajorOrders;
