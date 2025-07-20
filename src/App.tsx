import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Home from './pages/Home';
import Status from './pages/Status';
import News from './pages/News';
import Campaign from './pages/Campaign';
import MajorOrders from './pages/MajorOrders';
import PlanetsInfo from './pages/PlanetsInfo';

const App: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <nav>
        <Navbar />
        <SideNav isOpen={false} onClose={() => {}} topOffset={0} />
      </nav>

      {/* Loading Overlay */}
      {loading && (
        <motion.div
          className="loading-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="loading-icon">🔄</div>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        <RoutesWithAnimation setLoading={setLoading} />
      </AnimatePresence>
    </>
  );
};

const RoutesWithAnimation: React.FC<{
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setLoading }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageTransition setLoading={setLoading}>
            <Home />
          </PageTransition>
        }
      />
      <Route
        path="/status"
        element={
          <PageTransition setLoading={setLoading}>
            <Status />
          </PageTransition>
        }
      />
      <Route
        path="/news"
        element={
          <PageTransition setLoading={setLoading}>
            <News />
          </PageTransition>
        }
      />
      <Route
        path="/campaign"
        element={
          <PageTransition setLoading={setLoading}>
            <Campaign />
          </PageTransition>
        }
      />
      <Route
        path="/major-orders"
        element={
          <PageTransition setLoading={setLoading}>
            <MajorOrders />
          </PageTransition>
        }
      />
      <Route
        path="/planets"
        element={
          <PageTransition setLoading={setLoading}>
            <PlanetsInfo />
          </PageTransition>
        }
      />
    </Routes>
  );
};

const PageTransition: React.FC<{
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode; // Explicitly define the children prop
}> = ({ setLoading, children }) => {
  React.useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulate longer loading time
    return () => clearTimeout(timeout);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.8, // Animation duration
        ease: 'easeInOut',
        delay: 0.3, // Add a small delay before the animation starts
      }}
    >
      {children}
    </motion.div>
  );
};

export default App;
