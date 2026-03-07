import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import founderImg from "@/assets/founder-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-24">
        <div className="space-y-6 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-heading">
            The Premier MBA Admissions Consulting Firm
          </h1>
          <p className="text-base lg:text-lg opacity-90 leading-relaxed max-w-xl">
            Our dedicated team of full-time MBA admissions consultants has guided more than 12,000 applicants to acceptance at the world's top business schools. With our personalized, expert-driven approach, we partner with you at every step of the application process. <strong>Schedule your free 30-minute consultation today!</strong>
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Started Now <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src={founderImg}
            alt="Michael Lawson, AdmitPro Founder"
            className="rounded-lg shadow-2xl max-h-[500px] object-cover object-top"
          />
          <div className="absolute bottom-4 right-4 lg:right-0 bg-primary/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-[220px]">
            <p className="font-bold text-sm">Michael Lawson</p>
            <p className="text-xs opacity-80">AdmitPro Founder</p>
            <p className="text-xs font-semibold mt-1">Industry Leadership Award</p>
            <p className="text-xs opacity-80">in MBA Admissions Consulting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
