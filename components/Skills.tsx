"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning", "Edge AI", "On-Device AI",
      "Agentic AI", "AI Benchmarking", "Model Fine-Tuning", 
      "Prompt Engineering", "Transformer Models", "PyTorch", 
      "NumPy", "Pandas", "ONNX Runtime", "Hugging Face Transformers"
    ]
  },
  {
    title: "Mobile Development",
    items: [
      "Flutter", "Dart", "Firebase", "REST API Integration",
      "State Management", "Authentication Systems", "OTP Verification",
      "Cross-Platform Development"
    ]
  },
  {
    title: "Web Development",
    items: [
      "Next.js", "React", "JavaScript", "TypeScript", "HTML5",
      "CSS3", "Responsive Design", "SEO Optimization", "Progressive Web Apps"
    ]
  },
  {
    title: "Database, Cloud & DevOps",
    items: [
      "Firebase Firestore", "Supabase", "SQL", "Cloud Deployment",
      "Git", "GitHub", "Docker", "Linux", "CI/CD"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="pt-12 pb-24 bg-[#0a0a0a] text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">What Aseem knows</h2>
          <p className="text-gray-400 text-lg">Technologies and domains I work with to bring ideas to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group h-full flex flex-col"
            >
              <div className="mb-4 border-b border-purple-500/20 pb-4">
                <h3 className="text-lg font-semibold text-gray-100">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10 hover:border-purple-500/50 hover:text-purple-300 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
