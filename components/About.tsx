"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    period: "Aug 2025",
    role: "Website Development Intern",
    company: "Levitate Studios",
    description: "Built and deployed a responsive product-display website, gaining real-world experience in UI/UX design, SEO, and modern web workflows."
  }
];

const achievements = [
  "Runner-Up — TechFusion Project Expo (Billit App) in Crescent College Chennai"
];

export default function About() {
  return (
    <section id="about" className="pt-24 pb-12 bg-[#0a0a0a] text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16">
          {/* About, Experience & Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">About Me</h2>
              <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                <p>
                  I'm a software developer specializing in Edge AI, modern web development, and cross-platform mobile applications. My expertise includes Flutter, Next.js, Python, and machine learning, with a strong focus on optimizing AI models to run efficiently on devices and directly in web browsers. I enjoy building fast, privacy-focused applications that reduce cloud dependency while delivering seamless user experiences.
                </p>
                <p>
                  Through internships, technical competitions, and personal projects, I have gained hands-on experience in web development, mobile app development, machine learning optimization, and AI-powered product development. I am passionate about solving real-world problems with technology and continuously exploring emerging areas such as on-device AI, browser-based inference, and intelligent software systems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-white/10">
                    <div className="absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    <div className="text-sm text-blue-400 font-semibold mb-1">{exp.period}</div>
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <div className="text-gray-400 text-sm mb-2">{exp.company}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
