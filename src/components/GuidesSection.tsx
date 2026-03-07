import { Button } from "@/components/ui/button";
import guideImg from "@/assets/guide-set.jpg";
import { BookOpen, GraduationCap, FileText, Mic, Briefcase, PenLine } from "lucide-react";

const guides = [
  { icon: BookOpen, label: "Business School Insider's Guides" },
  { icon: GraduationCap, label: "International Program Guides" },
  { icon: FileText, label: "MBA Admissions Guides" },
  { icon: Mic, label: "Interview Preparation Guides" },
  { icon: Briefcase, label: "Career Strategy Guides" },
  { icon: PenLine, label: "Blog & Articles" },
];

const GuidesSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={guideImg}
            alt="Free MBA admissions guides collection"
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
            Our free business school content is unparalleled.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We offer consistently updated and thoroughly researched materials with advice for every stage of the MBA admissions process — at absolutely no cost to you.
          </p>
          <ul className="space-y-3">
            {guides.map((g) => (
              <li key={g.label}>
                <a href="#" className="flex items-center gap-3 text-secondary font-semibold hover:underline">
                  <g.icon className="w-5 h-5" />
                  {g.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
