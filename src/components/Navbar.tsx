import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tour Packages", path: "/packages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold travel-gradient-text">
              WanderLux
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary-hover transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary-hover transition-colors duration-200 text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;