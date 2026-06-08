"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 backdrop-blur-md"
        >
          <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Whether you have a question about my projects or want to collaborate on the next big Edge AI or mobile app idea, my inbox is open.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:example@example.com"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            <a
              href="https://github.com/Kingman9407"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              GitHub
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/aseem-ahamed-49712b338"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              LinkedIn
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
