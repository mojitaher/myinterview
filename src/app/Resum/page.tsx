"use client";
import { useTheme } from "../context/theme";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Resume() {
  const { theme, toggleTheme } = useTheme()!;
  return (
    <>
      <div>
        <div className="absolute top-5 left-25 sm:opacity-0 lg:opacity-100">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-1 rounded-xl dark:bg-transparent bg-gray-200 border border-[#00e6d9] text-[#00e6d9] hover:bg-[#00e6d922] hover:shadow-[0_0_15px_#00e6d9] transition-all duration-300 select-none"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg font-sans text-gray-800 dark:text-gray-100">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-1 text-indigo-700 dark:text-indigo-400">
            Mojtaba Taherkhani
          </h1>
          <p className="text-xl font-semibold text-gray-600 dark:text-gray-400">
            Front-End Developer
          </p>
          <div className="mt-3 text-gray-600 dark:text-gray-400 space-x-4">
            <a
              href="mailto:mojtabataherkhani80@gmail.com"
              className="hover:underline"
            >
              mojtabataherkhani80@gmail.com
            </a>
            <span>|</span>
            <a href="tel:+989034155124" className="hover:underline">
              +98 9034155124
            </a>
          </div>
        </header>

        {/* About Me */}
        <section className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">
            About Me
          </h2>
          <div>
            <p>
              I am a motivated Front-End Developer with a strong passion for
              creating clean, efficient, and responsive web applications.
            </p>
            <p className="mt-4">
              With hands-on experience in React, Next.js, and TypeScript, I
              enjoy turning designs into pixel-perfect, user-friendly
              interfaces.
            </p>
            <p className="mt-4">
              I am eager to learn and grow professionally, and I thrive in
              collaborative environments where innovation and quality matter.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>HTML5, CSS3, Sass, JavaScript (ES6+)</li>
              <li>React, Next.js, Redux, Context API</li>
              <li>Tailwind CSS, CSS Modules, Responsive Design</li>
              <li>Webpack, Vite, Axios, Fetch API</li>
              <li>TypeScript, RESTful API integration, Git</li>
            </ul>
          </div>
        </section>

        {/* My Website */}
        <section className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">
            My Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://myinterview-moji.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-left"
            >
              My Personal Website
            </a>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-6">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weather Project */}
            <div className="mb-6 text-left">
              <h3 className="text-xl font-semibold mb-1">Weather Project</h3>
              <p>
                I developed a responsive weather application using{" "}
                <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 drop-shadow-xl">
                  Next.js
                </strong>
                ,{" "}
                <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 drop-shadow-xl">
                  TypeScript
                </strong>
                , and{" "}
                <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 drop-shadow-xl">
                  Tailwind CSS
                </strong>
                , with a strong focus on writing clean, modular, and
                maintainable code.
              </p>
              <p className="mt-2">
                The project was structured with reusable components and type
                safety in mind, ensuring scalability and reducing potential
                bugs.{" "}
                <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 drop-shadow-xl">
                  Tailwind CSS
                </strong>{" "}
                was leveraged to achieve a modern, consistent design system,
                while{" "}
                <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 drop-shadow-xl">
                  Next.js
                </strong>{" "}
                features such as server-side rendering and optimized routing
                were utilized to enhance performance. This combination of tools
                allowed me to deliver a smooth, reliable, and professional user
                experience across devices.
              </p>
              <a
                href="https://github.com/mojitaher/weather.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub Repository
              </a>
            </div>

            {/* IMDb Project */}
            <div className="mb-6 text-left">
              <h3 className="text-xl font-semibold mb-1">IMDb Project</h3>
              <p>
                Developed a dynamic and responsive movie database web
                application using{" "}
                <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 drop-shadow-xl">
                  React
                </strong>{" "}
                and{" "}
                <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 drop-shadow-xl">
                  Tailwind CSS.
                </strong>
              </p>
              <p className="mt-2">
                Integrated with external movie APIs to fetch and display
                up-to-date movie information.
              </p>
              <p className="mt-2">
                Ensured cross-device usability with responsive design
                principles.
              </p>
              <a
                href="https://github.com/mojitaher/IMDB.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub Repository
              </a>
            </div>

            {/* Hack Project */}
            <div className="mb-6 text-left">
              <h3 className="text-xl font-semibold mb-1">
                Hack Project (HTML & CSS)
              </h3>
              <p>
                Created a clean and semantic website using pure{" "}
                <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 ">
                  HTML
                </strong>{" "}
                and{" "}
                <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 ">
                  CSS
                </strong>{" "}
                without JavaScript.
              </p>
              <p className="mt-2">
                Focused on layout precision and cross-browser compatibility.
              </p>
              <a
                href="https://github.com/mojitaher/hacker.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub Repository
              </a>
            </div>

            {/* Interview Project */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-1">
                Interview Project (Personal Website)
              </h3>
              <p>
                Developed a personal interview website introducing myself and
                showcasing my skills.
              </p>
              <p className="mt-2">
                Implemented with responsive design principles to ensure
                usability on various devices.
              </p>
              <p className="mt-2">
                Focused on clean layout and user-friendly navigation.
              </p>
              <a
                href="https://github.com/mojitaher/myinterview.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </section>

        {/* Education & Military Service */}
        <section className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">
            Education & Military Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-left">
              Completed Front-End Development Coding Bootcamp.
            </p>
            <p className="text-left">
              Military Service: Exempted from mandatory military service.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
