import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const TopBanner = () => {
  return (
    <motion.div 
      className="top-banner py-2 text-center text-sm font-medium"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <motion.span 
        className="font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Maritime professionals
      </motion.span>{" "}
      — Specialized guidance for your transition to business school and careers ashore.{" "}
      <motion.a 
        href="#" 
        className="underline inline-flex items-center gap-1 hover:opacity-80"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Start your journey <ArrowRight className="w-3 h-3" />
      </motion.a>
    </motion.div>
  );
};

export default TopBanner;
