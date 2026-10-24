import { motion } from 'motion/react';
import { useLanguage } from '../i18n/context';
import { GlassCard } from '../components/GlassCard';

export default function Cookies() {
  const { t } = useLanguage();

  return (
    <div className="legal-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">{t('legal.cookiesTitle')}</h1>
        
        <GlassCard className="legal-card">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              {t('legal.cookiesContent')}
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};
