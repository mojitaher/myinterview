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
            Mojtaba Taherkhani / مجتبی طاهرخانی
          </h1>
          <p className="text-xl font-semibold text-gray-600 dark:text-gray-400">
            Front-End Developer / توسعه‌دهنده فرانت‌اند
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
            About Me / درباره من
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-left">
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
            <div className="text-right" dir="rtl">
              <p>
                من توسعه‌دهنده فرانت‌اند باانگیزه‌ای هستم که به خلق برنامه‌های
                وب تمیز، بهینه و ریسپانسیو علاقه دارم.
              </p>
              <p className="mt-4">
                با تجربه عملی در React، Next.js و TypeScript، از تبدیل طرح‌ها به
                رابط‌های کاربری دقیق و کاربرپسند لذت می‌برم.
              </p>
              <p className="mt-4">
                مشتاق یادگیری و رشد حرفه‌ای هستم و در محیط‌های همکاری که نوآوری
                و کیفیت اهمیت دارد، بهتر عمل می‌کنم.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">
            Skills / مهارت‌ها
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>HTML5, CSS3, Sass, JavaScript (ES6+)</li>
              <li>React, Next.js, Redux, Context API</li>
              <li>Tailwind CSS, CSS Modules, Responsive Design</li>
              <li>Webpack, Vite, Axios, Fetch API</li>
              <li>TypeScript, RESTful API integration, Git</li>
            </ul>
            <ul
              className="list-disc list-inside space-y-2 text-right"
              dir="rtl"
            >
              <li>HTML5، CSS3، Sass، جاوااسکریپت (ES6+)</li>
              <li>React، Next.js، Redux، Context API</li>
              <li>Tailwind CSS، CSS Modules، طراحی ریسپانسیو</li>
              <li>Webpack، Vite، Axios، Fetch API</li>
              <li>TypeScript، ادغام RESTful API، Git</li>
            </ul>
          </div>
        </section>

        {/* My Website */}
        <section className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">
            My Website / وب‌سایت من
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
            <a
              href="https://myinterview-moji.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-right"
              dir="rtl"
            >
              وب‌سایت شخصی من
            </a>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-6">
            Projects / پروژه‌ها
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6 text-left">
              <h3 className="text-xl font-semibold mb-1">IMDb Project</h3>
              <p>
                Developed a dynamic and responsive movie database web
                application using React and Tailwind CSS.
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
            <div className="mb-6 text-right" dir="rtl">
              <h3 className="text-xl font-semibold mb-1">پروژه IMDb</h3>
              <p>
                توسعه یک برنامه وب پایگاه داده فیلم داینامیک و ریسپانسیو با
                React و Tailwind CSS.
              </p>
              <p className="mt-2">
                اتصال به APIهای خارجی فیلم برای دریافت و نمایش اطلاعات به‌روز.
              </p>
              <p className="mt-2">
                تضمین قابلیت استفاده در دستگاه‌های مختلف با اصول طراحی
                ریسپانسیو.
              </p>
              <a
                href="https://github.com/mojitaher/IMDB.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                مخزن گیت‌هاب
              </a>
            </div>

            <div className="mb-6 text-left">
              <h3 className="text-xl font-semibold mb-1">
                Hack Project (HTML & CSS)
              </h3>
              <p>
                Created a clean and semantic website using pure HTML and CSS
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
            <div className="mb-6 text-right" dir="rtl">
              <h3 className="text-xl font-semibold mb-1">
                پروژه Hack (HTML و CSS)
              </h3>
              <p>
                ساخت وب‌سایتی تمیز و معنایی با استفاده از HTML و CSS خالص بدون
                جاوااسکریپت.
              </p>
              <p className="mt-2">
                تمرکز بر دقت چیدمان و سازگاری مرورگرهای مختلف.
              </p>
              <a
                href="https://github.com/mojitaher/hacker.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                مخزن گیت‌هاب
              </a>
            </div>

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
            <div className="text-right" dir="rtl">
              <h3 className="text-xl font-semibold mb-1">
                پروژه مصاحبه (وب‌سایت شخصی)
              </h3>
              <p>توسعه وب‌سایت شخصی مصاحبه جهت معرفی خود و نمایش مهارت‌هایم.</p>
              <p className="mt-2">
                پیاده‌سازی با اصول طراحی ریسپانسیو برای اطمینان از قابلیت
                استفاده در دستگاه‌های مختلف.
              </p>
              <p className="mt-2">تمرکز بر چیدمان تمیز و ناوبری کاربرپسند.</p>
              <a
                href="https://github.com/mojitaher/myinterview.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                مخزن گیت‌هاب
              </a>
            </div>
          </div>
        </section>

        {/* Education & Military Service */}
        <section className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">
            Education & Military Service / تحصیلات و خدمت سربازی
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-left">
              Completed Front-End Development Coding Bootcamp.
            </p>
            <p className="text-right" dir="rtl">
              دوره بوت‌کمپ توسعه فرانت‌اند را گذرانده‌ام.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
            <p className="text-left">
              Military Service: Exempted from mandatory military service.
            </p>
            <p className="text-right" dir="rtl">
              وضعیت سربازی: معاف از خدمت به دلیل کفالت.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
