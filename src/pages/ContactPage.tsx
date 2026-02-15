import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import Contact from "../components/Contact";
import AnimatedMesh from "../components/AnimatedMesh";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";
import { MessageCircle, Clock, Shield } from "lucide-react";

export default function ContactPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t('contactPage.metaTitle');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('contactPage.metaDescription'));
  }, [language, t]);

  const reasons = [
    {
      icon: MessageCircle,
      title: t('contactPage.reason1Title'),
      desc: t('contactPage.reason1Desc'),
    },
    {
      icon: Clock,
      title: t('contactPage.reason2Title'),
      desc: t('contactPage.reason2Desc'),
    },
    {
      icon: Shield,
      title: t('contactPage.reason3Title'),
      desc: t('contactPage.reason3Desc'),
    },
  ];

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 bg-white overflow-hidden">
          <AnimatedMesh />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-600 mb-3">
                {t('contactPage.subtitle')}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black mb-6 leading-tight">
                {t('contactPage.title')}
              </h1>
              <p className="max-w-xl text-gray-700 text-base md:text-lg leading-relaxed">
                {t('contactPage.description')}
              </p>
            </motion.div>

            {/* Why Reach Out */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16"
            >
              <h2 className="text-xl md:text-2xl font-medium text-black mb-8">
                {t('contactPage.whyReachOut')}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="card-3d p-6"
                    >
                      <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-base font-medium text-black mb-2">{reason.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

      </main>
      <Footer />
    </PageTransition>
  );
}
