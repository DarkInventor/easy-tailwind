"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Code,
  Zap,
  Palette,
  Layout,
  Users,
  Menu,
} from "lucide-react";

const AnimatedBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0px 0px", "-200px -200px"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
        backgroundSize: "100px 100px",
      }}
      animate={controls}
    />
  );
};

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <header className="border-b border-slate-800/50 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex items-center">
              <svg
                viewBox="0 0 248 31"
                className="text-slate-900 dark:text-white w-auto h-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                  fill="#38bdf8"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Docs
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Components
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Showcase
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-slate-400 hover:text-slate-900 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                className="hidden text-black md:inline-flex border-slate-700 hover:bg-slate-800 hover:bg-slate-200 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"></path>
                </svg>
                Sign in
              </Button>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="mt-20 sm:mt-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Rapidly build modern websites
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600">
                    without ever{" "}
                  </span>{" "}
                  leaving your HTML.
                </h1>
                <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
                  A utility-first CSS framework packed with classes like flex,
                  pt-4, text-center and rotate-90 that can be composed to build
                  any design, directly in your markup.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-12 px-6 rounded-lg w-full sm:w-auto transition-colors">
                    Get started
                  </Button>
                  <Button
                    variant="outline"
                    className="text-black border-slate-700 hover:bg-slate-200 h-12 px-6 rounded-lg w-full sm:w-auto transition-colors"
                  >
                    Live demo
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
                Everything you need to build modern UIs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Code className="h-8 w-8 text-sky-500" />,
                    title: "Developer experience",
                    description:
                      "A fully-featured developer environment with instant reloads and an integrated component browser.",
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-sky-500" />,
                    title: "Lightning-fast builds",
                    description:
                      "Tailwind automatically removes all unused CSS in production, meaning your final build is as small as it could possibly be.",
                  },
                  {
                    icon: <Palette className="h-8 w-8 text-sky-500" />,
                    title: "Customization",
                    description:
                      "Easily customize your design system to match your brand using our powerful theming features.",
                  },
                  {
                    icon: <Layout className="h-8 w-8 text-sky-500" />,
                    title: "Beautiful UI components",
                    description:
                      "Over 500+ professionally designed, fully responsive UI components, ready to be copied and pasted into your projects.",
                  },
                  {
                    icon: <Users className="h-8 w-8 text-sky-500" />,
                    title: "Collaborative",
                    description:
                      "Built to be shared. Tailwind UI makes it easy for your entire team to contribute to your design system.",
                  },
                  {
                    icon: <ChevronRight className="h-8 w-8 text-sky-500" />,
                    title: "Ready for production",
                    description:
                      "Tailwind is used by tens of thousands of companies, and is battle-tested in production environments.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Code Example Section */}
          <section className="py-10 sm:py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4 md:mb-6">
                    Build whatever you want, seriously.
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8">
                    Because Tailwind is so low-level, it never encourages you to
                    design the same site twice. Even with the same color palette
                    and sizing scale, it's easy to build the same component with
                    a completely different look in the next project.
                  </p>
                  <Button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-10 md:h-12 px-4 md:px-6 rounded-lg transition-colors">
                    Browse components
                  </Button>
                </div>
                <motion.div
                  className="hidden lg:block bg-slate-800 rounded-lg p-4 md:p-6 shadow-4xl backdrop-blur bg-transparent bg-slate-200 border-0 border-white mt-8 md:mt-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <pre className="text-xs sm:text-sm bg-slate-200 overflow-x-auto border border-slate-200 ">
                    <code className="text-black">{`<figure class="md:flex bg-slate-100 rounded-xl p-4 md:p-8 dark:bg-slate-800">
  <img class="w-20 h-20 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="pt-4 md:pt-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-base md:text-lg font-medium">
        "Tailwind CSS is the only framework that I've seen scale
        on large teams. It's easy to customize, adapts to any design,
        and the build size is tiny."
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>`}</code>
                  </pre>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 sm:py-32 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
                Loved by developers worldwide
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "John Doe",
                    role: "Frontend Developer",
                    quote:
                      "Tailwind CSS has completely revolutionized my workflow. It's intuitive, flexible, and incredibly powerful.",
                  },
                  {
                    name: "Jane Smith",
                    role: "UI/UX Designer",
                    quote:
                      "As a designer, I love how Tailwind allows me to quickly prototype and iterate on designs without leaving my HTML.",
                  },
                  {
                    name: "Mike Johnson",
                    role: "Full Stack Developer",
                    quote:
                      "The utility-first approach of Tailwind has made my projects more maintainable and significantly faster to develop.",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-700 rounded-lg p-6 shadow-lg hover:bg-slate-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <p className="text-slate-300 mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-slate-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 sm:py-32 mb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Get started with Tailwind CSS today and experience the power of
                utility-first CSS for yourself.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-12 px-8 rounded-lg transition-colors">
                  Get started for free
                </Button>
                <Button
                  variant="outline"
                  className="text-black border-slate-600 hover:bg-slate-200 h-12 px-8 rounded-lg transition-colors"
                >
                  View documentation
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-slate-900 border-t border-slate-800 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
                  Products
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Tailwind CSS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Tailwind UI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Headless UI
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Screencasts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Playground
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
                  Community
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-slate-400">
                © 2023 Tailwind Labs Inc. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
