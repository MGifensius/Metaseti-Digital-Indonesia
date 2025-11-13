// components/Button.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  variant?: "primary" | "secondary" | "outline";
  showIcon?: boolean;
}

export default function Button({ 
  href, 
  children, 
  isExternal = false,
  variant = "primary",
  showIcon = false 
}: Props) {
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-transparent border border-white/20 hover:bg-white/5",
    outline: "border border-white/20 hover:border-white/40"
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    px-8 py-3 text-sm font-medium
    transition-all duration-300
    ${variants[variant]}
  `;

  const content = (
    <>
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} group`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      <motion.div
        className={`${baseClasses} group`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.div>
    </Link>
  );
}