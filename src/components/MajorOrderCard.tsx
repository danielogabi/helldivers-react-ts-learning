import React from 'react';

interface MajorOrderCardProps {
  desc: string;
  rewards: string;
}

const MajorOrderCard: React.FC<MajorOrderCardProps> = ({ desc, rewards }) => {
  return (
    <div className="major-order card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="major-order__title">🎯 Major Order</h5>
        <p className="major-order__desc">{desc}</p>
        <p className="major-order__rewards"><strong>Rewards:</strong> {rewards}</p>
      </div>
    </div>
  );
};

export default MajorOrderCard;
