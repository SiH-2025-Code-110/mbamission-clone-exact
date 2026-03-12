import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const strategySessionCoverage = [
  {
    title: "Application Strategy",
    items: [
      "Profile evaluation and candidacy assessment",
      "School selection and competitiveness analysis",
      "Application strategy and timeline planning",
    ],
  },
  {
    title: "Narrative Development",
    items: [
      "Career goal positioning for MBA applications",
      "Identifying leadership stories that strengthen your candidacy",
      "Translating maritime leadership experience into a compelling management narrative",
    ],
  },
  {
    title: "Application Troubleshooting",
    items: [
      "Feedback on essay drafts",
      "Waitlist strategy and next steps",
      "Reapplication guidance and positioning",
    ],
  },
];

const comprehensiveSupportAreas = [
  {
    title: "Application Strategy",
    items: [
      "Refining your school list and overall application approach",
      "Positioning your profile for maximum impact",
    ],
  },
  {
    title: "Narrative Development",
    items: [
      "Identifying the leadership experiences that define your story",
      "Building a structured set of anecdotes for essays and interviews",
    ],
  },
  {
    title: "Application Materials",
    items: [
      "Resume positioning for MBA admissions standards",
      "Essay brainstorming, structuring, and iterative feedback",
      "Recommendation strategy and guidance for recommenders",
    ],
  },
  {
    title: "Submission Preparation",
    items: ["Final review of application materials before submission"],
  },
];

const interviewPreparationGains = [
  {
    title: "Interview Strategy",
    items: [
      "Understand what admissions committees evaluate during MBA interviews",
      "Develop clear responses to common MBA interview questions",
    ],
  },
  {
    title: "Practice and Feedback",
    items: ["Mock interview simulations", "Detailed feedback on your answers and storytelling"],
  },
  {
    title: "Communication and Presence",
    items: [
      "Improve clarity and structure in your responses",
      "Build confidence and professional presence during interviews",
    ],
  },
];

const postAdmissionGuidance = [
  {
    title: "Pre-MBA Preparation",
    items: [
      "Clarifying professional goals before starting your program",
      "Preparing for the transition from maritime operations to business environments",
    ],
  },
  {
    title: "Networking and Industry Exploration",
    items: [
      "Developing a thoughtful approach to building your professional network",
      "Identifying industries and roles aligned with your long-term goals",
    ],
  },
  {
    title: "Career Strategy Conversations",
    items: [
      "Preparing for internship discussions and opportunities",
      "Evaluating early career decisions after graduation",
    ],
  },
];

const packageList = {
  comprehensive: ["1 School Package", "3 School Package", "5 School Package"],
  interview: ["1 Mock Interview Session", "3 Mock Interview Sessions", "5 Mock Interview Sessions"],
};

const blockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ServicesPageContent = () => {
  const [introRef, introVisible] = useScrollReveal(0.15);
  const [servicesRef, servicesVisible] = useScrollReveal(0.1);
  const [ctaRef, ctaVisible] = useScrollReveal(0.2);

  return (
    <>
      <section className="hero-section relative overflow-hidden py-16 lg:py-24" ref={introRef}>
        <div className="section-container text-center space-y-6">
          <motion.p
            className="text-gold font-bold text-sm uppercase tracking-widest"
            variants={blockVariants}
            initial="hidden"
            animate={introVisible ? "visible" : "hidden"}
          >
            Services
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading"
            variants={blockVariants}
            initial="hidden"
            animate={introVisible ? "visible" : "hidden"}
          >
            Strategy. Story. Success.
          </motion.h1>
          <motion.p
            className="text-base lg:text-lg opacity-90 leading-relaxed max-w-5xl mx-auto"
            variants={blockVariants}
            initial="hidden"
            animate={introVisible ? "visible" : "hidden"}
          >
            Applying to a top MBA program is one of the most important decisions in your professional life.
            Strong credentials alone do not guarantee admission. What matters is how clearly your story is
            presented, how your leadership potential is demonstrated, and how convincingly your future goals
            align with the program.
          </motion.p>
          <motion.p
            className="text-base lg:text-lg opacity-90 leading-relaxed max-w-5xl mx-auto"
            variants={blockVariants}
            initial="hidden"
            animate={introVisible ? "visible" : "hidden"}
          >
            Our role is to help you present the strongest possible version of your candidacy. From shaping your
            application strategy to preparing you for the final interview, we support you at every stage of the
            MBA admissions journey.
          </motion.p>
        </div>
      </section>

      <section className="section-padding" ref={servicesRef}>
        <div className="section-container space-y-14">
          <motion.div
            className="text-center space-y-4"
            variants={blockVariants}
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
          >
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
              Modular Support Across Your MBA Journey
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Our services are structured as focused modules, allowing you to choose the level of support that
              best fits your stage in the MBA journey.
            </p>
          </motion.div>

          <motion.article
            className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm space-y-6"
            variants={blockVariants}
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
          >
            <div className="space-y-3">
              <p className="text-secondary font-bold text-sm uppercase tracking-wider">1. MBA Strategy Session</p>
              <h3 className="text-2xl font-bold font-heading text-foreground">Expert guidance when you need it most</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sometimes you do not need a full consulting engagement. You simply need clear advice from someone
                who understands the admissions process and the unique transition from maritime careers to
                management roles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The MBA Strategy Session is a focused 60-minute advisory conversation designed to help you move
                forward with clarity and confidence. Whether you are exploring schools or already working on your
                application materials, this session provides targeted insights and practical direction.
              </p>
              <h4 className="text-lg font-semibold text-foreground">What We Can Cover</h4>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {strategySessionCoverage.map((group) => (
                <div key={group.title} className="bg-muted/40 rounded-lg p-5 space-y-3">
                  <h5 className="font-semibold text-foreground">{group.title}</h5>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Each session is tailored to your questions, goals, and stage in the application process.
            </p>
          </motion.article>

          <motion.article
            className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm space-y-6"
            variants={blockVariants}
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
          >
            <div className="space-y-3">
              <p className="text-secondary font-bold text-sm uppercase tracking-wider">2. Comprehensive MBA Application Support</p>
              <h3 className="text-2xl font-bold font-heading text-foreground">Our most comprehensive application support service</h3>
              <p className="text-muted-foreground leading-relaxed">
                For candidates who want structured guidance throughout the admissions process, the Comprehensive
                MBA Application Support service provides structured guidance from early strategy to final
                submission.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For seafarers and maritime professionals, the challenge is often translating shipboard leadership
                into a narrative that resonates with business school admissions committees. We work closely with
                you to transform that experience into a clear and compelling MBA candidacy.
              </p>
              <h4 className="text-lg font-semibold text-foreground">What We Help You With</h4>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {comprehensiveSupportAreas.map((group) => (
                <div key={group.title} className="bg-muted/40 rounded-lg p-5 space-y-3">
                  <h5 className="font-semibold text-foreground">{group.title}</h5>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-5 space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Available Packages</h4>
              <p className="text-muted-foreground leading-relaxed">
                Application support is offered as structured packages depending on the number of schools you plan
                to apply to.
              </p>
              <ul className="grid sm:grid-cols-3 gap-3">
                {packageList.comprehensive.map((item) => (
                  <li key={item} className="bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground font-medium text-center">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interview preparation is typically conducted once candidates receive interview invitations and is
                offered as a separate service.
              </p>
            </div>
          </motion.article>

          <motion.article
            className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm space-y-6"
            variants={blockVariants}
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
          >
            <div className="space-y-3">
              <p className="text-secondary font-bold text-sm uppercase tracking-wider">3. MBA Interview Preparation</p>
              <h3 className="text-2xl font-bold font-heading text-foreground">Communicate your story with confidence</h3>
              <p className="text-muted-foreground leading-relaxed">
                An interview invitation indicates that the admissions committee sees strong potential in your
                profile. The next step is to communicate your story clearly and confidently.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For professionals transitioning from maritime roles to business careers, interviews often focus on
                leadership, decision-making under pressure, and adaptability. Our preparation sessions help you
                articulate these experiences in a way that resonates with MBA admissions interviewers.
              </p>
              <h4 className="text-lg font-semibold text-foreground">What You Will Gain</h4>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {interviewPreparationGains.map((group) => (
                <div key={group.title} className="bg-muted/40 rounded-lg p-5 space-y-3">
                  <h5 className="font-semibold text-foreground">{group.title}</h5>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-5 space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Interview Preparation Packages</h4>
              <ul className="grid sm:grid-cols-3 gap-3">
                {packageList.interview.map((item) => (
                  <li key={item} className="bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground font-medium text-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.article
            className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm space-y-6"
            variants={blockVariants}
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
          >
            <div className="space-y-3">
              <p className="text-secondary font-bold text-sm uppercase tracking-wider">4. Post Admission Advisory</p>
              <h3 className="text-2xl font-bold font-heading text-foreground">Prepare for the next phase of your journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receiving an MBA admit is an exciting milestone. It also marks the beginning of a new professional
                chapter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For many maritime professionals, business school represents the bridge between life at sea and
                leadership roles in global industries. Preparing thoughtfully for that transition can make a
                significant difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our Post Admission Advisory provides structured guidance to help you approach this transition with
                clarity and confidence.
              </p>
              <h4 className="text-lg font-semibold text-foreground">Areas of Guidance</h4>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {postAdmissionGuidance.map((group) => (
                <div key={group.title} className="bg-muted/40 rounded-lg p-5 space-y-3">
                  <h5 className="font-semibold text-foreground">{group.title}</h5>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Post-admission support is delivered through up to four advisory sessions within twelve months of
              admission.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="section-padding bg-secondary/5" ref={ctaRef}>
        <motion.div
          className="section-container text-center space-y-6"
          variants={blockVariants}
          initial="hidden"
          animate={ctaVisible ? "visible" : "hidden"}
        >
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">Begin Your Journey Ashore</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Whether you need focused advice or comprehensive application support, our goal remains the same. We
            help maritime professionals present their stories with clarity, confidence, and purpose to the
            world’s leading business schools.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default ServicesPageContent;