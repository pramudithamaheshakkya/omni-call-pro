import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TicketIcon, ServerIcon, ShieldCheckIcon, ClockIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const ITSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">IT & Support</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Resolve Tickets 10 Times Faster
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Revolutionize your IT operations with intelligent ticket management, proactive monitoring, and automated incident resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">Start IT Trial</Button>
              <Button variant="outline" size="lg" className="px-8 py-3">View IT Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Next-Generation IT Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empower your IT team with AI-driven tools that predict, prevent, and resolve issues before they impact your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TicketIcon className="h-8 w-8" />,
                title: "Intelligent Ticket Management",
                description: "AI-powered ticket routing, automatic categorization, and predictive resolution times for maximum efficiency."
              },
              {
                icon: <ServerIcon className="h-8 w-8" />,
                title: "Asset & Infrastructure Management",
                description: "Complete visibility into your IT assets with automated discovery, lifecycle tracking, and maintenance scheduling."
              },
              {
                icon: <ShieldCheckIcon className="h-8 w-8" />,
                title: "Proactive Monitoring",
                description: "24/7 system monitoring with predictive analytics that identify issues before they become critical problems."
              },
              {
                icon: <DocumentTextIcon className="h-8 w-8" />,
                title: "Knowledge Base & Self-Service",
                description: "Comprehensive knowledge management with AI-powered search and automated solution suggestions."
              },
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "Incident Response",
                description: "Automated incident escalation, war room coordination, and post-incident analysis for continuous improvement."
              },
              {
                icon: <ShieldCheckIcon className="h-8 w-8" />,
                title: "Security & Compliance",
                description: "Integrated security monitoring, vulnerability management, and compliance reporting for enterprise standards."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
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

      {/* Ticket Resolution Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Streamlined Resolution Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From ticket creation to resolution, our AI-powered workflow ensures fast, accurate, and consistent support delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Auto-Classification",
                description: "AI automatically categorizes and prioritizes tickets based on content analysis and historical patterns."
              },
              {
                step: "02",
                title: "Smart Assignment",
                description: "Intelligent routing assigns tickets to the most qualified technician based on skills and workload."
              },
              {
                step: "03",
                title: "Guided Resolution",
                description: "AI suggests solutions and guides technicians through proven resolution workflows."
              },
              {
                step: "04",
                title: "Continuous Learning",
                description: "System learns from each resolution to improve future predictions and recommendations."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITIL Framework */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ITIL-Aligned Service Management</h2>
            <p className="text-xl text-muted-foreground">
              Built on industry best practices with full ITIL framework support for enterprise-grade service delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                service: "Incident Management",
                description: "Rapid incident detection, classification, and resolution with automated escalation and communication.",
                processes: ["Incident Logging", "Categorization", "Escalation", "Resolution"]
              },
              {
                service: "Problem Management",
                description: "Root cause analysis and permanent solutions to prevent recurring incidents and improve service quality.",
                processes: ["Problem Identification", "Root Cause Analysis", "Solution Implementation", "Knowledge Capture"]
              },
              {
                service: "Change Management",
                description: "Controlled change processes with risk assessment, approval workflows, and rollback capabilities.",
                processes: ["Change Request", "Impact Assessment", "Approval Workflow", "Implementation"]
              }
            ].map((service, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.service}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.processes.map((process, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{process}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IT Performance Metrics */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Exceptional IT Performance</h2>
            <p className="text-xl text-muted-foreground">
              Achieve industry-leading service levels with measurable improvements across all IT operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "90%", label: "First call resolution rate" },
              { metric: "30min", label: "Average response time" },
              { metric: "99.9%", label: "System uptime" },
              { metric: "80%", label: "User satisfaction score" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise-Ready IT Platform</h2>
            <p className="text-xl text-muted-foreground">
              Scale your IT operations with enterprise features designed for large organizations and complex environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Multi-Tenant Architecture",
              "Role-Based Access Control",
              "API Integration Hub",
              "Custom Workflows",
              "Advanced Reporting",
              "SLA Management",
              "Audit & Compliance",
              "Disaster Recovery",
              "Global Support",
              "Custom Branding",
              "Data Encryption",
              "SSO Integration"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your IT Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join IT teams who've revolutionized their support delivery and improved user satisfaction with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-green-600">
              Schedule IT Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITSupport;