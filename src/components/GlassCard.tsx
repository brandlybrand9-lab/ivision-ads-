import React, { ReactNode } from 'react';
import { cn } from './Button';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  key?: React.Key;
}

export const GlassCard = ({ children, className, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={cn("glass-card p-6 md:p-8 hover:border-white/20 transition-colors duration-300", className)}
    >
      {children}
    </motion.div>
  );
};
