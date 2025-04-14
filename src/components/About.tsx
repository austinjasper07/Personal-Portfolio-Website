
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-secondary shadow-xl p-4 flex items-center justify-center">
              {/* This would be a professional photo */}
              <img src="" alt="" />
              <div className="text-[10rem]">👨‍💻</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-navy-800 shadow-lg p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for freelance</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-navy-900 dark:text-white">
              Passionate Software & Web Developer
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm Ugochukwu Augustine Ugwu, a passionate and results-driven software developer with a broad skillset across web, mobile, desktop, and blockchain development. I specialize in full stack web development using MERN stack, Next.js, and Python, building fast, scalable, and maintainable applications. On the mobile side, I create cross-platform apps using React Native, Flutter, and C#, delivering smooth user experiences across devices. I also develop desktop software with C# and .NET, and have hands-on experience in blockchain development, adding decentralized capabilities to modern solutions. With a strong focus on clean code, usability, and continuous learning, I’m committed to building meaningful digital products that solve real-world problems.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials. I believe in continuous learning and constantly pushing the boundaries of what's possible on the web.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-heading font-semibold text-navy-900 dark:text-white">Name</h4>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-base">Ugochukwu Ugwu</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-navy-900 dark:text-white">Email</h4>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-base">austinjasper07@gmail.com</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-navy-900 dark:text-white">Location</h4>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-base">Lagos, Nigeria</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-navy-900 dark:text-white">Availability</h4>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-base">Freelance / Full-time</p>
              </div>
            </div>
            
            <Button asChild variant="outline" className="mt-8 rounded-full" size="lg">
              <a target="_blank" href="https://drive.google.com/file/d/14Vh9hA44mw0Dr3L9P2NGNIziIcFY592f/view" download>
                <FileText className="mr-2 h-4 w-4 " /> Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
