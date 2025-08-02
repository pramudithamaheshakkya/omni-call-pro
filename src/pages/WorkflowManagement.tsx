import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Users, Calendar, BarChart3, CheckCircle, Workflow } from "lucide-react";

const WorkflowManagement = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Advanced Configuration",
      description: "Sophisticated workflow design with complex logic and conditions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Multi-user workflow design and management capabilities"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Process Scheduling",
      description: "Time-based triggers and scheduled workflow execution"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Monitoring",
      description: "Track workflow performance and optimization metrics"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Built-in validation and error handling mechanisms"
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Template Library",
      description: "Pre-built workflow templates for common business processes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Advanced Process Management</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Workflow Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Design, manage, and optimize complex business workflows with advanced features. 
            Create sophisticated automation that adapts to your unique business requirements.
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
          <h2 className="text-3xl font-bold mb-4">Master your business processes</h2>
          <p className="text-muted-foreground mb-6">
            Enterprise-grade workflow management for complex organizations
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Design Workflow
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

export default WorkflowManagement;