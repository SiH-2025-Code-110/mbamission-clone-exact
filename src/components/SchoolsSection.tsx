import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const schools = [
  "Harvard Business School",
  "Stanford GSB", 
  "Wharton",
  "Chicago Booth",
  "Columbia Business School",
  "MIT Sloan",
  "Kellogg",
  "INSEAD",
  "London Business School",
  "Cambridge Judge",
  "Oxford Saïd",
  "IE Business School",
];

const SchoolsSection = () => {
  const [ref, isVisible] = useScrollReveal(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
          className="flex flex-wrap justify-center gap-4 pt-4"
          variants={containerVariants}
        >
          {schools.map((school, i) => (
            <motion.div
              key={school}
              className="bg-background border border-border rounded-lg px-5 py-3 text-sm font-semibold text-foreground shadow-sm hover-lift"
              variants={schoolVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(10, 25, 41, 0.12)",
                borderColor: "hsl(192, 60%, 38%)",
              }}
              transition={{ duration: 0.2 }}
            >
              {school}
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
