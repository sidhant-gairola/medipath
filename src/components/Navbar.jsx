import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';
import MediPathLogo from '../Images/MediPath_Logo.png';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`relative w-full top-0 border-b border-gray-300`}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <NavLink to="/" className="text-2xl font-bold">
              <img src={MediPathLogo} className={`logoName ${darkMode ? 'invert' : ''}`} alt='MediPath' />
            </NavLink>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={`text-lg font-semibold hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>Home</NavLink>
            <NavLink to="/treatment" className={`text-lg font-semibold hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Treatment
            </NavLink>
            <NavLink to="/team" className={`text-lg font-semibold hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>Our Team</NavLink>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full hover:bg-gray-200 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} text-lg`}
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
