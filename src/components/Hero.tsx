import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/30 to-background py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-blue/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple border-brand-purple/20">
            Next-Generation Softphone for Windows
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Unify Conversations.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Amplify Performance.
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One intelligent platform for CRM, Auto Dialing, and Smart Call Handling—built to 
            supercharge every customer interaction with AI-powered insights and seamless integration.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-glow transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-purple/30 text-brand-purple hover:bg-brand-purple/5"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground pt-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-green rounded-full"></div>
              <span>Free Trial Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-green rounded-full"></div>
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-green rounded-full"></div>
              <span>No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;