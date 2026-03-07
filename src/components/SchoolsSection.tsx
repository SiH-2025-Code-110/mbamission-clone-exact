import { Button } from "@/components/ui/button";

const schools = [
  "Harvard Business School",
  "Stanford GSB",
  "Wharton",
  "Chicago Booth",
  "Columbia Business School",
  "MIT Sloan",
  "Kellogg",
  "INSEAD",
  "London Business School",
  "NYU Stern",
];

const SchoolsSection = () => {
  return (
    <section className="section-alt-bg section-padding">
      <div className="section-container text-center space-y-8">
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
          We advise more applicants than any other MBA consulting firm.
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          As one of the longest-running MBA admissions consulting firms, we have personally guided more than 40,000 aspiring MBAs. Our clients have been accepted to all the world's leading business schools.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {schools.map((school) => (
            <div
              key={school}
              className="bg-background border border-border rounded-lg px-5 py-3 text-sm font-semibold text-foreground shadow-sm hover:shadow-md transition-shadow"
            >
              {school}
            </div>
          ))}
        </div>
        <Button variant="cta" size="lg">
          See Full List of Schools
        </Button>
      </div>
    </section>
  );
};

export default SchoolsSection;
