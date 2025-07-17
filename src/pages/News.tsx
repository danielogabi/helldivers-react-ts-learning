import React, { useEffect, useState } from 'react';
import NewsItem from '../components/NewsItem';

interface NewsEntry {
  title: string;
  message: string;
  time: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsEntry[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('https://helldiverstrainingmanual.com/api/v1/war/news');
        const data = await res.json();

        // Parse the data to convert the `published` field into a valid date
        const parsedNews = data.map((item: any) => ({
          title: item.message.split('\n')[0], // Use the first line of the message as the title
          message: item.message,
          time: new Date(item.published * 1000).toISOString(), // Convert seconds to milliseconds
        }));

        setNews(parsedNews);
      } catch (err) {
        console.error('Error fetching news:', err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📰 Galactic News</h2>
      {news.map((item, idx) => (
        <NewsItem key={idx} title={item.title} message={item.message} time={item.time} />
      ))}
    </div>
  );
};

export default News;