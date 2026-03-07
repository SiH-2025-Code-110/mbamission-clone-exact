import { Award, Star, Users } from "lucide-react";

const stats = [
  {
    icon: Award,
    text: "Named the top MBA admissions consulting firm for five consecutive years by leading industry publications.",
  },
  {
    icon: Star,
    text: "More verified five-star reviews than any other firm, with over 1,600 and growing.",
  },
  {
    icon: Users,
    text: "Over 18 years of experience, with thousands of acceptances and $15M+ in scholarships earned annually.",
  },
];

const StatsBar = () => {
  return (
    <section className="stats-bar">
      <div className="section-container grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3 py-8 px-6">
            <stat.icon className="w-8 h-8 opacity-90" />
            <p className="text-sm font-medium leading-relaxed">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
