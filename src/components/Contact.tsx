

import { useState, FormEvent } from "react";
import MotionWrapper from "./MotionWrapper";
import { useLanguage } from "../context/LanguageContext";
import AnimatedMesh from "./AnimatedMesh";

export default function ContactSection() {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (field?: string) => {
    const newErrors: Record<string, string> = {};
    
    const checkField = (f: string) => {
      switch (f) {
        case 'name':
          if (!formData.name.trim()) newErrors.name = language === 'en' ? 'Name is required' : 'Nama wajib diisi';
          else if (formData.name.trim().length < 2) newErrors.name = language === 'en' ? 'Min 2 characters' : 'Minimal 2 karakter';
          break;
        case 'phone':
          if (!formData.phone.trim()) newErrors.phone = language === 'en' ? 'Phone number is required' : 'Nomor telepon wajib diisi';
          else if (!/^\d+$/.test(formData.phone.trim())) newErrors.phone = language === 'en' ? 'Numbers only' : 'Hanya angka';
          else if (formData.phone.trim().length < 9 || formData.phone.trim().length > 14) newErrors.phone = language === 'en' ? '9-14 digits required' : '9-14 digit diperlukan';
          break;
        case 'email':
          if (!formData.email.trim()) newErrors.email = language === 'en' ? 'Email is required' : 'Email wajib diisi';
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = language === 'en' ? 'Invalid email format' : 'Format email tidak valid';
          break;
        case 'message':
          if (!formData.message.trim()) newErrors.message = language === 'en' ? 'Message is required' : 'Pesan wajib diisi';
          else if (formData.message.trim().length < 10) newErrors.message = language === 'en' ? 'Min 10 characters' : 'Minimal 10 karakter';
          break;
      }
    };

    if (field) {
      checkField(field);
      return newErrors;
    }
    
    ['name', 'phone', 'email', 'message'].forEach(checkField);
    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const fieldErrors = validate(field);
    setErrors(prev => ({ ...prev, [field]: fieldErrors[field] || '' }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const fieldErrors = validate(field);
      setErrors(prev => ({ ...prev, [field]: fieldErrors[field] || '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    const allErrors = validate();
    setErrors(allErrors);
    setTouched({ name: true, phone: true, email: true, message: true });
    if (Object.keys(allErrors).length > 0) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-white px-4 md:px-6 py-[79px] md:py-[127px] lg:py-[159px] scroll-mt-20 overflow-hidden"
    >
      <AnimatedMesh />
      {/* Elevated 3D Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="container-3d p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="relative">

        {/* Header */}
        <MotionWrapper staggerDelay={0}>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-600 mb-3">
            {t('contact.subtitle')}
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-black mb-4 md:mb-6 leading-tight">
            {t('contact.title')}
          </h2>
        </MotionWrapper>

        <MotionWrapper staggerDelay={0.1}>
          <p className="max-w-xl text-gray-700 text-sm md:text-base leading-relaxed">
            {t('contact.description')}
          </p>
        </MotionWrapper>

        {/* Free Consultation Notice */}
        <MotionWrapper staggerDelay={0.15}>
          <div className="mt-6 md:mt-8 inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-md shadow-lg text-sm md:text-base">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">
              {t('contact.freeConsultation')}
            </span>
          </div>
        </MotionWrapper>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 mt-12 md:mt-16 lg:mt-20">

          {/* LEFT SIDE – CONTACT DETAILS */}
          <div className="space-y-12">
            <MotionWrapper staggerDelay={0.15}>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-2">
                  {t('contact.phone')}
                </p>
                <a
                  href="https://wa.me/6281385073901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-black hover:text-gray-700 transition-colors inline-block"
                >
                  +62 813-8507-3901
                </a>
              </div>
            </MotionWrapper>

            <MotionWrapper staggerDelay={0.20}>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-2">
                  {t('contact.email')}
                </p>
                <p className="text-lg text-black">
                  metaseti.digital@gmail.com
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper staggerDelay={0.25}>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-2">
                  {t('contact.instagram')}
                </p>
                <a
                  href="https://instagram.com/metasetidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-black hover:text-gray-700 transition-colors inline-block"
                >
                  @metasetidigital
                </a>
              </div>
            </MotionWrapper>

            {/* MAP */}
            <MotionWrapper staggerDelay={0.30}>
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-3">
                  {t('contact.location')}
                </p>

                <div className="rounded-md overflow-hidden border border-gray-200">
                  <iframe
                    loading="lazy"
                    src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-64"
                  ></iframe>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <MotionWrapper staggerDelay={0.35}>
            <form action="https://formspree.io/f/xdkwjyze" method="POST" className="space-y-8" onSubmit={handleSubmit}>

              <div>
                <label className="block text-xs text-gray-700 mb-2">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  minLength={2}
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`
                    w-full bg-white border px-4 py-3 text-black placeholder-gray-500
                    focus:outline-none transition-all rounded-md
                    ${errors.name && touched.name ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-gray-400'}
                  `}
                  placeholder={t('contact.form.namePlaceholder')}
                />
                {errors.name && touched.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs text-gray-700 mb-2">
                  {t('contact.form.phone')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  className={`
                    w-full bg-white border px-4 py-3 text-black placeholder-gray-500
                    focus:outline-none transition-all rounded-md
                    ${errors.phone && touched.phone ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-gray-400'}
                  `}
                  placeholder={t('contact.form.phonePlaceholder')}
                />
                {errors.phone && touched.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs text-gray-700 mb-2">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`
                    w-full bg-white border px-4 py-3 text-black placeholder-gray-500
                    focus:outline-none transition-all rounded-md
                    ${errors.email && touched.email ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-gray-400'}
                  `}
                  placeholder={t('contact.form.emailPlaceholder')}
                />
                {errors.email && touched.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs text-gray-700 mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={`
                    w-full bg-white border px-4 py-3 text-black placeholder-gray-500
                    focus:outline-none transition-all resize-none rounded-md
                    ${errors.message && touched.message ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-gray-400'}
                  `}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
                {errors.message && touched.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="
                  mt-4 px-8 py-3 
                  bg-black text-white 
                  text-sm font-medium
                  hover:bg-gray-800 transition-all
                  rounded-md
                "
              >
                {t('contact.form.send')}
              </button>

            </form>
          </MotionWrapper>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
