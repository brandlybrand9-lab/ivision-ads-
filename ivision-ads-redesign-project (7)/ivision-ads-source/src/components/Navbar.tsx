import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage, Language } from '../i18n/context';
import { Logo } from './Logo';

const navCopy = {
  ar: { results: 'النتائج', process: 'منهجيتنا', caseStudies: 'دراسات الحالة' },
  en: { results: 'Results', process: 'Process', caseStudies: 'Case Studies' },
  fr: { results: 'Résultats', process: 'Méthode', caseStudies: 'Études de cas' },
} as const;

export const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const copy = navCopy[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location]);

  const toggleLanguage = () => {
    const langs: Language[] = ['ar', 'en', 'fr'];
    setLang(langs[(langs.indexOf(lang) + 1) % langs.length]);
  };

  const navLinks = [
    { name: t('nav.services'), path: '/services' },
    { name: copy.results, path: '/#results' },
    { name: copy.process, path: '/#process' },
    { name: copy.caseStudies, path: '/portfolio' },
  ];

  const linkList = (mobile = false) => navLinks.map((item) => {
    const isActive = item.path.startsWith('/#')
      ? location.pathname === '/' && location.hash === item.path.slice(1)
      : location.pathname === item.path;
    return <Link key={item.path} to={item.path} className={`site-nav-link ${isActive ? 'active' : ''} ${mobile ? 'mobile-link' : ''}`}>{item.name}</Link>;
  });

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header-inner">
        <Link to="/" className="site-brand" aria-label="iVISION ADS"><Logo className="site-logo" /></Link>
        <nav className="site-nav-desktop" aria-label="Main navigation">{linkList()}</nav>
        <div className="site-nav-actions">
          <button className="language-control" onClick={toggleLanguage} aria-label="Change language"><Globe size={14} /><span>{lang.toUpperCase()}</span></button>
          <Link to="/contact" className="nav-cta">{t('nav.startNow')}<ArrowUpRight size={15} /></Link>
          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen((open) => !open)} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav className="mobile-nav-panel" aria-label="Mobile navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .18 }}>
            {linkList(true)}
            <div className="mobile-menu-controls">
              <button className="language-control" onClick={toggleLanguage}><Globe size={14} /><span>{lang.toUpperCase()}</span></button>
              <Link to="/contact" className="nav-cta">{t('nav.startNow')}<ArrowUpRight size={15} /></Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
