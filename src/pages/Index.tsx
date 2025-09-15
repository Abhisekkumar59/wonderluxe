import HeroCarousel from "@/components/HeroCarousel";
import TourCard from "@/components/TourCard";
import BlogCard from "@/components/BlogCard";
import { Star, Quote } from "lucide-react";

const featuredPackages = [
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
  }
];

const recentBlogs = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    excerpt: "Discover breathtaking locations off the beaten path that will leave you mesmerized and wanting more adventure.",
    author: "Sarah Johnson",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    category: "Destinations"
  },
  {
    id: 2,
    title: "Essential Travel Photography Tips for Beginners",
    excerpt: "Learn how to capture stunning travel moments with these professional photography techniques and equipment recommendations.",
    author: "Mike Chen",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read",
    category: "Photography"
  },
  {
    id: 3,
    title: "Budget Travel: How to See the World for Less",
    excerpt: "Smart strategies and insider tips to help you travel more while spending less, without compromising on experiences.",
    author: "Emma Davis",
    date: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
    category: "Tips"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Jessica Martinez",
    location: "Los Angeles, CA",
    rating: 5,
    comment: "WanderLux made our dream vacation to Greece absolutely perfect. Every detail was thoughtfully planned and executed flawlessly.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "David Thompson",
    location: "New York, NY",
    rating: 5,
    comment: "Outstanding service and incredible attention to detail. The Bali experience exceeded all our expectations. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Lisa Wang",
    location: "San Francisco, CA",
    rating: 5,
    comment: "The Machu Picchu trek was life-changing. Professional guides, perfect organization, and unforgettable memories. Thank you WanderLux!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const Index = () => {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Packages */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Top Tour Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our handpicked selection of extraordinary adventures crafted for the modern explorer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((tour) => (
              <div key={tour.id} className="animate-fade-in">
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Latest Travel Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get inspired by our latest travel guides, tips, and destination highlights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="animate-fade-in">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real adventurers who trusted us with their dream vacations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="travel-card text-center animate-fade-in">
                <div className="p-8">
                  <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-3"
                  />
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;