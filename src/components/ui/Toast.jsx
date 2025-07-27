


// src/components/ui/Toast.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Toast = ({ id, message, type, onClose }) => {
  // Determine styling based on toast type
  const typeClasses = {
    info: 'bg-blue-600 border-blue-800',
    success: 'bg-green-600 border-green-800',
    error: 'bg-red-600 border-red-800',
    warning: 'bg-yellow-600 border-yellow-800',
  }[type] || 'bg-gray-700 border-gray-800'; // Default if type not recognized

  // Framer Motion variants for entrance and exit animations
  const toastVariants = {
    hidden: { opacity: 0, x: 200, scale: 0.8 }, // Starts off-screen to the right, small and invisible
    visible: { opacity: 1, x: 0, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.3 }
    },
    exit: { opacity: 0, x: 200, scale: 0.8,
      transition: { duration: 0.2, ease: "easeOut" } // Faster exit
    },
  };

  return (
    <motion.div
      layout // Enables smooth layout transitions when other toasts are added/removed
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={toastVariants}
      className={`
        relative w-full max-w-xs p-4 my-2
        rounded-lg shadow-xl text-white font-semibold
        border-l-4 ${typeClasses}
        flex items-center justify-between space-x-4
      `}
    >
      <span>{message}</span>
      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 text-white/80 hover:text-white text-lg ml-2"
        aria-label="Close toast"
      >
        &times;
      </button>
    </motion.div>
  );
};

export default Toast;


