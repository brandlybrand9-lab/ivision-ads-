import React, { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = ({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) => {
  const variants = {
    primary: 'ui-button-primary',
    secondary: 'ui-button-secondary',
    glass: 'ui-button-outline',
  };
  const sizes = {
    sm: 'ui-button-sm',
    md: 'ui-button-md',
    lg: 'ui-button-lg',
  };

  return (
    <button className={cn('ui-button', variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
};
