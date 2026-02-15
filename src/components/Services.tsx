import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import AnimatedMesh from "./AnimatedMesh";

export default function Services() {
  const { t, language } = useLanguage();

  // Define services with proper typing
  const servicesData = {
    en: [
      {
        number: "01",
        title: "AI Integration & AI Agents",
        category: "Artificial Intelligence",
        description: "Building AI Agents and predictive models that streamline complex workflows and secure your competitive advantage.",
        bullets: [
          "AI Agents & Customer Intelligence",
          "Data-Driven Forecasting & Predictive Intelligence",
          "Custom AI Feature Engineering",
          "Intelligent Process Automation (IPA)"
        ],
        image: "/Artificial-Intelligence.png",
        href: "/services/ai-integration",
      },
      {
        number: "02",
        title: "Custom Development",
        category: "Digital Solutions",
        description: "Engineering custom software ecosystems—web, mobile, IoT, ERP, CRM, WMS—built to match your unique business logic.",
        bullets: [
          "Custom Web & App Development",
          "IoT & Smart System Integration",
          "Internal Business Systems (ERP, CRM, WMS)",
          "API & Middleware Engineering"
        ],
        image: "/Custom-Development.png",
        href: "/services/custom-development",
      },
      {
        number: "03",
        title: "Digital Marketing",
        category: "Strategy & Growth",
        description: "Data-driven SEO, SEM, and targeted Google & Meta Ads that bridge brand awareness and bottom-line revenue.",
        bullets: [
          "Digital Marketing (SEO, SEM & GEO)",
          "Conversion-Centric UI/UX Design",
          "Branding & Market Positioning"
        ],
        image: "/Branding-Marketing.png",
        href: "/services/branding-marketing",
      },
      {
        number: "04",
        title: "Procurement & Infrastructure",
        category: "Supply Chain & Hardware",
        description: "Bridging digital strategy and physical execution—from IT infrastructure to optimized workspaces.",
        bullets: [
          "Enterprise IT & Hardware Sourcing",
          "Vendor & Supply Chain Management",
          "Managed Infrastructure & Support"
        ],
        image: "/Procurement.png",
        href: "/services/procurement",
      },
    ],
    id: [
      {
        number: "01",
        title: "Integrasi AI & Agen AI",
        category: "Kecerdasan Buatan",
        description: "Membangun Agen AI dan model prediktif yang menyederhanakan alur kerja kompleks dan mengamankan keunggulan kompetitif Anda.",
        bullets: [
          "Agen AI & Inteligensi Pelanggan",
          "Peramalan Berbasis Data & Inteligensi Prediktif",
          "Rekayasa Fitur AI Kustom",
          "Otomasi Proses Cerdas (IPA)"
        ],
        image: "/Artificial-Intelligence.png",
        href: "/services/ai-integration",
      },
      {
        number: "02",
        title: "Pengembangan Khusus",
        category: "Solusi Digital",
        description: "Merekayasa ekosistem perangkat lunak kustom—web, mobile, IoT, ERP, CRM, WMS—dibangun sesuai logika bisnis unik Anda.",
        bullets: [
          "Pengembangan Web & Aplikasi Kustom",
          "Integrasi IoT & Sistem Cerdas",
          "Sistem Bisnis Internal (ERP, CRM, WMS)",
          "Rekayasa API & Middleware"
        ],
        image: "/Custom-Development.png",
        href: "/services/custom-development",
      },
      {
        number: "03",
        title: "Pemasaran Digital",
        category: "Strategi & Pertumbuhan",
        description: "SEO, SEM, dan Google & Meta Ads berbasis data yang menjembatani brand awareness dan profitabilitas.",
        bullets: [
          "Digital Marketing (SEO, SEM & GEO)",
          "Desain UI/UX Berorientasi Konversi",
          "Branding & Positioning Pasar"
        ],
        image: "/Branding-Marketing.png",
        href: "/services/branding-marketing",
      },
      {
        number: "04",
        title: "Pengadaan & Infrastruktur",
        category: "Rantai Pasok & Hardware",
        description: "Menjembatani strategi digital dan eksekusi fisik—dari infrastruktur IT hingga ruang kerja optimal.",
        bullets: [
          "Pengadaan IT & Hardware Enterprise",
          "Manajemen Vendor & Rantai Pasok",
          "Infrastruktur Terkelola & Dukungan"
        ],
        image: "/Procurement.png",
        href: "/services/procurement",
      },
    ],
  };

  const services = servicesData[language];

  return (
    <section
      id="services"
      className="relative bg-white px-4 md:px-6 pt-[127px] pb-[95px] scroll-mt-20"
    >
      <AnimatedMesh />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE - Title and Description */}
          <div className="lg:sticky lg:top-32 text-center lg:text-left mx-auto lg:mx-0 max-w-xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4">
                {t('services.subtitle')}
              </p>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-6 md:mb-8 text-black">
                {t('services.title')}
              </h2>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                {language === 'en' 
                  ? "We bring your vision to life with technical precision. From intelligent AI agents to fully custom software and high-converting digital marketing, every element works together seamlessly. Our end-to-end approach means you get one partner for the entire journey—no gaps, no handoffs."
                  : "Kami mewujudkan visi Anda dengan presisi teknis. Dari agen AI cerdas hingga software kustom dan pemasaran digital berkonversi tinggi, setiap elemen bekerja bersama dengan mulus. Pendekatan end-to-end kami berarti Anda mendapat satu mitra untuk seluruh perjalanan—tanpa celah, tanpa serah terima."}
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Service Cards */}
          <div className="space-y-6 mx-auto w-full max-w-xl lg:max-w-none">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.href}>
                  <div className="group relative service-card-3d overflow-hidden">
                    <div className="p-5 md:p-6">
                      
                      {/* Top Section - Image and Info */}
                      <div className="flex items-start gap-4 md:gap-6 mb-4">
                        {/* Service Image */}
                        <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden bg-white border border-gray-200">
                          <img
                            loading="lazy"
                    src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Service Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 md:mb-2">
                            {service.category}
                          </p>
                          <h3 className="text-lg md:text-xl font-medium text-black mb-2 group-hover:text-gray-700 transition-colors">
                            {service.title}
                          </h3>
                        </div>

                        {/* Number */}
                        <div className="flex-shrink-0 hidden sm:block">
                          <span className="text-4xl md:text-5xl font-light text-gray-300 group-hover:text-gray-400 transition-colors">
                            {service.number}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                        {service.description}
                      </p>

                      {/* Bullet Points */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-gray-400 text-xs mt-0.5">•</span>
                            <span className="text-xs text-gray-600">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* See More Indicator */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm text-gray-400 group-hover:text-black transition-colors">
                          {language === 'en' ? 'Learn more' : 'Pelajari lebih lanjut'}
                        </span>
                        <svg 
                          className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" 
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
