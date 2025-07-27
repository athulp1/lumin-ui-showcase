// src/components/ui/Accordion.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper icon for the accordion
const ChevronIcon = ({ isOpen }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-accent-light"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    animate={{ rotate: isOpen ? 180 : 0 }} // Rotate when open/closed
    transition={{ duration: 0.2 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </motion.svg>
);

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="bg-secondary-dark rounded-xl shadow-glow-md overflow-hidden"
      layout // Enables layout animations (position, size changes)
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Accordion Header */}
      <motion.button
        className="flex justify-between items-center w-full p-6 text-left text-text-light font-semibold text-lg hover:bg-primary-dark transition-colors duration-200"
        onClick={toggleOpen}
        initial={false} // Prevents initial animation on mount
        whileHover={{ scale: 1.005 }} // Subtle scale on hover
        whileTap={{ scale: 0.995 }} // Subtle scale on tap
      >
        {title}
        <ChevronIcon isOpen={isOpen} />
      </motion.button>

      {/* Accordion Content - Animated with AnimatePresence */}
      <AnimatePresence initial={false}> {/* initial=false prevents initial content animation on page load */}
        {isOpen && (
          <motion.div
            key="accordion-content" // Unique key for AnimatePresence
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" }, // Animate to auto height
              collapsed: { opacity: 0, height: 0 }, // Collapse to height 0
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Custom easing for smooth feel
            className="overflow-hidden px-6 pb-6 text-text-muted text-base"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// A wrapper component for multiple accordion items
const Accordion = ({ children, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );
};

export { Accordion, AccordionItem };