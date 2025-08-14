import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardDocumentListIcon, UsersIcon, ClockIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";

const ProjectManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-950 dark:to-pink-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Project Management</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Deliver on Time, Every Time
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Streamline your project workflows with intelligent task management, resource allocation, and real-time collaboration tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">Start Managing Projects</Button>
              <Button variant="outline" size="lg" className="px-8 py-3">View Templates</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Project Control</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to plan, execute, and deliver successful projects from start to finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ClipboardDocumentListIcon className="h-8 w-8" />,
                title: "Task Management",
                description: "Create, assign, and track tasks with powerful workflow automation. Set dependencies, deadlines, and priorities."
              },
              {
                icon: <UsersIcon className="h-8 w-8" />,
                title: "Team Collaboration",
                description: "Keep your team aligned with real-time communication, file sharing, and progress updates in one central hub."
              },
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "Timeline Management",
                description: "Visualize project timelines with Gantt charts and milestone tracking. Keep projects on schedule with automated alerts."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Resource Planning",
                description: "Optimize team workload and capacity planning. Prevent burnout and ensure balanced resource allocation."
              },
              {
                icon: <CogIcon className="h-8 w-8" />,
                title: "Workflow Automation",
                description: "Automate repetitive tasks and approvals. Create custom workflows that adapt to your team's unique processes."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Progress Tracking",
                description: "Monitor project health with real-time dashboards. Track budgets, timelines, and deliverables at a glance."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Any Methodology, Any Team Size</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're running Agile sprints or traditional waterfall projects, our platform adapts to your workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Agile & Scrum",
                description: "Sprint planning, backlog management, and burndown charts. Perfect for development teams and iterative projects.",
                features: ["Sprint Planning", "User Stories", "Burndown Charts", "Retrospectives"]
              },
              {
                title: "Waterfall",
                description: "Traditional project management with sequential phases, gate reviews, and detailed project documentation.",
                features: ["Phase Gates", "Resource Scheduling", "Critical Path", "Milestone Tracking"]
              },
              {
                title: "Hybrid Approach",
                description: "Combine the best of both worlds with flexible project structures that adapt to changing requirements.",
                features: ["Custom Workflows", "Flexible Boards", "Adaptive Planning", "Cross-team Collaboration"]
              }
            ].map((method, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{method.title}</h3>
                <p className="text-muted-foreground mb-6">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground">
              Connect with the tools your team already uses to create a unified workspace.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["Slack", "GitHub", "Jira", "Confluence", "Google Drive", "Microsoft Teams"].map((tool, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-medium">{tool}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Measurable Project Success</h2>
            <p className="text-xl text-muted-foreground">
              Track the metrics that matter and demonstrate clear ROI from your project investments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "40%", label: "Faster project delivery" },
              { metric: "65%", label: "Reduction in missed deadlines" },
              { metric: "80%", label: "Improved team productivity" },
              { metric: "30%", label: "Cost savings per project" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Next Project Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join project managers who've transformed their delivery success with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Try Free for 30 Days
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-red-600">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectManagement;