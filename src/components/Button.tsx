

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  to: string;
  children: React.ReactNode;
  isExternal?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({ 
  to, 
  children, 
  isExternal = false,
  variant = "primary",
}: Props) {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 rounded-md",
    secondary: "bg-transparent border border-gray-300 text-black hover:bg-gray-100 rounded-md",
  };

  const baseClasses = `
    inline-flex items-center justify-center
    px-8 py-3 text-sm font-medium
    transition-all duration-300
    ${variants[variant]}
  `;

  // For hash links (in-page navigation)
  if (to.startsWith('#')) {
    return (
      <motion.a
        href={to}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  // For external links
  if (isExternal) {
    return (
      <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  // For internal routes
  return (
    <Link to={to}>
      <motion.div
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}
