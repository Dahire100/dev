import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { Button } from "../lightswind/button";
import { Badge } from "../lightswind/badge";
import { HangingIdCard } from "../lightswind/HangingIdCard";
import { AuroraTextEffect } from "../lightswind/aurora-text-effect";
import { DotPattern } from "../lightswind/dot-pattern";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col pt-12 md:pt-16 overflow-hidden bg-background">
      {/* Background Dot Pattern with Radial Vignette Shade */}
      <DotPattern width={16} height={16} cx={1} cy={1} cr={1} glow />
      
      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pb-12">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="outline" size="lg" className="gap-2.5 py-1.5 px-4 glass-panel border-foreground/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-xs font-semibold text-foreground/90">Junior Associate @ ESDS Software Solution</span>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
              Hi, I'm
            </h1>
            
            {/* Light Theme: Clean Vibrant Gradient Text */}
            <div className="block dark:hidden">
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight tracking-tight block pb-2 select-none">
                Pratiksha Khandbahale
              </span>
            </div>

            {/* Dark Theme: Rich Lightswind Aurora Text Effect */}
            <div className="hidden dark:block">
              <AuroraTextEffect
                text="Pratiksha Khandbahale"
                fontSize="clamp(2.5rem, 5.5vw, 4.5rem)"
                className="bg-transparent overflow-visible p-0 justify-start"
                textClassName="bg-gradient-to-r from-teal-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent pb-2 font-extrabold leading-tight"
              />
            </div>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Passionate Artificial Intelligence & Data Science engineer currently working in the Software Division at <span className="text-foreground font-semibold">ESDS Software Solution Limited</span>. Specializing in intelligent, scalable full-stack applications at the intersection of AI, real-time data, and modern web architectures.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-7 h-12 bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] hover:-translate-y-1 cursor-pointer"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <a 
              href="/Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Pratiksha_Khandbahale_Resume.pdf"
            >
              <Button size="lg" variant="outline" className="rounded-full px-7 h-12 glass-panel text-foreground font-semibold flex items-center gap-2 hover:bg-foreground/10 transition-all hover:-translate-y-1 border-foreground/10 cursor-pointer">
                Resume <Download className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="https://github.com/pratikshaa27" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 transform duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pratiksha-khandbahale-005b39256/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 transform duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://leetcode.com/u/Pratiksha_27" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LeetCode Profile"
              className="text-muted-foreground hover:text-amber-500 transition-colors hover:-translate-y-1 transform duration-200 flex items-center justify-center font-bold text-xs"
              title="LeetCode Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.358l4.47-4.47c.545-.545.545-1.43 0-1.975A1.377 1.377 0 0 0 13.483 0zm-2.88 7.283a1.39 1.39 0 0 0-1.077.485l-5.69 6.079a1.385 1.385 0 0 0 1.01 2.327h11.458c.768 0 1.39-.622 1.39-1.39 0-.769-.622-1.39-1.39-1.39H7.957l4.088-4.364a1.39 1.39 0 0 0-.256-1.98 1.385 1.385 0 0 0-.886-.367z" />
              </svg>
            </a>
            <a 
              href="mailto:khandbahalepratiksha2727@gmail.com" 
              aria-label="Send Email"
              className="text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 transform duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Visual Hanging ID Card */}
        <motion.div 
          className="flex-1 w-full max-w-md relative flex justify-center items-center py-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HangingIdCard
            name="Pratiksha Khandbahale"
            role="Junior Software Associate"
            badgeId="PK-ESDS-AIDS"
            accentColor="#14b8a6"
            ropeLength={75}
            ropeColor="#27272a"
            cardWidth="w-72 sm:w-80 md:w-84"
          >
            <div className="flex flex-col h-full bg-card w-full">
              {/* Card Header Banner with Avatar */}
              <div className="relative px-5 pt-7 pb-6 flex flex-col items-center bg-gradient-to-br from-teal-700 via-primary to-indigo-950 text-white overflow-hidden">
                {/* Circuit background overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                {/* Profile Photo with Dual Glowing Ring */}
                <div className="mt-1 relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-teal-400 to-purple-400 backdrop-blur-md shadow-2xl border border-white/50 overflow-hidden group">
                  <img 
                    src="/pratiksha.png" 
                    alt="Pratiksha Khandbahale" 
                    className="w-full h-full object-cover object-top rounded-full filter contrast-105"
                    loading="eager"
                  />
                  <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-md" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-3">
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-foreground">Pratiksha Khandbahale</h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-500 text-xs font-semibold">
                    <span>ESDS Software Solution Ltd</span>
                  </div>
                </div>

                <div className="w-full border-t border-border/60 my-0.5" />

                {/* Details 2x2 Grid */}
                <div className="grid grid-cols-2 gap-2.5 w-full text-left bg-muted/40 p-3 rounded-xl border border-border/50">
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Designation</span>
                    <span className="font-bold text-foreground text-xs">Junior Associate</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Location</span>
                    <span className="font-bold text-foreground text-xs">Nashik, India</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Degree</span>
                    <span className="font-bold text-foreground text-xs">B.Tech (8.44 CGPA)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Status</span>
                    <span className="font-bold text-emerald-500 text-xs flex items-center gap-1">
                      ● Active
                    </span>
                  </div>
                </div>

                {/* HD Barcode & Auth Tag */}
                <div className="flex flex-col items-center mt-1 w-full gap-1">
                  <div className="flex gap-[2.5px] items-end h-7 px-3 py-0.5 bg-white/90 dark:bg-black/40 rounded-lg border border-border/40 w-full justify-center">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-foreground rounded-[1px]"
                        style={{
                          width: i % 4 === 0 ? "3.5px" : i % 2 === 0 ? "2px" : "1px",
                          height: `${50 + Math.sin(i * 1.4) * 45}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-full px-1 text-[10px]">
                    <span className="font-mono font-bold tracking-widest text-primary">
                      ESDS-PK-2727
                    </span>
                    <span className="text-muted-foreground font-semibold text-[9px] uppercase tracking-wider">
                      SOFTWARE DIV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </HangingIdCard>
        </motion.div>

      </div>

      {/* Marquee appended natively to the bottom to span Full Width */}
      <div className="w-full relative z-10 mt-auto">
        <TechStackSection />
      </div>
    </section>
  );
};

