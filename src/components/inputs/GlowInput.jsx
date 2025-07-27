// src/components/inputs/GlowInput.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GlowInput = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error, // String for error message (e.g., "Email is invalid")
  className = '', // Allows passing additional Tailwind classes from parent
  ...props // Catches any other standard input attributes (id, name, required etc.)
}) => {
  const [isFocused, setIsFocused] = useState(false); // State to track if the input is focused

  // Event handlers for focus and blur
  const handleFocus = () => setIsFocused(true); //call when user click on input
  const handleBlur = () => setIsFocused(false); //call when user click on outside of the imput field 

  // Determine border and shadow colors dynamically based on error and focus state
  const borderColor = error
    ? 'border-red-500' // If there's an error, use a red border
    : isFocused
      ? 'border-accent-light' // If focused, use our accent color border
      : 'border-secondary-dark'; // Default state, use a subtle dark border

  const glowShadow = error
    ? 'shadow-lg shadow-red-500/50' // Stronger red glow for error
    : isFocused
      ? 'shadow-glow-md' // Our custom accent glow for focus
      : 'shadow-none'; // No special glow when not focused

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {/* Label for accessibility and semantic structure */}
      {label && ( // Only render label if the 'label' prop is provided
        <label
          htmlFor={props.id || `input-${label}`} // Link label to input via 'id' or a generated ID
          className={`mb-2 text-text-light text-sm font-medium ${error ? 'text-red-400' : ''}`} // Label text color changes on error
        >
          {label}
        </label>
      )}

      {/* The main input element, wrapped with Framer Motion for animations */}
      <motion.input
        type={type} // Input type (text, password, email, etc.)
        placeholder={placeholder} // Placeholder text
        value={value} // Controlled component value
        onChange={onChange} // Handle input changes
        onFocus={handleFocus} // Custom focus handler
        onBlur={handleBlur} // Custom blur handler
        className={`
          w-full p-3 rounded-lg bg-primary-dark text-text-light
          border ${borderColor} transition-all duration-300 ease-in-out
          focus:outline-none ${glowShadow}
          placeholder:text-text-muted/60
        `}
        // Framer motion animation for a subtle scale on focus
        whileFocus={{ scale: 1.01 }} // Subtle zoom on focus for premium feel
        transition={{ type: "spring", stiffness: 300, damping: 25 }} // Smooth spring animation
        {...props} // Pass through any other standard input props (e.g., name, required)
      />

      {/* Error message display, animated with Framer Motion */}
      {error && ( // Only render error message if 'error' prop has a value
        <motion.p
          initial={{ opacity: 0, y: -10 }} // Starts invisible and slightly above
          animate={{ opacity: 1, y: 0 }}   // Animates to visible and correct position
          // exit={{ opacity: 0, y: -10 }} // (Requires AnimatePresence to work, leaving out for simplicity for now)
          transition={{ duration: 0.2 }} // Quick animation
          className="mt-2 text-red-400 text-sm" // Tailwind classes for error text
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default GlowInput;