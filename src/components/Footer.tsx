const footerLinks = {
  About: ["Our Approach", "Our Team", "Track Record"],
  Services: ["Initial Assessment", "Advisory Sessions", "Application Support", "Interview Prep", "Reapplication Support"],
  Resources: ["Success Stories", "Maritime MBA Guide", "Contact"],
  Connect: ["contact@beyondbridge.com", "Schedule Consultation"],
};

const Footer = () => {
  return (
    <footer className="bg-background text-foreground relative border-t border-border">
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[calc(100%-1px)]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 C360,20 720,50 1440,10 L1440,60 L0,60 Z" fill="hsl(200, 20%, 99%)" />
        </svg>
      </div>
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <span className="font-heading text-2xl font-bold">
              <span className="text-black">Beyond</span>
              <span className="text-red-600">Bridge</span>
              <span className="text-red-400">.</span>
            </span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Specialized MBA admissions guidance for maritime professionals transitioning to business schools and careers ashore.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-sm mb-4 text-secondary">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BeyondBridge Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
