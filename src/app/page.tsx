import Link from "next/link";
import React from "react";
import Image from 'next/image';

// Komponen Ikon SVG
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.236 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <g id="SVGRepo_iconCarrier">
      <path
        d="M18.8944 4.34399C17.5184 3.71467 16.057 3.256 14.5317 3C14.3397 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14394 4.13067C8.9946 3.77866 8.77059 3.33067 8.58925 3C7.05328 3.256 5.59194 3.71467 4.22555 4.34399C1.46289 8.41865 0.716219 12.3973 1.08955 16.3226C2.92421 17.6559 4.6949 18.4666 6.43463 19C6.86129 18.424 7.2453 17.8053 7.57597 17.1546C6.94663 16.92 6.3493 16.632 5.7733 16.2906C5.92263 16.184 6.07197 16.0667 6.21064 15.9493C9.68796 17.5387 13.4544 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5237 17.1546C15.8543 17.8053 16.2384 18.424 16.665 19C18.4037 18.4666 20.185 17.6559 22.0101 16.3226C22.4687 11.7787 21.2837 7.83202 18.8944 4.34399ZM8.05596 13.9013C7.01061 13.9013 6.15728 12.952 6.15728 11.7893C6.15728 10.6267 6.98928 9.67731 8.05596 9.67731C9.11194 9.67731 9.97591 10.6267 9.95457 11.7893C9.95457 12.952 9.11194 13.9013 8.05596 13.9013ZM15.065 13.9013C14.0197 13.9013 13.1653 12.952 13.1653 11.7893C13.1653 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9637 11.7893C16.9637 12.952 16.1317 13.9013 15.065 13.9013Z"
      />
    </g>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <g> {/* Grup bisa dipertahankan atau dihapus */}
      <path
        d="M20.9717 8C20.9717 8 16.9505 13 12.0005 13C7.05051 13 3.0293 8 3.0293 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
      />
    </g>
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
    { name: "Discord", url: "#", icon: DiscordIcon, value: "Arap5493" },
    { name: "Email", url: "mailto:riscorizky@gmail.com", icon: EmailIcon },
    { name: "Twitter/X", url: "https://x.com/Hecok_", icon: XIcon },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-16 lg:p-24 bg-black text-foreground">
    <div className="max-w-xl w-full flex flex-col items-center text-center">

        {/* Gambar Profil GIF */}
        <Image
          src="https://media1.tenor.com/m/LiqhUEDmWcAAAAAC/cute.gif"
          alt="Cute animated character"
          width={128}
          height={128}
          className="rounded-full mb-6"
          unoptimized={true}
        />

        {/* Nama */}
        <h1 className="text-5xl text-white sm:text-5xl font-bold mb-6">
          R1sco
        </h1>

        {/* Bio Container dengan background sedikit transparan */}
        <div className="bg-black backdrop-blur-sm p-4 rounded-lg w-full max-w-md mb-10">
          {/* Bio Paragraphs */}
          <p 
            className="text-lg bg-black text-transparent hover:text-gray-300 rounded px-2 py-1 cursor-pointer transition-colors duration-200 inline-block mb-3 hidden md:inline-block"
            title="Hover untuk melihat"
          >You Found Me!
          </p>
          <p className="text-lg text-gray-500 mb-10 md:hidden">
            You Found Me!
          </p>
          
          <p className="text-lg text-gray-300 mb-3">
            Hello there, I am a man from Indonesia. Currently involved on web game development.
          </p>
          <p className="text-lg text-gray-300 mb-3">
            Currently, studying at the University in Indonesia. Interested about artificial intelligence technologies.
          </p>
          <p className="text-lg text-gray-300">
            Available to collaborate on any project.  
          </p>
          <p 
            className="text-lg bg-black text-transparent hover:text-gray-300 rounded px-2 py-1 cursor-pointer transition-colors duration-200 inline-block mt-3 hidden md:inline-block"
            title="Hover untuk melihat"
          >(And also relationship ♡)
          </p>
          <p className="text-lg text-gray-500 mt-2 md:hidden">
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
              className="flex items-center px-3 py-2 rounded hover:bg-gray-800 text-muted-foreground hover:text-white transition-all duration-200 group mx-1"
              title={link.name + (link.value ? `: ${link.value}` : '')}
            >
              {/* Gunakan React.createElement untuk merender komponen ikon secara dinamis dengan efek hover warna */}
              <span className="group-hover:text-navy-500 transition-colors duration-200">
                {React.createElement(link.icon, { className: "w-5 h-5 mr-2" })}
              </span>
              <span className="group-hover:underline underline-offset-2">
                {link.name === "Discord" ? link.value : link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
