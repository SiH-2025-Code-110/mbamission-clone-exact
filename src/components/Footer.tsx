const footerLinks = {
  "About": ["Our Approach", "Our Team", "Track Record"],
  Services: ["Initial Assessment", "Advisory Sessions", "Application Support", "Interview Prep", "Reapplication Support"],
  Resources: ["Success Stories", "Maritime MBA Guide", "Contact"],
  Connect: ["contact@beyondbridge.com", "Free Consultation", "Schedule Assessment"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <span className="font-heading text-2xl font-bold">
              <span className="text-primary">Beyond</span>
              <span className="text-secondary">Bridge</span>
            </span>
            <p className="text-sm opacity-60 mt-3 leading-relaxed">
              Specialized MBA admissions guidance for maritime professionals transitioning to business schools and careers ashore.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} BeyondBridge Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
