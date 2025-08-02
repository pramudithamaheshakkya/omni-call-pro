import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, Target, Zap, TrendingUp, Shield } from "lucide-react";

const AI = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Advanced ML algorithms for predictive analytics"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Smart Insights",
      description: "AI-powered recommendations and insights"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "Forecast trends and customer behavior"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Intelligent Automation",
      description: "AI-driven process automation and optimization"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Continuous learning and improvement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ethical AI",
      description: "Responsible AI with privacy and security focus"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Advanced Technology</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Artificial Intelligence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the power of AI to transform your business operations. Get intelligent insights, 
            automated processes, and predictive analytics that help you stay ahead of the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the future of business intelligence</h2>
          <p className="text-muted-foreground mb-6">
            Join innovative companies leveraging AI for competitive advantage
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Explore AI Features
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              Request Demo
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AI;