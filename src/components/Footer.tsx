const footerLinks = {
  "Who We Are": ["Our Story", "Our Team", "Testimonials", "Careers"],
  Services: ["Comprehensive Packages", "Hourly Consulting", "Essay Editing", "Interview Prep"],
  Resources: ["Blog", "Podcast", "Free Guides", "FAQ"],
  Connect: ["Contact Us", "Free Consultation", "Newsletter"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <span className="font-heading text-2xl font-bold">
              <span className="text-secondary">admit</span>
              <span className="text-primary">Pro.</span>
            </span>
            <p className="text-sm opacity-60 mt-3 leading-relaxed">
              Your trusted partner in MBA admissions consulting since 2005.
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
          © {new Date().getFullYear()} AdmitPro Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
