// src/pages/ToastsPage.jsx
import React from 'react';
import { useToast } from '../components/ui/ToastContext'; // Import our useToast hook
import AnimatedButton from '../components/buttons/AnimatedButton'; // For triggering buttons

const ToastsPage = () => {
  const { addToast } = useToast(); // Get the addToast function from our context

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-5xl font-extrabold text-text-light mb-12 text-center drop-shadow-lg">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Animated Toasts
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Success Toast */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light">Success Toast</h3>
          <AnimatedButton onClick={() => addToast('Operation completed successfully!', 'success')} size="md">
            Show Success
          </AnimatedButton>
          <p className="text-text-muted mt-4 text-sm">Indicates a positive outcome to a user action.</p>
        </div>

        {/* Info Toast */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light">Info Toast</h3>
          <AnimatedButton variant="outline" onClick={() => addToast('New updates are available!', 'info')} size="md">
            Show Info
          </AnimatedButton>
          <p className="text-text-muted mt-4 text-sm">Provides general information or updates.</p>
        </div>

        {/* Warning Toast */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light">Warning Toast</h3>
          <AnimatedButton variant="ghost" onClick={() => addToast('Your session will expire soon.', 'warning')} size="md">
            Show Warning
          </AnimatedButton>
          <p className="text-text-muted mt-4 text-sm">Alerts the user to a non-critical issue.</p>
        </div>

        {/* Error Toast */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light">Error Toast</h3>
          <AnimatedButton className="bg-red-600 hover:bg-red-700 text-white" onClick={() => addToast('Failed to save data. Please try again.', 'error')} size="md">
            Show Error
          </AnimatedButton>
          <p className="text-text-muted mt-4 text-sm">Notifies the user of a problem or failed action.</p>
        </div>

        {/* Custom Duration Toast */}
        <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-6 text-text-light">Custom Duration</h3>
          <AnimatedButton onClick={() => addToast('This toast stays for 10 seconds!', 'info', 10000)} size="md">
            10s Toast
          </AnimatedButton>
          <p className="text-text-muted mt-4 text-sm">Configure how long the toast stays on screen.</p>
        </div>

      </div>
    </div>
  );
};

export default ToastsPage;