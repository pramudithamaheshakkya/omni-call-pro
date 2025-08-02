import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, MapPin, Server, Clock, Shield, TrendingUp } from "lucide-react";

const Edge = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Ultra-Low Latency",
      description: "Process data closer to users for lightning-fast response times"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Global Distribution",
      description: "Edge nodes strategically placed worldwide for optimal performance"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Edge Computing Power",
      description: "Powerful processing capabilities at the network edge"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-Time Processing",
      description: "Instant data processing without cloud round trips"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enhanced Security",
      description: "Distributed security with reduced attack surface"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Improved Performance",
      description: "Significant performance gains for latency-sensitive applications"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">High Performance</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Edge Computing Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy applications at the edge for real-time processing and ultra-low latency. 
            Perfect for IoT, gaming, streaming, and applications requiring instant response times.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the speed of edge computing</h2>
          <p className="text-muted-foreground mb-6">
            Reduce latency by up to 90% with our global edge infrastructure
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Deploy at Edge
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              Performance Tests
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Edge;