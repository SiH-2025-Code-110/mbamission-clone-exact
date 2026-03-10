import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import platformImg from "@/assets/platform-preview.jpg";

const PlatformSection = () => {
  const [ref, isVisible] = useScrollReveal(0.2);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
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
    <section id="platform" className="section-alt-bg section-padding relative overflow-hidden" ref={ref}>
      {/* Subtle maritime background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 30 Q15 20 30 30 Q45 40 60 30\' stroke=\'%23147d8e\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px'}} />
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-6"
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-secondary font-bold text-sm uppercase tracking-wider flex items-center gap-2"
            variants={itemVariants}
          >
            <span className="inline-block w-8 h-[2px] bg-gold" />
            Why BeyondBridge
          </motion.p>
          <motion.h2 
            className="text-2xl lg:text-3xl font-bold font-heading text-foreground"
            variants={itemVariants}
          >
            Specialized Guidance for Maritime Professionals
          </motion.h2>
          <motion.p 
            className="text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Maritime roles involve operational responsibility, leadership, and decision-making in environments that differ significantly from typical corporate settings. These differences matter during MBA admissions, influencing how experience is interpreted, how transitions are questioned, and how future goals are assessed.
          </motion.p>
          <motion.p 
            className="text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Our work is shaped by a close understanding of these dynamics. We focus on helping candidates position their experience in a way that business schools can evaluate clearly, and on supporting choices that enable a credible progression from maritime roles into business school and roles ashore.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button variant="cta" size="lg" className="btn-animate hover-lift">
              Learn More About Our Approach
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.img
            src={platformImg}
            alt="BeyondBridge approach preview"
            className="rounded-xl shadow-xl hover-lift"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;
