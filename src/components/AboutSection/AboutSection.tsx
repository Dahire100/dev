import { motion } from "framer-motion";
import { Award, Code2, GraduationCap, Trophy } from "lucide-react";

const stats = [
  { icon: <GraduationCap className="w-6 h-6" />, label: "B.Tech CGPA", value: "8.44" },
  { icon: <Trophy className="w-6 h-6" />, label: "SIH 2024 Finalist", value: "Top 5" },
  { icon: <Code2 className="w-6 h-6" />, label: "Featured Projects", value: "3+" },
  { icon: <Award className="w-6 h-6" />, label: "Diploma Score", value: "87.37%" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col md:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span>About Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Engineering <span className="text-gradient-primary">Intelligent Systems</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                My name is <strong className="text-foreground font-semibold">Pratiksha Khandbahale</strong>, and I am a passionate Artificial Intelligence & Data Science engineer currently working as a <span className="text-foreground font-medium">Junior Associate in the Software Division at ESDS Software Solution Limited</span>.
              </p>
              <p>
                I specialize in building intelligent, scalable, and visually captivating full-stack applications. My work sits at the intersection of AI algorithms, real-time data pipelines, and responsive web architectures.
              </p>
              <p>
                With hands-on experience in modern JavaScript frameworks (React, Next.js), Python backend architectures, and machine learning models, I focus on delivering clean, performant code that drives real business value.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass-panel p-6 rounded-2xl border border-foreground/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="text-primary mb-4 p-3 bg-primary/10 w-max rounded-xl">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

