// src/components/modals/AnimatedModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom'; // To render modal outside root div

const AnimatedModal = ({
  isOpen,      // Boolean: controls if the modal is visible
  onClose,     // Function: callback when modal needs to close (e.g., clicking overlay)
  title,       // String: Title of the modal
  children,    // ReactNode: Content of the modal body
  className = '', // Additional classes for the modal content box
  overlayClassName = '', // Additional classes for the overlay
  disableOverlayClick = false, // If true, clicking overlay won't close modal
  ...props
}) => {

  // Animation variants for the modal content (scale and fade)
  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0, scale: 0.8 }, // Start above and small/invisible
    visible: {
      y: "0", opacity: 1, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 } // Smooth spring for entrance
    },
    exit: { y: "100vh", opacity: 0, scale: 0.8, transition: { duration: 0.3 } } // Exit below and small/invisible
  };

  // Animation variants for the overlay (just fade)
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  // Return null if not open, AnimatePresence will handle exit animation
  if (!isOpen) return null;

  // Use React.createPortal to render the modal outside the main #root div,
  // typically directly into the <body>, to ensure it's on top of everything.
  return createPortal(
    <AnimatePresence> {/* AnimatePresence enables exit animations */}
      {isOpen && ( // Only render if isOpen is true
        <motion.div
          className={`
            fixed inset-0 z-50 flex items-center justify-center
            backdrop-blur-sm bg-black/50 /* Dark, semi-transparent background with blur */
            ${overlayClassName}
          `}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={!disableOverlayClick ? onClose : undefined} // Close on overlay click unless disabled
          {...props}
        >
          <motion.div
            className={`
              bg-secondary-dark p-8 rounded-xl shadow-glow-lg text-text-light
              max-w-md w-full mx-4 relative /* Added relative for potential close button positioning */
              flex flex-col
              ${className}
            `}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6 border-b border-accent-dark pb-4">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-purple-400">
                {title}
              </h3>
              {/* Close Button */}
              <button
                onClick={onClose}
                className="text-text-muted hover:text-text-light text-2xl p-2 rounded-full hover:bg-primary-dark transition-colors duration-200"
                aria-label="Close modal"
              >
                &times; {/* HTML entity for 'x' mark */}
              </button>
            </div>

            {/* Modal Body */}
            <div className="mb-6 flex-grow overflow-y-auto">
              {children}
            </div>

            {/* Optional: Modal Footer for action buttons */}
            {/* <div className="flex justify-end space-x-4 pt-4 border-t border-accent-dark">
              <AnimatedButton variant="ghost" onClick={onClose}>Cancel</AnimatedButton>
              <AnimatedButton variant="solid" onClick={() => alert('Action confirmed!')}>Confirm</AnimatedButton>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body // Portal target: render directly into the document body
  );
};

export default AnimatedModal;