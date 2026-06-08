"use client";

import { Github } from "./icons/Github";
import { Linkedin } from "./icons/Linkedin";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#050505] text-gray-500 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Aseem Ahamed. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Kingman9407"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aseem-ahamed-49712b338"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
