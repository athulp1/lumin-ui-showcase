// src/pages/CardsPage.jsx
import React from 'react';
import AnimatedCard from '../components/cards/AnimatedCard';
import AnimatedButton from '../components/buttons/AnimatedButton';

// No local image imports needed when using direct URLs


const CardsPage = () => {
  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-5xl font-extrabold text-text-light mb-12 text-center drop-shadow-lg">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
          Captivating Cards
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Product Card Example (using direct URL) */}
        <AnimatedCard
          title="Quantum Processor X"
          description="Unleash unparalleled computing power with our next-gen quantum chip, designed for the future of AI and simulations."
          imageUrl="https://picsum.photos/id/1015/400/250" // <--- CHANGED TO DIRECT URL
        >
          <div className="mt-auto pt-4 w-full">
            <AnimatedButton size="sm" className="w-full">
              Buy Now
            </AnimatedButton>
          </div>
        </AnimatedCard>

        {/* Card 2: Blog Post / Article Card (using direct URL) */}
        <AnimatedCard
          title="The Art of Modern UI"
          description="Dive deep into the principles of aesthetic design and discover how to create interfaces that captivate users."
          imageUrl="https://picsum.photos/id/1040/400/250" // <--- CHANGED TO DIRECT URL
        >
          <div className="mt-auto pt-4 w-full">
            <AnimatedButton variant="outline" size="sm" className="w-full">
              Read More
            </AnimatedButton>
          </div>
        </AnimatedCard>

        {/* Card 3: Feature Card with Custom SVG (no image prop) */}
        <AnimatedCard
          title="Seamless Integration"
          description="Our components are built to integrate effortlessly into your existing React projects, saving you development time and effort."
          // No imageUrl prop used here, demonstrating flexibility
        >
          <div className="mt-auto pt-4 w-full text-center">
            {/* Example of custom content inside the card */}
            <svg className="w-12 h-12 text-accent-light mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            <AnimatedButton variant="ghost" size="sm">
              Explore Docs
            </AnimatedButton>
          </div>
        </AnimatedCard>

        {/* Card 4: Simple Info Card (using direct URL) */}
        <AnimatedCard
          title="Fast & Fluid Performance"
          description="Experience lightning-fast rendering and silky-smooth animations across all Lumin UI components, optimized for modern web standards."
          imageUrl="https://picsum.photos/id/1080/400/250" // <--- OPTIONAL: ADDED A 4TH IMAGE FOR FULL DEMO
        >
          <div className="mt-auto pt-4 w-full">
            <p className="text-text-muted text-xs text-center">Powered by Vite & Framer Motion</p>
          </div>
        </AnimatedCard>

      </div>
    </div>
  );
};

export default CardsPage;