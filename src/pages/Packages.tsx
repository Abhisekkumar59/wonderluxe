import { useState } from "react";
import TourCard from "@/components/TourCard";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allPackages = [
  {
    id: 1,
    title: "Greek Islands Adventure",
    location: "Santorini & Mykonos",
    duration: "7 Days",
    price: 1299,
    rating: 4.9,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Sunset cruise", "Wine tasting", "Ancient ruins tour"],
    groupSize: "Max 12"
  },
  {
    id: 2,
    title: "Bali Cultural Experience",
    location: "Ubud & Seminyak",
    duration: "10 Days",
    price: 899,
    rating: 4.8,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Temple visits", "Rice terrace trek", "Cooking class"],
    groupSize: "Max 8"
  },
  {
    id: 3,
    title: "Machu Picchu Trek",
    location: "Cusco, Peru",
    duration: "5 Days",
    price: 749,
    rating: 4.7,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Inca Trail hiking", "Sacred Valley tour", "Local markets"],
    groupSize: "Max 15"
  },
  {
    id: 4,
    title: "Safari Adventure Kenya",
    location: "Maasai Mara",
    duration: "8 Days",
    price: 2199,
    rating: 4.9,
    reviewCount: 127,
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Big Five safari", "Cultural village visit", "Hot air balloon"],
    groupSize: "Max 10"
  },
  {
    id: 5,
    title: "Japan Cherry Blossom",
    location: "Tokyo & Kyoto",
    duration: "12 Days",
    price: 3299,
    rating: 4.8,
    reviewCount: 185,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Cherry blossom viewing", "Traditional tea ceremony", "Mount Fuji visit"],
    groupSize: "Max 16"
  },
  {
    id: 6,
    title: "Northern Lights Iceland",
    location: "Reykjavik & Ring Road",
    duration: "6 Days",
    price: 1599,
    rating: 4.6,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Aurora hunting", "Ice cave exploration", "Blue Lagoon"],
    groupSize: "Max 12"
  },
  {
    id: 7,
    title: "Morocco Desert Experience",
    location: "Marrakech & Sahara",
    duration: "9 Days",
    price: 1199,
    rating: 4.7,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Camel trekking", "Desert camping", "Berber culture"],
    groupSize: "Max 14"
  },
  {
    id: 8,
    title: "Patagonia Adventure",
    location: "Chile & Argentina",
    duration: "14 Days",
    price: 2799,
    rating: 4.9,
    reviewCount: 76,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Glacier hiking", "Torres del Paine", "Wildlife watching"],
    groupSize: "Max 8"
  },
  {
    id: 9,
    title: "Thai Island Hopping",
    location: "Phuket & Phi Phi",
    duration: "8 Days",
    price: 999,
    rating: 4.5,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Beach relaxation", "Snorkeling", "Thai cooking class"],
    groupSize: "Max 20"
  }
];

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredPackages = allPackages.filter(pkg =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "duration":
        return parseInt(a.duration) - parseInt(b.duration);
      default:
        return 0;
    }
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Tour Packages</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-in">
            Discover our curated collection of extraordinary adventures designed to create lifelong memories
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations or package names..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {sortedPackages.length} of {allPackages.length} packages
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          {sortedPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPackages.map((tour) => (
                <div key={tour.id} className="animate-fade-in">
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No packages found matching your search.</p>
              <Button onClick={() => setSearchTerm("")} variant="outline">
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Packages;