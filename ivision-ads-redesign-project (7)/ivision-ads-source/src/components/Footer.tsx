import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import { Logo } from './Logo';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main-grid">
          <div className="footer-brand-column">
            <Link to="/" className="footer-brand-link"><Logo className="footer-logo" /></Link>
            <p>{t('footer.desc')}</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/ivisionads__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="https://web.facebook.com/ivisionforads" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
            </div>
          </div>

          <div className="footer-link-column">
            <h3>{t('nav.services')}</h3>
            <Link to="/services">{t('services.list.meta')}</Link>
            <Link to="/services">{t('services.list.google')}</Link>
            <Link to="/services">{t('services.list.tiktok')}</Link>
            <Link to="/services">{t('services.list.optimization')}</Link>
          </div>

          <div className="footer-link-column">
            <h3>{t('contact.title')}</h3>
            <span><MapPin size={15} />{t('contact.info.address')}</span>
            <span><Phone size={15} /><bdi>+213 798 18 47 27</bdi></span>
            <span><Mail size={15} />ivisionads16@gmail.com</span>
          </div>

          <div className="footer-link-column footer-parent-column">
            <h3>{t('services.parentCompany.title')}</h3>
            <p>{t('footer.parentLink')}</p>
            <a className="footer-agency-link" href="https://ivision.agency" target="_blank" rel="noopener noreferrer">{t('services.parentCompany.link')}<ArrowUpRight size={14} /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <div className="footer-legal-links">
            <Link to="/faq">{t('footer.faq')}</Link>
            <Link to="/cookies">{t('footer.cookies')}</Link>
            <Link to="/privacy">{t('footer.privacy')}</Link>
            <Link to="/terms">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
