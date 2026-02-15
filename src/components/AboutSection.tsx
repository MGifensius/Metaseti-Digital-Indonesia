import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import AnimatedMesh from "./AnimatedMesh";

export default function AboutSection() {
  const { language } = useLanguage();

  return (
    <section className="relative bg-white px-4 md:px-6 py-[63px] md:py-[95px] lg:py-[127px]">
      <AnimatedMesh />
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Elevated Container */}
        <div className="container-3d p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-600 mb-3 md:mb-4">
                {language === 'en' ? 'Who We Are' : 'Tentang Kami'}
              </p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 md:mb-6 text-black leading-tight">
                {language === 'en' 
                  ? 'Engineering Ideas to Reality' 
                  : 'Merekayasa Ide Menjadi Kenyataan'}
              </h2>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                {language === 'en'
                  ? "Metaseti Digital Indonesia is your digital transformation partner in Jakarta—specializing in AI Integration, Custom Development, Digital Marketing, and Procurement. We engineer custom systems that secure your competitive advantage."
                  : "Metaseti Digital Indonesia adalah mitra transformasi digital Anda di Jakarta—berspesialisasi dalam Integrasi AI, Pengembangan Kustom, Pemasaran Digital, dan Pengadaan. Kami merekayasa sistem kustom yang mengamankan keunggulan kompetitif Anda."}
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 shadow-[0_4px_14px_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgb(0,0,0,0.15)] text-sm md:text-base touch-manipulation"
              >
                {language === 'en' ? 'Learn More About Us' : 'Pelajari Lebih Lanjut'}
                <span className="text-lg">→</span>
              </Link>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              <div className="stat-card p-6 md:p-8">
                <div className="text-3xl md:text-4xl font-normal text-black mb-2">10+</div>
              <p className="text-xs md:text-sm text-gray-600">
                {language === 'en' ? 'Years Combined Expertise' : 'Tahun Keahlian Gabungan'}
              </p>
            </div>

            <div className="stat-card p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-normal text-black mb-2">100%</div>
              <p className="text-xs md:text-sm text-gray-600">
                {language === 'en' ? 'Custom Engineering' : 'Rekayasa Kustom'}
              </p>
            </div>

            <div className="stat-card p-6 md:p-8">
              <div className="text-2xl md:text-3xl font-normal text-black mb-2">End-to-End</div>
              <p className="text-xs md:text-sm text-gray-600">
                {language === 'en' ? 'Solution Delivery' : 'Pengiriman Solusi'}
              </p>
            </div>

            <div className="stat-card p-6 md:p-8">
              <div className="text-2xl md:text-3xl font-normal text-black mb-2">Agile</div>
              <p className="text-xs md:text-sm text-gray-600">
                {language === 'en' ? 'Development Process' : 'Proses Pengembangan'}
              </p>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
