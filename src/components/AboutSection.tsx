import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target } from "lucide-react";
import arjunImg from "@/assets/arjun-about.jpg";

const aboutCards = [
  {
    icon: Target,
    title: "Passion",
    description: "Deeply passionate about online business growth through strategic digital marketing.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "BCA – Dr. MGR University (2025). Strong foundation in technology and analytics.",
  },
  {
    icon: Briefcase,
    title: "Career Start",
    description: "Began career as Digital Marketing Intern at Ledessense with 2 months of hands-on experience.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Get To Know Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 gradient-bg rounded-2xl opacity-20 blur-xl" />
              <img
                src={arjunImg}
                alt="Arjun AM"
                className="relative w-64 h-80 object-cover object-top rounded-2xl border-2 border-primary/20"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Digital Marketing fresher with internship experience and a strong desire to help businesses succeed online. 
              My journey started with curiosity about how brands reach people digitally, which led me to specialize in SEO and paid advertising.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              During my internship at Ledessense, I gained practical experience in keyword research, 
              Google Ads campaign management, Meta Ads setup, and backlink building. I combine analytical thinking 
              with creative problem-solving to deliver results-driven marketing strategies.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {aboutCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="gradient-bg p-3 rounded-lg shrink-0">
                  <card.icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
