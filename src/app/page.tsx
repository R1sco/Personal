import Link from "next/link";
import React from "react";
import Image from 'next/image';

// Component icon SVG
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.236 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <g>
      <path
        d="M20.9717 8C20.9717 8 16.9505 13 12.0005 13C7.05051 13 3.0293 8 3.0293 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
      />
    </g>
  </svg>
);


const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.06-.043-.096-.057-.037-.146-.014-.21.011-.115.042-1.86 1.17-5.26 3.24-.64.39-1.21.59-1.78.58-.59-.01-1.037-.17-1.434-.31-.454-.16-.78-.244-.78-.54l.002-.28c.002-.24.177-.37.365-.455 1.17-.508 7.385-3.754 7.545-3.83.07-.034.144-.05.213-.05z"></path>
  </svg>
);

const XIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="size-4">
    <title>
      X
    </title>
    <path
      fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z">
  </path>
  </svg>
);

export default function Home() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/R1sco", icon: GitHubIcon },
    { name: "Telegram", url: "https://t.me/hecoook", icon: TelegramIcon },
    { name: "Email", url: "mailto:riscorizky@gmail.com", icon: EmailIcon },
    { name: "Twitter", url: "https://x.com/Hecok_", icon: XIcon },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-16 lg:p-24 bg-black text-foreground">
    <div className="max-w-xl w-full flex flex-col items-center text-center">

        {/* Profil GIF - Fix margin mobile & desktop */} 
        <Image
          src="https://media1.tenor.com/m/LiqhUEDmWcAAAAAC/cute.gif"
          alt="Cute animated character"
          width={96}
          height={96}
          className="rounded-full mb-2 sm:mb-6" 
          unoptimized={true}
        />

        {/* size font mobile/desktop optimalize */}
        <h1 className="text-3xl sm:text-5xl text-white font-bold mb-4 sm:mb-6"> 
          R1sco
        </h1>

        {/* Bio Container - fix margin more consistent in desktop */}
        <div className="bg-black backdrop-blur-sm px-4 py-3 sm:p-4 rounded-lg w-full max-w-md mb-6 sm:mb-6"> 
          {/* Bio Paragraphs - text-left */}
          <p className="text-sm sm:text-lg text-gray-300 mb-3 text-left">
            Hello there, I am an guy from Indonesia. Currently involved on web game development.
          </p>
          <p className="text-sm sm:text-lg text-gray-300 mb-3 text-left">
            I&apos;m passionate about web game development, web development, data science, cryptocurrency and machine learning.
          </p>
          <p className="text-sm sm:text-lg text-gray-300 text-left">
            Available to collaborate on any project.
          </p>
          {/* Spoiler text */} 
          <p 
            className="text-sm bg-black text-transparent hover:text-gray-300 rounded px-2 py-1 cursor-pointer transition-colors duration-200 inline-block mt-3 hidden md:inline-block"
            title="Hover untuk melihat"
          >
            (And also relationship ♡)
          </p>
          <p className="text-sm text-gray-500 mt-1 md:hidden">
            (And also relationship ♡)
          </p>
        </div>

        {/* Link Sosial */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") || link.url.startsWith("mailto:") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              // resize padding vertical mobile
              className="flex items-center px-3 py-1 sm:py-2 rounded hover:bg-gray-800 text-muted-foreground hover:text-white transition-all duration-200 group mx-1"
              title={link.name}
            >
              <span className="group-hover:text-green-500 transition-colors duration-200">
                {React.createElement(link.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" })}
              </span>
              <span className="group-hover:underline underline-offset-2 text-sm sm:text-base"> {/* Perkecil font link sosial mobile */}
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
