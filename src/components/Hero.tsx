"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from '../lib/motion';
import { fadeInUp, scrollRevealSettings } from './animations';
import AllIcons, { IconName } from './icons';



interface TechStackItem {
  name: string;
  iconName: IconName;
  baseColor: string; 
}

interface HeroProps {
  name: string;
  bioParagraphs: string[]; 
  profileImageUrl: string;
  techStack: TechStackItem[];
}

const Hero: React.FC<HeroProps> = ({ name, bioParagraphs, profileImageUrl, techStack }) => {
  return (
    <motion.div 
      {...scrollRevealSettings}
      variants={fadeInUp}
      className="w-full max-w-xl mx-auto flex flex-col items-center text-center mb-16 sm:mb-20" 
    >
      {/* Profil GIF */} 
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-4 sm:mb-6"
      >
        <Image
          src={profileImageUrl}
          alt="Profile picture"
          width={96}
          height={96}
          className="rounded-full"
          unoptimized={true}
        />
      </motion.div>

      {/* Name */} 
      <motion.h1 
        variants={fadeInUp}
        className="text-3xl sm:text-5xl text-white font-bold mb-4 sm:mb-6"
      >
        {name}
      </motion.h1>

      {/* Bio */} 
      <motion.div variants={fadeInUp} className="mb-6">
        {bioParagraphs.map((paragraph, index) => (
          <p key={index} className="text-sm sm:text-lg text-gray-300 mb-3 text-center">
            {paragraph}
          </p>
        ))}
      </motion.div>

      
      {/* Tech Stack Icons */} 
      <motion.div variants={fadeInUp} className="w-full mb-6">
        <p className="text-base sm:text-lg text-gray-200 mb-4 text-center">
          My Tech Stack:
        </p>
        <div className="flex gap-4 sm:gap-6 items-center justify-center flex-wrap">
          {techStack.map((tech) => {
            const IconComponent = AllIcons[tech.iconName];
            const borderColor = `border-${tech.baseColor}-500/30 hover:border-${tech.baseColor}-500/70`;
            const textColor = `text-${tech.baseColor}-500`;
            return (
              <motion.div 
                key={tech.name} 
                className="group flex flex-col items-center"
                whileHover={{ y: -3 }}
              >
                <div className={`p-2.5 sm:p-3 border rounded-lg transition-all duration-200 ${borderColor}`}>
                  {IconComponent ? <IconComponent className={`size-7 sm:size-8 transition-colors duration-200 ${textColor}`} /> : null}
                </div>
                <span className="text-xs text-gray-400 mt-2">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Hero;
