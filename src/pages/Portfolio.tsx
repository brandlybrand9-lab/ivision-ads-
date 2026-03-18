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
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-neon-blue to-transparent flex-grow opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold px-4">{t('portfolio.caseStudies.title')}</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-brand-neon-blue to-transparent flex-grow opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <GlassCard key={study.id} delay={index * 0.1} className="relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-32 h-32 ${study.bg} blur-[50px] rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl ${study.bg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${study.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t(`portfolio.caseStudies.${study.id}.title`)}</h3>
                  <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-neon-blue font-semibold mb-6">
                    {t(`portfolio.caseStudies.${study.id}.metric`)}
                  </div>
                  <p className="text-gray-400 leading-relaxed">
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
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-neon-purple to-transparent flex-grow opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold px-4">{t('portfolio.testimonials.title')}</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-brand-neon-purple to-transparent flex-grow opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <GlassCard key={test} delay={index * 0.1} className="flex flex-col">
              <Quote className="w-10 h-10 text-brand-neon-purple/40 mb-6" />
              <p className="text-lg text-gray-300 leading-relaxed mb-8 flex-grow italic">
                "{t(`portfolio.testimonials.${test}.quote`)}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-neon-blue to-brand-neon-purple p-0.5">
                  <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center text-lg font-bold">
                    {t(`portfolio.testimonials.${test}.name`).charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white">{t(`portfolio.testimonials.${test}.name`)}</h4>
                  <p className="text-sm text-gray-500">{t(`portfolio.testimonials.${test}.role`)}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
};
