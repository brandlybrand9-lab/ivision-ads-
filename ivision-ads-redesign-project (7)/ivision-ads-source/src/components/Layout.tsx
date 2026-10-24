import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="site-shell">
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .35, ease: 'easeOut' }}
        className="site-main"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
