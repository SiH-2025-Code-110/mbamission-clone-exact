import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import founderImg from "@/assets/founder-portrait.jpg";

const HeroSection = () => {
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
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section className="hero-section relative overflow-hidden">
      <motion.div 
        className="section-container grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6 z-10" variants={containerVariants}>
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-heading"
            variants={itemVariants}
          >
            From Sea to Leadership Roles Ashore
          </motion.h1>
          <motion.p 
            className="text-base lg:text-lg opacity-90 leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            You have spent years making decisions in complex, high-pressure environments, leading people and operating in systems where judgment matters. Over time, an MBA may become part of the conversation. What follows is rarely straightforward. Most candidates struggle to find guidance that reflects their professional reality.
          </motion.p>
          <motion.p 
            className="text-base lg:text-lg opacity-90 leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            <strong>BeyondBridge provides structure where the process often lacks it.</strong> We work with seafarers and maritime professionals seeking admission to top global MBA programs and long-term careers ashore.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 btn-animate hover-lift">
              Contact Us Today <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative flex justify-center lg:justify-end"
          variants={imageVariants}
        >
          <motion.img
            src={founderImg}
            alt="BeyondBridge Team"
            className="rounded-lg shadow-2xl max-h-[500px] object-cover object-top hover-lift"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-4 right-4 lg:right-0 bg-primary/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-[220px] hover-scale"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p className="font-bold text-sm">BeyondBridge Team</p>
            <p className="text-xs opacity-80">Maritime MBA Specialists</p>
            <p className="text-xs font-semibold mt-1">Sea to Shore</p>
            <p className="text-xs opacity-80">Career Transitions</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
