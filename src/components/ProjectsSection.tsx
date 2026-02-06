import { motion } from "framer-motion";
import { Search, BarChart3, Megaphone, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Search,
    title: "SEO Practice Projects",
    description:
      "Conducted on-page & off-page SEO optimization including keyword research, meta tag optimization, and content structuring for improved search engine rankings.",
    tools: ["Google Search Console", "Ahrefs", "SEMrush"],
    outcome: "Improved understanding of ranking factors and organic traffic strategies.",
  },
  {
    icon: BarChart3,
    title: "Google Ads Test Campaigns",
    description:
      "Created and managed test PPC campaigns with proper ad groups, keyword targeting, and bid strategies to understand Google Ads ecosystem.",
    tools: ["Google Ads", "Google Analytics", "Keyword Planner"],
    outcome: "Learned campaign structure, quality score optimization, and A/B testing.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads Campaign Setups",
    description:
      "Set up Facebook & Instagram ad campaigns with audience targeting, creative design, and performance tracking for practice clients.",
    tools: ["Meta Business Suite", "Canva", "Facebook Pixel"],
    outcome: "Gained expertise in audience segmentation and ad creative optimization.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Internship Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold">My Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 gradient-bg opacity-5 rounded-bl-full" />

              <div className="flex items-center justify-between mb-4">
                <div className="gradient-bg p-3 rounded-xl group-hover:glow-shadow transition-shadow">
                  <project.icon size={22} className="text-primary-foreground" />
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-primary font-medium">
                  📈 {project.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
