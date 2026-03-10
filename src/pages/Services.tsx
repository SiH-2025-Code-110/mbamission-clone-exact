import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />
      <div className="py-16">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;