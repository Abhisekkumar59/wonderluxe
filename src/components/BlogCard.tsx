import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  category: string;
}

const BlogCard = ({ blog }: { blog: BlogCardProps }) => {
  return (
    <Card className="travel-card group">
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {blog.category}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{blog.author}</span>
          </div>
          <span>{blog.readTime}</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        
        <button className="flex items-center space-x-2 text-primary font-semibold hover:text-primary-hover transition-colors group-hover:translate-x-1 transition-transform duration-200">
          <span>Read More</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;