// components/sections/CTA.tsx
"use client";

import { useState } from "react";
import MotionWrapper from "../MotionWrapper";
import { ArrowUpRight, X } from "lucide-react";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    date: "",
    timeSlot: "",
    message: ""
  });

  const whatsappNumber = "6281385073901";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like to start a project with Metaseti Digital")}`;

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkwjyze";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          enquiryType: formData.enquiryType,
          preferredDate: formData.date,
          timeSlot: formData.timeSlot,
          message: formData.message,
          _subject: `New Schedule Call Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            enquiryType: "",
            date: "",
            timeSlot: "",
            message: ""
          });
          setIsModalOpen(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <section id="contact" className="bg-black px-6 py-32 md:py-40 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <MotionWrapper>
            <div className="relative overflow-hidden border border-white/10 p-12 md:p-20 text-center">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              <div className="relative z-10">
                <h2 className="text-4xl font-light mb-6 md:text-5xl lg:text-6xl">
                  Ready to Transform Your Vision?
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                  Let's collaborate to build something extraordinary. Schedule a consultation 
                  to discuss your project and discover how we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors"
                  >
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-black border border-white/10 p-8 md:p-12">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-3xl md:text-4xl font-light mb-2">Schedule a Call</h3>
            <p className="text-gray-400 mb-8">Fill in your details and we'll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email and Phone - Side by side on larger screens */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
              </div>

              {/* Type of Enquiry */}
              <div>
                <label htmlFor="enquiryType" className="block text-sm text-gray-400 mb-2">
                  Type of Enquiry *
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                >
                  <option value="">Select enquiry type</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Strategic AI Integration">Strategic AI Integration</option>
                  <option value="Custom Development">Custom Development</option>
                  <option value="Branding & Marketing">Branding & Marketing</option>
                </select>
              </div>

              {/* Date and Time - Side by side */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm text-gray-400 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                  />
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block text-sm text-gray-400 mb-2">
                    Approx. Time *
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    required
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                  >
                    <option value="">Select time slot</option>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 border border-green-500/20 bg-green-500/10 text-green-400">
                  Thank you! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 border border-red-500/20 bg-red-500/10 text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Submit buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}