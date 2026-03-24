import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/context';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-24 pb-12 mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-neon-blue/5 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <Logo className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-neon-blue hover:text-brand-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-neon-blue hover:text-brand-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-neon-blue hover:text-brand-dark transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('nav.services')}</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-brand-neon-blue transition-colors text-sm">{t('services.list.meta')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-neon-blue transition-colors text-sm">{t('services.list.google')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-neon-blue transition-colors text-sm">{t('services.list.tiktok')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-neon-blue transition-colors text-sm">{t('services.list.retargeting')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-neon-blue shrink-0" />
                <span>{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-brand-neon-blue shrink-0" />
                <span dir="ltr">+213 798 18 47 27</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-brand-neon-blue shrink-0" />
                <span>ivisionads16@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('services.parentCompany.title')}</h4>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.parentLink')}
            </p>
            <a href="https://ivision.agency" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-neon-blue hover:text-brand-neon-purple transition-colors text-sm font-medium">
              {t('services.parentCompany.link')} &rarr;
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-gray-500 hover:text-white transition-colors text-sm">{t('footer.privacy')}</Link>
            <Link to="#" className="text-gray-500 hover:text-white transition-colors text-sm">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
