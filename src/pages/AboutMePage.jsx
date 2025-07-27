// // src/pages/AboutMePage.jsx
// import React from 'react';
// import AnimatedButton from '../components/buttons/AnimatedButton';

// import { div } from "framer-motion/client";

// const AboutMePage = () => {
//   return (
//     <div className="container mx-auto p-8 max-w-7xl">
//       <h2 className="text-5xl font-extrabold text-text-light mb-12 text-center drop-shadow-lg">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
//           About Me
//         </span>
//       </h2>

//       <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md text-text-light mb-12">
//         <p className="text-text-muted text-lg leading-relaxed mb-6 text-center">
//           Welcome! My name is {' '}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-blue-400 font-extrabold animate-gradient-text">
//             Athul Ganapati Pujari
//           </span>, and I recently completed my {' '}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400 font-semibold">
//             B.E. in Electronics and Communication
//           </span>. I am an aspiring Full-Stack Developer with a passion for crafting engaging and intuitive user experiences. This Lumin UI project is a testament to my dedication to learning and mastering modern web technologies.
//         </p>
//         <p className="text-text-muted text-lg leading-relaxed mb-6 text-center">
//           My core interests lie in {' '}
//           <span className="text-accent-light font-semibold">Software Development</span> and {' '}
//           <span className="text-accent-light font-semibold">Web Technologies</span>, spanning both {' '}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 font-semibold">Backend Systems</span> and {' '}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-red-300 font-semibold">Frontend Interfaces</span>. I'm always eager to learn new technologies and solve complex problems.
//         </p>
//         <p className="text-text-muted text-lg leading-relaxed text-center">
//           Feel free to connect with me and explore more of my work!
//         </p>

//         <div className="mt-10 flex justify-center space-x-6">
//           <a href="https://www.linkedin.com/in/athul-ganapati-pujari-62a3a2319/" target="_blank" rel="noopener noreferrer">
//             <AnimatedButton size="md">
//               Connect on LinkedIn
//             </AnimatedButton>
//           </a>
//           <a href="https://github.com/athulp1" target="_blank" rel="noopener noreferrer">
//             <AnimatedButton variant="outline" size="md">
//               View on GitHub
//             </AnimatedButton>
//           </a>
//         </div>
//       </div> 

// // //       {/* Your Skills Section */}
// // //       <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md text-text-light">
// // //         <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
// // //           My Skills
// // //         </h3>
// // //         <div className="flex flex-wrap justify-center gap-4 text-text-light text-md font-medium">
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">C</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">C++</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">SQL</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">JavaScript</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">HTML5 & CSS3</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">React.js</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">Tailwind CSS</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">MySQL</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">DBMS</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">OOP</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">Data Structures & Algorithms</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">Framer Motion</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">Analytical Thinking</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">Quick Learning</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">Communication</span>
// // //           <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md">Team Collaboration</span>
// // //         </div>
// // //       </div>
// // //     </div>
//   );
//  };

// export default AboutMePage;












// src/pages/AboutMePage.jsx
import React from 'react';
import AnimatedButton from '../components/buttons/AnimatedButton'; // Optional: for a call to action

const AboutMePage = () => {
  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-5xl font-extrabold text-text-light mb-12 text-center drop-shadow-lg">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          About Me
        </span>
      </h2>

      <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md text-text-light mb-12">
        <p className="text-text-muted text-lg leading-relaxed mb-6 text-center">
          Welcome! My name is {' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-blue-400 font-extrabold animate-gradient-text">
            Athul Ganapati Pujari
          </span>, and I recently completed my {' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400 font-semibold">
            B.E. in Electronics and Communication
          </span>. I am an aspiring Full-Stack Developer with a passion for crafting engaging and intuitive user experiences. This Lumin UI project is a testament to my dedication to learning and mastering modern web technologies.
        </p>
        <p className="text-text-muted text-lg leading-relaxed mb-6 text-center">
          My core interests lie in {' '}
          <span className="text-accent-light font-semibold">Software Development</span> and {' '}
          <span className="text-accent-light font-semibold">Web Technologies</span>, spanning both {' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 font-semibold">Backend Systems</span> and {' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-red-300 font-semibold">Frontend Interfaces</span>. I'm always eager to learn new technologies and solve complex problems.
        </p>
        <p className="text-text-muted text-lg leading-relaxed text-center">
          Feel free to connect with me and explore more of my work!
        </p>

        <div className="mt-10 flex justify-center space-x-6">
          {/* Replace with your actual LinkedIn and GitHub profiles */}
          <a href="https://www.linkedin.com/in/athul-ganapati-pujari-62a3a2319/" target="_blank" rel="noopener noreferrer">
            <AnimatedButton size="md">
              Connect on LinkedIn
            </AnimatedButton>
          </a>
          <a href="https://github.com/athulp1" target="_blank" rel="noopener noreferrer">
            <AnimatedButton variant="outline" size="md">
              View on GitHub
            </AnimatedButton>
          </a>
        </div>
      </div>

      {/* Your Skills Section */}
      <div className="bg-secondary-dark p-8 rounded-xl shadow-glow-md text-text-light">
        <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
          My Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4 text-text-light text-md font-medium">
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">C</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">C++</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">SQL</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">JavaScript</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">HTML5 & CSS3</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">React.js</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">Tailwind CSS</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">MySQL</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">DBMS</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">OOP</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">Data Structures & Algorithms</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">Framer Motion</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">Analytical Thinking</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">Quick Learning</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">Communication</span>
          <span className="px-4 py-2 bg-primary-dark rounded-full shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-accent-dark cursor-pointer">Team Collaboration</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;









