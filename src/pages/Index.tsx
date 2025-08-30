
import { Search, Star, TrendingUp, Gamepad2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GameCard from "@/components/GameCard";
import CategoryPill from "@/components/CategoryPill";

// Mock data for games
const featuredGames = [
  {
    id: 1,
    title: "Cyber Nexus",
    description: "Explore a neon-lit cyberpunk world in this action-packed adventure",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    category: "Action"
  },
  {
    id: 2,
    title: "Mystic Realms",
    description: "Embark on an epic fantasy journey through magical kingdoms",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    category: "Adventure"
  },
  {
    id: 3,
    title: "Neural Puzzle",
    description: "Mind-bending puzzles that challenge your cognitive abilities",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    category: "Puzzle"
  }
];

const trendingGames = [
  {
    id: 4,
    title: "Battle Nexus",
    description: "Competitive multiplayer battles in futuristic arenas",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    category: "Multiplayer"
  },
  {
    id: 5,
    title: "Galactic Empire",
    description: "Build and manage your interstellar civilization",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=300&fit=crop&crop=center",
    rating: 4.5,
    category: "Strategy"
  },
  {
    id: 6,
    title: "Neon Dreams",
    description: "An artistic indie experience in a synthwave universe",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&crop=center",
    rating: 4.4,
    category: "Indie"
  }
];

const categories = [
  { name: "Action", icon: Zap, color: "text-red-400" },
  { name: "Adventure", icon: Gamepad2, color: "text-yellow-400" },
  { name: "Puzzle", icon: Star, color: "text-purple-400" },
  { name: "Strategy", icon: TrendingUp, color: "text-blue-400" },
  { name: "Indie", icon: Star, color: "text-green-400" },
  { name: "Multiplayer", icon: Gamepad2, color: "text-pink-400" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-gaming-purple bg-clip-text text-transparent">
              GamePortal
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Games</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Categories</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">News</a>
            <Button variant="outline" size="sm">Login</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="gaming-title mb-6 float-animation">
            Discover Amazing Games
          </h1>
          <p className="gaming-subtitle mb-8 max-w-2xl mx-auto">
            Explore thousands of indie and AAA games. Find your next adventure in our curated collection.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search for games..."
                className="gaming-search pl-12 pr-4 py-4 text-lg"
              />
            </div>
            <Button className="btn-gaming-primary mt-4 md:mt-0 md:absolute md:right-2 md:top-1/2 md:transform md:-translate-y-1/2">
              Search
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <CategoryPill key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Star className="h-6 w-6 text-gaming-gold mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Featured Games</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Games */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <TrendingUp className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Trending Now</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-gaming-purple bg-clip-text text-transparent">
              GamePortal
            </span>
          </div>
          <p className="text-muted-foreground">
            Discover, play, and connect with amazing games and gamers worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
