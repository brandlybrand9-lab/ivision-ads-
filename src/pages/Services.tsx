import { useLanguage } from '../i18n/context';
import { GlassCard } from '../components/GlassCard';
import { Search, Youtube, Target, Key, PlaySquare, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Services = () => {
  const { t, dir } = useLanguage();

  const servicesList = [
    { id: 'search', icon: Search, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { id: 'youtube', icon: Youtube, color: 'text-red-400', bg: 'bg-red-500/20' },
    { id: 'remarketing', icon: Target, color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { id: 'keyword', icon: Key, color: 'text-green-400', bg: 'bg-green-500/20' },
    { id: 'interactive', icon: PlaySquare, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
    { id: 'genz', icon: Users, color: 'text-pink-400', bg: 'bg-pink-500/20' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black mb-6"
        >
          {t('services.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          {t('services.subtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {servicesList.map((service, index) => {
          const Icon = service.icon;
          return (
            <GlassCard key={service.id} delay={index * 0.1} className="group hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t(`services.list.${service.id}`)}</h3>
              <div className="w-12 h-1 bg-white/10 rounded-full group-hover:bg-brand-neon-blue transition-colors" />
            </GlassCard>
          );
        })}
      </div>

      {/* Parent Company Callout */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden p-10 md:p-16 border border-brand-neon-purple/30 bg-gradient-to-r from-brand-navy to-brand-neon-purple/10"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon-purple/20 blur-[100px] rounded-full" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.parentCompany.title')}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('services.parentCompany.desc')}
            </p>
          </div>
          <a 
            href="https://smartmarketer.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-brand-dark font-bold hover:bg-gray-200 transition-colors"
          >
            {t('services.parentCompany.link')}
            {dir === 'rtl' ? <ArrowRight className="rotate-180 w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </a>
        </div>
      </motion.div>
    </div>
  );
};
