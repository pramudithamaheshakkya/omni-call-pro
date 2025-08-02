import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Database, Target, TrendingUp, Shield, Clock } from "lucide-react";

const CRM = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Contact Management",
      description: "Centralize all customer information in one place"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Organization",
      description: "Smart categorization and segmentation of customer data"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Lead Tracking",
      description: "Track leads through the entire sales pipeline"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Deep insights into customer relationships and sales performance"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Security",
      description: "Enterprise-grade security for customer data protection"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Automation",
      description: "Automate routine CRM tasks and workflows"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">CRM Solution</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Customer Relationship Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manage customer relationships and data efficiently with our comprehensive CRM platform. 
            Build stronger relationships, increase sales, and grow your business.
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
          <h2 className="text-3xl font-bold mb-4">Ready to transform your customer relationships?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of businesses already using our CRM solution
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Start Free Trial
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              Learn More
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CRM;