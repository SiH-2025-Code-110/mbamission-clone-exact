import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const [ref, isVisible] = useScrollReveal(0.3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="section-padding bg-primary/5" ref={ref}>
      <motion.div 
        className="section-container text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-2xl lg:text-3xl font-bold font-heading text-foreground"
          variants={itemVariants}
        >
          What Happens Next
        </motion.h2>
        <motion.p 
          className="text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Engagements typically begin with a structured conversation focused on understanding your background, goals, and readiness for the process. This discussion is intended to bring clarity on whether an MBA makes sense at this stage and what a suitable path forward might look like.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="cta" size="lg" className="btn-animate hover-lift">
              <Mail className="w-5 h-5 mr-2" />
              contact@beyondbridge.com
            </Button>
          </motion.div>
          <span className="text-muted-foreground">or</span>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" size="lg" className="hover-lift">
              Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;