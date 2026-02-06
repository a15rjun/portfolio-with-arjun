import { motion } from "framer-motion";
import { ArrowRight, Search, Megaphone, BarChart3, ChevronDown, Sparkles } from "lucide-react";

const highlights = [
  { icon: Search, label: "SEO", desc: "Organic Growth" },
  { icon: BarChart3, label: "Google Ads", desc: "Paid Search" },
  { icon: Megaphone, label: "Meta Ads", desc: "Social Ads" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Primary glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]"
        />
        {/* Accent glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[120px]"
        />
        {/* Top-left accent */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-20 -left-20 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="glass-card inline-flex items-center gap-2 px-5 py-2.5 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "hsl(142, 71%, 45%)" }}></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: "hsl(142, 71%, 45%)" }}></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Available for Opportunities
              </span>
            </div>
          </motion.div>

          {/* Title block */}
          <motion.div variants={itemVariants}>
            <p className="text-sm font-semibold text-primary tracking-[0.25em] uppercase mb-5">
              Digital Marketing Executive
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-gradient-animated">Arjun AM</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute -bottom-2 left-0 w-full h-1 gradient-bg rounded-full origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed font-light"
          >
            SEO & Paid Ads Specialist
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-muted-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Helping businesses grow online through organic & paid marketing strategies.
            Passionate about turning clicks into customers.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href="#contact"
              className="group gradient-bg px-8 py-3.5 rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02]"
            >
              <Sparkles size={16} className="opacity-80" />
              Contact Me
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="group px-8 py-3.5 rounded-xl font-semibold border border-border text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              View Portfolio
            </a>
          </motion.div>

          {/* Skill cards */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="glass-card group px-6 py-4 rounded-xl flex items-center gap-4 cursor-default hover:border-primary/30 transition-colors"
              >
                <div className="gradient-bg p-2.5 rounded-lg group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                  <item.icon size={18} className="text-primary-foreground" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-semibold block leading-tight">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
          <ChevronDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
