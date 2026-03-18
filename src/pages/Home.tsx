import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/context';
import { Button } from '../components/Button';
import { GlassCard } from '../components/GlassCard';
import { TrendingUp, Target, Headset, BarChart3, Search, PlayCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]"
            >
              {t('home.hero.headline')} <br />
              <span className="text-gradient">{t('home.hero.highlight')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              {t('home.hero.subheadline')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  {t('home.hero.primaryBtn')}
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="glass" size="lg" className="w-full sm:w-auto">
                  {t('home.hero.secondaryBtn')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard delay={0.1} className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-neon-blue/10 flex items-center justify-center shrink-0">
              <TrendingUp className="w-8 h-8 text-brand-neon-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{t('home.stats.roi')}</h3>
            </div>
          </GlassCard>
          
          <GlassCard delay={0.2} className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-neon-purple/10 flex items-center justify-center shrink-0">
              <Target className="w-8 h-8 text-brand-neon-purple" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{t('home.stats.campaigns')}</h3>
            </div>
          </GlassCard>
          
          <GlassCard delay={0.3} className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
              <Headset className="w-8 h-8 text-gray-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{t('home.stats.support')}</h3>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.servicesPreview.title')}</h2>
          <p className="text-xl text-gray-400">{t('home.servicesPreview.desc')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <GlassCard delay={0.1} className="group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('home.servicesPreview.meta')}</h3>
            <p className="text-gray-400 leading-relaxed">{t('home.servicesPreview.metaDesc')}</p>
          </GlassCard>
          
          <GlassCard delay={0.2} className="group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Search className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('home.servicesPreview.google')}</h3>
            <p className="text-gray-400 leading-relaxed">{t('home.servicesPreview.googleDesc')}</p>
          </GlassCard>
          
          <GlassCard delay={0.3} className="group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PlayCircle className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('home.servicesPreview.tiktok')}</h3>
            <p className="text-gray-400 leading-relaxed">{t('home.servicesPreview.tiktokDesc')}</p>
          </GlassCard>
        </div>
        
        <div className="text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-brand-neon-blue hover:text-brand-neon-purple transition-colors font-medium text-lg">
            {t('home.servicesPreview.viewAll')} {dir === 'rtl' ? <ArrowRight className="rotate-180" /> : <ArrowRight />}
          </Link>
        </div>
      </section>

      {/* How We Work */}
      <section className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">{t('home.howWeWork.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((step, index) => (
            <div key={step} className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden group hover:bg-white/[0.04] transition-colors">
              <div className="absolute -top-10 -right-10 text-[150px] font-black text-white/[0.03] select-none group-hover:text-brand-neon-blue/[0.05] transition-colors">
                0{step}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">{t(`home.howWeWork.step${step}`)}</h3>
                <p className="text-gray-400">{t(`home.howWeWork.step${step}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center bg-gradient-to-br from-brand-neon-blue/20 via-brand-navy to-brand-neon-purple/20 border border-white/10">
          <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              {t('home.bottomCta.title')}
            </h2>
            <Link to="/contact">
              <Button variant="primary" size="lg" className="text-lg px-10 py-5">
                {t('home.bottomCta.btn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
