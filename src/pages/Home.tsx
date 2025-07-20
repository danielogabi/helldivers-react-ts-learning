import React, { useEffect, useState } from 'react';
import '../styles/pages/_home.scss';
import homeData from '../constants/homeData.json';

interface SectionData {
  headline: string;
  description?: string | string[];
  items?: string[];
}

const Home: React.FC = () => {
  const [mainInfo, setMainInfo] = useState<SectionData | null>(null);
  const [latestUpdates, setLatestUpdates] = useState<SectionData | null>(null);
  const [futureUpdates, setFutureUpdates] = useState<SectionData | null>(null);

  useEffect(() => {
    // Load data from JSON
    setMainInfo(homeData.mainInfo);
    setLatestUpdates(homeData.latestUpdates);
    setFutureUpdates(homeData.futureUpdates);
  }, []);

  // Helper function to check if a string is a URL
  const isUrl = (str: string) => {
    try {
      const url = new URL(str);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  return (
    <div className="home-container container mt-4">
      {/* Main Info Section */}
      {mainInfo && (
        <section className="home-section">
          <h1>{mainInfo.headline}</h1>
          {Array.isArray(mainInfo.description)
            ? mainInfo.description.map((item, index) => (
                <p key={index}>
                  {isUrl(item) ? (
                    <a href={item} target="_blank" rel="noopener noreferrer">
                      {item}
                    </a>
                  ) : (
                    item
                  )}
                </p>
              ))
            : mainInfo.description && <p>{mainInfo.description}</p>}
        </section>
      )}

      {/* Latest Updates Section */}
      {latestUpdates && (
        <section className="home-section">
          <h2>{latestUpdates.headline}</h2>
          <ul>
            {latestUpdates.items?.map((item, index) => (
              <li key={index}>
                {isUrl(item) ? (
                  <a href={item} target="_blank" rel="noopener noreferrer">
                    {item}
                  </a>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Future Updates Section */}
      {futureUpdates && (
        <section className="home-section">
          <h2>{futureUpdates.headline}</h2>
          <ul>
            {futureUpdates.items?.map((item, index) => (
              <li key={index}>
                {isUrl(item) ? (
                  <a href={item} target="_blank" rel="noopener noreferrer">
                    {item}
                  </a>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Home;