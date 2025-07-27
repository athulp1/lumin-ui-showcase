// src/components/cards/AnimatedCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({
  title,
  description,
  imageUrl,
  children, // For additional custom content inside the card
  className = '',
  ...props // Catches any other standard div/component attributes
}) => {
  // Framer Motion variant for a subtle 3D tilt effect on hover
  const cardVariants = {
    initial: { rotateX: 0, rotateY: 0, scale: 1, boxShadow: '0 0 15px rgba(0, 0, 0, 0.4)' }, // Initial subtle shadow
    hover: {
      rotateX: [0, 2, -2, 0], // Subtle tilt up/down
      rotateY: [0, 2, -2, 0], // Subtle tilt left/right
      scale: 1.03, // Slight scale up
      boxShadow: '0 0 30px rgba(138, 43, 226, 0.8)', // Stronger accent glow on hover
      transition: {
        type: "spring",
        stiffness: 200, // Medium stiffness
        damping: 10,    // Medium damping for a nice bounce
        duration: 0.6,  // Overall duration
      },
    },
  };

  return (
    <motion.div
      className={`
        relative p-6 rounded-2xl border-2 border-transparent
        bg-secondary-dark hover:bg-gradient-to-br from-secondary-dark to-primary-dark
        text-text-light overflow-hidden group
        flex flex-col items-start transition-all duration-300 ease-out
        shadow-glow-md /* Our custom glow shadow from tailwind.config.js */
        ${className}
      `}
      variants={cardVariants} // Apply our defined animation variants
      initial="initial"       // Start with the 'initial' state
      whileHover="hover"      // Transition to 'hover' state on mouse hover
      {...props} // Pass through any other standard HTML div attributes
    >
      {/* Conditional rendering for image */}
      {imageUrl && (
        <div className="w-full h-40 rounded-lg overflow-hidden mb-4 transform group-hover:scale-105 transition-transform duration-300">
          {/* This image path expects an image to be placed in src/assets/ */}
          <img src={imageUrl} alt={title || 'Card image'} className="w-full h-full object-cover" />
        </div>
      )}
      {/* Conditional rendering for title */}
      {title && (
        <h3 className="text-3xl font-bold mb-3 text-text-light group-hover:text-accent-light transition-colors duration-200">
          {title}
        </h3>
      )}
      {/* Conditional rendering for description */}
      {description && (
        <p className="text-text-muted text-base mb-4 flex-grow">
          {description}
        </p>
      )}
      {children} {/* Renders any custom content passed between <AnimatedCard> tags */}

      {/* Optional: Add a subtle overlay or border on hover for extra premium feel */}
      {/* This creates a glowing border when the card is hovered */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent-light transition-all duration-300 pointer-events-none"></div>

    </motion.div>
  );
};

export default AnimatedCard;