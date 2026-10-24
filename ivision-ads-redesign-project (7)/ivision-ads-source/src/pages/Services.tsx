import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Magnet, Search, Share2, Target, TrendingUp, Video } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/context';

const serviceDescriptions = {
  ar: [
    'حملات مستهدفة على فيسبوك وإنستغرام لزيادة التفاعل والمبيعات.',
    'الوصول إلى العملاء المحتملين في اللحظة التي يبحثون فيها عن خدماتك.',
    'محتوى مرئي وحملات إبداعية للوصول إلى جمهور جديد.',
    'إعادة التواصل مع الزوار المهتمين وتحويل الاهتمام إلى إجراء.',
    'حملات مصممة لجذب استفسارات وفرص بيع مؤهلة.',
    'تحليل الأداء واختبار التحسينات لرفع كفاءة الإنفاق الإعلاني.',
  ],
  en: [
    'Targeted Facebook and Instagram campaigns built to increase engagement and sales.',
    'Reach potential customers at the moment they search for what you offer.',
    'Creative video campaigns to introduce your brand to new audiences.',
    'Reconnect with interested visitors and help turn attention into action.',
    'Campaigns designed to attract qualified inquiries and sales opportunities.',
    'Analyze performance and test improvements to make ad spend work harder.',
  ],
  fr: [
    'Des campagnes ciblées sur Facebook et Instagram pour développer l’engagement et les ventes.',
    'Touchez vos clients potentiels au moment où ils recherchent vos services.',
    'Des campagnes vidéo créatives pour faire connaître votre marque à de nouvelles audiences.',
    'Relancez les visiteurs intéressés et transformez leur attention en action.',
    'Des campagnes conçues pour générer des demandes et des prospects qualifiés.',
    'Analysez les performances et testez des optimisations pour mieux investir.',
  ],
} as const;

const services = [
  { id: 'meta', icon: Share2 },
  { id: 'google', icon: Search },
  { id: 'tiktok', icon: Video },
  { id: 'retargeting', icon: Target },
  { id: 'leadGen', icon: Magnet },
  { id: 'optimization', icon: TrendingUp },
];

export const Services = () => {
  const { t, dir, lang } = useLanguage();
  const descriptions = serviceDescriptions[lang];
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="subpage services-page">
      <section className="subpage-hero">
        <div className="subpage-container">
          <motion.span className="section-kicker" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>{t('nav.services')}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>{t('services.title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>{t('services.subtitle')}</motion.p>
        </div>
      </section>

      <section className="subpage-container service-detail-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article className="service-detail-card" key={service.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}>
              <div className="service-detail-top"><span className="service-icon"><Icon size={22} /></span><small>0{index + 1} / 06</small></div>
              <h2>{t(`services.list.${service.id}`)}</h2>
              <p>{descriptions[index]}</p>
              <Link to="/contact" className="service-detail-link">{t('nav.startNow')}<Arrow size={16} /></Link>
            </motion.article>
          );
        })}
      </section>

      <section className="subpage-container parent-company-wrap">
        <motion.div className="parent-company-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-kicker section-kicker-light">iVISION Agency</span>
          <div className="parent-company-content">
            <div><h2>{t('services.parentCompany.title')}</h2><p>{t('services.parentCompany.desc')}</p></div>
            <a href="https://ivision.agency" target="_blank" rel="noopener noreferrer" className="brand-button brand-button-white">{t('services.parentCompany.link')}<ArrowUpRight size={16} /></a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
