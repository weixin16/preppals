import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, noPadding = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }} // Custom spring-like ease
      className={`max-w-7xl mx-auto px-6 md:px-8 ${noPadding ? '' : 'py-20 md:py-32'} ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;