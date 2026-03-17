import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import ServicesPageContent from "@/components/ServicesPageContent";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </div>
  );
};

export default Services;