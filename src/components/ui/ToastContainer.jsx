// src/components/ui/ToastContainer.jsx
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Toast from './Toast'; // Import the individual Toast component

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-xs pointer-events-none">
      {/* AnimatePresence allows for exit animations when toasts are removed */}
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={removeToast}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;