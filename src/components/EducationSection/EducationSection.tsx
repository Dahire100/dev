import SkillCategory from "./SkillCategory";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, CheckCircle2, Calendar, Building2, Sparkles } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

export const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      school: "K. K. Wagh Institute of Engineering Education and Research (KKWIEER), Nashik",
      year: "2021 — 2025",
      badge: "CGPA: 8.44",
      badgeIcon: Sparkles,
      badgeColor: "text-teal-400 bg-teal-500/10 border-teal-500/30",
      icon: GraduationCap,
      details: [
        "Specialized coursework in Artificial Intelligence, Machine Learning, Deep Learning, and Neural Networks",
        "Selected in Top 5 Teams at Smart India Hackathon (SIH 2024 at IIT Kharagpur)",
        "1st Prize in Project-Based Learning (PBL 2024) Competition at KKWIEER",
        "Graduated with an overall academic CGPA of 8.44"
      ]
    },
    {
      degree: "Diploma in Computer Technology",
      school: "K. K. Wagh Polytechnic, Nashik, India",
      year: "2018 — 2021",
      badge: "Score: 87.37%",
      badgeIcon: Award,
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      icon: BookOpen,
      details: [
        "Core computer technology fundamentals, system software design, networking, and object-oriented systems",
        "Relational database design with MySQL, web programming, and clean code principles",
        "Certified Paper Presentation awardee at Mahavir Polytechnic, Nashik (2023)",
        "Graduated with an academic distinction score of 87.37%"
      ]
    },
    {
      degree: "Secondary School Certificate (10th SSC)",
      school: "Dr. Shalinitai Borse School, Nashik, India",
      year: "2018",
      badge: "Score: 87.60%",
      badgeIcon: Award,
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
      icon: BookOpen,
      details: [
        "Graduated with an overall academic score of 87.60%",
        "Established solid analytical foundations in mathematics and science",
        "Active participant in extracurricular public speaking, singing, and cultural programs"
      ]
    }
  ];

  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      
      {/* Education Header & Cards */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Academic <span className="text-gradient-primary">Background</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building rigorous mathematical foundations and applied computer science principles across diploma and degree programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => {
            const DegreeIcon = edu.icon;
            const BadgeIcon = edu.badgeIcon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className={i === 0 ? "md:col-span-1" : "md:col-span-1"}
              >
                <MagicCard
                  className="h-full p-7 rounded-[2rem] border border-border/80 bg-card/80 shadow-xl"
                >
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div>
                      {/* Header with Icon and Distinction Badge */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm">
                          <DegreeIcon className="w-6 h-6 text-primary" />
                        </div>
                        <span className={`px-3 py-1 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm ${edu.badgeColor}`}>
                          <BadgeIcon className="w-3.5 h-3.5" />
                          {edu.badge}
                        </span>
                      </div>

                      {/* Degree Title & Institution Meta */}
                      <h3 className="text-xl font-extrabold text-foreground tracking-tight mb-2">
                        {edu.degree}
                      </h3>
                      
                      <div className="flex flex-col gap-1.5 text-xs font-semibold text-muted-foreground mb-5 pb-4 border-b border-border/60">
                        <span className="flex items-center gap-1.5 text-foreground font-bold">
                          <Building2 className="w-3.5 h-3.5 text-primary shrink-0" /> {edu.school}
                        </span>
                        <span className="flex items-center gap-1.5 font-mono text-primary font-bold">
                          <Calendar className="w-3.5 h-3.5 shrink-0" /> {edu.year}
                        </span>
                      </div>

                      {/* Key Highlights List */}
                      <ul className="space-y-3">
                        {edu.details.map((detail, j) => (
                          <li key={j} className="text-xs text-muted-foreground flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/90 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expertise & Skills Component */}
      <div>
        <SkillCategory />
      </div>

    </section>
  );
};
