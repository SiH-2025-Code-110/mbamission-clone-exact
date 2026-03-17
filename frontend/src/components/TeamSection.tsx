import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import teamImg from "@/assets/team-grid.jpg";

const TeamSection = () => {
  const [ref, isVisible] = useScrollReveal(0.2);

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section-padding" ref={ref}>
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.img
            src={teamImg}
            alt="Our dedicated team of MBA admissions consultants"
            className="rounded-xl shadow-xl hover-lift"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div 
          className="space-y-6"
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-2xl lg:text-3xl font-bold font-heading text-foreground"
            variants={itemVariants}
          >
            Our Team Combines Maritime Experience with <em>Business School Expertise</em>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Our consulting team includes alumni of leading global business schools, alongside professionals with firsthand experience of maritime to shore-based career transitions.
          </motion.p>
          <motion.p 
            className="text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            This combination informs how guidance is delivered, with an understanding of both admissions expectations and the professional realities of maritime careers. The team brings together consultants from diverse academic and professional backgrounds - some have transitioned from maritime careers themselves, while others bring deep admissions and academic experience.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button variant="cta" size="lg" className="btn-animate hover-lift">
              Learn About Our Expertise
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
