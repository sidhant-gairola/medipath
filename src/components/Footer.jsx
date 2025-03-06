import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center mt-3 mb-0 pb-4 pt-4 sm:px-6 lg:px-8">
      <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} MediPath : All rights reserved.</p>
    </footer>
  );
}

export default Footer;
