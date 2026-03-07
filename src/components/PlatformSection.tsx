import { Button } from "@/components/ui/button";
import platformImg from "@/assets/platform-preview.jpg";

const PlatformSection = () => {
  return (
    <section id="platform" className="section-alt-bg section-padding">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider">AccelerateTrack by AdmitPro</p>
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
            Your Path to MBA Application Success
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            AccelerateTrack is an innovative, on-demand MBA application platform that creates a personalized curriculum for you. With interactive tools, video modules taught by our expert team, school-specific advice, checklists, and exercises — it's the most comprehensive self-guided MBA application experience available.
          </p>
          <Button variant="cta" size="lg">
            Explore AccelerateTrack
          </Button>
        </div>
        <div>
          <img
            src={platformImg}
            alt="AccelerateTrack platform preview"
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
