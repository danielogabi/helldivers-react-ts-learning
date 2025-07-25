import React from 'react';

interface MajorOrderCardProps {
  desc: string;
  rewards: string;
}

const MajorOrderCard: React.FC<MajorOrderCardProps> = ({ desc, rewards }) => {
  return (
    <div className="major-order">
      <div className="major-order__body">
        <p className="major-order__desc">
          {desc || 'No description provided.'}
        </p>
        <p className="major-order__rewards">
          <strong>Rewards:</strong> {rewards || 'No rewards available.'}
        </p>
      </div>
    </div>
  );
};

export default MajorOrderCard;
