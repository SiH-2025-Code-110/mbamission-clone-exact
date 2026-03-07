import { ArrowRight } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="top-banner py-2 text-center text-sm font-medium">
      <span className="font-bold">Explore AccelerateTrack</span> — Our newest on-demand MBA application platform.{" "}
      <a href="#platform" className="underline inline-flex items-center gap-1 hover:opacity-80">
        Learn more <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  );
};

export default TopBanner;
