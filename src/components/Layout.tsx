import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Global Background Orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-neon-blue/20 top-[-200px] left-[-200px]" />
      <div className="glow-orb w-[800px] h-[800px] bg-brand-neon-purple/20 bottom-[-400px] right-[-200px]" />
      
      <Navbar />
      
      <motion.main 
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pt-24"
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
};
