import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleDollarSign,
  FileBarChart,
  MousePointerClick,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/context';
import { Logo } from '../components/Logo';
import { Testimonials } from '../components/Testimonials';

const copy = {
  ar: {
    heroBadge: 'شريك نموّ يركز على النتائج',
    heroVisualLabel: 'تصوّر توضيحي لأداء الحملات',
    phoneOverview: 'نظرة عامة',
    phonePeriod: 'آخر 30 يوماً',
    phoneRevenue: 'عائد الاستثمار',
    phoneGrowth: 'نموّ الحملة',
    floatingRoi: 'عائد الاستثمار',
    floatingCampaigns: 'حملات نشطة',
    clicksTitle: 'من النقرات إلى العملاء',
    clicksDesc: 'نساعد علامتك التجارية على جذب العملاء المحتملين وتحويل الإعلانات إلى نموّ قابل للقياس.',
    quoteLabel: 'شراكة تصنع الفرق',
    brandsTitle: 'منصات يستخدمها جمهورك',
    brandsDesc: 'إدارة الحملات الإعلانية عبر القنوات المناسبة لنشاطك.',
    servicesEyebrow: 'خدماتنا الإعلانية',
    servicesTitle: 'حلول أداء متكاملة لنموّ أعمالك',
    servicesDesc: 'من الاستهداف إلى التحسين، كل حملة مصممة لتدعم أهدافك التجارية.',
    service4Title: 'تحسين الأداء',
    service4Desc: 'نحلل النتائج ونطوّر الحملات لزيادة كفاءة الإنفاق الإعلاني.',
    serviceTags: ['استهداف ذكي', 'بحث مدفوع', 'إبداع مرئي', 'تحسين مستمر'],
    frameworkEyebrow: 'نظام النموّ لدينا',
    frameworkTitle: 'إطار عمل واضح. نموّ يمكن قياسه.',
    frameworkDesc: 'نظام إعلاني يعتمد على البحث والاختبار والتحسين المستمر لمساعدتك على الوصول إلى نتائج أفضل.',
    frameworkCards: [
      ['بحث الجمهور', 'نحدد العملاء الأنسب ونحلل المنافسين ونكشف فرص النمو قبل إطلاق الحملات.'],
      ['اختبار الإبداع', 'نختبر الأفكار والرسائل والعروض للوصول إلى محتوى يحفّز على التفاعل والتحويل.'],
      ['توسيع الأداء', 'نحسّن الحملات الرابحة ونوزّع الميزانيات بناءً على بيانات الأداء.'],
    ],
    resultsEyebrow: 'نتائج قابلة للقياس',
    resultsTitle: 'أداء أفضل، خطوة بعد خطوة',
    resultsDesc: 'كل حملة تتبع منهجية واضحة، مع تحسين مستمر وشفافية في متابعة النتائج.',
    whyEyebrow: 'لماذا iVISION ADS؟',
    whyTitle: 'استراتيجية وشفافية ونموّ مستدام.',
    whyDesc: 'نجمع بين التخطيط الإعلاني والإبداع والتحليل لمساعدة أعمالك على النموّ بثقة.',
    whyPoints: [
      ['قرارات مبنية على البيانات', 'نستخدم مؤشرات الأداء الحقيقية لتوجيه كل تحسين.'],
      ['اختبار المحتوى الإبداعي', 'نجرب الرسائل والزوايا الإعلانية ونبني على ما ينجح.'],
      ['تقارير واضحة', 'تتابع أداء الحملات وتفهم الخطوات التالية بكل شفافية.'],
    ],
    caseEyebrow: 'أعمالنا ونتائجنا',
    caseTitle: 'قصص نموّ من مجالات مختلفة',
    caseDesc: 'نماذج من الحملات والنتائج التي يعرضها موقع iVISION ADS حالياً.',
    caseTypes: ['نموّ التجارة الإلكترونية', 'توليد العملاء المحتملين', 'نموّ التطبيقات'],
    caseMetrics: ['زيادة المبيعات', 'خفض تكلفة العميل المحتمل', 'زيادة التحميلات'],
    caseDetails: [
      'حملة إعلانية متكاملة على ميتا وجوجل لزيادة المبيعات خلال موسم التخفيضات.',
      'استراتيجية استهداف دقيقة لجذب عملاء محتملين مهتمين بالعقارات.',
      'حملات إبداعية على تيك توك لزيادة الوعي والتحميلات.',
    ],
    faqEyebrow: 'الأسئلة الشائعة',
    faqTitle: 'إجابات سريعة عن خدماتنا',
    faqDesc: 'كل ما تحتاج معرفته قبل بدء حملتك الإعلانية.',
    ctaEyebrow: 'لنبدأ النموّ معاً',
    ctaTitle: 'جاهز لتحويل إنفاقك الإعلاني إلى نتائج؟',
    ctaDesc: 'شاركنا أهدافك، وسنساعدك على بناء خطة تناسب نشاطك التجاري.',
    ctaButton: 'احجز استشارة الآن',
    visualTag: 'تحسين مستمر',
    phoneLeads: 'العملاء المحتملون',
    phoneConversions: 'التحويلات',
  },
  en: {
    heroBadge: 'A growth partner focused on results',
    heroVisualLabel: 'Illustrative campaign performance dashboard',
    phoneOverview: 'Overview',
    phonePeriod: 'Last 30 days',
    phoneRevenue: 'Return on investment',
    phoneGrowth: 'Campaign growth',
    floatingRoi: 'Return on investment',
    floatingCampaigns: 'Campaigns managed',
    clicksTitle: 'Turning clicks into customers',
    clicksDesc: 'We help ambitious brands attract qualified customers and turn advertising into measurable growth.',
    quoteLabel: 'A partnership that moves you forward',
    brandsTitle: 'Built for the platforms your customers use',
    brandsDesc: 'Paid campaign management across the channels that fit your business.',
    servicesEyebrow: 'Performance marketing services',
    servicesTitle: 'End-to-end solutions built to scale',
    servicesDesc: 'From precise targeting to optimization, every campaign supports your business goals.',
    service4Title: 'Performance optimization',
    service4Desc: 'We analyze outcomes and improve campaigns to make every ad dollar work harder.',
    serviceTags: ['Audience targeting', 'Paid search', 'Video creative', 'Ongoing optimization'],
    frameworkEyebrow: 'Our growth framework',
    frameworkTitle: 'A clear framework. Growth you can measure.',
    frameworkDesc: 'A proven advertising system built around research, testing, and continuous optimization.',
    frameworkCards: [
      ['Audience research', 'We identify your ideal customers, analyze competitors, and uncover growth opportunities.'],
      ['Creative testing', 'We test ideas, messaging, and offers to find creative that drives action.'],
      ['Performance scaling', 'We optimize winning campaigns and allocate budgets using real performance data.'],
    ],
    resultsEyebrow: 'Measurable results',
    resultsTitle: 'Stronger performance, step by step',
    resultsDesc: 'Every campaign follows a clear system with ongoing optimization and transparent reporting.',
    whyEyebrow: 'Why iVISION ADS?',
    whyTitle: 'Strategy, clarity, and sustainable growth.',
    whyDesc: 'We combine performance strategy, creative thinking, and analytics to help brands scale with confidence.',
    whyPoints: [
      ['Data-first decisions', 'We use real performance signals to guide every optimization.'],
      ['Creative experimentation', 'We test messaging and concepts, then build on what works.'],
      ['Clear reporting', 'Track campaign performance and understand the next steps.'],
    ],
    caseEyebrow: 'Our work & results',
    caseTitle: 'Growth stories across industries',
    caseDesc: 'Examples of campaigns and outcomes currently featured on iVISION ADS.',
    caseTypes: ['E-commerce growth', 'Lead generation', 'App growth'],
    caseMetrics: ['Sales increase', 'Lower cost per lead', 'More downloads'],
    caseDetails: [
      'An integrated Meta and Google campaign to increase sales during a seasonal promotion.',
      'A precise targeting strategy to attract interested real estate leads.',
      'Creative TikTok campaigns to increase brand awareness and downloads.',
    ],
    faqEyebrow: 'Frequently asked questions',
    faqTitle: 'Quick answers about our services',
    faqDesc: 'What to know before starting an advertising campaign.',
    ctaEyebrow: 'Let’s grow together',
    ctaTitle: 'Ready to turn ad spend into real results?',
    ctaDesc: 'Tell us what you want to achieve and we’ll shape a plan around your business.',
    ctaButton: 'Book a strategy call',
    visualTag: 'Always optimizing',
    phoneLeads: 'Qualified leads',
    phoneConversions: 'Conversions',
  },
  fr: {
    heroBadge: 'Partenaire de croissance axé sur les résultats',
    heroVisualLabel: 'Aperçu illustratif des performances publicitaires',
    phoneOverview: 'Vue d’ensemble',
    phonePeriod: '30 derniers jours',
    phoneRevenue: 'Retour sur investissement',
    phoneGrowth: 'Croissance des campagnes',
    floatingRoi: 'Retour sur investissement',
    floatingCampaigns: 'Campagnes gérées',
    clicksTitle: 'Des clics aux clients',
    clicksDesc: 'Nous aidons les marques ambitieuses à attirer des clients qualifiés et à transformer la publicité en croissance mesurable.',
    quoteLabel: 'Un partenariat qui vous fait avancer',
    brandsTitle: 'Les plateformes de votre audience',
    brandsDesc: 'La gestion de campagnes payantes sur les canaux adaptés à votre activité.',
    servicesEyebrow: 'Nos services de performance',
    servicesTitle: 'Des solutions complètes pour accélérer',
    servicesDesc: 'Du ciblage à l’optimisation, chaque campagne soutient vos objectifs commerciaux.',
    service4Title: 'Optimisation des performances',
    service4Desc: 'Nous analysons les résultats et optimisons les campagnes pour mieux investir.',
    serviceTags: ['Ciblage précis', 'Référencement payant', 'Vidéo créative', 'Optimisation continue'],
    frameworkEyebrow: 'Notre méthode de croissance',
    frameworkTitle: 'Un cadre clair. Une croissance mesurable.',
    frameworkDesc: 'Un système publicitaire éprouvé fondé sur l’analyse, les tests et l’optimisation continue.',
    frameworkCards: [
      ['Étude de l’audience', 'Nous identifions vos clients idéaux, analysons la concurrence et repérons les opportunités.'],
      ['Tests créatifs', 'Nous testons les idées, les messages et les offres qui incitent à l’action.'],
      ['Montée en puissance', 'Nous optimisons les campagnes performantes selon les données réelles.'],
    ],
    resultsEyebrow: 'Des résultats mesurables',
    resultsTitle: 'De meilleures performances, étape par étape',
    resultsDesc: 'Chaque campagne suit une méthode claire, avec une optimisation continue et un suivi transparent.',
    whyEyebrow: 'Pourquoi iVISION ADS ?',
    whyTitle: 'Stratégie, transparence et croissance durable.',
    whyDesc: 'Nous réunissons stratégie média, créativité et analyse pour aider votre marque à grandir sereinement.',
    whyPoints: [
      ['Décisions fondées sur les données', 'Les indicateurs réels orientent chaque optimisation.'],
      ['Tests créatifs', 'Nous testons les messages et développons ce qui fonctionne.'],
      ['Rapports clairs', 'Suivez les performances et comprenez les prochaines étapes.'],
    ],
    caseEyebrow: 'Nos projets et résultats',
    caseTitle: 'Des histoires de croissance sectorielles',
    caseDesc: 'Exemples de campagnes et de résultats déjà présentés sur iVISION ADS.',
    caseTypes: ['Croissance e-commerce', 'Génération de prospects', 'Croissance d’application'],
    caseMetrics: ['Hausse des ventes', 'Coût par prospect réduit', 'Téléchargements en hausse'],
    caseDetails: [
      'Une campagne Meta et Google intégrée pour augmenter les ventes pendant une promotion saisonnière.',
      'Une stratégie de ciblage précise pour attirer des prospects immobiliers intéressés.',
      'Des campagnes TikTok créatives pour développer la notoriété et les téléchargements.',
    ],
    faqEyebrow: 'Questions fréquentes',
    faqTitle: 'Des réponses rapides à vos questions',
    faqDesc: 'L’essentiel à savoir avant de lancer une campagne publicitaire.',
    ctaEyebrow: 'Grandissons ensemble',
    ctaTitle: 'Prêt à transformer votre budget pub en résultats ?',
    ctaDesc: 'Parlez-nous de vos objectifs : nous construirons une stratégie adaptée à votre activité.',
    ctaButton: 'Réserver un appel stratégique',
    visualTag: 'Optimisation continue',
    phoneLeads: 'Prospects qualifiés',
    phoneConversions: 'Conversions',
  },
} as const;

