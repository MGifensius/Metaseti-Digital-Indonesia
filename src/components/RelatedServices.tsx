import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

interface ServiceItem {
  number: string;
  title: string;
  titleId: string;
  category: string;
  categoryId: string;
  description: string;
  descriptionId: string;
  image: string;
  href: string;
}

const allServices: ServiceItem[] = [
  {
    number: "01",
    title: "AI Integration & AI Agents",
    titleId: "Integrasi AI & Agen AI",
    category: "Artificial Intelligence",
    categoryId: "Kecerdasan Buatan",
    description: "Building AI Agents and predictive models that streamline complex workflows.",
    descriptionId: "Membangun Agen AI dan model prediktif yang menyederhanakan alur kerja kompleks.",
    image: "/Artificial-Intelligence.png",
    href: "/services/ai-integration",
  },
  {
    number: "02",
    title: "Custom Development",
    titleId: "Pengembangan Khusus",
    category: "Digital Solutions",
    categoryId: "Solusi Digital",
    description: "Engineering custom software ecosystems—web, mobile, IoT, ERP, CRM, WMS—built to match your unique business logic.",
    descriptionId: "Merekayasa ekosistem perangkat lunak kustom—web, mobile, IoT, ERP, CRM, WMS.",
    image: "/Custom-Development.png",
    href: "/services/custom-development",
  },
  {
    number: "03",
    title: "Digital Marketing",
    titleId: "Pemasaran Digital",
    category: "Strategy & Growth",
    categoryId: "Strategi & Pertumbuhan",
    description: "Data-driven SEO, SEM, and targeted ads that bridge brand awareness and bottom-line revenue.",
    descriptionId: "SEO, SEM, dan iklan tertarget berbasis data yang menjembatani brand awareness dan profitabilitas.",
    image: "/Branding-Marketing.png",
    href: "/services/branding-marketing",
  },
  {
    number: "04",
    title: "Procurement & Infrastructure",
    titleId: "Pengadaan & Infrastruktur",
    category: "Supply Chain & Hardware",
    categoryId: "Rantai Pasok & Hardware",
    description: "Bridging digital strategy and physical execution—from IT infrastructure to optimized workspaces.",
    descriptionId: "Menjembatani strategi digital dan eksekusi fisik—dari infrastruktur IT hingga ruang kerja optimal.",
    image: "/Procurement.png",
    href: "/services/procurement",
  },
];

interface RelatedServicesProps {
  currentHref: string;
}

export default function RelatedServices({ currentHref }: RelatedServicesProps) {
  const { language } = useLanguage();

  const otherServices = allServices.filter(s => s.href !== currentHref);

  return (
    <section className="py-[79px] px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-black mb-4">
            {language === 'en' ? 'Explore Our Other Services' : 'Jelajahi Layanan Kami Lainnya'}
          </h2>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            {language === 'en'
              ? 'Discover how our comprehensive solutions work together to drive your business forward'
              : 'Temukan bagaimana solusi komprehensif kami bekerja bersama untuk mendorong bisnis Anda'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {otherServices.map((service, index) => (
            <Link to={service.href} key={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    loading="lazy"
                    src={service.image}
                    alt={language === 'en' ? service.title : service.titleId}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                    {language === 'en' ? service.category : service.categoryId}
                  </p>
                  <h3 className="text-lg font-medium text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {language === 'en' ? service.title : service.titleId}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {language === 'en' ? service.description : service.descriptionId}
                  </p>
                  <div className="flex items-center justify-between">
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
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
