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
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-brand-neon-blue mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon-blue"></span>
              </span>
              iVISION Agency Partner
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[1.05]"
            >
              {t('home.hero.headline')} <br />
              <span className="text-gradient">{t('home.hero.highlight')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              {t('home.hero.subheadline')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                  {t('home.hero.primaryBtn')}
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="glass" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
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
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">{t('home.howWeWork.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((step, index) => (
            <div key={step} className="relative p-10 rounded-[2rem] border border-white/5 bg-white/[0.01] overflow-hidden group hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 shadow-2xl">
              <div className="absolute -top-12 -right-12 text-[180px] font-black text-white/[0.02] select-none group-hover:text-brand-neon-blue/[0.05] transition-colors duration-500">
                0{step}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-neon-blue/10 flex items-center justify-center mb-8 text-brand-neon-blue font-bold text-xl border border-brand-neon-blue/20">
                  {step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t(`home.howWeWork.step${step}`)}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{t(`home.howWeWork.step${step}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="relative rounded-[3rem] overflow-hidden p-16 md:p-32 text-center bg-brand-navy border border-white/5 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-neon-blue/10 via-transparent to-brand-neon-purple/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon-blue/20 blur-[150px] rounded-full pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tight">
              {t('home.bottomCta.title')}
            </h2>
            <Link to="/contact">
              <Button variant="primary" size="lg" className="text-xl px-12 py-6 shadow-[0_0_40px_rgba(0,82,255,0.4)] hover:shadow-[0_0_60px_rgba(0,136,255,0.6)]">
                {t('home.bottomCta.btn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
