import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, MessageSquare, Clock, Users, Headphones, Smartphone } from "lucide-react";

const AIAgent = () => {
  const capabilities = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Intelligent Conversations",
      description: "Natural language processing for human-like interactions"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Multi-Platform Support",
      description: "Deploy across websites, apps, and messaging platforms"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock customer support and assistance"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalized Experience",
      description: "Tailored responses based on user history and preferences"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Human Handoff",
      description: "Seamless escalation to human agents when needed"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Voice & Text",
      description: "Support for both voice and text-based interactions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Virtual Assistant</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Agent (Virtual Assistant)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy intelligent virtual assistants that understand, learn, and assist your customers 
            24/7. Enhance customer experience with AI-powered conversations and automated support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {capability.icon}
                </div>
                <CardTitle>{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{capability.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Deploy your AI assistant today</h2>
          <p className="text-muted-foreground mb-6">
            Reduce support costs by 50% while improving customer satisfaction
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Start Building
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              Try Demo
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAgent;