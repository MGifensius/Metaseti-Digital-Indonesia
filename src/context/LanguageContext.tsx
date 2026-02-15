

import React, { createContext, useContext, useState, useMemo } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Get initial language from localStorage safely
const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'id') {
        return saved;
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
  }
  return 'en';
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Save language to localStorage when it changes
  const handleSetLanguage = useMemo(() => (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, []);

  const t = useMemo(() => (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }, [language]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage: handleSetLanguage,
    t
  }), [language, handleSetLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      title1: 'IMPACT ENGINEERED',
      title2: 'ADVANTAGE SECURED',
      subtitle: 'AI Integration, Custom Development, Digital Marketing, and Procurement—engineered for businesses in Indonesia and globally.',
      exploreServices: 'Explore Services',
      getInTouch: 'Get in Touch'
    },
    services: {
      title: 'Our Core Expertise',
      subtitle: 'What We Do',
      description: 'We craft solutions that deliver measurable impact and sustainable advantage.',
      learnMore: 'Learn More',
      service1: {
        title: 'AI Integration',
        description: 'Integrating automation and AI to streamline workflows and deliver real-time insights.',
        tags: [
          'AI Chatbots & Assistants',
          'Predictive Analytics & Insights',
          'AI Product Enhancement',
          'Automation & Workflow Optimization'
        ]
      },
      service2: {
        title: 'Custom Development',
        description: 'Building scalable digital products—websites, apps, and systems—designed for performance and growth.',
        tags: [
          'Web, App & System Development',
          'Custom Web Applications',
          'IoT & Smart System Implementation',
          'Maintenance & Optimization'
        ]
      },
      service3: {
        title: 'Digital Marketing',
        description: 'Crafting impactful brand identities and campaigns that connect with the right audience.',
        tags: [
          'Brand Strategy & Visual Identity',
          'UI/UX & Creative Direction',
          'Digital Campaigns & Social Media',
          'Content Creation & Storytelling'
        ]
      }
    },
    about: {
      subtitle: 'About Us',
      title: 'Who Is Metaseti Digital Indonesia',
      description1: 'Rooted in a commitment to accelerate Indonesia\'s digital transformation, Metaseti Digital Indonesia engineers modern solutions that drive precision, performance, and measurable growth.',
      description2: 'Our team blends creativity with advanced technology, crafting digital products and brand experiences that deliver real competitive advantage. With a focus on scalability and lasting impact, we empower businesses to innovate, evolve, and lead in the digital era.',
      description3: 'From custom development to AI integration and brand marketing, we transform ambition into tangible results that shape the future.',
      learnMore: 'Learn More About Us',
      stats: {
        innovation: 'Innovation Mindset',
        pillars: 'Service Pillars',
        response: 'Response Time',
        commitment: 'Commitment to Quality'
      }
    },
    contact: {
      subtitle: 'Get in Touch',
      title: 'Let\'s Talk About Your Next Project',
      description: 'Engineering solutions that deliver impact and secure competitive advantage through technology and innovation.',
      freeConsultation: 'Free Consultation Available',
      phone: 'Phone',
      email: 'Email',
      instagram: 'Instagram',
      location: 'Our Location',
      form: {
        name: 'Name',
        namePlaceholder: 'Your Name',
        phone: 'Phone',
        phonePlaceholder: 'Your Phone Number',
        email: 'Email',
        emailPlaceholder: 'Your Email Address',
        message: 'Message',
        messagePlaceholder: 'Write your message...',
        send: 'Send Message'
      }
    },
    footer: {
      copyright: '© 2026 Metaseti Digital Indonesia',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    blog: {
      title: 'Insights & Resources',
      subtitle: 'Our Blog',
      description: 'Explore educational content, industry insights, and practical guides to help you navigate digital transformation.',
      readMore: 'Read More',
      readingTime: 'min read',
      categories: {
        all: 'All',
        ai: 'AI & Automation',
        development: 'Development',
        branding: 'Branding & Marketing',
        business: 'Business Strategy'
      }
    },
    contactPage: {
      metaTitle: 'Contact Us | Metaseti Digital Indonesia',
      metaDescription: 'Get in touch with Metaseti Digital Indonesia. Free consultation for AI integration, custom development, digital marketing, and procurement services in Jakarta.',
      subtitle: 'Contact Us',
      title: 'Start Your Project',
      description: 'Ready to build something great? Reach out and we will get back to you within 24 hours.',
      whyReachOut: 'Why Reach Out',
      reason1Title: 'Free Consultation',
      reason1Desc: 'No commitments—just a conversation about your goals.',
      reason2Title: 'Fast Response',
      reason2Desc: 'We reply within 24 hours, usually sooner.',
      reason3Title: 'End-to-End Support',
      reason3Desc: 'From planning to launch, one team handles it all.',
    },
    aboutPage: {
      subtitle: 'About Us',
      title: 'Engineering Digital Excellence',
      description: 'Your digital transformation partner in Indonesia—custom software engineering, AI automation, and tech procurement for scalable, high-performance solutions.',
      whoWeAre: 'Who We Are',
      whoWeAreDesc1: 'Metaseti Digital Indonesia is a results-first engineering firm specializing in AI integration, custom system development, and digital marketing for businesses across Indonesia and Southeast Asia.',
      whoWeAreDesc2: 'Our team works at the intersection of logic, code, and commerce to deliver end-to-end digital solutions.',
      stats: {
        projects: 'Years Combined Expertise',
        satisfaction: 'Custom Engineering',
        partners: 'Solution Delivery',
        support: 'Development Process'
      },
      ourStory: 'Our Story',
      storyDesc1: 'Metaseti was born from a clear observation: businesses struggled with fragmented technology and lacked a partner who could build custom systems, integrate AI, and manage procurement at scale.',
      storyDesc2: 'What began as a specialized consultancy has evolved into a comprehensive engineering partner serving startups and enterprises across Indonesia, Southeast Asia, and the global market.',
      storyDesc3: 'We don\'t just build software—we engineer the infrastructure for your success.',
      vision: 'Our Vision',
      visionDesc: 'To be the premier architect of integrated digital-physical ecosystems in Southeast Asia—engineering the technological foundations that secure market leadership and global scalability.',
      mission: 'Our Mission',
      missionDesc: 'Engineer custom software, integrate AI, and provide procurement that transforms operational complexity into decisive competitive advantage.',
      coreValues: 'Our Core Values',
      coreValuesDesc: 'These principles guide every decision we make and every solution we deliver.',
      values: {
        measurableImpact: {
          title: 'Measurable Impact',
          desc: 'Driving outcomes that deliver tangible competitive advantage.'
        },
        principledEvolution: {
          title: 'Principled Evolution',
          desc: 'Scaling with integrity—adapting while upholding ethical standards.'
        },
        clarityInAction: {
          title: 'Clarity in Action',
          desc: 'Operating with radical transparency in processes, decisions, and results.'
        },
        unifiedExcellence: {
          title: 'Unified Excellence',
          desc: 'Integrating technology and brand into seamless, high-impact solutions.'
        },
        precisionCraft: {
          title: 'Precision Craft',
          desc: 'Executing with meticulous attention to detail in code, design, and strategy.'
        }
      },
      leadership: 'Meet Our Leadership',
      leadershipDesc: 'The visionaries behind Metaseti Digital Indonesia.',
      whyChoose: 'Why Choose Metaseti',
      whyChooseDesc: 'We deliver results that matter, backed by expertise and commitment to your success.',
      reasons: {
        expertise: {
          title: 'Proven Expertise',
          desc: 'Years of experience delivering successful digital transformation projects across industries.'
        },
        endToEnd: {
          title: 'End-to-End Solutions',
          desc: 'From strategy to deployment, we handle every aspect of your digital journey.'
        },
        agile: {
          title: 'Agile Delivery',
          desc: 'Fast, iterative development process with regular updates and transparent communication.'
        },
        results: {
          title: 'Measurable Results',
          desc: 'We focus on delivering tangible business outcomes and ROI, not just deliverables.'
        }
      },
      cta: 'Ready to start your digital transformation journey?',
      getInTouch: 'Get in Touch'
    },
    aiService: {
      title: 'AI Integration & AI Agents',
      subtitle: 'AI & Automation',
      description: 'AI Agents and predictive models that streamline workflows, reduce costs, and secure competitive advantage for businesses in Indonesia and globally.',
      capabilities: 'Our AI Capabilities',
      capabilitiesDesc: 'Comprehensive AI solutions tailored to your business needs',
      capability1: {
        title: 'AI Agents & Customer Intelligence',
        desc: 'Conversational AI for 24/7 customer support, inquiry handling, and routine task automation.'
      },
      capability2: {
        title: 'Data-Driven Forecasting & Predictive Intelligence',
        desc: 'ML models that forecast trends, identify patterns, and enable data-driven decision making.'
      },
      capability3: {
        title: 'Intelligent Process Automation (IPA)',
        desc: 'Automate repetitive tasks and complex processes with AI that learns and adapts.'
      },
      capability4: {
        title: 'Custom AI Feature Engineering',
        desc: 'AI capabilities integrated into existing products—recommendation engines, smart features, and more.'
      },
      capability5: {
        title: 'Computer Vision',
        desc: 'Image and video analysis for quality control, object detection, and automated inspection.'
      },
      capability6: {
        title: 'Knowledge Engineering & NLP',
        desc: 'Text insights, sentiment analysis, document processing, and semantic search.'
      },
      benefits: 'Key Benefits',
      benefit1: '24/7 AI Intelligence',
      benefit2: 'Workflow Optimization',
      benefit3: 'Predictive Market Insights',
      benefit4: 'Seamless Integration',
      benefit5: 'Custom-Trained Models',
      benefit6: 'Future-Proof Infrastructure',
      process: 'Our Process',
      processDesc: 'A proven methodology for successful AI implementation',
      step1: {
        number: '01',
        title: 'Discovery & Analysis',
        desc: 'We analyze your business processes and identify AI opportunities that deliver maximum ROI.'
      },
      step2: {
        number: '02',
        title: 'Strategy & Design',
        desc: 'Custom AI solution architecture tailored to your specific needs and infrastructure.'
      },
      step3: {
        number: '03',
        title: 'Development & Training',
        desc: 'Building and training AI models with your data, ensuring accuracy and relevance.'
      },
      step4: {
        number: '04',
        title: 'Integration & Deployment',
        desc: 'Seamless integration with your existing systems and comprehensive team training.'
      },
      demo: 'Try Our AI Assistant',
      demoDesc: 'Experience intelligent conversation powered by AI',
      portfolio: 'Our Work',
      portfolioDesc: 'AI solutions we\'ve delivered for our clients',
      cta: 'Ready to transform your business with AI?',
      ctaButton: 'Start Your AI Journey',
      aiGreeting: 'Hello! I\'m the Metaseti AI Assistant. I can help you learn about our services, pricing, and how we can help your business. What would you like to know?',
      messagePlaceholder: 'Type your message...',
      send: 'Send'
    },
    devService: {
      title: 'Custom Development',
      subtitle: 'Web, Mobile & Systems',
      hero: 'Building Digital Products That Drive Results',
      description: 'Custom software ecosystems—web, mobile, IoT, ERP, CRM, and WMS—engineered to match your unique business logic. Serving businesses in Jakarta, Indonesia, and globally.',
      capabilities: 'Our Development Capabilities',
      capabilitiesDesc: 'End-to-end development services for modern businesses',
      capability1: {
        title: 'Custom Web & App Development',
        desc: 'High-performance platforms built with React and Next.js for seamless experiences across all devices.'
      },
      capability2: {
        title: 'IoT & Smart System Integration',
        desc: 'Connected device ecosystems with real-time sensor analytics, remote monitoring, and hardware-software automation.'
      },
      capability3: {
        title: 'Internal Business Systems (ERP, CRM, WMS)',
        desc: 'Tailor-made systems to streamline operations, manage inventory, and automate workflows.'
      },
      capability4: {
        title: 'Scalable E-Commerce Ecosystems',
        desc: 'Digital storefronts with custom payments, real-time inventory, and specialized customer journeys.'
      },
      capability5: {
        title: 'API & Middleware Engineering',
        desc: 'Custom APIs that connect your disparate systems and IoT devices seamlessly.'
      },
      capability6: {
        title: 'Legacy System Modernization',
        desc: 'Transform outdated infrastructure to modern cloud-native solutions without losing critical data.'
      },
      benefits: 'Key Benefits',
      benefit1: 'Infinite Scalability',
      benefit2: 'Custom Business Logic',
      benefit3: 'Modern Tech Stack',
      benefit4: 'Cloud-Native Deployment',
      benefit5: 'Enterprise Security',
      benefit6: 'Continuous Support',
      process: 'Our Development Process',
      processDesc: 'Agile methodology ensuring quality and timely delivery',
      step1: {
        number: '01',
        title: 'Requirements & Planning',
        desc: 'Deep dive into your business goals, user needs, technical requirements, and project timeline to create a comprehensive development roadmap.'
      },
      step2: {
        number: '02',
        title: 'Design & Architecture',
        desc: 'Crafting system architecture, database design, API specifications, and UI/UX mockups with your feedback and approval.'
      },
      step3: {
        number: '03',
        title: 'Development & Testing',
        desc: 'Agile development sprints with regular demos, automated testing, code reviews, and quality assurance throughout the process.'
      },
      step4: {
        number: '04',
        title: 'Deployment & Support',
        desc: 'Production deployment, team training, comprehensive documentation, and ongoing technical support and maintenance.'
      },
      demo: 'Interactive Demo',
      demoDesc: 'Explore a live demonstration of our development capabilities',
      techStack: 'Technology Stack',
      techStackDesc: 'Modern, proven technologies we use',
      portfolio: 'Featured Projects',
      portfolioDesc: 'Custom solutions we\'ve delivered',
      cta: 'Ready to build your custom solution?',
      ctaButton: 'Start Your Project'
    },
    brandService: {
      title: 'Digital Marketing',
      subtitle: 'Strategy & Growth',
      hero: 'Building Brands That Resonate and Convert',
      description: 'High-impact SEO, SEM, and targeted Google & Meta Ads that bridge brand awareness and revenue. Data-driven digital marketing strategies that drive conversions across Indonesia and globally.',
      capabilities: 'Our Services',
      capabilitiesDesc: 'Comprehensive branding and marketing solutions',
      capability1: {
        title: 'Digital Marketing (SEO, SEM & GEO)',
        desc: 'Data-backed search optimization and Generative Engine Optimization. We ensure your business is the primary answer on search engines and AI tools like Gemini and ChatGPT.'
      },
      capability2: {
        title: 'Conversion-Centric UI/UX Design',
        desc: 'Digital interfaces where psychology meets logic. Every user journey reduces friction and maximizes conversion rates, turning visitors into high-value clients.'
      },
      capability3: {
        title: 'Branding & Market Positioning',
        desc: 'Dominant brand identity that commands authority. Messaging frameworks and visual systems that ensure consistency across every digital touchpoint.'
      },
      capability4: {
        title: '',
        desc: ''
      },
      capability5: {
        title: '',
        desc: ''
      },
      capability6: {
        title: '',
        desc: ''
      },
      benefits: 'Key Benefits',
      benefit1: 'Engineered Market Authority',
      benefit2: 'High-Intent Leads',
      benefit3: 'Maximized Ad ROI',
      benefit4: 'Superior User Conversion',
      benefit5: 'Data-Backed Growth',
      benefit6: 'Unified Brand Voice',
      process: 'Our Approach',
      processDesc: 'Proven methodology for sustainable brand growth',
      step1: {
        number: '01',
        title: 'Brand Discovery',
        desc: 'Comprehensive analysis of your business, target audience, competitive landscape, and market positioning opportunities.'
      },
      step2: {
        number: '02',
        title: 'Strategy Development',
        desc: 'Creating brand positioning, messaging architecture, visual direction, and integrated marketing strategy framework.'
      },
      step3: {
        number: '03',
        title: 'Creative Execution',
        desc: 'Designing visual identity, developing content assets, and producing marketing materials across all brand touchpoints.'
      },
      step4: {
        number: '04',
        title: 'Launch & Optimization',
        desc: 'Executing campaign launches, monitoring performance metrics, and continuously optimizing for maximum impact and ROI.'
      },
      demo: 'Live Demo',
      demoDesc: 'Experience our marketing capabilities in action',
      services: 'Service Packages',
      servicesDesc: 'Tailored solutions for different business needs',
      portfolio: 'Our Work',
      portfolioDesc: 'Brands we\'ve built and grown',
      cta: 'Ready to elevate your brand?',
      ctaButton: 'Let\'s Talk Strategy'
    },
    procurementService: {
      title: 'Procurement & Infrastructure',
      subtitle: 'Supply Chain & Hardware',
      hero: 'Procurement & Infrastructure',
      description: 'IT infrastructure, hardware sourcing, and supply chain engineering for a seamless operational advantage. Serving businesses in Indonesia and globally.',
      capabilities: 'Our Services',
      capabilitiesDesc: 'End-to-end procurement solutions for businesses',
      capability1: { title: 'Enterprise IT & Hardware Sourcing', desc: 'Industrial-grade servers, workstations, networking equipment, and specialized IoT devices sourced and deployed to your technical specifications.' },
      capability2: { title: 'Vendor & Supply Chain Management', desc: 'End-to-end vendor vetting, price negotiation, and quality control through our global and local network.' },
      capability3: { title: 'Managed Infrastructure & Support', desc: 'Ongoing lifecycle management—from workstation setups to recurring equipment needs and warranty management.' },
      capability4: { title: '', desc: '' },
      benefits: 'Key Benefits',
      benefit1: 'Optimized Spending',
      benefit2: 'Scalable Infrastructure',
      benefit3: 'Vetted Quality Assurance',
      benefit4: 'Streamlined Delivery',
      benefit5: 'Tech Alignment',
      benefit6: 'Minimized Downtime',
      approach: 'Our Approach',
      approachDesc: 'How we deliver procurement excellence',
      approach1: { title: 'Needs Assessment', desc: 'We analyze your requirements and budget to create an optimal procurement plan.' },
      approach2: { title: 'Vendor Sourcing', desc: 'We identify and vet the best suppliers for quality and competitive pricing.' },
      approach3: { title: 'Order & Delivery', desc: 'Seamless order management with tracking and on-time delivery guarantee.' },
      approach4: { title: 'Ongoing Support', desc: 'Continued partnership for recurring needs, warranty management, and replacements.' },
      bridge: 'The Digital-Physical Bridge',
      bridgeTitle: 'Why Procurement Matters in a Digital World',
      bridgeDesc: 'True digital transformation doesn\'t stop at the screen. Your physical workspace and hardware must be as intelligent as your software. We ensure every server, sensor, and workstation is engineered to support the high-performance systems we deploy. This is procurement with an engineering mindset.',
      cta: 'Ready to optimize your infrastructure?',
      ctaButton: 'Get a Quote'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      faq: 'FAQ',
      contact: 'Kontak'
    },
    hero: {
      title1: 'IMPACT ENGINEERED',
      title2: 'ADVANTAGE SECURED',
      subtitle: 'Integrasi AI, Pengembangan Kustom, Pemasaran Digital, dan Pengadaan—direkayasa untuk bisnis di Indonesia dan global.',
      exploreServices: 'Lihat Layanan',
      getInTouch: 'Hubungi Kita'
    },
    services: {
      title: 'Keahlian Inti Kami',
      subtitle: 'Yang Kita Kerjakan',
      description: 'Kita bikin solusi yang kasih dampak terukur dan keunggulan berkelanjutan.',
      learnMore: 'Pelajari Lebih Lanjut',
      service1: {
        title: 'Integrasi AI',
        description: 'Mengintegrasikan otomasi dan AI untuk menyederhanakan alur kerja dan memberikan wawasan real-time.',
        tags: [
          'Chatbot & Asisten AI',
          'Analitik & Wawasan Prediktif',
          'Peningkatan Produk AI',
          'Otomasi & Optimasi Alur Kerja'
        ]
      },
      service2: {
        title: 'Pengembangan Khusus',
        description: 'Membangun produk digital yang skalabel—situs web, aplikasi, dan sistem—dirancang untuk kinerja dan pertumbuhan.',
        tags: [
          'Pengembangan Web, Aplikasi & Sistem',
          'Aplikasi Web Khusus',
          'Implementasi IoT & Sistem Pintar',
          'Pemeliharaan & Optimasi'
        ]
      },
      service3: {
        title: 'Pemasaran Digital',
        description: 'Merancang identitas merek yang berdampak dan kampanye yang terhubung dengan audiens yang tepat.',
        tags: [
          'Strategi Merek & Identitas Visual',
          'UI/UX & Arahan Kreatif',
          'Kampanye Digital & Media Sosial',
          'Pembuatan Konten & Storytelling'
        ]
      }
    },
    about: {
      subtitle: 'Tentang Kita',
      title: 'Siapa Itu Metaseti Digital Indonesia',
      description1: 'Kita berkomitmen untuk percepat transformasi digital Indonesia dengan bikin solusi modern yang fokus ke presisi, performa, dan pertumbuhan yang terukur.',
      description2: 'Tim kita gabungin kreativitas dengan teknologi canggih, bikin produk digital dan pengalaman brand yang kasih keunggulan kompetitif nyata. Fokus kita ke skalabilitas dan dampak jangka panjang, supaya bisnis bisa inovasi, berkembang, dan jadi leader di era digital.',
      description3: 'Dari custom development sampai AI integration dan brand marketing, kita ubah ambisi jadi hasil nyata yang bentuk masa depan.',
      learnMore: 'Pelajari Lebih Lanjut',
      stats: {
        innovation: 'Pola Pikir Inovasi',
        pillars: 'Pilar Layanan',
        response: 'Waktu Respons',
        commitment: 'Komitmen pada Kualitas'
      }
    },
    contact: {
      subtitle: 'Hubungi Kita',
      title: 'Yuk Ngobrol Tentang Proyek Kamu',
      description: 'Bikin solusi yang kasih dampak dan keunggulan kompetitif lewat teknologi dan inovasi.',
      freeConsultation: 'Konsultasi Gratis Tersedia',
      phone: 'Telepon',
      email: 'Email',
      instagram: 'Instagram',
      location: 'Lokasi Kami',
      form: {
        name: 'Nama',
        namePlaceholder: 'Nama Anda',
        phone: 'Telepon',
        phonePlaceholder: 'Nomor Telepon Anda',
        email: 'Email',
        emailPlaceholder: 'Alamat Email Anda',
        message: 'Pesan',
        messagePlaceholder: 'Tulis pesan Anda...',
        send: 'Kirim Pesan'
      }
    },
    footer: {
      copyright: '© 2026 Metaseti Digital Indonesia',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat Layanan'
    },
    blog: {
      title: 'Wawasan & Sumber Daya',
      subtitle: 'Blog Kami',
      description: 'Jelajahi konten edukatif, wawasan industri, dan panduan praktis untuk membantu Anda menavigasi transformasi digital.',
      readMore: 'Baca Selengkapnya',
      readingTime: 'menit baca',
      categories: {
        all: 'Semua',
        ai: 'AI & Otomasi',
        development: 'Pengembangan',
        branding: 'Branding & Pemasaran',
        business: 'Strategi Bisnis'
      }
    },
    contactPage: {
      metaTitle: 'Hubungi Kami | Metaseti Digital Indonesia',
      metaDescription: 'Hubungi Metaseti Digital Indonesia. Konsultasi gratis untuk integrasi AI, pengembangan kustom, pemasaran digital, dan layanan pengadaan di Jakarta.',
      subtitle: 'Hubungi Kami',
      title: 'Mulai Proyek Anda',
      description: 'Siap membangun sesuatu yang hebat? Hubungi kami dan kami akan merespons dalam 24 jam.',
      whyReachOut: 'Mengapa Menghubungi Kami',
      reason1Title: 'Konsultasi Gratis',
      reason1Desc: 'Tanpa komitmen—hanya percakapan tentang tujuan Anda.',
      reason2Title: 'Respons Cepat',
      reason2Desc: 'Kami membalas dalam 24 jam, biasanya lebih cepat.',
      reason3Title: 'Dukungan Menyeluruh',
      reason3Desc: 'Dari perencanaan hingga peluncuran, satu tim menangani semuanya.',
    },
    aboutPage: {
      subtitle: 'Tentang Kami',
      title: 'Merekayasa Keunggulan Digital',
      description: 'Mitra transformasi digital Anda di Indonesia—rekayasa software kustom, otomasi AI, dan pengadaan teknologi untuk solusi berkinerja tinggi yang skalabel.',
      whoWeAre: 'Siapa Kami',
      whoWeAreDesc1: 'Metaseti Digital Indonesia adalah perusahaan rekayasa yang mengutamakan hasil, berspesialisasi dalam integrasi AI, pengembangan sistem kustom, dan pemasaran digital untuk bisnis di Indonesia dan Asia Tenggara.',
      whoWeAreDesc2: 'Tim kami bekerja di persimpangan logika, kode, dan komersial untuk memberikan solusi digital end-to-end.',
      stats: {
        projects: 'Tahun Keahlian Gabungan',
        satisfaction: 'Rekayasa Kustom',
        partners: 'Pengiriman Solusi',
        support: 'Proses Pengembangan'
      },
      ourStory: 'Kisah Kami',
      storyDesc1: 'Metaseti lahir dari observasi yang jelas: bisnis berjuang dengan teknologi yang terfragmentasi dan tidak memiliki mitra yang dapat membangun sistem kustom, mengintegrasikan AI, dan mengelola pengadaan berskala.',
      storyDesc2: 'Apa yang dimulai sebagai konsultansi khusus telah berkembang menjadi mitra rekayasa komprehensif yang melayani startup dan perusahaan di Indonesia, Asia Tenggara, dan pasar global.',
      storyDesc3: 'Kami tidak hanya membangun perangkat lunak—kami merekayasa infrastruktur untuk kesuksesan Anda.',
      vision: 'Visi Kami',
      visionDesc: 'Menjadi arsitek utama ekosistem digital-fisik terintegrasi di Asia Tenggara—merekayasa fondasi teknologi yang mengamankan kepemimpinan pasar dan skalabilitas global.',
      mission: 'Misi Kami',
      missionDesc: 'Merekayasa software kustom, mengintegrasikan AI, dan menyediakan pengadaan yang mengubah kompleksitas operasional menjadi keunggulan kompetitif yang menentukan.',
      coreValues: 'Nilai Inti Kami',
      coreValuesDesc: 'Prinsip-prinsip ini memandu setiap keputusan yang kami buat dan setiap solusi yang kami berikan.',
      values: {
        measurableImpact: {
          title: 'Dampak Terukur',
          desc: 'Mendorong hasil yang memberikan keunggulan kompetitif nyata.'
        },
        principledEvolution: {
          title: 'Evolusi Berprinsip',
          desc: 'Berkembang dengan integritas—beradaptasi sambil menjunjung standar etika.'
        },
        clarityInAction: {
          title: 'Kejelasan dalam Aksi',
          desc: 'Beroperasi dengan transparansi radikal dalam proses, keputusan, dan hasil.'
        },
        unifiedExcellence: {
          title: 'Keunggulan Terpadu',
          desc: 'Mengintegrasikan teknologi dan brand menjadi solusi berdampak tinggi yang mulus.'
        },
        precisionCraft: {
          title: 'Ketelitian Presisi',
          desc: 'Mengeksekusi dengan perhatian detail dalam kode, desain, dan strategi.'
        }
      },
      leadership: 'Temui Kepemimpinan Kami',
      leadershipDesc: 'Para visioner di balik Metaseti Digital Indonesia.',
      whyChoose: 'Mengapa Memilih Metaseti',
      whyChooseDesc: 'Kami memberikan hasil yang penting, didukung oleh keahlian dan komitmen terhadap kesuksesan Anda.',
      reasons: {
        expertise: {
          title: 'Keahlian Terbukti',
          desc: 'Bertahun-tahun pengalaman memberikan proyek transformasi digital yang sukses di berbagai industri.'
        },
        endToEnd: {
          title: 'Solusi End-to-End',
          desc: 'Dari strategi hingga deployment, kami menangani setiap aspek perjalanan digital Anda.'
        },
        agile: {
          title: 'Pengiriman Agile',
          desc: 'Proses pengembangan cepat dan iteratif dengan pembaruan rutin dan komunikasi transparan.'
        },
        results: {
          title: 'Hasil Terukur',
          desc: 'Kami fokus memberikan hasil bisnis yang nyata dan ROI, bukan hanya deliverable.'
        }
      },
      cta: 'Siap memulai perjalanan transformasi digital Anda?',
      getInTouch: 'Hubungi Kami'
    },
    aiService: {
      title: 'Integrasi AI & Agen AI',
      subtitle: 'AI & Otomasi',
      hero: 'Integrasi AI & Agen AI',
      description: 'Agen AI dan model prediktif yang menyederhanakan alur kerja, mengurangi biaya, dan mengamankan keunggulan kompetitif untuk bisnis di Indonesia dan global.',
      capabilities: 'Kemampuan AI Kami',
      capabilitiesDesc: 'Solusi AI komprehensif yang disesuaikan dengan kebutuhan bisnis Anda',
      capability1: {
        title: 'Agen AI & Inteligensi Pelanggan',
        desc: 'AI percakapan untuk dukungan pelanggan 24/7, penanganan pertanyaan, dan otomasi tugas rutin.'
      },
      capability2: {
        title: 'Peramalan Berbasis Data & Inteligensi Prediktif',
        desc: 'Model ML yang meramalkan tren, mengidentifikasi pola, dan memungkinkan pengambilan keputusan berbasis data.'
      },
      capability3: {
        title: 'Otomasi Proses Cerdas (IPA)',
        desc: 'Otomasi tugas berulang dan proses kompleks dengan AI yang belajar dan beradaptasi.'
      },
      capability4: {
        title: 'Rekayasa Fitur AI Kustom',
        desc: 'Kemampuan AI terintegrasi ke produk yang ada—mesin rekomendasi, fitur pintar, dan lainnya.'
      },
      capability5: {
        title: 'Computer Vision',
        desc: 'Analisis gambar dan video untuk kontrol kualitas, deteksi objek, dan inspeksi otomatis.'
      },
      capability6: {
        title: 'Rekayasa Pengetahuan & NLP',
        desc: 'Wawasan teks, analisis sentimen, pemrosesan dokumen, dan pencarian semantik.'
      },
      benefits: 'Manfaat Utama',
      benefit1: 'Inteligensi AI 24/7',
      benefit2: 'Optimasi Alur Kerja',
      benefit3: 'Wawasan Pasar Prediktif',
      benefit4: 'Integrasi yang Mulus',
      benefit5: 'Model Terlatih Kustom',
      benefit6: 'Infrastruktur Tahan Masa Depan',
      process: 'Proses Kami',
      processDesc: 'Metodologi terbukti untuk implementasi AI yang sukses',
      step1: {
        number: '01',
        title: 'Penemuan & Analisis',
        desc: 'Kami menganalisis proses bisnis Anda dan mengidentifikasi peluang AI yang memberikan ROI maksimum.'
      },
      step2: {
        number: '02',
        title: 'Strategi & Desain',
        desc: 'Arsitektur solusi AI khusus yang disesuaikan dengan kebutuhan dan infrastruktur spesifik Anda.'
      },
      step3: {
        number: '03',
        title: 'Pengembangan & Pelatihan',
        desc: 'Membangun dan melatih model AI dengan data Anda, memastikan akurasi dan relevansi.'
      },
      step4: {
        number: '04',
        title: 'Integrasi & Deployment',
        desc: 'Integrasi mulus dengan sistem yang ada dan pelatihan tim yang komprehensif.'
      },
      demo: 'Coba Asisten AI Kami',
      demoDesc: 'Rasakan percakapan cerdas yang didukung AI',
      portfolio: 'Karya Kami',
      portfolioDesc: 'Solusi AI yang telah kami berikan untuk klien kami',
      cta: 'Siap mengubah bisnis Anda dengan AI?',
      ctaButton: 'Mulai Perjalanan AI Anda',
      aiGreeting: 'Halo! Saya Asisten AI Metaseti. Saya dapat membantu Anda mempelajari layanan, harga, dan bagaimana kami dapat membantu bisnis Anda. Apa yang ingin Anda ketahui?',
      messagePlaceholder: 'Ketik pesan Anda...',
      send: 'Kirim'
    },
    devService: {
      title: 'Pengembangan Khusus',
      subtitle: 'Web, Mobile & Sistem',
      hero: 'Membangun Produk Digital yang Menghasilkan',
      description: 'Ekosistem perangkat lunak kustom—web, mobile, IoT, ERP, CRM, dan WMS—direkayasa sesuai logika bisnis unik Anda. Melayani bisnis di Jakarta, Indonesia, dan global.',
      capabilities: 'Kemampuan Pengembangan Kami',
      capabilitiesDesc: 'Layanan pengembangan end-to-end untuk bisnis modern',
      capability1: {
        title: 'Pengembangan Web Pengembangan Web & Aplikasi Kustom Aplikasi Kustom',
        desc: 'Platform berkinerja tinggi dengan React dan Next.js untuk pengalaman mulus di semua perangkat.'
      },
      capability2: {
        title: 'Integrasi IoT & Sistem Cerdas',
        desc: 'Ekosistem perangkat terhubung dengan analitik sensor real-time, pemantauan jarak jauh, dan otomasi.'
      },
      capability3: {
        title: 'Sistem Bisnis Internal (ERP, CRM, WMS)',
        desc: 'Sistem kustom untuk menyederhanakan operasi, mengelola inventaris, dan mengotomasi alur kerja.'
      },
      capability4: {
        title: 'Ekosistem E-Commerce Skalabel',
        desc: 'Toko digital dengan pembayaran kustom, inventaris real-time, dan perjalanan pelanggan terspesialisasi.'
      },
      capability5: {
        title: 'Rekayasa API & Middleware',
        desc: 'API kustom yang menghubungkan sistem dan perangkat IoT Anda dengan mulus.'
      },
      capability6: {
        title: 'Modernisasi Sistem Lama',
        desc: 'Transformasi infrastruktur usang ke solusi cloud-native modern tanpa kehilangan data penting.'
      },
      benefits: 'Manfaat Utama',
      benefit1: 'Skalabilitas Tak Terbatas',
      benefit2: 'Logika Bisnis Kustom',
      benefit3: 'Tech Stack Modern',
      benefit4: 'Deployment Cloud-Native',
      benefit5: 'Keamanan Enterprise',
      benefit6: 'Dukungan Berkelanjutan',
      process: 'Proses Pengembangan Kami',
      processDesc: 'Metodologi Agile yang memastikan kualitas dan pengiriman tepat waktu',
      step1: {
        number: '01',
        title: 'Kebutuhan & Perencanaan',
        desc: 'Penyelaman mendalam ke tujuan bisnis, kebutuhan pengguna, persyaratan teknis, dan timeline proyek untuk membuat roadmap pengembangan komprehensif.'
      },
      step2: {
        number: '02',
        title: 'Desain & Arsitektur',
        desc: 'Membuat arsitektur sistem, desain database, spesifikasi API, dan mockup UI/UX dengan umpan balik dan persetujuan Anda.'
      },
      step3: {
        number: '03',
        title: 'Pengembangan & Testing',
        desc: 'Sprint pengembangan Agile dengan demo rutin, pengujian otomatis, code review, dan quality assurance sepanjang proses.'
      },
      step4: {
        number: '04',
        title: 'Deployment & Dukungan',
        desc: 'Deployment produksi, pelatihan tim, dokumentasi komprehensif, dan dukungan teknis serta maintenance berkelanjutan.'
      },
      demo: 'Demo Interaktif',
      demoDesc: 'Jelajahi demonstrasi langsung kemampuan pengembangan kami',
      techStack: 'Tech Stack',
      techStackDesc: 'Teknologi modern dan terbukti yang kami gunakan',
      portfolio: 'Proyek Unggulan',
      portfolioDesc: 'Solusi khusus yang telah kami berikan',
      cta: 'Siap membangun solusi khusus Anda?',
      ctaButton: 'Mulai Proyek Anda'
    },
    brandService: {
      title: 'Pemasaran Digital',
      subtitle: 'Strategi & Pertumbuhan',
      hero: 'Membangun Brand yang Beresonansi dan Mengkonversi',
      description: 'SEO, SEM, dan Google & Meta Ads berdampak tinggi yang menjembatani brand awareness dan profitabilitas. Strategi pemasaran digital berbasis data yang mendorong konversi di Indonesia dan global.',
      capabilities: 'Layanan Kami',
      capabilitiesDesc: 'Solusi branding dan pemasaran komprehensif',
      capability1: {
        title: 'Digital Marketing (SEO, SEM & GEO)',
        desc: 'Optimasi pencarian berbasis data dan Generative Engine Optimization. Bisnis Anda menjadi jawaban utama di mesin pencari dan alat AI seperti Gemini dan ChatGPT.'
      },
      capability2: {
        title: 'Desain UI/UX Berorientasi Konversi',
        desc: 'Antarmuka digital di mana psikologi bertemu logika. Setiap perjalanan pengguna mengurangi gesekan dan memaksimalkan konversi.'
      },
      capability3: {
        title: 'Branding & Positioning Pasar',
        desc: 'Identitas brand dominan yang memerintahkan otoritas. Kerangka pesan dan sistem visual yang konsisten di setiap touchpoint digital.'
      },
      capability4: {
        title: '',
        desc: ''
      },
      capability5: {
        title: '',
        desc: ''
      },
      capability6: {
        title: '',
        desc: ''
      },
      benefits: 'Manfaat Utama',
      benefit1: 'Otoritas Pasar yang Direkayasa',
      benefit2: 'Lead Berintensitas Tinggi',
      benefit3: 'ROI Iklan Maksimal',
      benefit4: 'Konversi Pengguna Superior',
      benefit5: 'Pertumbuhan Berbasis Data',
      benefit6: 'Suara Brand yang Terpadu',
      process: 'Pendekatan Kami',
      processDesc: 'Metodologi terbukti untuk pertumbuhan merek berkelanjutan',
      step1: {
        number: '01',
        title: 'Penemuan Merek',
        desc: 'Analisis komprehensif bisnis Anda, target audiens, lanskap kompetitif, dan peluang positioning pasar.'
      },
      step2: {
        number: '02',
        title: 'Pengembangan Strategi',
        desc: 'Membuat positioning merek, arsitektur pesan, arahan visual, dan kerangka strategi pemasaran terintegrasi.'
      },
      step3: {
        number: '03',
        title: 'Eksekusi Kreatif',
        desc: 'Merancang identitas visual, mengembangkan aset konten, dan memproduksi materi pemasaran di semua touchpoint merek.'
      },
      step4: {
        number: '04',
        title: 'Peluncuran & Optimasi',
        desc: 'Menjalankan peluncuran kampanye, memantau metrik kinerja, dan terus mengoptimalkan untuk dampak dan ROI maksimum.'
      },
      demo: 'Live Demo',
      demoDesc: 'Rasakan kemampuan pemasaran kami secara langsung',
      services: 'Paket Layanan',
      servicesDesc: 'Solusi yang disesuaikan untuk kebutuhan bisnis berbeda',
      portfolio: 'Karya Kami',
      portfolioDesc: 'Merek yang telah kami bangun dan kembangkan',
      cta: 'Siap mengangkat merek Anda?',
      ctaButton: 'Mari Bicara Strategi'
    },
    procurementService: {
      title: 'Pengadaan & Infrastruktur',
      subtitle: 'Rantai Pasok & Hardware',
      hero: 'Pengadaan & Infrastruktur',
      description: 'Infrastruktur IT, pengadaan hardware, dan rekayasa rantai pasok untuk keunggulan operasional yang mulus. Melayani bisnis di Indonesia dan global.',
      capabilities: 'Layanan Kami',
      capabilitiesDesc: 'Solusi pengadaan end-to-end untuk bisnis',
      capability1: { title: 'Pengadaan IT & Hardware Enterprise', desc: 'Server kelas industri, workstation, peralatan jaringan, dan perangkat IoT khusus yang di-deploy sesuai spesifikasi teknis Anda.' },
      capability2: { title: 'Manajemen Vendor & Rantai Pasok', desc: 'Vetting vendor end-to-end, negosiasi harga, dan kontrol kualitas melalui jaringan global dan lokal kami.' },
      capability3: { title: 'Infrastruktur Terkelola & Dukungan', desc: 'Manajemen lifecycle berkelanjutan—dari setup workstation hingga kebutuhan peralatan berulang dan manajemen garansi.' },
      capability4: { title: '', desc: '' },
      benefits: 'Manfaat Utama',
      benefit1: 'Pengeluaran Optimal',
      benefit2: 'Infrastruktur Skalabel',
      benefit3: 'Jaminan Kualitas Terverifikasi',
      benefit4: 'Pengiriman Efisien',
      benefit5: 'Penyelarasan Teknologi',
      benefit6: 'Downtime Diminimalkan',
      approach: 'Pendekatan Kami',
      approachDesc: 'Bagaimana kami memberikan keunggulan pengadaan',
      approach1: { title: 'Analisis Kebutuhan', desc: 'Kami menganalisis kebutuhan dan anggaran Anda untuk membuat rencana pengadaan optimal.' },
      approach2: { title: 'Pencarian Vendor', desc: 'Kami mengidentifikasi dan memverifikasi pemasok terbaik untuk kualitas dan harga kompetitif.' },
      approach3: { title: 'Pemesanan & Pengiriman', desc: 'Manajemen pesanan yang mulus dengan pelacakan dan jaminan pengiriman tepat waktu.' },
      approach4: { title: 'Dukungan Berkelanjutan', desc: 'Kemitraan berkelanjutan untuk kebutuhan rutin, manajemen garansi, dan penggantian.' },
      bridge: 'Jembatan Digital-Fisik',
      bridgeTitle: 'Mengapa Pengadaan Penting di Dunia Digital',
      bridgeDesc: 'Transformasi digital sejati tidak berhenti di layar. Ruang kerja fisik dan hardware Anda harus secerdas perangkat lunak Anda. Kami memastikan setiap server, sensor, dan workstation direkayasa untuk mendukung sistem berkinerja tinggi yang kami deploy. Ini adalah pengadaan dengan pola pikir rekayasa.',
      cta: 'Siap mengoptimalkan infrastruktur Anda?',
      ctaButton: 'Dapatkan Penawaran'
    }
  }
};
