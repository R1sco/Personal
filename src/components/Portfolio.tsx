"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from '../lib/motion';
import { fadeInUp, scaleIn, staggerContainer, scrollRevealSettings } from './animations';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
}

interface PortfolioProps {
  title: string;
  description: string;
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ title, description, projects }) => {
  return (
    <motion.div 
      {...scrollRevealSettings}
      variants={fadeInUp}
      id="portfolio" 
      className="w-full"
    >
      <motion.h2 
        variants={scaleIn} 
        className="text-2xl sm:text-3xl text-white font-bold mb-6 text-center"
      >
        {title}
      </motion.h2>
      <motion.p 
        variants={fadeInUp} 
        className="text-gray-400 text-center mb-8 max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
      
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={fadeInUp}
            className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300 flex flex-col"
          >
            <div className="overflow-hidden">
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                unoptimized={true}
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <motion.h3 variants={fadeInUp} className="text-xl font-semibold text-white mb-2">{project.title}</motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-400 text-sm mb-4 flex-1">{project.description}</motion.p>
              
              <motion.div variants={fadeInUp} className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      variants={scaleIn}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex gap-3">
                <Link 
                  href={project.demoUrl} 
                  className="text-sm py-1 px-3 border border-blue-600/30 text-blue-400 rounded hover:bg-blue-900/20 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
                <Link 
                  href={project.codeUrl} 
                  className="text-sm py-1 px-3 border border-gray-600/30 text-gray-400 rounded hover:bg-gray-800 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Code
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
