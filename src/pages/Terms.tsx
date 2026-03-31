import { motion } from 'motion/react';
import { useLanguage } from '../i18n/context';
import { GlassCard } from '../components/GlassCard';

export default function Terms() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">{t('legal.termsTitle')}</h1>
        
        <GlassCard className="p-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              {t('legal.termsContent')}
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};
