import { useLanguage } from '../i18n/context';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="container mx-auto px-4 md:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black mb-6"
        >
          {t('contact.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          {t('contact.subtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <GlassCard delay={0.1} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-neon-blue/10 flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7 text-brand-neon-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t('contact.info.location')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('contact.info.address')}</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.2} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-neon-purple/10 flex items-center justify-center shrink-0">
              <Phone className="w-7 h-7 text-brand-neon-purple" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t('contact.info.phone')}</h3>
              <p className="text-gray-400 leading-relaxed" dir="ltr">+966 50 123 4567</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.3} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
              <Mail className="w-7 h-7 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t('contact.info.email')}</h3>
              <p className="text-gray-400 leading-relaxed">hello@ivisionads.com</p>
            </div>
          </GlassCard>

          <div className="flex items-center gap-4 pt-4">
            <a href="#" className="flex-1 glass-card py-4 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-green-400">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a href="#" className="flex-1 glass-card py-4 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-blue-400">
              <Send className="w-5 h-5" />
              <span className="font-medium">Telegram</span>
            </a>
          </div>
        </div>

        {/* Lead Gen Form */}
        <GlassCard delay={0.4} className="relative overflow-hidden p-8 md:p-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon-blue/10 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-neon-purple/10 blur-[120px] rounded-full -ml-20 -mb-20 pointer-events-none" />
          
          <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon-blue focus:bg-white/10 transition-all shadow-inner"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.phone')}</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon-blue focus:bg-white/10 transition-all shadow-inner"
                  required
                  dir="ltr"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.service')}</label>
              <select className="w-full bg-brand-navy border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon-blue transition-all appearance-none shadow-inner cursor-pointer">
                <option value="meta">{t('contact.form.services.meta')}</option>
                <option value="google">{t('contact.form.services.google')}</option>
                <option value="tiktok">{t('contact.form.services.tiktok')}</option>
                <option value="other">{t('contact.form.services.other')}</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.budget')}</label>
              <select className="w-full bg-brand-navy border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon-blue transition-all appearance-none shadow-inner cursor-pointer">
                <option value="b1">{t('contact.form.budgets.b1')}</option>
                <option value="b2">{t('contact.form.budgets.b2')}</option>
                <option value="b3">{t('contact.form.budgets.b3')}</option>
                <option value="b4">{t('contact.form.budgets.b4')}</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.message')}</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon-blue focus:bg-white/10 transition-all resize-none shadow-inner"
              />
            </div>

            <Button variant="primary" size="lg" className="w-full py-5 text-lg font-bold tracking-wide">
              {t('contact.form.submit')}
            </Button>

            <p className="text-sm text-brand-neon-purple/90 text-center mt-6 bg-brand-neon-purple/10 p-4 rounded-xl border border-brand-neon-purple/20 backdrop-blur-sm">
              {t('contact.form.notice')}
            </p>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};
