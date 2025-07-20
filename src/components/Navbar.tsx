import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import useBreakpoint from "../hooks/useBreakpoint";

const Navbar: React.FC = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const isLargeScreen = useBreakpoint("(min-width: 992px)"); // Bootstrap's lg breakpoint

  const toggleSideNav = () => setSideNavOpen((prev) => !prev);

  useEffect(() => {
    if (isLargeScreen) {
      setSideNavOpen(false); // Automatically close side navigation on larger screens
    }
  }, [isLargeScreen]);

  return (
    <>
      <nav ref={navbarRef} className="navbar navbar-expand-lg navbar-dark px-3">
        <button
          className="btn btn-primary me-3 d-lg-none"
          onClick={toggleSideNav}
          aria-expanded={isSideNavOpen}
          aria-controls="side-nav"
        >
          ☰
        </button>
        <Link className="navbar-brand" to="/">Helldivers 2 Dashboard</Link>
        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/status">🌍 Status</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/news">📰 News</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/campaign">🌌 Campaign</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/major-orders">🎯 Major Orders</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/planets">🪐 Planets</Link></li>
          </ul>
        </div>
      </nav>

      <SideNav isOpen={isSideNavOpen} onClose={() => setSideNavOpen(false)} />
    </>
  );
};

export default Navbar;