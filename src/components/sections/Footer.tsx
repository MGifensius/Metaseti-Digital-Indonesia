// components/sections/Footer.tsx
"use client";

import Image from "next/image";
import MotionWrapper from "../MotionWrapper";
import { Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-6 py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Top Section - Company Info + Contact */}
        <div className="grid gap-12 lg:grid-cols-2 mb-16 pb-16 border-b border-white/10">
          {/* Company Info */}
          <MotionWrapper>
            <div>
              <div className="mb-6">
                <Image
                  src="/Full-Metaseti.png"
                  alt="Metaseti Digital Indonesia"
                  width={240}
                  height={80}
                  className="h-auto w-auto max-w-[240px]"
                  priority
                />
              </div>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Engineering solutions that deliver impact and secure competitive advantage through technology and strategic innovation.
              </p>
            </div>
          </MotionWrapper>

          {/* Contact */}
          <MotionWrapper staggerDelay={0.1}>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-medium">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:+6281385073901"
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="p-2 border border-white/10 group-hover:border-white/30 transition-colors mt-0.5">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Phone</div>
                      <div className="text-sm">+62 813-8507-3901</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:hello@metaseti.digital"
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="p-2 border border-white/10 group-hover:border-white/30 transition-colors mt-0.5">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Email</div>
                      <div className="text-sm">hello@metaseti.digital</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com/metaseti.digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="p-2 border border-white/10 group-hover:border-white/30 transition-colors mt-0.5">
                      <Instagram className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Instagram</div>
                      <div className="text-sm flex items-center gap-1">
                        @metasetidigital
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </MotionWrapper>
        </div>

        {/* Location Map */}
        <MotionWrapper staggerDelay={0.2}>
          <div className="mb-16">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-medium">
              Our Location
            </h4>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />
              <div className="relative w-full h-80 border border-white/10 group-hover:border-white/20 overflow-hidden transition-colors">
                <iframe
                  src="https:///www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.92787871136196!2d106.89845356964767!3d-6.151365604002552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1763100830185!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                />
              </div>
              <div className="mt-3 text-xs text-gray-500">
                Jakarta, Indonesia
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* Bottom Bar */}
        <MotionWrapper staggerDelay={0.3}>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-gray-500">
                © {currentYear} PT. Metaseti Digital Indonesia. All rights reserved.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </footer>
  );
}
