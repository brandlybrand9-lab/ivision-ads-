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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {servicesList.map((service, index) => {
          const Icon = service.icon;
          return (
            <GlassCard key={service.id} delay={index * 0.1} className="group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-48 h-48 ${service.bg} blur-[60px] rounded-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150 opacity-30`} />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <Icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t(`services.list.${service.id}`)}</h3>
                <div className="w-12 h-1 bg-white/10 rounded-full group-hover:bg-brand-neon-blue group-hover:w-24 transition-all duration-500" />
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Parent Company Callout */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 border border-white/10 bg-brand-navy shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-neon-blue/10 via-transparent to-brand-neon-purple/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon-purple/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-neon-blue/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-brand-neon-purple mb-6">
              Official Partner
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t('services.parentCompany.title')}</h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {t('services.parentCompany.desc')}
            </p>
          </div>
          <a 
            href="https://ivision.agency" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-brand-dark font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl shadow-white/10 text-lg"
          >
            {t('services.parentCompany.link')}
            {dir === 'rtl' ? <ArrowRight className="rotate-180 w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
          </a>
        </div>
      </motion.div>
    </div>
  );
};
