import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  return (
    <section className="section-alt-bg section-padding">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
            We are the top-ranked MBA admissions consulting firm.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            With more than 1,600 verified five-star reviews from past clients, AdmitPro is the highest-rated MBA admissions consulting firm on major review platforms. We have more reviews than most other firms <em>combined</em>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Leading publications have recognized AdmitPro as the number one firm for five consecutive years</strong>, and our experts have appeared on every major annual list of top individual admissions consultants.
          </p>
          <Button variant="cta" size="lg">
            Read Our Reviews
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="bg-background rounded-2xl shadow-xl p-8 text-center max-w-sm">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-4xl font-bold font-heading text-foreground">1,600+</p>
            <p className="text-muted-foreground mt-2">Verified Five-Star Reviews</p>
            <div className="mt-6 border-t pt-6">
              <p className="text-2xl font-bold font-heading text-foreground">#1 Ranked</p>
              <p className="text-muted-foreground mt-1">Five Years Running</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
