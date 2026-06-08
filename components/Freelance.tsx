"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";

import GalaxyImg from "./imgs/galaxy.png";
import JascImg from "./imgs/jasc.png";

const freelanceWork = [
  {
    client: "Galaxy Interiors",
    logo: "https://galaxyinteriorspdy.com/logo.png",
    image: GalaxyImg,
    role: "Freelance Web Developer",
    period: "2026",
    description: "Developed a premium business website for an interior design company in Puducherry. Built to showcase their modular kitchens, wardrobes, and living room interiors with a modern, elegant, and responsive aesthetic.",
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    url: "https://galaxyinteriorspdy.com/",
  },
  {
    client: "JASC Pondicherry",
    logo: "https://jasc-pondicherry.com/logo4.png",
    image: JascImg,
    role: "Freelance Web Developer",
    period: "2025",
    description: "Built a premium website for an architecture and construction firm based in Pondicherry. Showcases 3D planning, interior/exterior design, and commercial projects.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "SEO"],
    url: "https://jasc-pondicherry.com/",
  }
];

export default function Freelance() {
  return (
    <section id="freelance" className="py-24 bg-[#0a0a0a] text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-10 h-10 text-purple-500" />
            <h2 className="text-3xl md:text-5xl font-bold">Freelancing</h2>
          </div>
          <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {freelanceWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all"
            >
              {/* Top Image Section */}
              <div className="w-full relative z-10 flex-shrink-0 border-b border-white/10 bg-black/50">
                <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden">
                  {work.image ? (
                    <Image src={work.image} alt={work.client} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-bl-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
                  )}
                </div>
              </div>

              {/* Bottom Text Section */}
              <div className="relative z-10 flex flex-col flex-grow w-full p-6">
                <div className="flex items-center gap-4 mb-4">
                  {work.logo && (
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-1.5 flex-shrink-0 flex items-center justify-center">
                      <img src={work.logo} alt={`${work.client} logo`} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">{work.client}</h3>
                    <p className="text-purple-300/80 text-sm font-medium">{work.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-gray-400 bg-white/5 w-fit px-2.5 py-1 rounded-md mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  {work.period}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {work.description}
                </p>

                <div className="flex flex-col gap-4 pt-4 border-t border-white/10 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[11px] rounded-full bg-white/10 text-gray-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
