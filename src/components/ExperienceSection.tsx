import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Keyword research & SEO support for client websites",
  "Google Ads campaign setup and optimization assistance",
  "Meta Ads (Facebook & Instagram) campaign management",
  "Basic backlink building strategies and outreach",
  "Ad creative design using Canva for campaigns",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 gradient-bg" />

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="gradient-bg p-3 rounded-xl">
                <Briefcase size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Digital Marketing Intern</h3>
                <p className="text-primary font-medium">Ledessense</p>
              </div>
              <div className="ml-auto flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar size={16} />
                <span>2 Months</span>
              </div>
            </div>

            <div className="space-y-3">
              {responsibilities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
