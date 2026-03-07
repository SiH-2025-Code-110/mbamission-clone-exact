import { Button } from "@/components/ui/button";
import teamImg from "@/assets/team-grid.jpg";

const TeamSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={teamImg}
            alt="Our dedicated team of MBA admissions consultants"
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
            We have a dedicated, <em>full-time</em>, collaborative team of MBA admissions consultants.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            MBA admissions consulting is our only focus — not a side project. Our carefully selected consultants, all graduates of premier MBA programs and expert writers, take your investment in your future seriously.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Teamwork means you benefit from the experience of <em>all</em> our consultants, not just one. Through regular collaboration sessions, we ensure you receive the strongest possible guidance.
          </p>
          <Button variant="cta" size="lg">
            Learn About Our Consultants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
