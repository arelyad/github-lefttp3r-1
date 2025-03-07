import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </motion.div>
  );
};