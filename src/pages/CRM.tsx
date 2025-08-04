import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Database, Target, TrendingUp, Shield, Clock, Workflow, Brain, BarChart3, Globe, Lock, Check, Briefcase } from "lucide-react";

const CRM = () => {
  const keyFeatures = [
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Custom Workflows",
      description: "Design any business process — from lead tracking to post-sale engagement — using a powerful visual workflow builder. No developer required."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Intelligence",
      description: "Leverage built-in AI to automatically score leads, suggest next actions, write emails, and predict customer behavior."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "No-Code / Low-Code Platform",
      description: "Anyone on your team can build custom modules, forms, dashboards, and automations without writing a single line of code."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Flexible & Scalable",
      description: "From startups to enterprises, our CRM grows with your business — and bends to your needs."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Unified Dashboard",
      description: "See everything in one place: contacts, conversations, tasks, campaigns, and reports — all fully customizable."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Automated Actions",
      description: "Trigger follow-ups, alerts, email campaigns, or updates based on any user activity or condition."
    }
  ];

  const useCases = [
    { title: "Sales Teams", description: "Manage pipelines, forecast revenue, close faster" },
    { title: "Marketing Teams", description: "Run multi-step campaigns, segment contacts, analyze ROI" },
    { title: "Customer Support", description: "Automate ticket handling, assign issues, respond faster" },
    { title: "Operations Teams", description: "Automate approvals, assign tasks, manage internal processes" },
    { title: "Recruiters & HR", description: "Track candidates, automate onboarding, streamline reviews" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Apple Watch Style */}
      <section className="relative overflow-hidden bg-black text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AI-Powered CRM
          </h1>
          <p className="text-3xl md:text-4xl font-light mb-4">
            Build Workflows Without Code
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Design, automate, and scale your business processes — no developers needed.
            All-in-one CRM with drag-and-drop workflows, AI intelligence, and total customization.
          </p>
          
          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-lg">No-Code / Low-Code Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-lg">Fully Custom Workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-lg">Smart AI Automations</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              Build Your First Workflow
            </Button>
          </div>
        </div>
        
        {/* Background animation/image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      </section>

      {/* Build Anything Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Build Anything with Our AI-Powered CRM
            </h2>
            <p className="text-2xl font-semibold text-primary mb-4">
              No-Code. Low-Code. Fully Customizable.
            </p>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Say goodbye to rigid systems. Our CRM is built to adapt to your unique workflows, 
              not the other way around. Whether you're managing leads, automating tasks, or integrating 
              with your tools — you can design your own processes using our intuitive drag-and-drop builder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center h-full border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integrations */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
            Seamless Integrations
          </h2>
          <p className="text-xl font-semibold mb-8">
            Connect your CRM with the tools you already use.
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            No need to switch platforms — plug into your favorite apps effortlessly.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Google Workspace & Outlook</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Slack, Zoom, WhatsApp</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Zapier, Make, Webhooks</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Payment gateways & APIs</h3>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mt-8">
            Easily push and pull data across platforms with <strong>real-time sync and API flexibility</strong>.
          </p>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <BarChart3 className="h-16 w-16 text-primary mb-6" />
              <h2 className="text-5xl font-bold mb-6">
                Insight-Driven Dashboards & Analytics
              </h2>
              <p className="text-xl font-semibold text-primary mb-4">
                Track, analyze, and optimize — all in one place.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Stay on top of your KPIs with real-time dashboards that you can fully customize. 
                Use AI-assisted reporting to uncover patterns and make smarter decisions.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Build visual reports from any data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Monitor team performance, campaign success, and sales funnels</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Export or auto-schedule reports to your inbox</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Let AI highlight trends and actionable insights</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-24 w-24 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-background p-8 rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="h-24 w-24 text-primary/60" />
              </div>
            </div>
            <div>
              <Lock className="h-16 w-16 text-primary mb-6" />
              <h2 className="text-5xl font-bold mb-6">
                Built for Security & Scalability
              </h2>
              <p className="text-xl font-semibold text-primary mb-4">
                Your data is safe. Your system is future-proof.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the importance of security and reliability for growing businesses.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>End-to-end encryption & GDPR compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Role-based access control for teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Scalable cloud infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>99.9% uptime SLA and data backups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 mx-auto text-primary mb-6" />
          <h2 className="text-5xl font-bold mb-6">
            Use Cases Across Industries
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Our CRM adapts to your industry, your team, and your workflow.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-left p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground">
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of businesses already building their future with our AI-powered CRM.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRM;