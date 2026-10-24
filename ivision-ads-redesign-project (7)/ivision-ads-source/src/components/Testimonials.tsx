import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/context';

const sectionCopy = {
  ar: { eyebrow: 'آراء العملاء', title: 'شراكات ناجحة تبدأ بالثقة', subtitle: 'أفضل النتائج تأتي من تعاون وثيق وشفاف مع عملائنا.', note: 'تجارب عملاء iVISION ADS' },
  en: { eyebrow: 'Client stories', title: 'Great partnerships start with trust', subtitle: 'The strongest results come from close, transparent collaboration.', note: 'iVISION ADS client stories' },
  fr: { eyebrow: 'Témoignages', title: 'La confiance au cœur du partenariat', subtitle: 'Les meilleurs résultats naissent d’une collaboration transparente.', note: 'Témoignages clients iVISION ADS' },
} as const;

export const Testimonials = () => {
  const { t, lang } = useLanguage();
  const copy = sectionCopy[lang];
  const testimonials = ['t1', 't2', 't3'];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="adrova-container">
        <div className="testimonial-heading">
          <div className="section-intro section-intro-left">
            <span className="section-kicker">{copy.eyebrow}</span>
            <h2>{copy.title}</h2>
            <p>{copy.subtitle}</p>
          </div>
          <div className="testimonial-proof"><span className="testimonial-stars" aria-label="5 stars">★★★★★</span><span>{copy.note}</span></div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((test, index) => (
            <motion.article className="testimonial-card" key={test} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .55, delay: index * .1 }}>
              <div className="testimonial-top"><span className="quote-icon"><Quote size={18} /></span><span className="testimonial-stars" aria-hidden="true"><Star size={11} fill="currentColor"/><Star size={11} fill="currentColor"/><Star size={11} fill="currentColor"/><Star size={11} fill="currentColor"/><Star size={11} fill="currentColor"/></span></div>
              <blockquote>“{t(`portfolio.testimonials.${test}.quote`)}”</blockquote>
              <div className="testimonial-author"><span className={`testimonial-avatar avatar-${index + 1}`}>{t(`portfolio.testimonials.${test}.name`).charAt(0)}</span><span><strong>{t(`portfolio.testimonials.${test}.name`)}</strong><small>{t(`portfolio.testimonials.${test}.role`)}</small></span></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
