import React from 'react';
import './Skills.css';
import { motion } from "framer-motion";
import PremierePro from "../../images/adobe-premiere-pro.svg";
import AfterEffects from "../../images/adobe-after-effects.svg";
import Photoshop from "../../images/adobe-photoshop.svg";
import Davinci from "../../images/davinci.svg";


export const Skills = () => {
  // Animation variants for bounce and hover
  const iconVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="skills">
    <div className='skills'>
      <h1>Skills</h1>
      <motion.div 
        className="skillsContainer"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        {/* Premiere Pro Icon */}
        <motion.img 
          src={PremierePro} 
          alt='Adobe Premiere Pro' 
          className='pr' 
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        />

        {/* After Effects Icon */}
        <motion.img 
          src={AfterEffects} 
          alt='Adobe After Effects' 
          className='ae' 
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        />

        {/* Photoshop Icon */}
        <motion.img 
          src={Photoshop} 
          alt='Adobe Photoshop' 
          className='ps' 
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        />
         <motion.img 
          src={Davinci} 
          alt='Davinci' 
          className='da' 
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        />
      </motion.div>
    </div>
    </div>
  );
};
