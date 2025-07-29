import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/351de0d9-a30a-4d8c-bb5e-855e4586b3aa.png" 
                alt="Uniconnect Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Products</a>
              <a href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
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