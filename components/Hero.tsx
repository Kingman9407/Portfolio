"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Github } from "./icons/Github";
import { Linkedin } from "./icons/Linkedin";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500"
          >
            <img
              src="https://avatars.githubusercontent.com/u/183271259?v=4"
              alt="Aseem Ahamed"
              className="w-full h-full rounded-full object-cover bg-black"
            />
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Aseem Ahamed</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
              Crafting intelligent Edge AI solutions and cross-platform experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/Kingman9407"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white font-semibold transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aseem-ahamed-49712b338"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white font-semibold transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
