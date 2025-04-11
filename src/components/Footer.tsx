
import { ArrowUp } from "lucide-react";
import Follow from "./ui/follow";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-navy-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heading font-bold">Ugochukwu Augustine Ugwu</h2>
            <p className="text-gray-400 mt-2">Software, Mobile & Web Developer</p>
          </div>
          
           <Follow/>

        </div>
        
        <div className="border-t border-navy-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ugochukwu Augustine Ugwu. All rights reserved.
            </p>
            
            <div className="flex items-center">
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-navy-800 hover:bg-navy-700 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
