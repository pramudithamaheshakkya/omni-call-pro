import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBracketIcon, BugAntIcon, RocketLaunchIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";

const DevelopersSoftware = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-950 dark:to-blue-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Developers & Software</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Amplify Sprint Velocity
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Accelerate development cycles with intelligent bug tracking, sprint planning, and automated workflow management designed for modern dev teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">Start Free Sprint</Button>
              <Button variant="outline" size="lg" className="px-8 py-3">See Dev Tools</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for Developer Productivity</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your development workflow with tools that integrate seamlessly into your existing tech stack.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BugAntIcon className="h-8 w-8" />,
                title: "Intelligent Bug Tracking",
                description: "Advanced bug tracking with automatic categorization, severity assessment, and smart assignment to the right developers."
              },
              {
                icon: <RocketLaunchIcon className="h-8 w-8" />,
                title: "Sprint Planning & Management",
                description: "Plan sprints with story point estimation, velocity tracking, and automated burndown charts for better predictability."
              },
              {
                icon: <CodeBracketIcon className="h-8 w-8" />,
                title: "Code Review Workflows",
                description: "Streamlined code review process with automated checks, pull request management, and quality gate enforcement."
              },
              {
                icon: <RocketLaunchIcon className="h-8 w-8" />,
                title: "Release Management",
                description: "Coordinate releases with feature flags, deployment tracking, and automated rollback capabilities for safer deployments."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Development Analytics",
                description: "Track team velocity, code quality metrics, and deployment frequency to optimize development processes."
              },
              {
                icon: <CogIcon className="h-8 w-8" />,
                title: "CI/CD Integration",
                description: "Native integration with popular CI/CD tools, automated testing workflows, and deployment pipeline management."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
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

      {/* Development Methodologies */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Support for Any Development Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're building with React, Python, Java, or any other technology, our platform adapts to your stack.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Agile Development",
                description: "Full Scrum and Kanban support with sprint planning, daily standups, retrospectives, and velocity tracking.",
                tools: ["User Stories", "Epic Management", "Sprint Boards", "Velocity Charts"]
              },
              {
                title: "DevOps Integration",
                description: "Seamless integration with your DevOps pipeline for continuous integration and continuous deployment.",
                tools: ["Pipeline Management", "Automated Testing", "Deployment Tracking", "Environment Management"]
              },
              {
                title: "Quality Assurance",
                description: "Built-in QA workflows with test case management, bug tracking, and automated quality gates.",
                tools: ["Test Case Management", "Automated Testing", "Bug Lifecycle", "Quality Metrics"]
              }
            ].map((method, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{method.title}</h3>
                <p className="text-muted-foreground mb-6">{method.description}</p>
                <ul className="space-y-2">
                  {method.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Developer Tool Integrations</h2>
            <p className="text-xl text-muted-foreground">
              Connect with the tools your development team already loves and uses daily.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["GitHub", "GitLab", "Bitbucket", "Jenkins", "Docker", "Kubernetes", "AWS", "Azure", "VS Code", "IntelliJ", "Slack", "Discord"].map((tool, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-xs font-medium">{tool}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Development Team Performance</h2>
            <p className="text-xl text-muted-foreground">
              Track and improve your team's development velocity with actionable insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "50%", label: "Faster bug resolution" },
              { metric: "35%", label: "Increase in sprint velocity" },
              { metric: "70%", label: "Reduction in deployment issues" },
              { metric: "25%", label: "Improvement in code quality" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API and Documentation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Developer-First Platform</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive APIs, webhooks, and documentation to customize and extend the platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "RESTful APIs",
                description: "Complete API coverage for all platform features with comprehensive documentation and SDKs.",
                features: ["OpenAPI Specification", "Rate Limiting", "Authentication", "Webhooks"]
              },
              {
                title: "Custom Integrations",
                description: "Build custom integrations with our flexible webhook system and real-time event streaming.",
                features: ["Real-time Events", "Custom Workflows", "Data Export", "Third-party Connectors"]
              },
              {
                title: "Developer Resources",
                description: "Extensive documentation, code samples, and developer community support.",
                features: ["Interactive Docs", "Code Examples", "Community Forum", "Developer Support"]
              }
            ].map((resource, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{resource.title}</h3>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Supercharge Your Development?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join development teams who've accelerated their velocity and improved code quality with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevelopersSoftware;