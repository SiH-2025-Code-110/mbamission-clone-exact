import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ContactSection = () => {
  const [ref, isVisible] = useScrollReveal(0.3);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // We will handle the submit by manually constructing the payload and
  // posting it to the form action URL as provided in the screenshot.
  // Using no-cors mode to avoid CORS errors from cPanel/Mailman on frontend
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // Send the request to our own backend proxy to handle CORS
      const response = await fetch("http://localhost:4000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email })
      });
      
      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setEmail("");
      }, 3000);
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section className="section-padding bg-secondary/5 relative overflow-hidden" ref={ref}>
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C480,10 960,35 1440,15 L1440,0 L0,0 Z" fill="hsl(200, 25%, 97%)" />
        </svg>
      </div>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="cta" size="lg" className="btn-animate hover-lift relative overflow-hidden group">
                  <span className="absolute inset-0 bg-primary/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_forwards]" />
                  <Mail className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Subscribe to our Blogs
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-sm border-border">
                <DialogHeader className="space-y-3">
                  <DialogTitle className="text-2xl font-bold font-heading text-center text-foreground flex items-center justify-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    Subscribe to Insights
                  </DialogTitle>
                  <DialogDescription className="text-center text-muted-foreground text-base">
                    Join our mailing list to receive the latest MBA admission insights, tips, and articles directly in your inbox.
                  </DialogDescription>
                </DialogHeader>
                <form 
                  onSubmit={handleSubscribe} 
                  className="flex flex-col gap-4 mt-6 px-2"
                >
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 text-base transition-all bg-secondary/5 border-secondary/20 focus:border-primary focus:ring-primary/20"
                      disabled={isSubmitting || isSuccess}
                    />
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex flex-col items-center gap-2 py-2"
                      >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                          <CheckCircle2 className="h-10 w-10 text-green-500" />
                        </motion.div>
                        <p className="text-green-600 dark:text-green-400 font-medium text-center">
                          Thanks for subscribing!
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full h-12 text-lg font-medium shadow-md shadow-primary/20 transition-all hover:shadow-primary/40 relative overflow-hidden group" 
                          disabled={isSubmitting || !email}
                        >
                          <span className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-out" />
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Subscribing...
                            </>
                          ) : (
                            "Subscribe Now"
                          )}
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </DialogContent>
            </Dialog>
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