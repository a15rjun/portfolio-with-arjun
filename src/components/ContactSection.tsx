import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon!" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
              <input
                id="name"
                type="text"
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
              <input
                id="email"
                type="email"
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                id="message"
                rows={4}
                maxLength={1000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="gradient-bg w-full py-3 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, opportunities, or how I can help grow your business online. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:arjunmani1518@gmail.com"
                className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="gradient-bg p-2.5 rounded-lg">
                  <Mail size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">arjunmani1518@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919087457178"
                className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="gradient-bg p-2.5 rounded-lg">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">+91 90874 57178</p>
                </div>
              </a>

              <a
                href="https://wa.me/919087457178"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="gradient-bg p-2.5 rounded-lg">
                  <MessageCircle size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">Chat on WhatsApp</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
