import { motion } from "framer-motion";
import { ArrowRight, Search, Megaphone, BarChart3 } from "lucide-react";

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
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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

            <div className="flex flex-wrap justify-center gap-4 mb-10">
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
            <div className="flex flex-wrap justify-center gap-4">
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
