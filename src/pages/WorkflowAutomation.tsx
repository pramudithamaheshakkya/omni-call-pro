import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowsRightLeftIcon, BoltIcon, CogIcon, ClockIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const WorkflowAutomation = () => {
  const features = [
    {
      icon: <ArrowsRightLeftIcon className="h-8 w-8" />,
      title: "Visual Workflow Builder",
      description: "Drag-and-drop interface for creating complex workflows"
    },
    {
      icon: <BoltIcon className="h-8 w-8" />,
      title: "Trigger Events",
      description: "Automatic triggers based on user actions and conditions"
    },
    {
      icon: <CogIcon className="h-8 w-8" />,
      title: "Custom Rules",
      description: "Define custom business rules and logic"
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: "Scheduled Tasks",
      description: "Time-based automation for recurring processes"
    },
    {
      icon: <ArrowRightIcon className="h-8 w-8" />,
      title: "Multi-step Processes",
      description: "Chain multiple actions into complex workflows"
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8" />,
      title: "Approval Workflows",
      description: "Automated approval chains with notifications"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Process Automation</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Workflow Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automate business processes and workflows to increase efficiency and reduce manual work. 
            Create sophisticated automation rules that handle repetitive tasks automatically.
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
          <h2 className="text-3xl font-bold mb-4">Automate your way to efficiency</h2>
          <p className="text-muted-foreground mb-6">
            Save 15+ hours per week with intelligent workflow automation
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Build Workflow
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              View Examples
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkflowAutomation;