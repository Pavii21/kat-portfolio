import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export const Navbar = () => {
  // Function to scroll to a specific section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="header">
      <div className="logo">LOGO</div>

      <nav className="navbar">
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
