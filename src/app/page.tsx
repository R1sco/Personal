import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Collaboration from "../components/Collaboration";
import Header from "../components/Header"; // Impor Header
import { IconName } from "../components/icons"; // Import IconName

// Define types for better clarity and type safety
interface SocialLinkData {
  name: string;
  url: string;
  iconName: IconName; // Use IconName type
}

interface TechStackData {
  name: string;
  iconName: IconName; // Use IconName type
  baseColor: string; // For Tailwind JIT, e.g., 'red', 'purple', 'blue', 'yellow'
}

export default function Home() {
  const name = "R1sco";
  const profileImageUrl = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWthdXB3cGZjenA0dDQ5dWJwMXpxNW50ZXkycmRwdmI4dm1nZWNxOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9i9fRaNhHfu92/giphy.gif"; // Pastikan path ini benar

  // Bio paragraphs
  const bioParagraphs: string[] = [
    "Hello there, I'm Risco currently studying at University of Muhammadiyah Surakarta, Indonesia.",
    "I'm passionate about game, web development, data science, cryptocurrency and machine learning."
  ];

  // Tech Stack data
  // Social links with correct type
  const socialLinks: SocialLinkData[] = [
    { name: "GitHub", url: "https://github.com/R1sco", iconName: "GitHubIcon" },
    { name: "Telegram", url: "https://t.me/hecoook", iconName: "TelegramIcon" },
    { name: "Email", url: "mailto:riscorizky@gmail.com", iconName: "EmailIcon" },
    { name: "Twitter", url: "https://x.com/Hecok_", iconName: "XIcon" },
  ];

  // Tech Stack data
  const techStack: TechStackData[] = [
    { name: "Laravel", iconName: "LaravelIcon", baseColor: "red" },
    { name: "PHP", iconName: "PHPIcon", baseColor: "purple" },
    { name: "Python", iconName: "PythonIcon", baseColor: "blue" },
    { name: "JavaScript", iconName: "JavaScriptIcon", baseColor: "yellow" },
  ];
  
  // Portfolio projects
  const portfolioProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store built with Laravel and React, featuring product management, cart functionality, and payment integration.",
      technologies: ["Laravel", "React", "MySQL", "Stripe API"],
      imageUrl: "/images/projects/ecommerce.png",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets, built with Python and JavaScript libraries for data processing and visualization.",
      technologies: ["Python", "Flask", "D3.js", "Pandas"],
      imageUrl: "/images/projects/data-viz.jpg",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user authentication, and team collaboration features.",
      technologies: ["PHP", "Vue.js", "Firebase", "Tailwind CSS"],
      imageUrl: "/images/projects/task-app.jpg",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Personal Blog Platform",
      description: "A modern blog platform with a clean design, markdown support, comment system, and SEO optimization for content creators.",
      technologies: ["Laravel", "Alpine.js", "MySQL", "Bootstrap"],
      imageUrl: "/images/projects/blog.jpg",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracker with interactive charts, portfolio management, and price alerts for crypto enthusiasts.",
      technologies: ["React", "Node.js", "CoinGecko API", "Chart.js"],
      imageUrl: "/images/projects/crypto.jpg",
      demoUrl: "#",
      codeUrl: "#"
    },
  ];
  
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Combined Hero and Portfolio Section with Gradient */}
        <div className="w-full max-w-5xl mx-auto mb-16 py-12 sm:py-16 bg-gradient-to-b from-black via-gray-900 to-black rounded-lg px-4 sm:px-6">
          {/* Hero Section */}
          <Hero
            name={name}
            profileImageUrl={profileImageUrl}
            bioParagraphs={bioParagraphs}
            techStack={techStack}
          />
          
          {/* Portfolio Section */}
          <Portfolio
            title="My Projects"
            description="Here are some of the projects I've worked on. Each demonstrates my skills in different technologies and problem domains."
            projects={portfolioProjects}
          />
        </div>
        
        {/* Collaboration Section */}
        <Collaboration
          message="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
          socialLinks={socialLinks}
        />
      </main>
    </div>
  );
}
