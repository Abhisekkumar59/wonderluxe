import { Clock, Users, Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TourCardProps {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  highlights: string[];
  groupSize: string;
}

const TourCard = ({ tour }: { tour: TourCardProps }) => {
  return (
    <Card className="travel-card group">
      <div className="relative overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold">{tour.rating}</span>
            <span className="text-xs text-muted-foreground">({tour.reviewCount})</span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          ${tour.price}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{tour.location}</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{tour.groupSize}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {tour.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-semibold">
          Book Now
        </button>
      </CardContent>
    </Card>
  );
};

export default TourCard;