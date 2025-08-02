import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Shield, Users, Settings, Headphones, Award } from "lucide-react";

const Enterprise = () => {
  const features = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Enterprise Architecture",
      description: "Robust, scalable solutions designed for large organizations"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "SOC 2, GDPR, and industry-specific compliance standards"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Unlimited Users",
      description: "Support for thousands of users with role-based access control"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Configurations",
      description: "Tailored solutions to meet unique enterprise requirements"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Premium Support",
      description: "Dedicated support team with guaranteed response times"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "SLA Guarantees",
      description: "99.99% uptime guarantee with performance commitments"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Enterprise Grade</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade solutions for large organizations. Built for scale, security, 
            and compliance with the features and support that enterprises demand.
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
          <h2 className="text-3xl font-bold mb-4">Ready for enterprise transformation?</h2>
          <p className="text-muted-foreground mb-6">
            Trusted by Fortune 500 companies worldwide for mission-critical operations
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Contact Sales
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              Enterprise Demo
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;