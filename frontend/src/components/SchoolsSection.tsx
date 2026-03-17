import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import columbia from "@/assets/aa/Columbia.png";
import harvard from "@/assets/aa/Harvard_University_coat_of_arms.svg";
import mit from "@/assets/aa/MIT_School_of_Management.svg";
import wharton from "@/assets/aa/Wharton-Logo-RGB.png";
import cornell from "@/assets/aa/cornell.png";
import hec from "@/assets/aa/hec-8718236.jpg";
import insead from "@/assets/aa/images.jpg";
import lbs from "@/assets/aa/images.png";
import imperial from "@/assets/aa/imperial.png";
import kellogg from "@/assets/aa/kellogg-school-of-management-emblem.png";
import virginia from "@/assets/aa/virginia.png";
import yale from "@/assets/aa/yale.jpeg";

const schools = [
  { name: "Harvard Business School", logo: harvard },
  { name: "Wharton", logo: wharton },
  { name: "Columbia Business School", logo: columbia },
  { name: "MIT Sloan", logo: mit },
  { name: "Kellogg", logo: kellogg },
  { name: "INSEAD", logo: insead },
  { name: "London Business School", logo: lbs },
  { name: "Imperial College", logo: imperial },
  { name: "HEC Paris", logo: hec },
  { name: "Cornell", logo: cornell },
  { name: "Yale", logo: yale },
  { name: "Virginia Darden", logo: virginia },
];

const SchoolsSection = () => {
  const [ref, isVisible] = useScrollReveal(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const schoolVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="section-alt-bg section-padding" ref={ref}>
      <motion.div 
        className="section-container text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-2xl lg:text-3xl font-bold font-heading text-foreground"
          variants={headerVariants}
        >
          Schools Where Candidates Have Secured Admission
        </motion.h2>
        <motion.p 
          className="text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          variants={headerVariants}
        >
          BeyondBridge candidates have successfully gained admission to leading global business schools across the United States, Europe, and the United Kingdom. Our specialized approach helps maritime professionals position their unique experience effectively for top-tier programs.
        </motion.p>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-4"
          variants={containerVariants}
        >
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              className="bg-background border border-border rounded-lg p-4 flex items-center justify-center shadow-sm hover-lift aspect-square"
              variants={schoolVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(10, 25, 41, 0.12)",
                borderColor: "hsl(192, 60%, 38%)",
              }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={school.logo}
                alt={school.name}
                className="max-h-16 max-w-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
        {/* <motion.div variants={headerVariants}>
          <Button variant="cta" size="lg" className="btn-animate hover-lift">
            Contact Us Today
          </Button>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default SchoolsSection;
