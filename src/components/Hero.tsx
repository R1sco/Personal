"use client";

import React, { useRef, useEffect } from 'react';
import TextTypewriter from './TextTypewriter';
import Image from 'next/image';



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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const profileEl = containerRef.current.querySelector('.anime-profile');
    const items = containerRef.current.querySelectorAll('.anime-fade-up');

    import('animejs').then((anime: any) => {
      
      anime.timeline({ easing: 'easeOutQuad' })
        .add({ targets: profileEl, scale: [0.6,1], opacity: [0,1], duration:800 })
        .add({ targets: items, translateY: [20,0], opacity: [0,1], duration:600, delay: anime.stagger(150) });

    });
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-xl mx-auto flex flex-col items-center text-center mb-12 sm:mb-16">
      {/* Profil GIF */} 
      <div className="anime-profile mb-4 sm:mb-4">
        <Image
          src={profileImageUrl}
          alt="Profile picture"
          width={96}
          height={96}
          className="rounded-full"
          unoptimized={true}
        />
      </div>

      {/* Name */} 
      <h1 className="anime-fade-up text-3xl sm:text-5xl text-white font-bold mb-4 sm:mb-6">
        {name}
      </h1>

      {/* Bio */} 
      <div className="mb-6">
        {bioParagraphs.map((paragraph, index) => (
          <TextTypewriter
            key={index}
            className="text-sm sm:text-lg text-gray-300 mb-3 text-center"
            text={paragraph}
            speed={30}
          />
        ))}
      </div>

      {/* Tech Stack Icons */} 
      <div className="anime-fade-up w-full mb-6">
        <p className="text-base sm:text-lg text-gray-200 mb-4 text-center">
          My Tech Stack:
        </p>
        <div className="flex gap-4 sm:gap-6 items-center justify-center flex-wrap">
          {techStack.map((tech) => {
            const IconComponent = AllIcons[tech.iconName];
            const borderColor = `border-${tech.baseColor}-500/30 hover:border-${tech.baseColor}-500/70`;
            const textColor = `text-${tech.baseColor}-500`;
            return (
              <div 
                key={tech.name} 
                className="group flex flex-col items-center"
              >
                <div className={`p-2.5 sm:p-3 border rounded-lg transition-all duration-200 ${borderColor}`}>
                  {IconComponent ? <IconComponent className={`size-7 sm:size-8 transition-colors duration-200 ${textColor}`} /> : null}
                </div>
                <span className="text-xs text-gray-400 mt-2">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Hero;
