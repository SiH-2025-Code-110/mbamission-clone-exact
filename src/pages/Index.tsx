import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import PlatformSection from "@/components/PlatformSection";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection";
import MediaSection from "@/components/MediaSection";
import GuidesSection from "@/components/GuidesSection";
import SchoolsSection from "@/components/SchoolsSection";
import BlogSection from "@/components/BlogSection";
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
      <MediaSection />
      <GuidesSection />
      <SchoolsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
