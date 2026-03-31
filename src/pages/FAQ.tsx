import { motion } from 'motion/react';
import { useLanguage } from '../i18n/context';
import { GlassCard } from '../components/GlassCard';

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    { q: t('faqPage.q1'), a: t('faqPage.a1') },
    { q: t('faqPage.q2'), a: t('faqPage.a2') },
    { q: t('faqPage.q3'), a: t('faqPage.a3') },
    { q: t('faqPage.q4'), a: t('faqPage.a4') },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">{t('faqPage.title')}</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.a}</p>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
