// src/pages/AccordionPage.jsx
import React from 'react';
import { Accordion, AccordionItem } from '../components/ui/Accordion'; // Import our new accordion components

const AccordionPage = () => {
  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-5xl font-extrabold text-text-light mb-12 text-center drop-shadow-lg">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
          Animated Accordions
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-text-light text-center">Frequently Asked Questions (FAQs)</h3>
            <Accordion>
                <AccordionItem title="What is Lumin UI?">
                    Lumin UI is a curated showcase of premium, highly interactive React components, designed to accelerate your development and elevate your user interfaces with stunning aesthetics and smooth animations.
                </AccordionItem>
                <AccordionItem title="How are the animations powered?">
                    All advanced animations in Lumin UI are powered by Framer Motion, a production-ready motion library for React that simplifies complex animations.
                </AccordionItem>
                <AccordionItem title="Can I use these components in my own project?">
                    Absolutely! All components are built with reusability in mind and are designed to be easily integrated into any React project. Feel free to explore the code and adapt it to your needs.
                </AccordionItem>
                <AccordionItem title="Is Lumin UI open source?">
                    Yes, the source code for Lumin UI is publicly available, allowing you to learn from it, contribute, or adapt it for your own projects.
                </AccordionItem>
            </Accordion>
        </div>

        {/* Example of Accordion in a sidebar-like context or for detailed information */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md col-span-1 md:col-span-1">
            <h3 className="text-2xl font-semibold mb-6 text-text-light text-center">Component Features</h3>
            <Accordion>
                <AccordionItem title="Animated Button Details" defaultOpen={true}>
                    Our Animated Button features subtle scale and glow effects on hover, a satisfying press animation, and integrated loading/disabled states for robust user feedback.
                </AccordionItem>
                <AccordionItem title="Glow Input Field Details">
                    The Glow Input fields dynamically change border color and emit a soft glow on focus, along with clear red indicators for validation errors, ensuring intuitive user input.
                </AccordionItem>
                <AccordionItem title="Captivating Card Details">
                    Animated Cards offer a subtle 3D tilt and scale on hover, dynamic image scaling, and flexible content slots, making them perfect for displaying diverse information.
                </AccordionItem>
            </Accordion>
        </div>

        {/* Another Accordion for more content */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md col-span-1 md:col-span-1">
            <h3 className="text-2xl font-semibold mb-6 text-text-light text-center">About This Showcase</h3>
            <Accordion>
                <AccordionItem title="Why this project?">
                    This project serves as a practical demonstration of building complex UI components from scratch using modern React patterns and an aesthetic-first approach with Tailwind CSS.
                </AccordionItem>
                <AccordionItem title="Technologies Used">
                    Built primarily with React, styled with Tailwind CSS, and animated using Framer Motion. Routing is handled by React Router DOM.
                </AccordionItem>
                <AccordionItem title="Future Plans">
                    Future additions may include more complex interactive components like tabs, carousels, toast notifications, and integration with data-fetching patterns.
                </AccordionItem>
            </Accordion>
        </div>


      </div>
    </div>
  );
};

export default AccordionPage;