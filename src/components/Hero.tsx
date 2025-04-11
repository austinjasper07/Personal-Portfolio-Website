
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(59,130,246,0.1)_0%,rgba(255,255,255,0)_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-navy-900 dark:text-white">
              <span className="relative inline-block">
                <span className="relative animate-wave inline-block mr-2">👋</span> 
                Hi, I'm{" "}
              </span>
              <span className="relative mt-2 inline-block text-transparent bg-clip-text animated-gradient">Ugochukwu Ugwu</span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 md:max-w-xl">
              A <span className="font-semibold text-primary">passionate developer</span> crafting beautiful software and web experiences with creative solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="rounded-full text-lg px-8">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative w-80 h-80 lg:w-96 lg:h-96 mt-10 md:mt-0">
            <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden shadow-xl">
              {/* This would typically be your profile image */}
              <div className="text-9xl">👩‍💻</div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full text-white flex items-center justify-center text-4xl shadow-lg animate-pulse">
              ✨
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 dark:text-gray-400">
          <ArrowDownIcon className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
