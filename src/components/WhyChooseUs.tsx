import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-green" />,
      text: "30-minute setup for new agents"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
      text: "22% increase in call volume"
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-orange" />,
      text: "60% reduction in telecom costs"
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-purple" />,
      text: "Enterprise-grade security"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple border-brand-purple/20 mb-4">
              Why Choose Uniconnect Edge?
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Transform Your Desktop Into a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Communication Powerhouse
              </span>
            </h2>
          </div>
          
          <Card className="border-2 border-brand-purple/20 bg-background/80 backdrop-blur-sm shadow-glow">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Uniconnect Edge is far more than just another softphone—it's a game-changing solution 
                    that's redefining desktop voice communication for businesses that demand reliability, 
                    security, and intelligence.
                  </p>
                  
                  <div className="bg-muted/30 rounded-lg p-6 border border-brand-blue/20">
                    <h3 className="font-bold text-foreground mb-3">Real Success Story:</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A leading BPO struggling with outdated VoIP phones saw training time drop from hours to 
                      just 30 minutes after switching to Uniconnect Edge. Result? A 22% surge in daily call 
                      volume without increasing staff.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {highlight.icon}
                        <span className="text-sm text-muted-foreground">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-primary p-6 rounded-2xl text-white">
                    <h3 className="text-xl font-bold mb-4">Ready to Experience the Future?</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Free Trial Available</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Instant Setup – No Tech Hassle</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Contact us at: sales@uniconnect.ai</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-white text-brand-purple hover:bg-white/90 font-semibold"
                    >
                      Start Your Free Trial
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;