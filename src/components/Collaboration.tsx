"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from '../lib/motion';
import { fadeInUp, slideIn, staggerContainer, scrollRevealSettings } from './animations';
import AllIcons, { IconName } from './icons';

interface SocialLink {
  name: string;
  url: string;
  iconName: IconName;
}

interface CollaborationProps {
  message: string;
  socialLinks: SocialLink[];
}

const Collaboration: React.FC<CollaborationProps> = ({ message, socialLinks }) => {
  return (
    <motion.div 
      {...scrollRevealSettings}
      variants={fadeInUp}
      className="mt-16 text-center"
    >
      <motion.p 
        variants={fadeInUp}
        className="text-sm sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto text-center"
      >
        {message}
      </motion.p>
      
      {/* Link Sosial */}
      <motion.div 
        variants={staggerContainer}
        className="flex flex-wrap justify-center gap-x-4 gap-y-2"
      >
        {socialLinks.map((link, index) => {
          const IconComponent = AllIcons[link.iconName];
          return (
            <motion.div 
              key={link.name}
              variants={slideIn}
              custom={index}
            >
              <Link
                href={link.url}
                target={link.url.startsWith("http") || link.url.startsWith("mailto:") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center px-3 py-1 sm:py-2 rounded hover:bg-gray-800 text-muted-foreground hover:text-white transition-all duration-200 group mx-1"
                title={link.name}
              >
                {IconComponent && (
                  <span className="group-hover:text-green-500 transition-colors duration-200">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                  </span>
                )}
                <span className="group-hover:underline underline-offset-2 text-sm sm:text-base">
                  {link.name}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Collaboration;
