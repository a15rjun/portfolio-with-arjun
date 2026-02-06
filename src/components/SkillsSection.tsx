import { motion } from "framer-motion";
import { BarChart3, Search, Megaphone, Link2, PenTool, KeyRound } from "lucide-react";

const skills = [
  { icon: BarChart3, name: "Google Ads", level: 75, color: "from-primary to-accent" },
  { icon: Megaphone, name: "Meta Ads", level: 70, color: "from-primary to-accent" },
  { icon: Search, name: "SEO", level: 80, color: "from-primary to-accent" },
  { icon: KeyRound, name: "Keyword Research", level: 78, color: "from-primary to-accent" },
  { icon: Link2, name: "Backlink Building", level: 65, color: "from-primary to-accent" },
  { icon: PenTool, name: "Canva Design", level: 70, color: "from-primary to-accent" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">What I Do Best</p>
          <h2 className="text-3xl sm:text-4xl font-bold">My Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="gradient-bg p-2.5 rounded-lg group-hover:glow-shadow transition-shadow">
                  <skill.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
