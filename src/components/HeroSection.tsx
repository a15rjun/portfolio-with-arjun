import { motion } from "framer-motion";
import { ArrowRight, Search, Megaphone, BarChart3 } from "lucide-react";
import profileImg from "@/assets/profile-arjun.png";

const highlights = [
  { icon: Search, label: "SEO" },
  { icon: BarChart3, label: "Google Ads" },
  { icon: Megaphone, label: "Meta Ads" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium text-primary tracking-widest uppercase mb-4"
            >
              Digital Marketing Executive
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-gradient-animated">Arjun AM</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mb-4 leading-relaxed">
              SEO & Paid Ads Specialist
            </p>

            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Helping businesses grow online through organic & paid marketing strategies. Passionate about turning clicks into customers.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="gradient-bg px-7 py-3 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Contact Me <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="px-7 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors"
              >
                View Portfolio
              </a>
            </div>

            {/* Quick Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="glass-card px-5 py-3 rounded-lg flex items-center gap-3"
                >
                  <item.icon size={20} className="text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 gradient-bg rounded-full opacity-20 blur-2xl animate-pulse-glow" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src={profileImg}
                  alt="Arjun AM - Digital Marketing Executive"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 glass-card px-4 py-2 rounded-lg"
              >
                <span className="text-xs font-semibold gradient-text">BCA Graduate</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-16 glass-card px-4 py-2 rounded-lg"
              >
                <span className="text-xs font-semibold gradient-text">2+ Months Experience</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
