// src/pages/ButtonsPage.jsx
import React, { useState } from 'react';
import AnimatedButton from '../components/buttons/AnimatedButton'; // Correct path to AnimatedButton

const ButtonsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Handler for the loading button demo
  const handleLoadingClick = () => {
    setIsLoading(true);
    // Simulate an async operation (e.g., fetching data, submitting form)
    setTimeout(() => {
      setIsLoading(false);
      alert('Action Completed!'); // Simple feedback
    }, 2000); // 2 seconds
  };

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-5xl font-extrabold text-text-light mb-12 text-center drop-shadow-lg">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
          Interactive Buttons
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Solid Button Example */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-6 text-text-light">Solid Button</h3>
            <AnimatedButton onClick={() => alert('Solid Clicked!')} size="lg">
                Get Started
            </AnimatedButton>
            <p className="text-text-muted mt-4 text-sm">A primary action button with a solid background and strong focus.</p>
        </div>

        {/* Outline Button Example */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-6 text-text-light">Outline Button</h3>
            <AnimatedButton variant="outline" onClick={() => alert('Outline Clicked!')} size="md">
                Learn More
            </AnimatedButton>
            <p className="text-text-muted mt-4 text-sm">For secondary actions, featuring a distinct border that fills on hover.</p>
        </div>

        {/* Ghost Button Example */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-6 text-text-light">Ghost Button</h3>
            <AnimatedButton variant="ghost" onClick={() => alert('Ghost Clicked!')} size="sm">
                View Details
            </AnimatedButton>
            <p className="text-text-muted mt-4 text-sm">Minimalist style, ideal for less prominent actions, with a subtle hover effect.</p>
        </div>

        {/* Loading State Button Example */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-6 text-text-light">Loading State</h3>
            <AnimatedButton
                onClick={handleLoadingClick}
                isLoading={isLoading}
                size="lg"
            >
                {isLoading ? 'Processing...' : 'Submit Form'}
            </AnimatedButton>
            <p className="text-text-muted mt-4 text-sm">Displays an animated spinner and becomes unclickable during async operations.</p>
        </div>

        {/* Disabled Button Example */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-6 text-text-light">Disabled Button</h3>
            <AnimatedButton isDisabled onClick={() => alert('This won\'t fire!')} size="md">
                Unavailable
            </AnimatedButton>
            <p className="text-text-muted mt-4 text-sm">An inactive button that provides no interaction feedback.</p>
        </div>

        {/* Custom Styles Button Example */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-6 text-text-light">Custom Styles</h3>
            <AnimatedButton
                variant="solid"
                size="md"
                // Example of adding external Tailwind classes via the 'className' prop
                className="bg-purple-600 hover:bg-purple-700 text-yellow-300 transform hover:-translate-y-1 transition-transform"
                onClick={() => alert('Custom Clicked!')}
            >
                Custom Button
            </AnimatedButton>
            <p className="text-text-muted mt-4 text-sm">Demonstrates how additional Tailwind classes can be passed through the 'className' prop for unique styling.</p>
        </div>

      </div>
    </div>
  );
};

export default ButtonsPage;