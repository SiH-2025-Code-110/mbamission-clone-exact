import { Button } from "@/components/ui/button";
import { CheckCircle, Users, FileText, MessageSquare, RotateCcw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: Users,
    title: "Initial Assessment and Planning",
    description: "Every engagement begins with a detailed assessment of your profile.",
    details: [
      "Understanding your professional background, academic history, and career objectives",
      "Test readiness, prior scores if available, timelines, and practical constraints",
      "Programs where your profile is competitive",
      "Gaps that may need to be addressed before applying",
      "Test score expectations and preparation considerations"
    ]
  },
  {
    icon: MessageSquare,
    title: "Focused Advisory Sessions",
    description: "Additional advisory sessions for targeted guidance.",
    details: [
      "Clarify program requirements and admissions processes",
      "Discuss profile improvement and positioning strategies", 
      "Address specific questions around school selection, timing, or preparation",
      "Refine thinking before moving into comprehensive application support"
    ]
  },
  {
    icon: FileText,
    title: "Comprehensive Application Support",
    description: "End-to-end application support for serious candidates.",
    details: [
      "Resume positioning and refinement",
      "Professional profile setup aligned with post MBA goals",
      "Development and review of essays and written submissions",
      "Guidance on recommendation selection and structure",
      "Coordination of supporting documents and experience narratives"
    ]
  },
  {
    icon: CheckCircle,
    title: "Interview Preparation",
    description: "Tailored interview support for individual programs.",
    details: [
      "Clarifying motivations and career choices",
      "Structuring responses around experience and judgment", 
      "Communicating goals with confidence and precision",
      "Mock interviews practical and tailored to individual programs"
    ]
  },
  {
    icon: RotateCcw,
    title: "Reapplication and Waitlist Support",
    description: "Strategic support for subsequent applications.",
    details: [
      "Reassess positioning and identify gaps",
      "Plan next steps with clarity",
      "Strengthen areas that limited earlier outcomes",
      "Approach subsequent applications deliberately rather than reactively"
    ]
  }
];

const ServicesSection = () => {
  const [ref, isVisible] = useScrollReveal(0.1);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding" ref={ref}>
      <motion.div 
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div className="text-center space-y-6 mb-16" variants={headerVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            BeyondBridge works through structured, modular engagements designed to support informed decision-making at each stage of the MBA journey. Candidates engage at the depth required, without unnecessary commitment.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="bg-background border border-border rounded-xl p-8 shadow-sm hover-lift"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-4 mb-6"
                initial={{ x: -20, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
              >
                <motion.div 
                  className="bg-secondary/10 rounded-lg p-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <service.icon className="w-6 h-6 text-secondary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </motion.div>
              <ul className="space-y-3">
                {service.details.map((detail, j) => (
                  <motion.li 
                    key={j} 
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.2 + j * 0.1 + 0.5, duration: 0.4 }}
                  >
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-secondary/5 rounded-2xl p-8 text-center space-y-6 border border-secondary/10"
          variants={cardVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-foreground"
            variants={headerVariants}
          >
            Flexible Engagement
          </motion.h3>
          <motion.p 
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            variants={headerVariants}
          >
            Not every candidate requires the same level of support. All services are modular and can be combined or taken independently, based on stage and requirements. Scope is discussed after understanding your profile and objectives.
          </motion.p>
          <motion.div className="space-y-4" variants={headerVariants}>
            <h4 className="text-lg font-semibold text-foreground">What Happens Next</h4>
            <p className="text-muted-foreground">
              Engagements typically begin with a structured conversation focused on understanding your background, goals, and readiness for the process. This discussion is intended to bring clarity on whether an MBA makes sense at this stage and what a suitable path forward might look like.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="cta" size="lg" className="mt-6 btn-animate hover-lift">
                Schedule Your Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;