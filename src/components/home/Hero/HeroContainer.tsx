import Hero from "./Hero";
import Projects from "./Projects";
import Jobseeker from "./Jobseeker";
import Motion from "@/components/ui/motion";

const HeroContainer = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 grid-rows-[1fr_180px] lg:grid-cols-[5fr_1.5fr] lg:grid-rows-2 gap-6">
        <div className="col-span-2 lg:col-span-1 lg:row-span-2">
            <Motion>
                <Hero />
            </Motion>
        </div>
        <Motion>
            <Projects />
        </Motion>
        <Motion>
            <Jobseeker />
        </Motion>
    </div>
  );
};

export default HeroContainer;
