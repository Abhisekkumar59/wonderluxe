import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allBlogs = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    excerpt: "Discover breathtaking locations off the beaten path that will leave you mesmerized and wanting more adventure. From secret waterfalls to untouched beaches, these destinations offer authentic experiences away from tourist crowds.",
    author: "Sarah Johnson",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    category: "Destinations"
  },
  {
    id: 2,
    title: "Essential Travel Photography Tips for Beginners",
    excerpt: "Learn how to capture stunning travel moments with these professional photography techniques and equipment recommendations. Master composition, lighting, and storytelling through your lens.",
    author: "Mike Chen",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read",
    category: "Photography"
  },
  {
    id: 3,
    title: "Budget Travel: How to See the World for Less",
    excerpt: "Smart strategies and insider tips to help you travel more while spending less, without compromising on experiences. Discover accommodation hacks, transport savings, and free activities worldwide.",
    author: "Emma Davis",
    date: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
    category: "Tips"
  },
  {
    id: 4,
    title: "The Ultimate Guide to Solo Female Travel",
    excerpt: "Empowering advice for women who want to explore the world independently. Safety tips, destination recommendations, and confidence-building strategies for solo adventures.",
    author: "Jessica Rodriguez",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read",
    category: "Solo Travel"
  },
  {
    id: 5,
    title: "Sustainable Travel: Exploring Responsibly",
    excerpt: "Learn how to minimize your environmental impact while maximizing your travel experiences. Eco-friendly accommodation, responsible tourism practices, and supporting local communities.",
    author: "David Thompson",
    date: "Dec 3, 2024",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "9 min read",
    category: "Sustainable"
  },
  {
    id: 6,
    title: "Food Adventures: Culinary Journeys Around the World",
    excerpt: "Embark on a gastronomic journey through diverse cultures and cuisines. Street food guides, cooking classes, and food festivals that will tantalize your taste buds.",
    author: "Maria Santos",
    date: "Nov 30, 2024",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
    category: "Food"
  },
  {
    id: 7,
    title: "Adventure Sports: Adrenaline-Pumping Activities Worldwide",
    excerpt: "Push your limits with thrilling adventure sports across the globe. From bungee jumping in New Zealand to surfing in Hawaii, discover heart-racing experiences for adrenaline junkies.",
    author: "Alex Turner",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read",
    category: "Adventure"
  },
  {
    id: 8,
    title: "Digital Nomad Guide: Working While Traveling",
    excerpt: "Master the art of remote work while exploring the world. Co-working spaces, reliable wifi spots, and productivity tips for location-independent professionals.",
    author: "Ryan Park",
    date: "Nov 25, 2024",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "10 min read",
    category: "Digital Nomad"
  },
  {
    id: 9,
    title: "Cultural Immersion: Connecting with Local Communities",
    excerpt: "Go beyond tourist attractions and truly connect with local cultures. Homestays, cultural exchanges, and authentic experiences that create meaningful connections.",
    author: "Lisa Wang",
    date: "Nov 22, 2024",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read",
    category: "Culture"
  }
];

const categories = ["All", "Destinations", "Photography", "Tips", "Solo Travel", "Sustainable", "Food", "Adventure", "Digital Nomad", "Culture"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "title":
        return a.title.localeCompare(b.title);
      case "readTime":
        return parseInt(a.readTime) - parseInt(b.readTime);
      default: // newest
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Travel Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-in">
            Discover inspiring stories, expert tips, and insider guides to fuel your wanderlust
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles, tips, and destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Sort */}
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
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
                <option value="readTime">Read Time</option>
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {sortedBlogs.length} of {allBlogs.length} articles
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          {sortedBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedBlogs.map((blog) => (
                <div key={blog.id} className="animate-fade-in">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setSearchTerm("")} variant="outline">
                  Clear Search
                </Button>
                <Button onClick={() => setSelectedCategory("All")} variant="outline">
                  Show All Categories
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;