import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Users, Key, Eye, Settings } from "lucide-react";

const AccessControl = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Role-Based Access",
      description: "Define custom roles with specific permissions and access levels"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Multi-Factor Authentication",
      description: "Enhanced security with 2FA and biometric authentication"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Management",
      description: "Centralized user provisioning and de-provisioning"
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "API Security",
      description: "Secure API access with token-based authentication"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Audit Logging",
      description: "Comprehensive audit trails for compliance and monitoring"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Granular Permissions",
      description: "Fine-grained control over feature and data access"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Security & Compliance</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Access Control
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade security and permission management system. Control who can access 
            what, when, and how with comprehensive security features and compliance tools.
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
          <h2 className="text-3xl font-bold mb-4">Secure your business with confidence</h2>
          <p className="text-muted-foreground mb-6">
            Meet compliance requirements while maintaining user-friendly access
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Configure Security
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              Compliance Guide
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessControl;