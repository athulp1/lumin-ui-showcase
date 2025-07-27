// src/components/buttons/AnimatedButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- Spinner Component (Helper for loading state) ---
const Spinner = ({ size = 'w-5 h-5', color = 'border-white' }) => ( // the spinner is for loading animation 
  <div
    className={`inline-block animate-spin rounded-full ${size} border-2 border-solid ${color} border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
    role="status"
  >
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Loading...
    </span>
  </div>
);

// --- AnimatedButton Component ---
const AnimatedButton = ({
  children,
  onClick,
  variant = 'solid', // 'solid' | 'outline' | 'ghost'
  size = 'md',       // 'sm' | 'md' | 'lg'
  isLoading = false,
  isDisabled = false,
  className = '',
  ...props //restParameter
}) => {

  // Base styles for all buttons
  const baseStyles = 'relative flex items-center justify-center font-semibold rounded-lg overflow-hidden transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-light';

  // Size-specific styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];

  // Variant-specific styles (using our custom colors)
  const variantStyles = {
    solid: 'bg-accent-light text-white shadow-glow-md hover:bg-opacity-90 active:scale-[0.98]', //when u click active bcm 98% down 
    outline: 'border-2 border-accent-light text-accent-light hover:bg-accent-light hover:text-white h over:shadow-glow-md active:scale-[0.98]',
    ghost: 'text-accent-light hover:bg-accent-light hover:bg-opacity-20 active:scale-[0.98]',
  }[variant];

  // Disabled styles override others
  const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  // Loading styles override others, but keep base interaction feel
  const loadingStyles = isLoading ? 'opacity-70 cursor-wait pointer-events-none' : '';

  return (
    <motion.button //this is the special button from framer-motion that transform reg button some animated butons
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${loadingStyles} ${className}`}
      onClick={onClick}
      disabled={isDisabled || isLoading} //if it is true one of them then automatically add opacity-50 and opacity-70
      // Framer Motion props for interaction (scale and glow)
      whileHover={!isDisabled && !isLoading ? { scale: 1.05, boxShadow: '0 0 20px rgba(138, 43, 226, 0.8)' } : {}}
      whileTap={!isDisabled && !isLoading ? { scale: 0.95 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      {...props} // Pass through any other standard HTML button props
    >
      {isLoading ? (
        <Spinner color={variant === 'solid' ? 'border-white' : 'border-accent-light'} />
      ) : (
        children
      )}
    </motion.button>
  );
};

export default AnimatedButton;