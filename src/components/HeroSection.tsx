import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Search, Megaphone, BarChart3, ChevronDown, Sparkles, TrendingUp, Users, Target } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const highlights = [
  { icon: Search, label: "SEO", desc: "Organic Growth" },
  { icon: BarChart3, label: "Google Ads", desc: "Paid Search" },
  { icon: Megaphone, label: "Meta Ads", desc: "Social Ads" },
];

const stats = [
  { icon: TrendingUp, value: "150%", label: "Avg. ROI Boost" },
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: Target, value: "1M+", label: "Impressions" },
];

const roles = ["SEO Specialist", "Google Ads Expert", "Meta Ads Strategist", "Growth Marketer"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const floatingOrbs = [
  { size: 6, x: "15%", y: "20%", delay: 0, duration: 7 },
  { size: 4, x: "80%", y: "30%", delay: 1.5, duration: 9 },
  { size: 8, x: "70%", y: "70%", delay: 3, duration: 11 },
  { size: 5, x: "25%", y: "75%", delay: 2, duration: 8 },
  { size: 3, x: "50%", y: "15%", delay: 4, duration: 10 },
  { size: 4, x: "90%", y: "60%", delay: 1, duration: 6 },
];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          if (displayText.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

function AnimatedCounter({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const target = parseInt(numericPart);
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + step;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [inView, numericPart]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-center justify-center mb-2">
        <div className="gradient-bg p-2 rounded-lg">
          <Icon size={16} className="text-primary-foreground" />
        </div>
      </div>
      <span className="text-2xl sm:text-3xl font-bold gradient-text tabular-nums">
        {count}{suffix}
      </span>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function MouseGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const opacity = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
        opacity.set(0.15);
      }
    };
    const handleMouseLeave = () => opacity.set(0);

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY, opacity]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          x: useTransform(smoothX, (v) => v - 250),
          y: useTransform(smoothY, (v) => v - 250),
          opacity,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.25), transparent 70%)",
        }}
      />
    </div>
  );
}

const HeroSection = () => {
  const typedRole = useTypingEffect(roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Mouse-follow glow */}
      <MouseGlow />

      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Primary glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/20 blur-[180px]"
        />
        {/* Accent glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[140px]"
        />
        {/* Top-left accent */}
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-16 -left-24 w-[350px] h-[350px] rounded-full bg-accent/10 blur-[120px]"
        />

        {/* Floating orbs */}
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 15, -10, 5, 0],
              opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
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
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--primary) / 0.2)" }}
              className="glass-card inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: "hsl(142, 71%, 45%)" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ backgroundColor: "hsl(142, 71%, 45%)" }}
                />
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Available for Opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-sm font-semibold text-primary tracking-[0.25em] uppercase mb-5">
              Digital Marketing Executive
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-gradient-animated">Arjun AM</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1.5 left-0 w-full h-1 gradient-bg rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Typing role */}
          <motion.div variants={itemVariants} className="mb-4 h-8 flex items-center justify-center">
            <span className="text-lg sm:text-xl font-medium text-accent">
              {typedRole}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-0.5 h-6 bg-accent ml-1"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-muted-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Helping businesses grow online through organic & paid marketing strategies.
            Passionate about turning clicks into customers.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-14">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group gradient-bg px-8 py-3.5 rounded-xl font-semibold text-primary-foreground transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              <Sparkles size={16} className="opacity-80" />
              Contact Me
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, borderColor: "hsl(var(--primary) / 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-3.5 rounded-xl font-semibold border border-border text-foreground hover:bg-secondary transition-all duration-300"
            >
              View Portfolio
            </motion.a>
          </motion.div>

          {/* Skill cards */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-16">
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -6, scale: 1.04, boxShadow: "0 12px 40px hsl(var(--primary) / 0.15)" }}
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

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl px-8 py-6 max-w-lg mx-auto"
          >
            <div className="grid grid-cols-3 gap-6 divide-x divide-border">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
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
