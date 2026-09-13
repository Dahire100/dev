import { motion } from "framer-motion";
import { Trophy, Award, BookCheck, ShieldCheck, Sparkles, Flame, CheckCircle2 } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

const hackathons = [
  {
    title: "Smart India Hackathon (SIH 2024)",
    organization: "IIT Kharagpur, West Bengal",
    placement: "Top 5 Teams Finalist",
    year: "2024",
    highlight: "National Level Innovation",
    icon: Flame,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    description: "Selected among the top 5 teams nationwide at IIT Kharagpur nodal center, solving complex real-world challenges through AI and software engineering.",
  },
  {
    title: "2-Day National Level Hackathon",
    organization: "KKWIEER, Nashik",
    placement: "Top 5 Finalist",
    year: "2025",
    highlight: "National Hackathon",
    icon: Trophy,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    description: "Secured Top 5 standing after 48 continuous hours of rapid prototyping, building an intelligent scalable software solution with live evaluation.",
  },
  {
    title: "Project-Based Learning Competition",
    organization: "KKWIEER, Nashik",
    placement: "1st Prize Winner",
    year: "2024",
    highlight: "1st Prize",
    icon: Award,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    description: "Awarded First Place for designing and delivering an end-to-end technical system with measurable societal and technological utility.",
  },
  {
    title: "National Hackathons & NASA Space Apps",
    organization: "G.H. Raisoni, Pillai College & Sandip Univ.",
    placement: "Active Participant",
    year: "2024",
    highlight: "National Participation",
    icon: Sparkles,
    color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    description: "Competed in high-stakes multi-day hackathons including the 2-Day National Level Hackathon NASA 2024 at Sandip University and regional competitions.",
  },
];

const certifications = [
  {
    title: "AWS Academy Cloud Foundation",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
    badge: "Cloud Foundation",
    skills: ["Cloud Computing", "AWS Services", "EC2", "Cloud Security"],
  },
  {
    title: "Data Analysis & Visualization",
    issuer: "Udemy",
    year: "2024",
    badge: "Data Science",
    skills: ["Data Cleaning", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Certified Paper Presentation",
    issuer: "Mahavir Polytechnic, Nashik",
    year: "2023",
    badge: "Research & Presentation",
    skills: ["Research Writing", "Presentation Skills", "Public Speaking"],
  },
  {
    title: "C & C++ Programming Certification",
    issuer: "Internshala Trainings",
    year: "2022",
    badge: "Core Systems",
    skills: ["C Programming", "C++", "OOP Concepts", "Data Structures"],
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="achievements" className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      {/* Invisible anchor for backward compatibility */}
      <span id="testimonials" className="sr-only">Achievements</span>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span>Honors & Credentials</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Achievements & <span className="text-gradient-primary">Certifications</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Proven competitive hackathon records, national awards, and industry certifications validating deep technical proficiency.
        </p>
      </motion.div>

      {/* Part 1: Hackathon Recognitions Bento Cards */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2.5 text-foreground">
          <Trophy className="w-5 h-5 text-amber-400" /> Hackathons & Competitions
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hack, i) => {
            const Icon = hack.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <MagicCard
                  className="h-full p-7 rounded-[2rem] border border-border/70 bg-card/80 shadow-lg group"
                >
                  <div className="flex flex-col h-full justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border shadow-sm ${hack.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                          {hack.placement}
                        </span>
                        <span className="text-xs font-mono font-bold text-muted-foreground">
                          {hack.year}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-foreground tracking-tight mb-1 group-hover:text-primary transition-colors">
                        {hack.title}
                      </h4>
                      <p className="text-xs font-semibold text-primary/90 mb-3">
                        {hack.organization}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {hack.description}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Industry Certifications */}
      <div className="space-y-6 pt-6">
        <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2.5 text-foreground">
          <BookCheck className="w-5 h-5 text-primary" /> Professional Certifications & Courses
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-panel p-6 rounded-2xl border border-foreground/10 hover:border-primary/40 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground bg-muted/60 px-2.5 py-0.5 rounded-full border border-border/40">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-bold text-foreground text-base tracking-tight mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs font-medium text-primary mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-border/50">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">
                  Core Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/80 border border-foreground/10 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-primary shrink-0" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
