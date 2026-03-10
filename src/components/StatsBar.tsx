import { Award, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  {
    icon: Award,
    text: "Over one hundred maritime professionals advised on transitions to MBA programs and careers ashore.",
  },
  {
    icon: Star,
    text: "98 percent of applicants applied to programs within the global top 25 business schools.",
  },
  {
    icon: Users,
    text: "99 percent of applicants received at least one interview invitation from leading MBA programs.",
  },
];

const StatsBar = () => {
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
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="stats-bar" ref={ref}>
      <motion.div 
        className="section-container grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            className="flex flex-col items-center text-center gap-3 py-8 px-6 hover-lift"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: i * 0.2 + 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <stat.icon className="w-8 h-8 opacity-90" />
            </motion.div>
            <motion.p 
              className="text-sm font-medium leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: i * 0.2 + 0.8, duration: 0.6 }}
            >
              {stat.text}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsBar;
