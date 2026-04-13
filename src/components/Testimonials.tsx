import React from 'react';
import { useLanguage } from '../i18n/context';
import { GlassCard } from './GlassCard';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t('portfolio.testimonials.t1.name'),
      role: t('portfolio.testimonials.t1.role'),
      quote: t('portfolio.testimonials.t1.quote'),
      delay: 0.1,
    },
    {
      id: 2,
      name: t('portfolio.testimonials.t2.name'),
      role: t('portfolio.testimonials.t2.role'),
      quote: t('portfolio.testimonials.t2.quote'),
      delay: 0.2,
    },
    {
      id: 3,
      name: t('portfolio.testimonials.t3.name'),
      role: t('portfolio.testimonials.t3.role'),
      quote: t('portfolio.testimonials.t3.quote'),
      delay: 0.3,
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-8 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('portfolio.testimonials.title')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <GlassCard key={testimonial.id} delay={testimonial.delay} className="relative pt-12 pb-8 px-8 flex flex-col h-full">
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-brand-neon-blue/20 flex items-center justify-center border border-brand-neon-blue/30">
              <Quote className="w-5 h-5 text-brand-neon-blue" />
            </div>
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-neon-purple text-brand-neon-purple" />
              ))}
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 flex-grow italic">
              "{testimonial.quote}"
            </p>
            
            <div className="mt-auto border-t border-white/10 pt-6">
              <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
