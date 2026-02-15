import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import AnimatedMesh from "../components/AnimatedMesh";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown } from "lucide-react";

interface FAQ {
  questionEn: string;
  questionId: string;
  answerEn: string;
  answerId: string;
  category: string;
}

export default function FAQPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: "all", labelEn: "All Questions", labelId: "Semua Pertanyaan" },
    { id: "getting-started", labelEn: "Getting Started", labelId: "Memulai" },
    { id: "implementation", labelEn: "Implementation", labelId: "Implementasi" },
    { id: "services", labelEn: "Services", labelId: "Layanan" },
    { id: "technical", labelEn: "Technical", labelId: "Teknis" },
  ];

  const faqs: FAQ[] = [
    {
      questionEn: "How long does a project take?",
      questionId: "Berapa lama waktu yang dibutuhkan untuk sebuah proyek?",
      answerEn: "Custom systems typically range from 2 to 6 months. Because we build from scratch, the timeline depends on your unique logic and complexity. We provide a detailed roadmap during the Discovery & Architecture phase so you have full visibility from day one.",
      answerId: "Sistem kustom biasanya memerlukan waktu 2 hingga 6 bulan. Karena kami membangun dari nol, timeline bergantung pada logika unik dan kompleksitas Anda. Kami menyediakan roadmap detail selama fase Penemuan & Arsitektur sehingga Anda memiliki visibilitas penuh sejak hari pertama.",
      category: "getting-started"
    },
    {
      questionEn: "How do you ensure quality?",
      questionId: "Bagaimana Anda memastikan kualitas?",
      answerEn: "Through a 'Security-First' approach, automated unit testing, and peer code reviews. We build for performance and long-term maintainability. Every sprint includes rigorous QA and stress testing to ensure enterprise-grade reliability before any code reaches production.",
      answerId: "Melalui pendekatan 'Security-First', pengujian unit otomatis, dan peer code review. Kami membangun untuk performa dan maintainability jangka panjang. Setiap sprint mencakup QA dan stress testing ketat untuk memastikan keandalan tingkat enterprise sebelum kode masuk ke production.",
      category: "implementation"
    },
    {
      questionEn: "Can you work with existing systems?",
      questionId: "Bisakah Anda bekerja dengan sistem yang sudah ada?",
      answerEn: "Yes. We build Custom APIs and Middleware that sync our AI or ERP solutions with your legacy infrastructure—ensuring seamless communication without disrupting operations.",
      answerId: "Ya. Kami membangun API dan Middleware Kustom yang menyinkronkan solusi AI atau ERP kami dengan infrastruktur legacy Anda—memastikan komunikasi mulus tanpa mengganggu operasi.",
      category: "technical"
    },
    {
      questionEn: "What is your pricing model?",
      questionId: "Bagaimana model penetapan harga Anda?",
      answerEn: "We offer project-based pricing for clear deliverables and monthly retainers for ongoing AI and system optimization. Each engagement starts with a free consultation where we scope your requirements and provide a transparent proposal tailored to your budget and goals.",
      answerId: "Kami menawarkan harga berbasis proyek untuk deliverable yang jelas dan retainer bulanan untuk optimasi AI dan sistem yang berkelanjutan. Setiap engagement dimulai dengan konsultasi gratis di mana kami menentukan kebutuhan Anda dan memberikan proposal transparan yang disesuaikan dengan anggaran dan tujuan Anda.",
      category: "getting-started"
    },
    {
      questionEn: "How do you handle data privacy?",
      questionId: "Bagaimana Anda menangani privasi data?",
      answerEn: "Enterprise-grade encryption with the option to deploy AI models locally (on-premise) so your proprietary data never leaves your control. Includes compliance with relevant regulations and regular security audits.",
      answerId: "Enkripsi tingkat enterprise dengan opsi deploy model AI secara lokal (on-premise) sehingga data proprietary Anda tidak pernah keluar dari kendali Anda. Termasuk kepatuhan regulasi yang relevan dan audit keamanan reguler.",
      category: "technical"
    },
    {
      questionEn: "Why choose custom development over off-the-shelf software?",
      questionId: "Mengapa memilih pengembangan kustom daripada software siap pakai?",
      answerEn: "Off-the-shelf software forces you to change your business to fit the tool. We engineer the tool to fit your business—built around your exact workflows, scaling with your growth, and becoming a true competitive asset.",
      answerId: "Software siap pakai memaksa Anda mengubah bisnis agar sesuai dengan alatnya. Kami merekayasa alat agar sesuai dengan bisnis Anda—dibangun sesuai alur kerja Anda, berkembang seiring pertumbuhan, dan menjadi aset kompetitif sejati.",
      category: "services"
    },
    {
      questionEn: "What services does Metaseti Digital offer?",
      questionId: "Layanan apa yang ditawarkan Metaseti Digital?",
      answerEn: "We offer four core services: AI Integration for building AI agents and predictive models, Custom Development for web, mobile, ERP, CRM, and WMS ecosystems, Digital Marketing for SEO, SEM, and conversion-driven campaigns, and Procurement for IT infrastructure and hardware sourcing.",
      answerId: "Kami menawarkan empat layanan inti: Integrasi AI untuk membangun agen AI dan model prediktif, Pengembangan Kustom untuk ekosistem web, mobile, ERP, CRM, dan WMS, Pemasaran Digital untuk SEO, SEM, dan kampanye berorientasi konversi, serta Pengadaan untuk infrastruktur IT dan pengadaan hardware.",
      category: "services"
    },
    {
      questionEn: "What is the first step to start working with Metaseti?",
      questionId: "Apa langkah pertama untuk mulai bekerja dengan Metaseti?",
      answerEn: "Schedule a free consultation where we discuss your goals and challenges. We assess your infrastructure, identify high-impact opportunities, and deliver a proposal with a clear roadmap and transparent pricing.",
      answerId: "Jadwalkan konsultasi gratis di mana kami mendiskusikan tujuan dan tantangan Anda. Kami menilai infrastruktur Anda, mengidentifikasi peluang berdampak tinggi, dan memberikan proposal dengan roadmap jelas dan harga transparan.",
      category: "getting-started"
    },
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section with Background Image */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            loading="lazy"
                    src="/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-4">
            {language === 'en' ? 'KNOWLEDGE BASE' : 'BASIS PENGETAHUAN'}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-6 leading-tight">
            {language === 'en' ? 'Frequently Asked Questions' : 'Pertanyaan yang Sering Diajukan'}
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {language === 'en'
              ? 'Find answers to common questions about our services, implementation process, and how we can help transform your business.'
              : 'Temukan jawaban atas pertanyaan umum tentang layanan kami, proses implementasi, dan bagaimana kami dapat membantu mentransformasi bisnis Anda.'}
          </p>
        </div>
      </section>

      {/* Agile Methodology Section */}
      <section className="relative py-[127px] px-6 bg-white">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4 leading-tight">
              {language === 'en' ? 'Agile Engineering: Built for Speed & Precision' : 'Rekayasa Agile: Dibangun untuk Kecepatan & Presisi'}
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {language === 'en'
                ? 'We use an Agile-Scrum framework to build your systems iteratively—minimizing risk and allowing real-time adaptation to market shifts.'
                : 'Kami menggunakan framework Agile-Scrum untuk membangun sistem Anda secara iteratif—meminimalkan risiko dan memungkinkan adaptasi real-time terhadap pergeseran pasar.'}
            </p>
          </div>

          {/* The 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Pillar 1 */}
            <div className="group">
              <div className="card-3d p-8 h-full">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-black mb-4">
                  {language === 'en' ? 'Iterative Delivery' : 'Pengiriman Iteratif'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'We deliver functional software increments every 2 weeks, allowing for rapid feedback and "Impact Engineered" results.'
                    : 'Kami mengirimkan increment perangkat lunak yang berfungsi setiap 2 minggu, memungkinkan feedback cepat dan hasil yang "Impact Engineered".'}
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group">
              <div className="card-3d p-8 h-full">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-black mb-4">
                  {language === 'en' ? 'Continuous Alignment' : 'Penyelarasan Berkelanjutan'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? 'Weekly reviews and transparent dashboards keep our engineering team perfectly synced with your business goals.'
                    : 'Review mingguan dan dashboard transparan menjaga tim engineering kami tetap sinkron sempurna dengan tujuan bisnis Anda.'}
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group">
              <div className="card-3d p-8 h-full">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-black mb-4">
                  {language === 'en' ? 'Dynamic Scalability' : 'Skalabilitas Dinamis'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? "Our planning adapts to your evolving needs, ensuring the final product isn't just a deliverable, but a competitive asset."
                    : 'Perencanaan kami beradaptasi dengan kebutuhan Anda yang berkembang, memastikan produk akhir bukan sekadar deliverable, tetapi aset kompetitif.'}
                </p>
              </div>
            </div>
          </div>

          {/* Development Approach */}
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-gray-200 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-medium text-black mb-4">
                {language === 'en' ? 'Development Approach' : 'Pendekatan Pengembangan'}
              </h3>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="bg-gray-1000 border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all h-full">
                  <div className="text-sm text-gray-600 uppercase tracking-wider mb-3">
                    {language === 'en' ? 'Phase 1' : 'Fase 1'}
                  </div>
                  <h4 className="text-lg font-medium text-black mb-3">
                    {language === 'en' ? 'Discovery & Architecture' : 'Penemuan & Arsitektur'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? 'We map your unique business logic and design the technical blueprint.'
                      : 'Kami memetakan logika bisnis unik Anda dan merancang cetak biru teknis.'}
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gray-1000 border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all h-full">
                  <div className="text-sm text-gray-600 uppercase tracking-wider mb-3">
                    {language === 'en' ? 'Phase 2' : 'Fase 2'}
                  </div>
                  <h4 className="text-lg font-medium text-black mb-3">
                    {language === 'en' ? 'Sprint-Based Engineering' : 'Rekayasa Berbasis Sprint'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? 'Rapid coding cycles with continuous integration and stakeholder demos.'
                      : 'Siklus coding cepat dengan continuous integration dan demo stakeholder.'}
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gray-1000 border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all h-full">
                  <div className="text-sm text-gray-600 uppercase tracking-wider mb-3">
                    {language === 'en' ? 'Phase 3' : 'Fase 3'}
                  </div>
                  <h4 className="text-lg font-medium text-black mb-3">
                    {language === 'en' ? 'Rigorous QA & Stress Testing' : 'QA & Stress Testing Ketat'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? 'Performance and security audits to ensure enterprise-grade reliability.'
                      : 'Audit performa dan keamanan untuk memastikan keandalan tingkat enterprise.'}
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gray-1000 border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all h-full">
                  <div className="text-sm text-gray-600 uppercase tracking-wider mb-3">
                    {language === 'en' ? 'Phase 4' : 'Fase 4'}
                  </div>
                  <h4 className="text-lg font-medium text-black mb-3">
                    {language === 'en' ? 'Deployment & Optimization' : 'Deployment & Optimasi'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? 'Seamless go-live followed by data-driven refinements for maximum ROI.'
                      : 'Go-live mulus diikuti penyempurnaan berbasis data untuk ROI maksimum.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Q&A Section - Black Background */}
      <section className="relative py-20 px-6 bg-white border-t border-white/5">
        <AnimatedMesh />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-medium text-black mb-8 text-center">
            {language === 'en' ? 'Common Questions' : 'Pertanyaan Umum'}
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-md ${
                  activeCategory === category.id
                    ? 'bg-white text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-100 hover:text-black border border-gray-200'
                }`}
              >
                {language === 'en' ? category.labelEn : category.labelId}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 bg-gray-50/50 overflow-hidden transition-all duration-300 hover:border-gray-300 rounded-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <h3 className="text-lg font-medium text-black pr-8 group-hover:text-gray-200 transition-colors">
                    {language === 'en' ? faq.questionEn : faq.questionId}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-700 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed border-t border-white/5">
                    {language === 'en' ? faq.answerEn : faq.answerId}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-sm md:text-base">
                {language === 'en' 
                  ? 'No questions found in this category.' 
                  : 'Tidak ada pertanyaan di kategori ini.'}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
