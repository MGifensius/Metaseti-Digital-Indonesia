import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const services = [
  { label: "AI Integration", labelId: "Integrasi AI", href: "/services/ai-integration", description: "Intelligent automation & insights", descriptionId: "Otomasi cerdas & wawasan" },
  { label: "Custom Development", labelId: "Pengembangan Khusus", href: "/services/custom-development", description: "Tailored digital solutions", descriptionId: "Solusi digital yang disesuaikan" },
  { label: "Digital Marketing", labelId: "Pemasaran Digital", href: "/services/branding-marketing", description: "Identity & campaign creation", descriptionId: "Identitas & pembuatan kampanye" },
  { label: "Procurement", labelId: "Pengadaan", href: "/services/procurement", description: "IT infrastructure & supply chain", descriptionId: "Infrastruktur IT & rantai pasok" },
];

export default function Navbar() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, []);

  const handleNavClick = useCallback((path: string, e?: React.MouseEvent) => {
    if (path.startsWith('/#')) {
      if (e) e.preventDefault();
      const hash = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => { document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }); }, 100);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
      closeMobileMenu();
    } else {
      closeMobileMenu();
    }
  }, [location.pathname, navigate, closeMobileMenu]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        style={{ pointerEvents: 'none' }}
      >
        <motion.div
          initial={{
            maxWidth: '1400px',
            borderRadius: 9999,
            marginTop: 16,
            paddingTop: 18,
            paddingBottom: 18,
            boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)',
          }}
          animate={{
            maxWidth: scrolled ? '960px' : '1400px',
            borderRadius: 9999,
            marginTop: 16,
            paddingTop: scrolled ? 14 : 18,
            paddingBottom: scrolled ? 14 : 18,
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)' 
              : '0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)',
          }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 30,
            mass: 0.8,
            boxShadow: { type: "tween", duration: 0.4, ease: "easeOut" },
          }}
          className="w-full bg-white/95 backdrop-blur-md px-7 md:px-10 flex items-center justify-between"
          style={{ pointerEvents: 'auto', border: 'none' }}
        >
          <a href="/" onClick={(e) => handleNavClick('/', e)} className="flex items-center cursor-pointer flex-shrink-0">
            <div className="relative overflow-hidden" style={{ 
              width: scrolled ? 36 : 200, 
              height: 38, 
              transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
            }}>
              <img 
                src="/Metaseti-Logo.png" 
                alt="Metaseti Digital Indonesia" 
                style={{ 
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 200,
                  height: 38,
                  objectFit: 'contain',
                  opacity: scrolled ? 0 : 1, 
                  transition: 'opacity 0.3s ease',
                  pointerEvents: scrolled ? 'none' : 'auto'
                }} 
              />
              <img 
                src="/metaseti-icon-transparent.png" 
                alt="Metaseti" 
                style={{ 
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 34,
                  height: 34,
                  objectFit: 'contain',
                  opacity: scrolled ? 1 : 0, 
                  transition: 'opacity 0.3s ease 0.15s',
                  pointerEvents: scrolled ? 'auto' : 'none'
                }} 
              />
            </div>
          </a>

          <div className="hidden md:flex items-center" style={{ gap: scrolled ? '22px' : '32px', transition: 'gap 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <a href="/#hero" onClick={(e) => handleNavClick('/#hero', e)} className="font-normal text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer whitespace-nowrap" style={{ fontSize: scrolled ? '14px' : '16px', transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>{t('nav.home')}</a>
            <Link to="/about" className="font-normal text-gray-700 hover:text-black transition-colors duration-300 whitespace-nowrap" style={{ fontSize: scrolled ? '14px' : '16px', transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>{t('nav.about')}</Link>

            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="font-normal text-gray-700 hover:text-black transition-colors duration-300 flex items-center gap-1 whitespace-nowrap" style={{ fontSize: scrolled ? '14px' : '16px', transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                {t('nav.services')}
                <svg className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} style={{ width: scrolled ? '14px' : '16px', height: scrolled ? '14px' : '16px', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full right-0 mt-4 w-80 bg-white/95 backdrop-blur-xl border border-gray-200 overflow-hidden shadow-lg">
                    {services.map((service, index) => (
                      <Link key={service.href} to={service.href} onClick={() => setServicesOpen(false)}>
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="px-6 py-4 hover:bg-gray-100 transition-colors duration-300 border-b border-gray-200 last:border-b-0">
                          <h3 className="text-sm font-normal font-sans text-black mb-1">{language === 'en' ? service.label : service.labelId}</h3>
                          <p className="text-xs text-gray-600">{language === 'en' ? service.description : service.descriptionId}</p>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/faq" className="font-normal text-gray-700 hover:text-black transition-colors duration-300 whitespace-nowrap" style={{ fontSize: scrolled ? '14px' : '16px', transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>{t('nav.faq')}</Link>
            <Link to="/contact" className="font-normal text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer whitespace-nowrap" style={{ fontSize: scrolled ? '14px' : '16px', transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>{t('nav.contact')}</Link>

            <a href="https://wa.me/6281385073901?text=Hello!%20I'm%20interested%20in%20your%20digital%20services." target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors duration-300" title="Chat on WhatsApp">
              <svg style={{ width: scrolled ? '20px' : '24px', height: scrolled ? '20px' : '24px', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>

            <LanguageSwitcher compact={scrolled} />
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700 hover:text-black transition-colors z-50" aria-label="Toggle mobile menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg>
          </button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={closeMobileMenu} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-gray-200 z-50 md:hidden overflow-y-auto shadow-xl">
              <div className="absolute top-6 right-6 z-10">
                <button onClick={closeMobileMenu} className="text-gray-700 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-md" aria-label="Close menu">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="p-6 pt-20">
                <div className="space-y-1">
                  <a href="/#hero" onClick={(e) => handleNavClick('/#hero', e)}><div className="px-4 py-4 text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 rounded-md cursor-pointer"><span className="text-base font-normal">{t('nav.home')}</span></div></a>
                  <Link to="/about" onClick={closeMobileMenu} className="block px-4 py-4 text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 rounded-md"><span className="text-base font-normal">{t('nav.about')}</span></Link>
                  <div>
                    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full px-4 py-4 text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 rounded-md flex items-center justify-between">
                      <span className="text-base font-normal">{t('nav.services')}</span>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="pl-4 pt-2 space-y-1">
                            {services.map((service) => (
                              <Link key={service.href} to={service.href} onClick={closeMobileMenu} className="block px-4 py-3 hover:bg-gray-100 transition-all duration-300 rounded-md border-l-2 border-gray-200 hover:border-gray-400">
                                <h3 className="text-sm font-normal font-sans text-black mb-1">{language === 'en' ? service.label : service.labelId}</h3>
                                <p className="text-xs text-gray-600">{language === 'en' ? service.description : service.descriptionId}</p>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Link to="/faq" onClick={closeMobileMenu} className="block px-4 py-4 text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 rounded-md"><span className="text-base font-normal">{t('nav.faq')}</span></Link>
                  <Link to="/contact" onClick={closeMobileMenu} className="block px-4 py-4 text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 rounded-md"><span className="text-base font-normal">{t('nav.contact')}</span></Link>
                </div>
                <div className="mt-6 px-4">
                  <a href="https://wa.me/6281385073901?text=Hello!%20I'm%20interested%20in%20your%20digital%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-4 text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 rounded-md">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    <span className="text-base font-normal">WhatsApp</span>
                  </a>
                </div>
                <div className="mt-4 px-4 flex justify-center"><div className="w-auto"><LanguageSwitcher /></div></div>
                <div className="mt-8 pt-6 border-t border-gray-200"><p className="text-xs text-gray-600 text-center">© 2026 Metaseti Digital Indonesia</p></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
