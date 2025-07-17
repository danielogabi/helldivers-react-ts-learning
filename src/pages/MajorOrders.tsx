import React, { useEffect, useState } from 'react';
import MajorOrderCard from '../components/MajorOrderCard';

interface MajorOrder {
  desc: string;
  rewards: string;
}

const MajorOrders: React.FC = () => {
  const [orders, setOrders] = useState<MajorOrder[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://helldiverstrainingmanual.com/api/v1/war/major-orders');
      const data = await res.json();
      const parsedOrders = data.map((item: any) => ({
        desc: item.description,
        rewards: item.rewards?.join(', ') || 'None'
      }));
      setOrders(parsedOrders);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>🎯 Major Orders</h2>
      {orders.map((order, index) => (
        <MajorOrderCard key={index} {...order} />
      ))}
    </div>
  );
};

export default MajorOrders;
