import AnimatedMesh from "../components/AnimatedMesh";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import PDFViewer from "../components/PDFViewer";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { 
  Target, 
  Eye, 
  Users, 
  Lightbulb, 
  TrendingUp,
  Award,
  Clock,
  Shield,
  Zap,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const coreValues = [
    {
      icon: TrendingUp,
      title: t('aboutPage.values.measurableImpact.title'),
      description: t('aboutPage.values.measurableImpact.desc'),
    },
    {
      icon: Shield,
      title: t('aboutPage.values.principledEvolution.title'),
      description: t('aboutPage.values.principledEvolution.desc'),
    },
    {
      icon: Lightbulb,
      title: t('aboutPage.values.clarityInAction.title'),
      description: t('aboutPage.values.clarityInAction.desc'),
    },
    {
      icon: Users,
      title: t('aboutPage.values.unifiedExcellence.title'),
      description: t('aboutPage.values.unifiedExcellence.desc'),
    },
    {
      icon: Award,
      title: t('aboutPage.values.precisionCraft.title'),
      description: t('aboutPage.values.precisionCraft.desc'),
    },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: t('aboutPage.reasons.expertise.title'),
      description: t('aboutPage.reasons.expertise.desc'),
    },
    {
      icon: CheckCircle2,
      title: t('aboutPage.reasons.endToEnd.title'),
      description: t('aboutPage.reasons.endToEnd.desc'),
    },
    {
      icon: Clock,
      title: t('aboutPage.reasons.agile.title'),
      description: t('aboutPage.reasons.agile.desc'),
    },
    {
      icon: TrendingUp,
      title: t('aboutPage.reasons.results.title'),
      description: t('aboutPage.reasons.results.desc'),
    },
  ];

  return (
    <PageTransition>
      <main className="bg-white">
        <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Vanta Topology Background */}
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            loading="lazy"
                    src="/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-4">
              {t('aboutPage.subtitle')}
            </p>
            <h1 className="text-5xl md:text-6xl font-medium text-black mb-6">
              {t('aboutPage.title')}
            </h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {t('aboutPage.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-[79px] px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-6">
                {t('aboutPage.whoWeAre')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('aboutPage.whoWeAreDesc1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('aboutPage.whoWeAreDesc2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="stat-card p-6">
                <p className="text-4xl font-medium text-black mb-2">10+</p>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  {t('aboutPage.stats.projects')}
                </p>
              </div>
              <div className="stat-card p-6">
                <p className="text-4xl font-medium text-black mb-2">100%</p>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  {t('aboutPage.stats.satisfaction')}
                </p>
              </div>
              <div className="stat-card p-6">
                <p className="text-2xl md:text-3xl font-medium text-black mb-2">End-to-End</p>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  {t('aboutPage.stats.partners')}
                </p>
              </div>
              <div className="stat-card p-6">
                <p className="text-3xl md:text-4xl font-medium text-black mb-2">Agile</p>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  {t('aboutPage.stats.support')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-[79px] px-6 bg-white">
        <AnimatedMesh />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-8 text-center">
              {t('aboutPage.ourStory')}
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>{t('aboutPage.storyDesc1')}</p>
              <p>{t('aboutPage.storyDesc2')}</p>
              <p>{t('aboutPage.storyDesc3')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission - Updated with radius */}
      <section className="relative py-[79px] px-6">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-md p-8 md:p-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-3d p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium text-black">{t('aboutPage.vision')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('aboutPage.visionDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-3d p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium text-black">{t('aboutPage.mission')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('aboutPage.missionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Updated with radius */}
      <section className="relative py-[79px] px-6">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4">
              {t('aboutPage.coreValues')}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {t('aboutPage.coreValuesDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-3d p-6"
                >
                  <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3">{value.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-[79px] px-6 bg-white">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4">
              {t('aboutPage.whyChoose')}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {t('aboutPage.whyChooseDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-3d p-8 !bg-gray-50"
                >
                  <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3">{reason.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="relative py-12 md:py-[79px] px-4 md:px-6 bg-white">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-black mb-4 md:mb-6 px-4">
              Company Profile
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto px-4">
              Browse through our company profile to learn about our vision, mission, values, and services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <PDFViewer fileUrl="/Company_Profile_-_Metaseti_Digital_Indonesia.pdf" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  );
}