const faqs = ['q1', 'q2', 'q3', 'q4'];

export const Home = () => {
  const { t, dir, lang } = useLanguage();
  const c = copy[lang];
  const ForwardArrow = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const cases = ['fashion', 'realEstate', 'delivery'];
  const services = [
    { id: 'meta', title: t('home.servicesPreview.meta'), desc: t('home.servicesPreview.metaDesc'), icon: Users, className: 'meta-art' },
    { id: 'google', title: t('home.servicesPreview.google'), desc: t('home.servicesPreview.googleDesc'), icon: Search, className: 'google-art' },
    { id: 'tiktok', title: t('home.servicesPreview.tiktok'), desc: t('home.servicesPreview.tiktokDesc'), icon: Video, className: 'tiktok-art' },
    { id: 'optimization', title: c.service4Title, desc: c.service4Desc, icon: TrendingUp, className: 'optimization-art' },
  ];
  const frameworks = [
    { icon: Search, title: c.frameworkCards[0][0], desc: c.frameworkCards[0][1] },
    { icon: Sparkles, title: c.frameworkCards[1][0], desc: c.frameworkCards[1][1] },
    { icon: TrendingUp, title: c.frameworkCards[2][0], desc: c.frameworkCards[2][1] },
  ];
  const whyPoints = [
    { icon: BarChart3, title: c.whyPoints[0][0], desc: c.whyPoints[0][1] },
    { icon: MousePointerClick, title: c.whyPoints[1][0], desc: c.whyPoints[1][1] },
    { icon: FileBarChart, title: c.whyPoints[2][0], desc: c.whyPoints[2][1] },
  ];
  return (
    <div className="adrova-home">
      <section className="adrova-hero" id="home">
        <div className="hero-blue-glow" />
        <div className="adrova-container hero-content">
          <motion.div className="hero-badge" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
            <Sparkles size={13} />{c.heroBadge}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>
            {t('home.hero.headline')}<br /><span>{t('home.hero.highlight')}</span>
          </motion.h1>
          <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .17 }}>
            {t('home.hero.subheadline')}
          </motion.p>

          <motion.div className="hero-artwork" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .25 }} aria-label={c.heroVisualLabel}>
            <div className="hero-art-backdrop" />
            <div className="hero-orbit hero-orbit-a" /><div className="hero-orbit hero-orbit-b" />
            <div className="hero-person-bubble"><span className="person-head" /><span className="person-body" /><i>✦</i></div>
            <div className="hero-roas-card">
              <div className="mini-card-top"><span>{c.floatingRoi}</span><ArrowUpRight size={17} /></div>
              <strong dir="ltr">+200%</strong><small>{t('home.stats.roi')}</small>
              <svg viewBox="0 0 170 35" aria-hidden="true"><path d="M1 27 C17 24 19 29 31 18 S53 25 66 15 S85 21 97 11 S123 20 136 8 S153 15 169 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
            <div className="hero-campaign-card">
              <span className="mini-card-icon"><Target size={16} /></span><span><strong>200+</strong><small>{c.floatingCampaigns}</small></span><span className="campaign-spark">↗</span>
            </div>
            <div className="hero-phone">
              <div className="phone-hardware"><span /></div>
              <div className="phone-screen">
                <div className="phone-topbar"><span className="phone-brand"><Logo className="phone-logo" /></span><span className="phone-menu">•••</span></div>
                <div className="phone-greeting"><span>{c.phoneOverview}</span><small>{c.phonePeriod}</small></div>
                <div className="phone-total"><small>{c.phoneRevenue}</small><strong dir="ltr">+200%</strong><span><TrendingUp size={12} /> ROI</span></div>
                <div className="phone-chart-title"><strong>{c.phoneGrowth}</strong><span>•••</span></div>
                <svg className="phone-chart" viewBox="0 0 230 110" aria-hidden="true">
                  <path d="M2 90H228M2 58H228M2 26H228" stroke="rgba(255,255,255,.08)" strokeWidth="1" strokeDasharray="3 5" />
                  <path d="M4 88 C29 83 35 64 57 68 S87 54 105 59 S134 34 153 43 S185 24 202 26 S218 14 227 10" fill="none" stroke="#4c85ff" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="227" cy="10" r="4" fill="#4c85ff" />
                </svg>
                <div className="phone-bottom-stats"><div><small>{c.phoneLeads}</small><strong>+200</strong></div><div><small>{c.phoneConversions}</small><strong>+48%</strong></div></div>
              </div>
            </div>
            <div className="hero-mini-note"><span className="mini-note-check"><Check size={13} /></span><span><strong>{c.visualTag}</strong><small>{c.phonePeriod}</small></span></div>
            <div className="hero-art-cross cross-one">✳</div><div className="hero-art-cross cross-two">✦</div>
          </motion.div>
        </div>
      </section>

      <section className="turning-section" id="results">
        <div className="adrova-container turning-layout">
          <motion.div className="turning-art" initial={{ opacity: 0, x: dir === 'rtl' ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
            <div className="turning-glow" />
            <div className="turning-chart-card">
              <div className="turning-chart-head"><span><small>{c.phoneOverview}</small><strong>{c.phoneGrowth}</strong></span><span className="chart-period">{c.phonePeriod}⌄</span></div>
              <div className="turning-stat-row"><strong dir="ltr">+200%</strong><span><TrendingUp size={13} /> ROI</span></div>
              <svg viewBox="0 0 420 160" aria-hidden="true"><defs><linearGradient id="turn-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2563eb" stopOpacity=".26"/><stop offset="1" stopColor="#2563eb" stopOpacity="0"/></linearGradient></defs><path d="M0 130H420M0 92H420M0 54H420" stroke="rgba(255,255,255,.09)" strokeDasharray="4 7"/><path d="M6 140 C49 130 61 113 93 119 S143 92 173 100 S224 70 251 78 S307 46 334 54 S381 27 414 16 L414 158 L6 158Z" fill="url(#turn-fill)"/><path d="M6 140 C49 130 61 113 93 119 S143 92 173 100 S224 70 251 78 S307 46 334 54 S381 27 414 16" fill="none" stroke="#4380ff" strokeWidth="3" strokeLinecap="round"/></svg>
              <div className="turning-chart-legend"><span><i />Meta Ads</span><span><i />Google Ads</span><span><i />TikTok Ads</span></div>
            </div>
            <div className="turning-quote-card"><span className="quote-stars">★★★★★</span><p>“{t('portfolio.testimonials.t1.quote')}”</p><strong>{t('portfolio.testimonials.t1.name')}</strong><small>{t('portfolio.testimonials.t1.role')}</small></div>
          </motion.div>
          <motion.div className="turning-copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
            <span className="section-kicker">{c.quoteLabel}</span>
            <h2>{c.clicksTitle}</h2>
            <p>{c.clicksDesc}</p>
            <Link to="/services" className="text-link-dark">{t('home.servicesPreview.viewAll')}<ForwardArrow size={16} /></Link>
            <div className="turning-checks"><span><Check size={14} />Meta Ads</span><span><Check size={14} />Google Ads</span><span><Check size={14} />TikTok Ads</span></div>
          </motion.div>
        </div>
      </section>

      <section className="platforms-section">
        <div className="adrova-container platforms-inner">
          <div className="platforms-caption"><strong>{c.brandsTitle}</strong><span>{c.brandsDesc}</span></div>
          <div className="brand-logo-row">
            <span className="brand-logo-word meta-word"><i>∞</i>Meta</span>
            <span className="brand-logo-word google-word"><i>G</i>Google</span>
            <span className="brand-logo-word tiktok-word"><i>♪</i>TikTok</span>
            <span className="brand-logo-word analytics-word"><i>⌁</i>Analytics</span>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="adrova-container">
          <div className="section-intro">
            <span className="section-kicker">{c.servicesEyebrow}</span>
            <h2>{c.servicesTitle}</h2>
            <p>{c.servicesDesc}</p>
          </div>
          <div className="adrova-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return <motion.article className="adrova-service-card" key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: .55, delay: index * .08 }}>
                <Link to="/services" className="adrova-service-link">
                  <div className={`service-art ${service.className}`}>
                    {service.id === 'meta' && <><span className="ad-creative creative-one"><i>∞</i><b>{t('home.servicesPreview.meta')}</b><small>Campaign overview</small><span className="creative-bars"><i/><i/><i/></span></span><span className="art-orb art-orb-one"/><span className="art-orb art-orb-two"/></>}
                    {service.id === 'google' && <><span className="search-window"><i><Search size={13}/></i><span>Search campaign</span><b>⌕</b></span><span className="search-result"><b>Campaign performance</b><span>Impressions　Clicks　Leads</span><i/></span><span className="google-art-mark">G</span></>}
                    {service.id === 'tiktok' && <><span className="video-phone"><span className="video-top"/><span className="video-center"><Play size={20} fill="currentColor"/></span><span className="video-side-dots">♥<br/>◉<br/>↗</span></span><span className="video-shape"/></>}
                    {service.id === 'optimization' && <><span className="optimization-window"><b>{c.phoneGrowth}</b><small>Performance insights</small><svg viewBox="0 0 180 70" aria-hidden="true"><path d="M2 60 C22 52 32 57 48 40 S75 47 92 30 S120 39 137 20 S159 25 178 6" fill="none" stroke="#4e87ff" strokeWidth="3" strokeLinecap="round"/></svg><span><i/>ROAS <b>+200%</b></span></span><span className="optimization-spark">✦</span></>}
                  </div>
                  <div className="adrova-service-content">
                    <div className="adrova-service-title"><span className="service-icon-dark"><Icon size={17}/></span><span className="service-card-number">0{index + 1}</span></div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <span className="service-card-arrow"><ArrowUpRight size={16}/></span>
                  </div>
                </Link>
              </motion.article>;
            })}
          </div>
          <div className="section-bottom-link"><Link to="/services">{t('home.servicesPreview.viewAll')}<ForwardArrow size={16}/></Link></div>
        </div>
      </section>

      <section className="growth-section" id="framework">
        <div className="adrova-container">
          <div className="section-intro section-intro-centered">
            <span className="section-kicker">{c.frameworkEyebrow}</span>
            <h2>{c.frameworkTitle}</h2>
            <p>{c.frameworkDesc}</p>
          </div>
          <div className="growth-path">
            <div className="growth-path-line" />
            {frameworks.map((item, index) => {
              const Icon = item.icon;
              return <motion.article className="growth-card" key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
                <span className="growth-icon"><Icon size={20}/></span><span className="growth-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.desc}</p>
              </motion.article>;
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="why-section" id="process">
        <div className="adrova-container why-layout">
          <motion.div className="why-artwork" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
            <div className="why-art-glow" />
            <div className="why-art-card">
              <div className="why-art-header"><span className="why-art-logo"><Logo className="why-logo"/></span><span className="why-active"><i/>Live data</span></div>
              <div className="why-art-title">{c.whyTitle}</div>
              <div className="why-bars"><span style={{height:'42%'}}/><span style={{height:'61%'}}/><span style={{height:'53%'}}/><span style={{height:'75%'}}/><span style={{height:'68%'}}/><span style={{height:'91%'}}/><span style={{height:'83%'}}/></div>
              <div className="why-art-footer"><span>Campaign insights</span><strong dir="ltr">+200%</strong></div>
            </div>
            <span className="why-floating-tag"><TrendingUp size={15}/>{c.visualTag}</span>
            <span className="why-floating-dot"/>
          </motion.div>
          <div className="why-copy">
            <span className="section-kicker">{c.whyEyebrow}</span><h2>{c.whyTitle}</h2><p>{c.whyDesc}</p>
            <div className="why-points">{whyPoints.map((point, index) => {const Icon=point.icon;return <div className="why-point" key={point.title}><span className="why-point-icon"><Icon size={17}/></span><span><strong>{point.title}</strong><small>{point.desc}</small></span></div>;})}</div>
          </div>
        </div>
      </section>

      <section className="case-studies-section" id="case-studies">
        <div className="adrova-container">
          <div className="section-intro"><span className="section-kicker">{c.caseEyebrow}</span><h2>{c.caseTitle}</h2><p>{c.caseDesc}</p></div>
          <div className="case-study-grid-dark">
            {cases.map((caseId, index) => <motion.article className={`case-study-dark case-dark-${index + 1}`} key={caseId} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
              <div className="case-thumb"><span className="case-thumb-grid"/><span className="case-thumb-icon">{index === 0 ? <Users size={24}/> : index === 1 ? <Target size={24}/> : <Play size={24}/>}</span><span className="case-thumb-stat" dir="ltr">{index === 0 ? '+300%' : index === 1 ? '-45%' : '+150%'}</span><span className="case-thumb-orbit"/></div>
              <div className="case-dark-content"><span>{c.caseTypes[index]}</span><h3>{t(`portfolio.caseStudies.${caseId}.title`)}</h3><strong>{t(`portfolio.caseStudies.${caseId}.metric`)}</strong><p>{c.caseDetails[index]}</p><Link to="/portfolio">{t('nav.portfolio')}<ArrowUpRight size={14}/></Link></div>
            </motion.article>)}
          </div>
          <div className="section-bottom-link"><Link to="/portfolio">{t('portfolio.title')}<ForwardArrow size={16}/></Link></div>
        </div>
      </section>

      <section className="faq-home-section" id="faq">
        <div className="adrova-container faq-home-grid">
          <div className="section-intro section-intro-left"><span className="section-kicker">{c.faqEyebrow}</span><h2>{c.faqTitle}</h2><p>{c.faqDesc}</p><Link className="text-link-dark" to="/faq">{t('footer.faq')}<ForwardArrow size={16}/></Link></div>
          <div className="faq-accordion">{faqs.map((faq) => <details className="faq-home-item" key={faq}><summary>{t(`faqPage.${faq}`)}<ChevronDown size={17}/></summary><p>{t(`faqPage.a${faq.slice(1)}`)}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="adrova-container">
          <div className="final-cta-panel">
            <span className="final-cta-orbit"/><span className="section-kicker section-kicker-light">{c.ctaEyebrow}</span>
            <h2>{c.ctaTitle}</h2><p>{c.ctaDesc}</p>
            <Link to="/contact" className="cta-button">{c.ctaButton}<ArrowUpRight size={16}/></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
