// src/pages/InputsPage.jsx
import React, { useState } from 'react';
import GlowInput from '../components/inputs/GlowInput'; // Correct path to GlowInput
import AnimatedButton from '../components/buttons/AnimatedButton'; // We'll use our button for the form

const InputsPage = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for form validation errors
  const [formErrors, setFormErrors] = useState({});

  // Simple client-side form validation logic
  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required.';
    if (!email) errors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email address is invalid.'; // Basic email regex
    if (!password) errors.password = 'Password is required.';
    else if (password.length < 6) errors.password = 'Password must be at least 6 characters.';
    
    setFormErrors(errors); // Update formErrors state
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser form submission (page reload)

    if (validateForm()) {
      alert('Form submitted successfully! (Check console for data)');
      // In a real application, you would send this data to your backend here
      console.log('Form Data:', { name, email, password });
      
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setPassword('');
      setFormErrors({}); // Clear errors
    } else {
      alert('Please correct the form errors before submitting.');
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-5xl font-extrabold text-text-light mb-12 text-center drop-shadow-lg">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
          Glow Input Fields
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Example 1: Basic Input with Glow */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light text-center">Standard Input</h3>
          <GlowInput label="Your Name" placeholder="Enter your name" />
          <p className="text-text-muted mt-4 text-sm text-center">A standard text input with a subtle focus glow.</p>
        </div>

        {/* Example 2: Password Input with Masking */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light text-center">Password Input</h3>
          <GlowInput label="Password" type="password" placeholder="Enter your password" />
          <p className="text-text-muted mt-4 text-sm text-center">Input field with type "password" for masked entry.</p>
        </div>

        {/* Example 3: Input with an explicit Error State */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col justify-center col-span-1 md:col-span-2">
          <h3 className="text-xl font-semibold mb-6 text-text-light text-center">Input with Error</h3>
          <GlowInput
            label="Email Address"
            type="email"
            placeholder="example@domain.com"
            error="Invalid email format" // Pass an error message string
          />
          <p className="text-text-muted mt-4 text-sm text-center">Demonstrates the red error border and message, even without user interaction.</p>
        </div>
      </div>

      {/* Demo Registration Form using multiple GlowInputs and AnimatedButton */}
      <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold text-text-light mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Demo Registration Form
        </h3>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <GlowInput
            label="Full Name"
            placeholder="John Doe"
            value={name} // Connect to state
            onChange={(e) => setName(e.target.value)} // Update state on change
            error={formErrors.name} // Display error if present
            id="reg-name" // Good for accessibility
          />
          <GlowInput
            label="Email"
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={formErrors.email}
            id="reg-email"
          />
          <GlowInput
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={formErrors.password}
            id="reg-password"
          />
          <div className="mt-8 text-center">
             <AnimatedButton type="submit" size="lg"> {/* Using our AnimatedButton here */}
                Register
             </AnimatedButton>
          </div>
        </form>
        <p className="text-text-muted mt-6 text-sm text-center">
            A simple client-side form demonstrating state management and validation with our custom Glow Inputs and Animated Button.
        </p>
      </div>
    </div>
  );
};

export default InputsPage;




