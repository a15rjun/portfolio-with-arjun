import { motion, AnimatePresence } from "framer-motion";
import {
  X, Search, Globe, TrendingUp, MousePointerClick, ListChecks, Rocket,
  Lightbulb, User, Wrench, FolderOpen, ArrowRight,
} from "lucide-react";
import { useEffect } from "react";

const processSteps = [
  { icon: Globe, label: "Website Analysis" },
  { icon: Search, label: "Keyword Discovery" },
  { icon: TrendingUp, label: "Search Volume Analysis" },
  { icon: ListChecks, label: "Keyword Selection" },
  { icon: Rocket, label: "SEO Implementation" },
];

const keywords = [
  { keyword: "digital marketing services", volume: "18,000", difficulty: "Medium", intent: "Commercial", type: "Short-tail", priority: "High" },
  { keyword: "seo services for small business", volume: "8,100", difficulty: "Low", intent: "Commercial", type: "Long-tail", priority: "High" },
  { keyword: "google ads management company", volume: "5,400", difficulty: "Medium", intent: "Transactional", type: "Long-tail", priority: "High" },
  { keyword: "what is search engine optimization", volume: "12,000", difficulty: "High", intent: "Informational", type: "Short-tail", priority: "Medium" },
  { keyword: "social media marketing packages", volume: "3,600", difficulty: "Low", intent: "Commercial", type: "Long-tail", priority: "Medium" },
  { keyword: "best digital marketing agency near me", volume: "2,900", difficulty: "Medium", intent: "Transactional", type: "Long-tail", priority: "High" },
  { keyword: "how to improve website ranking", volume: "6,600", difficulty: "Medium", intent: "Informational", type: "Long-tail", priority: "Medium" },
  { keyword: "meta ads campaign cost", volume: "1,900", difficulty: "Low", intent: "Informational", type: "Long-tail", priority: "Low" },
];

const highVolume = [
  { keyword: "digital marketing services", volume: "18,000", competition: "Medium", priority: "High" },
  { keyword: "what is search engine optimization", volume: "12,000", competition: "High", priority: "Medium" },
  { keyword: "seo services for small business", volume: "8,100", competition: "Low", priority: "High" },
  { keyword: "how to improve website ranking", volume: "6,600", competition: "Medium", priority: "Medium" },
];

const insights = [
  "Identified high-volume search opportunities aligned with business goals",
  "Found keywords highly relevant to the target audience",
  "Grouped keywords based on search intent (informational, commercial, transactional)",
  "Prioritized keywords for SEO implementation based on volume & difficulty",
  "Used keyword data to support content planning and on-page SEO",
];

const priorityColor = (p: string) =>
  p === "High"
    ? "bg-primary/15 text-primary"
    : p === "Medium"
    ? "bg-accent/15 text-accent"
    : "bg-muted text-muted-foreground";

const SeoCaseStudy = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative max-w-4xl mx-auto my-8 md:my-16 glass-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-full h-1 gradient-bg" />

            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-10 space-y-10">
              {/* Header */}
              <div>
                <p className="text-xs font-medium text-primary tracking-widest uppercase mb-2">Case Study</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  SEO Keyword Research & <span className="gradient-text">Search Volume Analysis</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  A real project from my digital marketing experience — researched relevant keywords for a target
                  website and identified high-volume, high-relevance search terms to strengthen organic visibility
                  and guide SEO strategy.
                </p>
              </div>

              {/* Meta info */}
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: User, label: "My Role", value: "Digital Marketing / SEO" },
                  { icon: Wrench, label: "Skills Used", value: "SEO, Keyword Research, Search Volume Analysis, Search Intent, On-Page SEO" },
                  { icon: FolderOpen, label: "Project Type", value: "SEO Keyword Research" },
                ].map((m) => (
                  <div key={m.label} className="glass-card rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <m.icon size={16} className="text-primary" />
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{m.label}</p>
                    </div>
                    <p className="text-sm font-medium">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Objective */}
              <div>
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <MousePointerClick size={18} className="text-primary" /> Project Objective
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Identify relevant, high-search-volume keywords related to the target website and organize them
                  into a structured plan for SEO implementation — covering keyword relevance, search intent, and
                  competitor/industry keyword analysis.
                </p>
              </div>

              {/* Process timeline */}
              <div>
                <h4 className="text-lg font-bold mb-5">Keyword Research Process</h4>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  {processSteps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-3 flex-1">
                      <div className="glass-card rounded-xl p-3 flex flex-col items-center text-center gap-2 flex-1 hover:border-primary/30 transition-colors">
                        <div className="gradient-bg p-2 rounded-lg">
                          <step.icon size={16} className="text-primary-foreground" />
                        </div>
                        <p className="text-xs font-medium leading-tight">{step.label}</p>
                      </div>
                      {i < processSteps.length - 1 && (
                        <ArrowRight size={14} className="text-primary shrink-0 hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Keyword table */}
              <div>
                <h4 className="text-lg font-bold mb-4">Keyword Research Data</h4>
                <div className="glass-card rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border text-left">
                          {["Keyword", "Volume", "Difficulty", "Intent", "Type", "Priority"].map((h) => (
                            <th key={h} className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {keywords.map((k) => (
                          <tr key={k.keyword} className="border-b border-border/50 last:border-0 hover:bg-muted/40 transition-colors">
                            <td className="px-4 py-3 font-medium whitespace-nowrap">{k.keyword}</td>
                            <td className="px-4 py-3 text-muted-foreground">{k.volume}</td>
                            <td className="px-4 py-3 text-muted-foreground">{k.difficulty}</td>
                            <td className="px-4 py-3 text-muted-foreground">{k.intent}</td>
                            <td className="px-4 py-3 text-muted-foreground">{k.type}</td>
                            <td className="px-4 py-3">
                              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${priorityColor(k.priority)}`}>
                                {k.priority}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Sample data — replaceable with actual research data.</p>
              </div>

              {/* High-volume keywords */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-primary" /> High-Volume Keywords
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {highVolume.map((k) => (
                    <div key={k.keyword} className="glass-card rounded-xl p-4 hover:border-primary/30 transition-colors">
                      <p className="font-semibold text-sm mb-3">{k.keyword}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground">Vol: {k.volume}</span>
                        <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground">Comp: {k.competition}</span>
                        <span className={`px-2.5 py-1 rounded-full font-medium ${priorityColor(k.priority)}`}>{k.priority}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Lightbulb size={18} className="text-primary" /> SEO Insights
                </h4>
                <div className="space-y-2.5">
                  {insights.map((insight) => (
                    <div key={insight} className="flex items-start gap-3">
                      <div className="gradient-bg rounded-full p-1 mt-0.5 shrink-0">
                        <ListChecks size={12} className="text-primary-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SeoCaseStudy;
