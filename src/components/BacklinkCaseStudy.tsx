import { motion, AnimatePresence } from "framer-motion";
import {
  X, Search, Globe, Link2, ListChecks, ClipboardCheck, User, Wrench, FolderOpen,
  ArrowRight, Lightbulb, CheckCircle2, ExternalLink, Table2,
} from "lucide-react";
import { useEffect } from "react";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1i8QF9_t8lcLnbS9eriKhtgnmQ4FYNwq8xAW7pMheoio/edit?usp=sharing";

const workflow = [
  { icon: Search, label: "Backlink Research" },
  { icon: Globe, label: "Website Relevance Analysis" },
  { icon: Link2, label: "Link Building" },
  { icon: ListChecks, label: "Backlink Tracking" },
  { icon: ClipboardCheck, label: "SEO Review" },
];

const responsibilities = [
  "Researched relevant backlink opportunities.",
  "Identified potential websites for link building.",
  "Worked on backlink-building activities.",
  "Organized and tracked backlink information.",
  "Supported off-page SEO activities.",
  "Focused on improving website authority and organic search visibility.",
];

const skills = ["SEO", "Off-Page SEO", "Backlink Research", "Link Building", "Website Analysis", "Keyword Research"];

/**
 * EDIT HERE: add your real backlink records from the Google Sheet.
 * Leave a field as "" if it wasn't recorded.
 */
type Backlink = {
  source: string;
  target: string;
  anchor: string;
  linkType: string; // "Dofollow" | "Nofollow" | ""
  status: string; // e.g. "Live" | "Pending" | ""
  authority: string; // DA/DR if recorded, else ""
  notes: string;
};
const backlinks: Backlink[] = [];

const columns = ["Source Website", "Target URL", "Anchor Text", "Link Type", "Status", "DA / DR", "Notes"];

const learnings = [
  "Backlink research helps identify relevant referring websites within the same niche, so links add genuine context and value.",
  "Reviewing link profiles shows how a site's authority is built and where new opportunities exist.",
  "Organized tracking keeps link-building consistent and supports a long-term, sustainable SEO strategy.",
];

interface Props { open: boolean; onClose: () => void }

const BacklinkCaseStudy = ({ open, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl mx-auto my-8 sm:my-12 mx-4 sm:mx-auto glass-card rounded-3xl p-6 sm:p-10"
          >
            <button onClick={onClose} aria-label="Close case study"
              className="absolute top-5 right-5 p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors">
              <X size={18} />
            </button>

            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Case Study</p>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              Backlink Building & <span className="gradient-text">Off-Page SEO Analysis</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Practical experience in backlink research and link-building activities — identifying relevant backlink
              opportunities for a target website and supporting its SEO strategy.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: User, label: "My Role", value: "Digital Marketing Intern – SEO" },
                { icon: Wrench, label: "Focus", value: "Off-Page SEO & Link Building" },
                { icon: FolderOpen, label: "Project Type", value: "Internship Project" },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-muted/40 border border-border p-4">
                  <m.icon size={18} className="text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="font-semibold text-sm">{m.value}</p>
                </div>
              ))}
            </div>

            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3">Project Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Identify relevant backlink opportunities and support the website's SEO efforts by building and
                tracking backlinks from external websites.
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-bold mb-4">Key Responsibilities</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 rounded-xl bg-muted/30 border border-border p-3 text-sm">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-bold mb-4">Project Workflow</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                {workflow.map((s, i) => (
                  <div key={s.label} className="flex md:flex-1 items-center gap-3">
                    <div className="flex-1 rounded-2xl bg-muted/40 border border-border p-4 text-center hover:border-primary/40 transition-colors">
                      <div className="gradient-bg w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <s.icon size={18} className="text-primary-foreground" />
                      </div>
                      <p className="text-xs font-semibold">{s.label}</p>
                    </div>
                    {i < workflow.length - 1 && (
                      <ArrowRight size={16} className="text-primary shrink-0 rotate-90 md:rotate-0 mx-auto md:mx-0" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Table2 size={20} className="text-primary" /> Backlink Research Dashboard
                </h3>
                <a href={SHEET_URL} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center gap-1">
                  View source sheet <ExternalLink size={14} />
                </a>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm min-w-[760px]">
                  <thead className="bg-muted/50">
                    <tr>
                      {columns.map((c) => (
                        <th key={c} className="text-left font-semibold px-4 py-3 text-xs uppercase tracking-wide text-muted-foreground">{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {backlinks.length === 0 ? (
                      <tr>
                        <td colSpan={columns.length} className="px-4 py-10 text-center text-muted-foreground">
                          Backlink records are maintained in the source Google Sheet.
                        </td>
                      </tr>
                    ) : (
                      backlinks.map((b, i) => (
                        <tr key={i} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 break-all">{b.source || "—"}</td>
                          <td className="px-4 py-3 break-all">{b.target || "—"}</td>
                          <td className="px-4 py-3">{b.anchor || "—"}</td>
                          <td className="px-4 py-3">
                            {b.linkType ? (
                              <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary">{b.linkType}</span>
                            ) : "—"}
                          </td>
                          <td className="px-4 py-3">{b.status || "—"}</td>
                          <td className="px-4 py-3">{b.authority || "—"}</td>
                          <td className="px-4 py-3 text-muted-foreground">{b.notes || "—"}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-bold mb-4">Skills Demonstrated</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-muted text-foreground border border-border">{s}</span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Project Learnings</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {learnings.map((l) => (
                  <div key={l} className="rounded-2xl bg-muted/40 border border-border p-4">
                    <Lightbulb size={18} className="text-primary mb-2" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{l}</p>
                  </div>
                ))}
              </div>
            </section>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BacklinkCaseStudy;
