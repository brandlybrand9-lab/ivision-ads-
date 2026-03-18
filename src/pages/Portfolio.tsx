import { useLanguage } from '../i18n/context';
import { GlassCard } from '../components/GlassCard';
import { TrendingUp, Users, ShoppingBag, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const Portfolio = () => {
  const { t } = useLanguage();

  const caseStudies = [
    { id: 'fashion', icon: ShoppingBag, color: 'text-pink-400', bg: 'bg-pink-500/20' },
    { id: 'realEstate', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { id: 'delivery', icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-500/20' },
  ];

  const testimonials = ['t1', 't2', 't3'];

  return (
    <div className="container mx-auto px-4 md:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black mb-6"
        >
          {t('portfolio.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          {t('portfolio.subtitle')}
        </motion.p>
      </div>

      {/* Case Studies */}
      <section className="mb-40">
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-neon-blue to-transparent flex-grow opacity-30" />
          <h2 className="text-3xl md:text-5xl font-black px-4 tracking-tight">{t('portfolio.caseStudies.title')}</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-brand-neon-blue to-transparent flex-grow opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <GlassCard key={study.id} delay={index * 0.1} className="relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                <div className={`absolute top-0 right-0 w-48 h-48 ${study.bg} blur-[60px] rounded-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150 opacity-50`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${study.bg} flex items-center justify-center mb-8 shadow-lg`}>
                    <Icon className={`w-8 h-8 ${study.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t(`portfolio.caseStudies.${study.id}.title`)}</h3>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-neon-blue font-bold mb-6 shadow-inner">
                    {t(`portfolio.caseStudies.${study.id}.metric`)}
                  </div>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {t(`portfolio.caseStudies.${study.id}.desc`)}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-neon-purple to-transparent flex-grow opacity-30" />
          <h2 className="text-3xl md:text-5xl font-black px-4 tracking-tight">{t('portfolio.testimonials.title')}</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-brand-neon-purple to-transparent flex-grow opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <GlassCard key={test} delay={index * 0.1} className="flex flex-col relative group hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <Quote className="w-12 h-12 text-brand-neon-purple/30 mb-8 relative z-10" />
              <p className="text-lg text-gray-300 leading-relaxed mb-10 flex-grow italic font-light relative z-10">
                "{t(`portfolio.testimonials.${test}.quote`)}"
              </p>
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-neon-blue to-brand-neon-purple p-[2px] shadow-lg">
                  <div className="w-full h-full rounded-full bg-brand-navy flex items-center justify-center text-xl font-bold">
                    {t(`portfolio.testimonials.${test}.name`).charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{t(`portfolio.testimonials.${test}.name`)}</h4>
                  <p className="text-sm text-brand-neon-blue/80 font-medium">{t(`portfolio.testimonials.${test}.role`)}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
};
