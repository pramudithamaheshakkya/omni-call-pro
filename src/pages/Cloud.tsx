import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud as CloudIcon, Scale, Shield, Layers, Globe, Zap } from "lucide-react";

const Cloud = () => {
  const features = [
    {
      icon: <CloudIcon className="h-8 w-8" />,
      title: "Multi-Cloud Support",
      description: "Deploy across AWS, Azure, Google Cloud, and hybrid environments"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Auto-Scaling",
      description: "Automatic resource scaling based on demand and usage patterns"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption at rest and in transit"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Microservices Architecture",
      description: "Modern containerized applications with Kubernetes orchestration"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Availability",
      description: "99.99% uptime with redundancy across multiple regions"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High Performance",
      description: "Optimized infrastructure for maximum speed and efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Scalable Infrastructure</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cloud Platform Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalable cloud-based platform solutions that grow with your business. 
            Enterprise-grade infrastructure with global reach and automatic scaling capabilities.
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
          <h2 className="text-3xl font-bold mb-4">Scale without limits in the cloud</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of businesses running on our cloud platform
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Start Free Trial
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              Architecture Guide
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cloud;