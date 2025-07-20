import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { PlanetStatus } from '../types/types';

const PlanetCard: React.FC<{ planet: PlanetStatus }> = ({ planet }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Update visibility based on intersection
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    // Animate opacity based on visibility
    if (isVisible) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0.5 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      ref={ref}
      className="planet-card"
      initial={{ opacity: 0.5 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <strong>{planet.name}</strong>
      <p>Owner: {planet.owner}</p>
      <p>Faction: {planet.faction}</p>
      <p>Players: {planet.players}</p>
      <span className="health">{planet.health} HP</span>
    </motion.div>
  );
};

export default PlanetCard;