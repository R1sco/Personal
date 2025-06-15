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
  const profileImageUrl = "https://i.imgur.com/y9NqV6Q.jpeg"; // Pastikan path ini benar

  // Bio paragraphs
  const bioParagraphs: string[] = [
    "Hello there, I'm Risco currently studying at University of Muhammadiyah Surakarta, Indonesia.",
    "I'm passionate about game, web development, data science, Crypto Currency and Cyber Security."
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
      title: "Tournament Promotion",
      description: "official information platform for the prestigious 2025 futsal tournament. This website is designed to provide an ads and interactive experience for visitors.",
      technologies: ["HTML5", "CSS3", "Anime.js", "Javascript"],
      imageUrl: "https://i.imgur.com/C7a1KtJ.png",
      demoUrl: "https://futsal-championship-2025-unique-f5pl4.netlify.app/",
      codeUrl: "https://github.com/R1sco/Tournament-Website"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets, built with Python and JavaScript libraries for data processing and visualization.",
      technologies: ["Python", "Flask", "D3.js", "Pandas"],
      imageUrl: "/images/projects/DataVisualization/datavisualization.png",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracker with interactive charts, portfolio management, and price alerts for crypto enthusiasts.",
      technologies: ["React", "Node.js", "CoinGecko API", "Chart.js"],
      imageUrl: "https://i.imgur.com/uc9cYm5.png",
      demoUrl: "https://crypto-currency-tracker-app-d79c6.netlify.app",
      codeUrl: "https://github.com/R1sco/Crypto-Tracker",
    },
  ];
  
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Header />
      <main className="container mx-auto px-17 py-3 max-w-10xl">
        {/* Combined Hero and Portfolio Section with Gradient */}
        <div className="w-full max-w-5xl mx-auto mb-12 py-8 sm:py-6 bg-gradient-to-b from-black via-gray-900 to-black rounded-lg px-4 sm:px-6">
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
