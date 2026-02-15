// components/MotionWrapper.tsx


import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  viewOptions?: UseInViewOptions;
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function MotionWrapper({
  children,
  className,
  staggerDelay = 0,
  viewOptions = { once: true, amount: 0.1 },
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.8,
        delay: staggerDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
