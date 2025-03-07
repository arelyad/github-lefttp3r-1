import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#112A5C]/30 backdrop-blur-lg rounded-xl p-6 relative border border-[#64FFDA]/20"
    >
      <Quote className="w-8 h-8 text-[#64FFDA] mb-4" />
      <p className="text-[#8892B0] mb-4">{testimonial}</p>
      <div className="mt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-[#64FFDA]">{role}</p>
      </div>
    </motion.div>
  );
};