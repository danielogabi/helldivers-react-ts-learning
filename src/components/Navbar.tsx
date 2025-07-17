import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Helldivers 2 Dashboard</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/status">🌍 Status</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/news">📰 News</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/campaign">🌌 Campaign</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/major-orders">🎯 Major Orders</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/planets">🪐 Planets</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
