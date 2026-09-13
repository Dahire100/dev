import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Input } from "../lightswind/input";
import { Textarea } from "../lightswind/textarea";
import { Button } from "../lightswind/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <span>Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I am actively seeking internships, live project collaborations, and software engineering opportunities.
                Whether you're looking for an AI/ML developer, frontend specialist, or have an exciting problem to solve, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:khandbahalepratiksha2727@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group p-2 rounded-xl hover:bg-foreground/5"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-semibold">Email</span>
                  <span className="font-medium text-foreground text-sm md:text-base break-all">khandbahalepratiksha2727@gmail.com</span>
                </div>
              </a>

              <a 
                href="tel:+919970123811"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group p-2 rounded-xl hover:bg-foreground/5"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-semibold">Phone / WhatsApp</span>
                  <span className="font-medium text-foreground text-sm md:text-base">+91 9970123811</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground p-2 rounded-xl">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-semibold">Location</span>
                  <span className="font-medium text-foreground text-sm md:text-base">Nashik, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative">
            <form 
              action="https://formsubmit.co/khandbahalepratiksha2727@gmail.com" 
              method="POST" 
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="New Portfolio Message from Visitor!" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Name</label>
                <Input 
                  type="text" 
                  name="name"
                  required
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Email</label>
                <Input 
                  type="email" 
                  name="email"
                  required
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
                <Textarea 
                  rows={4}
                  name="message"
                  required
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary resize-none placeholder:text-muted-foreground/50 min-h-[120px]"
                  placeholder="How can I help you?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] mt-4 h-12 cursor-pointer">
                Send Message <Send className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
