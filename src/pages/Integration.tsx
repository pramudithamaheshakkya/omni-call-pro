import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plug, Layers, Zap, Shield, Code, Globe } from "lucide-react";

const Integration = () => {
  const integrations = [
    {
      icon: <Plug className="h-8 w-8" />,
      title: "API Connections",
      description: "RESTful APIs for seamless third-party integrations"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Popular Platforms",
      description: "Pre-built connectors for Salesforce, HubSpot, and more"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Sync",
      description: "Live data synchronization across all connected systems"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Connections",
      description: "Enterprise-grade security for all integrations"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Webhooks",
      description: "Build custom integrations with webhook support"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cloud Services",
      description: "Connect with AWS, Azure, Google Cloud, and more"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Connectivity</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Third-Party Integration
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with external tools and services seamlessly. Integrate with your existing 
            tech stack and create a unified ecosystem that works together efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {integration.icon}
                </div>
                <CardTitle>{integration.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{integration.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Connect everything, simplify workflows</h2>
          <p className="text-muted-foreground mb-6">
            Join teams who've eliminated data silos and increased productivity
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Browse Integrations
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              API Documentation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Integration;