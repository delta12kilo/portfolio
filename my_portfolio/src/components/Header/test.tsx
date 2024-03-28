import React, { useState } from 'react';
import { motion } from 'framer-motion';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

const test = () => {
  
  const [theme, setTheme] = useState(moon);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setTheme(sun)
    setIsClicked(!isClicked); // Toggle click state
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        cursor: 'pointer', // Change cursor to indicate clickability
      }}
      onClick={handleClick}
    >
      <motion.img
      src={theme}
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'blue',
          borderRadius: '50%',
        }}
        animate={{
          y: isClicked ? 100 : 0, // Move the icon down by 100px when clicked, back to original position when not clicked
        }}
        transition={{
          type: 'spring', // Use spring animation for smooth movement
          stiffness: 500, // Adjust stiffness to control the speed of the animation
          damping: 30, // Adjust damping to control the bounciness of the animation
        }}
      />
    </div>
  );
};
export default test;
