import React from 'react';

interface NewsItemProps {
  title: string;
  message: string;
  time: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, message, time }) => {
  // Format the date for display
  const formattedDate = new Date(time).toLocaleString();

  return (
    <div className="news-item card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="news-item__title">{title}</h5> {/* Ensure title is properly escaped */}
        <p className="news-item__message">{message}</p> {/* Ensure message is properly escaped */}
        <p className="news-item__time">
          <small>{formattedDate}</small>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
