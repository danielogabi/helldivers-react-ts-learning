import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Status from './pages/Status';
import News from './pages/News';
import Campaign from './pages/Campaign';
import MajorOrders from './pages/MajorOrders';
import PlanetsInfo from './pages/PlanetsInfo';

const App: React.FC = () => {
  return (
    <Router basename="/helldivers-react-ts-learning">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/status" element={<Status />} />
        <Route path="/news" element={<News />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/major-orders" element={<MajorOrders />} />
        <Route path="/planets" element={<PlanetsInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
