import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#112A5C]/30 backdrop-blur-lg rounded-xl p-6 hover:bg-[#112A5C]/40 transition-all duration-300 border border-[#64FFDA]/20"
    >
      <Icon className="w-10 h-10 text-[#64FFDA] mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#8892B0]">{description}</p>
    </motion.div>
  );
};