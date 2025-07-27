// src/pages/ModalsPage.jsx
import React, { useState } from 'react';
import AnimatedModal from '../components/modals/AnimatedModal'; // Import our new modal!
import AnimatedButton from '../components/buttons/AnimatedButton'; // For opening buttons

const ModalsPage = () => {
  // States to control the visibility of different modals
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isNoClickModalOpen, setIsNoClickModalOpen] = useState(false);

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-5xl font-extrabold text-text-light mb-12 text-center drop-shadow-lg">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
          Dynamic Modals
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basic Modal Example */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light">Basic Modal</h3>
          <AnimatedButton onClick={() => setIsBasicModalOpen(true)} size="md">
            Open Basic Modal
          </AnimatedButton>
          <p className="text-text-muted mt-4 text-sm">A simple modal with title and content.</p>
          <AnimatedModal
            isOpen={isBasicModalOpen}
            onClose={() => setIsBasicModalOpen(false)}
            title="Welcome to Lumin UI Modal!"
          >
            <p className="text-text-muted text-base mb-4">
              This is a standard modal dialog. It covers the content behind it and can be closed by clicking the 'x' or the overlay.
            </p>
            <div className="flex justify-end space-x-4 pt-4 border-t border-accent-dark">
                <AnimatedButton variant="outline" onClick={() => setIsBasicModalOpen(false)}>Close</AnimatedButton>
            </div>
          </AnimatedModal>
        </div>

        {/* Confirmation Modal Example */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light">Confirmation Modal</h3>
          <AnimatedButton onClick={() => setIsConfirmModalOpen(true)} size="md" variant="outline">
            Open Confirm Modal
          </AnimatedButton>
          <p className="text-text-muted mt-4 text-sm">Requires user action to dismiss.</p>
          <AnimatedModal
            isOpen={isConfirmModalOpen}
            onClose={() => setIsConfirmModalOpen(false)}
            title="Confirm Action"
          >
            <p className="text-text-muted text-base mb-4">
              Are you sure you want to proceed with this action? This cannot be undone.
            </p>
            <div className="flex justify-end space-x-4 pt-4 border-t border-accent-dark">
              <AnimatedButton variant="ghost" onClick={() => setIsConfirmModalOpen(false)}>Cancel</AnimatedButton>
              <AnimatedButton variant="solid" onClick={() => { setIsConfirmModalOpen(false); alert('Action Confirmed!'); }}>Confirm</AnimatedButton>
            </div>
          </AnimatedModal>
        </div>

        {/* Modal that cannot be closed by clicking overlay */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light">Forced Interaction Modal</h3>
          <AnimatedButton onClick={() => setIsNoClickModalOpen(true)} size="md" variant="ghost">
            Open Forced Modal
          </AnimatedButton>
          <p className="text-text-muted mt-4 text-sm">Clicking overlay does nothing, requires button click.</p>
          <AnimatedModal
            isOpen={isNoClickModalOpen}
            onClose={() => setIsNoClickModalOpen(false)}
            title="Important Notification"
            disableOverlayClick={true} // Disable closing by clicking outside
          >
            <p className="text-text-muted text-base mb-4">
              You must click "OK" to acknowledge this message. Clicking outside will not close this modal.
            </p>
            <div className="flex justify-end space-x-4 pt-4 border-t border-accent-dark">
              <AnimatedButton variant="solid" onClick={() => setIsNoClickModalOpen(false)}>OK, Got It!</AnimatedButton>
            </div>
          </AnimatedModal>
        </div>
      </div>
    </div>
  );
};

export default ModalsPage;