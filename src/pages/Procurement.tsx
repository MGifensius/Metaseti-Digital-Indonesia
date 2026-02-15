import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import AnimatedMesh from "../components/AnimatedMesh";
import RelatedServices from "../components/RelatedServices";
import Contact from "../components/Contact";

export default function Procurement() {
  const { t } = useLanguage();

  const capabilities = [
    {
      title: t('procurementService.capability1.title'),
      description: t('procurementService.capability1.desc'),
      icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
    },
    {
      title: t('procurementService.capability2.title'),
      description: t('procurementService.capability2.desc'),
      icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    },
    {
      title: t('procurementService.capability3.title'),
      description: t('procurementService.capability3.desc'),
      icon: "M11.42 15.17l-5.384 3.167A1.115 1.115 0 014.5 17.286V6.714a1.115 1.115 0 011.536-1.052l5.384 3.167m0 0l5.384-3.167A1.115 1.115 0 0118.34 6.714v10.572a1.115 1.115 0 01-1.536 1.052l-5.384-3.167z"
    },
  ];

  const approach = [
    { title: t('procurementService.approach1.title'), desc: t('procurementService.approach1.desc'), step: '01' },
    { title: t('procurementService.approach2.title'), desc: t('procurementService.approach2.desc'), step: '02' },
    { title: t('procurementService.approach3.title'), desc: t('procurementService.approach3.desc'), step: '03' },
    { title: t('procurementService.approach4.title'), desc: t('procurementService.approach4.desc'), step: '04' },
  ];

  return (
    <PageTransition>
      <main className="bg-white">
        <Navbar />

        {/* Hero Section - matching Custom Development */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              loading="lazy"
              src="/hero-bg.jpg" 
              alt="" 
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-4">
                {t('procurementService.subtitle')}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-8 leading-tight">
                {t('procurementService.hero')}
              </h1>
              <p className="text-gray-700 text-base md:text-lg max-w-2xl leading-relaxed">
                {t('procurementService.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="relative py-[79px] px-6 bg-white">
          <AnimatedMesh />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4">
                {t('procurementService.capabilities')}
              </h2>
              <p className="text-gray-700 max-w-2xl">
                {t('procurementService.capabilitiesDesc')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="mb-4">
                    <svg 
                      className="w-10 h-10 text-black/80 group-hover:text-black transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* What You Get Section */}
        <section className="relative py-[79px] px-6 bg-white">
          <AnimatedMesh />
          <div className="max-w-6xl mx-auto relative z-10">
            {/* 3D Elevated Container */}
            <div className="container-3d p-8 md:p-12 lg:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-12">
                {t('procurementService.benefits')}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  t('procurementService.benefit1'),
                  t('procurementService.benefit2'),
                  t('procurementService.benefit3'),
                  t('procurementService.benefit4'),
                  t('procurementService.benefit5'),
                  t('procurementService.benefit6'),
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card-3d p-6 h-full flex items-start"
                  >
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Digital-Physical Bridge Section */}
        <section className="relative py-[79px] px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="container-3d p-8 md:p-12 lg:p-16">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-4">
                  {t('procurementService.bridge')}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 leading-tight">
                  {t('procurementService.bridgeTitle')}
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
                  {t('procurementService.bridgeDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="relative py-[79px] px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4">
                {t('procurementService.approach')}
              </h2>
              <p className="text-gray-700 max-w-2xl">
                {t('procurementService.approachDesc')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {approach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center mb-6">
                      <span className="text-sm font-medium text-black">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-medium text-black mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-6 bg-white">
          <AnimatedMesh />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-8">
                {t('procurementService.cta')}
              </h2>
              <a
                href="https://wa.me/6281385073901?text=Hello!%20I'm%20interested%20in%20your%20procurement%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all rounded-md"
              >
                {t('procurementService.ctaButton')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        <RelatedServices currentHref="/services/procurement" />

        <Contact />

        <Footer />
      </main>
    </PageTransition>
  );
}
