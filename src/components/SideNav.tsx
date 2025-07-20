import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navOptions } from "../constants/navOptions";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      id="side-nav"
      className="side-nav"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      aria-hidden={!isOpen}
    >
      <button className="close-btn" onClick={onClose} aria-label="Close navigation">
        ✖
      </button>
      <ul>
        {navOptions.map((option) => (
          <li key={option.path}>
            <Link to={option.path} onClick={onClose}>
              {option.icon} {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SideNav;