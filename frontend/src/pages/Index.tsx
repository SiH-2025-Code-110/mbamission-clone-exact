import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import PlatformSection from "@/components/PlatformSection";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection";
import SchoolsSection from "@/components/SchoolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <PlatformSection />
      <TeamSection />
      <ReviewsSection />
      <SchoolsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
