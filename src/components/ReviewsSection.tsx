import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    title: "Considering an MBA After Several Years of Work",
    content: "I had been thinking about an MBA for a long time, but I genuinely did not know where to start. No one in my close group had been through this process before, and most of the advice I found online felt generic or conflicting. I spoke to people, read forums, and tried to piece things together, but nothing gave me a clear direction. My consultation with BeyondBridge changed that. For the first time, the process felt structured. I understood what steps I needed to take, what was realistic for my profile, and how to move forward without guessing."
  },
  {
    title: "Returning to Academics After a Long Gap", 
    content: "It had been almost a decade since I last studied formally, so the idea of returning to academics was intimidating. GMAT preparation was a challenge, and the number of schools only added to the confusion. I did not know which programs would genuinely value my experience or how to begin narrowing the list. Working with BeyondBridge helped me bring order to that uncertainty. We focused on programs where my background made sense, and I learned how to present my experience clearly and honestly."
  },
  {
    title: "Reapplying After an Earlier Attempt",
    content: "I had already applied once and even received an interview call from my first choice, but I was not able to convert it. By that stage, I had already spent a significant amount on tests and application fees, and I did not want to repeat the process without understanding what needed to change. The interview preparation sessions helped me see where I was falling short. I became more aware of how my answers were coming across and where my thinking lacked structure."
  }
];

const ReviewsSection = () => {
  const [ref, isVisible] = useScrollReveal(0.2);

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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-alt-bg section-padding" ref={ref}>
      <motion.div 
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div className="text-center space-y-6 mb-12" variants={headerVariants}>
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
            Experiences Shared by Candidates
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Maritime professionals who have successfully transitioned to leading business schools share their experiences working with BeyondBridge.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i} 
              className="bg-background rounded-xl shadow-lg p-6 space-y-4 hover-lift"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.6 }}
              >
                <Quote className="w-8 h-8 text-primary opacity-50" />
              </motion.div>
              <h3 className="font-bold text-lg text-foreground">{testimonial.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          variants={headerVariants}
        >
          <Button variant="cta" size="lg" className="btn-animate hover-lift">
            Start Your Journey
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
