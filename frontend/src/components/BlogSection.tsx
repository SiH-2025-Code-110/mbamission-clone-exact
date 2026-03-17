import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "MBA Admissions Myths: What You Really Need to Know",
    date: "Mar 6, 2026",
    excerpt: "Separating fact from fiction in the MBA admissions process.",
  },
  {
    title: "How Nontraditional Candidates Can Stand Out in MBA Applications",
    date: "Mar 2, 2026",
    excerpt: "Strategies for applicants from unconventional backgrounds.",
  },
  {
    title: "From Waitlist to Acceptance: A Reapplicant's Journey to a Top Program",
    date: "Feb 24, 2026",
    excerpt: "How perseverance and the right strategy led to success.",
  },
  {
    title: "Finance Applicants: Differentiating Beyond Private Equity Experience",
    date: "Feb 18, 2026",
    excerpt: "Crafting a unique narrative in a competitive applicant pool.",
  },
];

const BlogSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container space-y-10">
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground text-center">
          Check out our latest insights.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href="#"
              className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-32 bg-gradient-to-br from-navy-100 to-ocean-100" />
              <div className="p-5 space-y-2">
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <h3 className="font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center">
          <Button variant="cta" size="lg">
            More Articles <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
