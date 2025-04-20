import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/ui/darkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-navy-950/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0  ">
            <a
              href="#home"
              className=" text-sm sm:text-xl lg:text-2xl font-heading font-bold tracking-tight text-navy-900 dark:text-white "
            >
              Ugochukwu Augustine Ugwu
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-600 hover:text-primary transition-colors duration-300 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild variant="default" className="rounded-full">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <DarkModeToggle />

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-navy-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-navy-950/90 backdrop-blur-md shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-navy-800"
              >
                {link.name}
              </a>
            ))}
            <Button asChild variant="default" className="w-full rounded-full mt-3">
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;