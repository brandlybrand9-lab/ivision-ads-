import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from './Button';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  key?: React.Key;
}

export const GlassCard = ({ children, className, delay = 0 }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: .5, delay }}
    className={cn('glass-card p-6 md:p-8', className)}
  >
    {children}
  </motion.div>
);
