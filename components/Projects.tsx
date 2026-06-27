"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Github } from "./icons/Github";
import AIEditImg from "./imgs/AIedit.png";
import LightEdgeAiImg from "./imgs/lightedgeai.png";
import HornetImg from "./imgs/hornet.png";
import WakeUpImg from "./imgs/wakeup.png";

const projects = [
  {
    name: "AI-edit-edge",
    description: "Browser-based AI video editor with on-device inference, zero cloud dependency, and enhanced privacy. Made possible by the fine-tuned Hornet model.",
    url: "https://aieditmk1.vercel.app",
    repo: "https://github.com/Kingman9407/AI-edit-edge",
    tags: ["Next.js", "TypeScript", "AI Agent", "Agentic AI", "ONNX Runtime"],
    image: AIEditImg
  },
  {
    name: "LiteEdgeAI",
    description: "A hardware benchmark website tailored for edge AI capabilities and performance testing.",
    url: "https://mark-1-five.vercel.app",
    repo: "https://github.com/Kingman9407/LiteEdgeAI",
    tags: ["Next.js", "JavaScript", "MLC-LLM", "Web-LLM"],
    image: LightEdgeAiImg
  },
  {
    name: "WakeUp",
    description: "Smart alarm application that ensures real wakefulness using ML-based facial recognition and wakefulness detection.",
    url: "",
    repo: "https://github.com/Kingman9407/WakeUp",
    tags: ["Flutter", "Dart", "Google ML Kit", "Provider"],
    image: WakeUpImg
  },
  {
    name: "Hornet",
    description: "A fine-tuned Llama model optimized and quantized into ONNX format, specifically built to power the on-device inference of the AI-edit-edge video editor.",
    url: "https://huggingface.co/Kingman9407/hornet",
    repo: "https://huggingface.co/Kingman9407/hornet",
    tags: ["ONNX", "LLaMA", "Fine-tuned", "Edge AI"],
    image: HornetImg
  }
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full mb-6"></div>
              <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
                A showcase of my recent work centered around Edge AI and performant web applications.
                My overarching aim is to leverage small, highly focused machine learning models that run directly on-device. This approach allows me to deliver powerful, specialized functionality while keeping user privacy and cost-efficiency as the main focus.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative w-full group/carousel">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-5 lg:-translate-x-8 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 backdrop-blur-md transition-all text-white opacity-0 group-hover/carousel:opacity-100 hidden md:flex hover:scale-110 shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-5 lg:translate-x-8 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 backdrop-blur-md transition-all text-white opacity-0 group-hover/carousel:opacity-100 hidden md:flex hover:scale-110 shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-col md:flex-row md:overflow-x-auto scroll-smooth md:snap-x md:snap-mandatory gap-8 md:gap-6 md:pb-8 md:-mx-6 md:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="md:snap-start md:shrink-0 w-full md:w-[350px] lg:w-[320px] group relative flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>

                {/* Image Container */}
                <div className="w-full relative z-10 flex-shrink-0 border-b border-white/10">
                  <div className="relative w-full aspect-video bg-black/20 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <Image src={project.image} alt={project.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="text-white/20 font-medium text-sm flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center mb-2">
                          <span className="text-xl">?</span>
                        </div>
                        Screenshot Pending
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col flex-grow w-full p-6">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 text-xs lg:text-sm rounded-full bg-white/10 text-gray-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs lg:text-sm font-semibold hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs lg:text-sm font-semibold hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
