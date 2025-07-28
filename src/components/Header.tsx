import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-xl font-bold text-foreground">Uniconnect Edge</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
              <a href="#success-stories" className="text-muted-foreground hover:text-foreground transition-colors">Success Stories</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="outline" className="hidden sm:inline-flex">
              Contact Sales
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;