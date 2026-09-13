import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "NeuroAI",
      year: "2025",
      role: "AI & Deep Learning",
      subtitle: "EEG Based ASD Intelligence Platform. Analyzes emotional patterns and cognitive states to predict therapy response effectiveness using EEG brain signals.",
      tags: ["Python", "Machine Learning", "Deep Learning", "EEG Processing", "AI Models"],
      link: "https://github.com/pratikshaa27/NeuroAI",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-7 min-h-[420px]",
    },
    {
      id: 2,
      title: "OliviaChain",
      year: "2025",
      role: "Flutter Developer",
      subtitle: "Supply Chain Management & Delivery System. Mobile app enabling parlours to order & track deliveries, distributors to manage inventory, and admins to view analytics.",
      tags: ["Flutter", "Java", "SQLite", "Android Studio", "Git"],
      link: "https://github.com/pratikshaa27",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-5 min-h-[420px]",
    },
    {
      id: 3,
      title: "Mindflow",
      year: "2025",
      role: "Frontend & APIs",
      subtitle: "Personalized Productivity & Well-being Platform. Structured roadmaps, chatbot, mental well-being tracking, gamified rewards, and public speaking tasks.",
      tags: ["Machine Learning", "Flask", "React.js", "Gamification", "Python"],
      link: "https://github.com/pratikshaa27",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-5 min-h-[400px]",
    },
    {
      id: 4,
      title: "Re-dact",
      year: "2024",
      role: "Frontend Designer & ML",
      subtitle: "AI-Powered Secure Data Redaction Tool. Leveraging NLP and machine learning to redact and obfuscate sensitive personal identifiers from documents across formats.",
      tags: ["Machine Learning", "PyQt", "React.js", "NLP", "Python"],
      link: "https://github.com/pratikshaa27",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-7 min-h-[400px]",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span>Portfolio Showcase</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Featured <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          Live systems, AI-powered tools, and mobile architectures I have built and contributed to.
        </p>
      </motion.div>

      {/* 12-Column Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 ${project.gridClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-neutral-950">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-75 transform-gpu"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 pointer-events-none" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-between">
              {/* Top Row: Year & Role Badge */}
              <div className="flex items-center justify-between gap-2 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-primary/20 text-primary-foreground backdrop-blur-md border border-primary/30 shadow-sm">
                  {project.role}
                </span>
                <span className="text-xs font-mono font-bold text-white/70 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  {project.year}
                </span>
              </div>

              {/* Bottom Row: Title, Subtitle, Tags, and Icon */}
              <div className="flex items-end justify-between gap-4 z-10">
                <div className="max-w-lg space-y-2.5">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-white/85 line-clamp-3 leading-relaxed">
                    {project.subtitle}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/15 text-white backdrop-blur-sm border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Arrow Action Icon */}
                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300 rotate-45 group-hover:rotate-0 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
