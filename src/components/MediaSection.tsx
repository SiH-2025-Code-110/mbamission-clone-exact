const mediaOutlets = [
  "The New York Times",
  "The Wall Street Journal",
  "Financial Times",
  "Forbes",
  "Fortune",
  "U.S. News",
];

const MediaSection = () => {
  return (
    <section className="section-padding border-y border-border">
      <div className="section-container text-center space-y-8">
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
          Featured by top MBA and prominent media outlets.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          AdmitPro is recommended by leading test prep companies and relied upon by the press as experts on the MBA application process.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 pt-4">
          {mediaOutlets.map((name) => (
            <div
              key={name}
              className="text-muted-foreground/60 font-heading font-bold text-lg lg:text-xl hover:text-foreground transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
