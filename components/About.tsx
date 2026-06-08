"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Smartphone, Globe, Briefcase, Award, CheckCircle2 } from "lucide-react";

const skills = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Edge AI",
    description: "Building on-device inference applications focusing on privacy and performance without cloud dependency."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "Creating responsive, fast, and modern web applications using Next.js, React, and Tailwind CSS."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Apps",
    description: "Developing cross-platform mobile experiences with Flutter and Dart, including complex integrations like ML Kit."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "TypeScript & JavaScript",
    description: "Writing scalable, type-safe code for both frontend interfaces and backend logic."
  }
];

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
    <section id="about" className="py-24 bg-[#0a0a0a] text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: About, Experience & Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a developer passionate about modern web and mobile development, specializing in <strong>Edge AI</strong>. 
                By optimizing machine learning models to run efficiently on-device and directly in the browser, I build fast, secure, and privacy-focused applications that eliminate cloud dependency.
              </p>
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
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
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
                <Award className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 lg:mt-0 mt-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h3>
              <p className="text-gray-400">Technologies I work with to bring ideas to life.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
