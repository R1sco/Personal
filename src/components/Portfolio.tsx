"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import { motion, AnimatePresence } from '../lib/motion';
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
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
    className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300 flex flex-col cursor-pointer"
    onClick={() => setSelectedProject(project)}
  >
    <div className="overflow-hidden">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        unoptimized
      />
    </div>
    <div className="p-3 flex items-center justify-center">
      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>
    </div>
  </motion.div>
))}
         </motion.div>
  </motion.div>

  <AnimatePresence>
    {selectedProject && (
      <motion.div
        className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50"
        onClick={() => setSelectedProject(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="bg-gray-800 text-white p-6 rounded-lg max-w-md w-full relative"
          onClick={e => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl leading-none"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-2 pb-2 border-b border-gray-600">
            {selectedProject.title}
          </h2>
          <p className="mb-4">{selectedProject.description}</p>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Technologies:</h3>
            <ul className="list-disc list-inside space-y-1">
              {selectedProject.technologies.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <a
              href={selectedProject.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Live Demo
            </a>
            <a
              href={selectedProject.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Code
            </a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</>
  );
};
export default Portfolio;