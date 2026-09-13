import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Database,
  Brain,
  CheckCircle2,
} from "lucide-react";

export default function ProfessionalProfile() {
  const skillCategories = [
    {
      id: "programming-languages",
      number: "01",
      title: "Programming Languages",
      icon: Code2,
      overallPercent: 92,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      skills: [
        { name: "Python", level: "Expert", percent: 92 },
        { name: "JavaScript", level: "Expert", percent: 92 },
        { name: "Java", level: "Expert", percent: 92 },
        { name: "C++", level: "Intermediate", percent: 75 },
        { name: "PHP", level: "Intermediate", percent: 75 },
      ],
    },
    {
      id: "frameworks-ui",
      number: "02",
      title: "Frameworks & UI",
      icon: Layout,
      overallPercent: 88,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      skills: [
        { name: "React.js", level: "Expert", percent: 92 },
        { name: "Tailwind CSS", level: "Expert", percent: 92 },
        { name: "MERN Stack", level: "Expert", percent: 92 },
        { name: "Flask", level: "Intermediate", percent: 75 },
      ],
    },
    {
      id: "databases-tools",
      number: "03",
      title: "Databases & Tools",
      icon: Database,
      overallPercent: 85,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      skills: [
        { name: "MongoDB", level: "Expert", percent: 92 },
        { name: "MySQL", level: "Expert", percent: 92 },
        { name: "SQLite", level: "Intermediate", percent: 75 },
        { name: "Git & GitHub", level: "Expert", percent: 92 },
        { name: "Android Studio", level: "Intermediate", percent: 75 },
        { name: "Figma / PowerBI", level: "Intermediate", percent: 75 },
      ],
    },
    {
      id: "ai-soft-skills",
      number: "04",
      title: "AI, Data Science & Soft Skills",
      icon: Brain,
      overallPercent: 94,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      skills: [
        { name: "Machine Learning", level: "Expert", percent: 92 },
        { name: "NLP & GenAI", level: "Expert", percent: 92 },
        { name: "Data Analysis", level: "Expert", percent: 92 },
        { name: "Problem Solving", level: "Expert", percent: 92 },
        { name: "Time Management", level: "Expert", percent: 92 },
        { name: "Task Prioritization", level: "Expert", percent: 92 },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Code2 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Expertise & Skills</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Categorized proficiency across AI, web frameworks, and core engineering</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, catIdx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel p-7 rounded-[2rem] border border-foreground/10 shadow-xl flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors pointer-events-none" />

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${category.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground block">
                        Module {category.number}
                      </span>
                      <h4 className="text-lg font-bold text-foreground">
                        {category.title}
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {category.overallPercent}% Avg
                  </span>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-semibold">
                        <span className="text-foreground/90 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                            {skill.level}
                          </span>
                          <span className="font-mono text-primary font-bold">
                            {skill.percent}%
                          </span>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-muted/60 rounded-full overflow-hidden border border-border/40 p-[1px]">
                        <motion.div
                          className="h-full bg-gradient-to-r from-teal-500 via-primary to-sky-400 rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 + sIdx * 0.08 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
