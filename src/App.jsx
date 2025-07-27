// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'; // <-- ADD THIS IMPORT FOR ANALYTICS
//this is for nav bw diff pages like cards, aboutme , toast, modal



// Import our component showcase pages
import ButtonsPage from './pages/ButtonsPage';
import InputsPage from './pages/InputsPage';
import CardsPage from './pages/CardsPage';
import ModalsPage from './pages/ModalsPage';
import AccordionPage from './pages/AccordionPage';
import ToastsPage from './pages/ToastsPage';
import AboutMePage from './pages/AboutMePage'; // <-- ADD THIS LINE!


// HomePage is currently our main landing page
const HomePage = () => (
  <div className="text-center p-8">
    <h2 className="text-4xl font-extrabold text-text-light mb-4">Welcome to Lumin UI!</h2>
    <p className="text-text-muted text-lg mb-8">Explore our collection of premium React components crafted with aesthetic precision.</p>
    <div className="flex justify-center flex-wrap gap-4">
      <NavLink to="/buttons" className="inline-block bg-accent-light text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
        Explore Buttons
      </NavLink>
      <NavLink to="/inputs" className="inline-block bg-accent-light text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
        Explore Inputs
      </NavLink>
      <NavLink to="/cards" className="inline-block bg-accent-light text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
        Explore Cards
      </NavLink>
      <NavLink to="/modals" className="inline-block bg-accent-light text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
        Explore Modals
      </NavLink>
      <NavLink to="/accordions" className="inline-block bg-accent-light text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
        Explore Accordions
      </NavLink>
      <NavLink to="/about" className="inline-block bg-accent-light text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300">
        About Me {/* <-- ADD THIS NavLink */}
      </NavLink>
    </div>
  </div>
);


function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8">
        {/* Main heading of our showcase */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-text-light drop-shadow-lg leading-tight text-center mb-16 relative z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-blue-400 animate-gradient-text">
            Lumin UI
          </span>
          <span className="block text-3xl sm:text-4xl text-text-muted font-medium mt-4">
            Premium React Components
          </span>
        </h1>

        {/* Navigation Bar */}
        <nav className="mb-12 relative z-10">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 bg-secondary-dark p-4 rounded-full shadow-glow-md">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-light border-b-2 border-accent-light' : 'text-text-light hover:text-accent-light'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/buttons"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-light border-b-2 border-accent-light' : 'text-text-light hover:text-accent-light'
                  }`
                }
              >
                Buttons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inputs"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-light border-b-2 border-accent-light' : 'text-text-light hover:text-accent-light'
                  }`
                }
              >
                Inputs
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/cards"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-light border-b-2 border-accent-light' : 'text-text-light hover:text-accent-light'
                  }`
                }
              >
                Cards
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/modals"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-light border-b-2 border-accent-light' : 'text-text-light hover:text-accent-light'
                  }`
                }
              >
                Modals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accordions"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-light border-b-2 border-accent-light' : 'text-text-light hover:text-accent-light'
                  }`
                }
              >
                Accordions
              </NavLink>
            </li>
            <li> {/* <-- ADD THIS NavLink for About Me Page */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-light border-b-2 border-accent-light' : 'text-text-light hover:text-accent-light'
                  }`
                }
              >
                About Me
              </NavLink>
            </li>
            {/* Add more NavLinks for future components here */}
          </ul>
        </nav>

        {/* Main content area for routed components */}
        <main className="w-full max-w-7xl relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buttons" element={<ButtonsPage />} />
            <Route path="/inputs" element={<InputsPage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/modals" element={<ModalsPage />} />
            <Route path="/accordions" element={<AccordionPage />} />
            <Route path="/toasts" element={<ToastsPage />} />
            <Route path="/about" element={<AboutMePage />} /> {/* <-- ADD THIS ROUTE! */}
          </Routes>
        </main>
                {/*if ur confusing in routes, route, navlink just see the example of tv, remote and decoderBox
                here, the remote is navlink navlink consist the links of differtant pages like c1,chan2 ,c3 like this
                but in the tv when u press on remote chan2 how tv understood that ok i wnat to show chan2 ???
                here, decoder box comes , what decoderbox it has collection channels (collection of routes)
                when u send the url/link fromm navlink routes will compare it from rout and tells to the main page ok u need to go to the this paage like this 
                */ }

        {/* Subtle overlay or shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;




//