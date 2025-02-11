import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to scroll to a specific section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // Close menu on selection (for mobile)
  };

  return (
    <header className="header">
      <div className="logo">KAT</div>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <motion.button onClick={() => scrollToSection("home")} whileHover={{ scale: 1.1 }}>
          Home
        </motion.button>
        <motion.button onClick={() => scrollToSection("works")} whileHover={{ scale: 1.1 }}>
          Works
        </motion.button>
        <motion.button onClick={() => scrollToSection("experience")} whileHover={{ scale: 1.1 }}>
          Experience
        </motion.button>
        <motion.button onClick={() => scrollToSection("skills")} whileHover={{ scale: 1.1 }}>
          Skills
        </motion.button>
      </nav>
    </header>
  );
};
