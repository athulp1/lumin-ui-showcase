

// src/components/ui/ToastContext.jsx
import React, { createContext, useContext, useState, useCallback } from 'react';
import ToastContainer from './ToastContainer'; // Import our ToastContainer

// 1. Create the Context
const ToastContext = createContext();

// 2. Create a Custom Hook to use the Toast
// THIS IS THE EXPORT THAT THE ERROR IS COMPLAINING ABOUT
export const useToast = () => {
  return useContext(ToastContext);
};

// 3. Create the Toast Provider Component
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]); // State to hold all active toasts
  const toastDuration = 5000; // Default toast display duration in ms

  // Function to add a new toast
  const addToast = useCallback((message, type = 'info', duration = toastDuration) => {
    const id = Date.now() + Math.random(); // Simple unique ID
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, message, type },
    ]);

    // Automatically remove the toast after its duration
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, [toastDuration]); // Dependency for useCallback

  // Function to remove a toast
  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  // The context value provides the addToast function and any other relevant state
  const contextValue = { addToast };

  return (
    <ToastContext.Provider value={contextValue}>
      {children} {/* Render all child components (your entire app) */}
      <ToastContainer toasts={toasts} removeToast={removeToast} /> {/* Render the ToastContainer */}
    </ToastContext.Provider>
  );
};