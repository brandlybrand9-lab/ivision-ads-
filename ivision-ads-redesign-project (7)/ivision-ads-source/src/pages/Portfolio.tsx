import { ArrowUpRight, ShoppingBag, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/context';
import { Testimonials } from '../components/Testimonials';

const studies = [
  { id: 'fashion', icon: ShoppingBag },
  { id: 'realEstate', icon: Users },
  { id: 'delivery', icon: TrendingUp },
];

export const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <div className="subpage portfolio-page">
      <section className="subpage-hero">
        <div className="subpage-container">
          <motion.span className="section-kicker" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>{t('nav.portfolio')}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>{t('portfolio.title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>{t('portfolio.subtitle')}</motion.p>
        </div>
      </section>

      <section className="subpage-container portfolio-studies">
        <div className="subpage-section-heading"><span className="section-kicker">{t('portfolio.caseStudies.title')}</span></div>
        <div className="case-study-grid">
          {studies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.article className="case-study-card" key={study.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
                <div className="case-study-icon"><Icon size={22} /></div>
                <span className="case-study-number">0{index + 1} / 03</span>
                <h2>{t(`portfolio.caseStudies.${study.id}.title`)}</h2>
                <div className="case-study-metric">{t(`portfolio.caseStudies.${study.id}.metric`)}</div>
                <p>{t(`portfolio.caseStudies.${study.id}.desc`)}</p>
                <span className="case-study-arrow"><ArrowUpRight size={16} /></span>
              </motion.article>
            );
          })}
        </div>
      </section>

      <Testimonials />
    </div>
  );
};
