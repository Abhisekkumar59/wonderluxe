import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import santoriniHero from "@/assets/santorini-hero.jpg";
import baliHero from "@/assets/bali-hero.jpg";
import machuPicchuHero from "@/assets/machu-picchu-hero.jpg";

const destinations = [
  {
    id: 1,
    title: "Santorini, Greece",
    subtitle: "Whitewashed Paradise",
    description: "Discover the magic of blue-domed churches and stunning sunsets",
    image: santoriniHero
  },
  {
    id: 2,
    title: "Bali, Indonesia",
    subtitle: "Tropical Serenity",
    description: "Experience ancient temples, lush rice terraces, and pristine beaches",
    image: baliHero
  },
  {
    id: 3,
    title: "Machu Picchu, Peru",
    subtitle: "Ancient Wonder",
    description: "Journey to the lost city of the Incas high in the Andes Mountains",
    image: machuPicchuHero
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {destinations.map((destination, index) => (
        <div
          key={destination.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${destination.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto container-padding animate-fade-in">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{destination.subtitle}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
                  {destination.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  {destination.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-hero">
                    Explore Packages
                  </button>
                  <button className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold py-3 px-8 rounded-full">
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;