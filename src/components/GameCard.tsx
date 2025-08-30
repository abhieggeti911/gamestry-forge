
import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  category: string;
}

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-current text-gaming-gold" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="h-4 w-4 fill-current text-gaming-gold opacity-50" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-muted-foreground" />
      );
    }

    return stars;
  };

  return (
    <div className="gaming-card group cursor-pointer">
      {/* Game Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" className="btn-gaming-primary">
            <Play className="h-4 w-4 mr-2" />
            Play Now
          </Button>
        </div>
      </div>

      {/* Game Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          <span className="category-pill text-xs">
            {game.category}
          </span>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2">
          {game.description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {renderStars(game.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            {game.rating.toFixed(1)}
          </span>
        </div>

        {/* Action Button */}
        <Button variant="outline" className="w-full btn-gaming-outline">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
