import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CurrencyDollarIcon, FunnelIcon, ChartBarIcon, UserGroupIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const SalesRevenue = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-950 dark:to-purple-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Sales & Revenue</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Focus on the Most Promising Deals
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Accelerate your sales process with intelligent pipeline management, predictive analytics, and automated lead qualification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">Boost Sales Now</Button>
              <Button variant="outline" size="lg" className="px-8 py-3">See Sales Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Close More Deals, Faster</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supercharge your sales team with AI-powered insights and automation that turns prospects into revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FunnelIcon className="h-8 w-8" />,
                title: "Smart Pipeline Management",
                description: "Visualize your entire sales pipeline with drag-and-drop deal management. Automatic stage progression and intelligent forecasting."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Predictive Analytics",
                description: "AI-powered insights predict deal outcomes and identify the best opportunities. Know which deals to prioritize for maximum ROI."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Lead Scoring & Qualification",
                description: "Automatically score leads based on behavior and demographics. Focus your energy on the most promising prospects."
              },
              {
                icon: <DocumentTextIcon className="h-8 w-8" />,
                title: "Quote & Proposal Engine",
                description: "Generate professional quotes and proposals instantly. Customizable templates and automated approval workflows."
              },
              {
                icon: <CurrencyDollarIcon className="h-8 w-8" />,
                title: "Revenue Forecasting",
                description: "Accurate revenue predictions based on historical data and current pipeline. Make informed business decisions with confidence."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Performance Analytics",
                description: "Track individual and team performance with detailed dashboards. Identify top performers and areas for improvement."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
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

      {/* Sales Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Streamlined Sales Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From first contact to closed deal, our platform guides your sales team through every step of the process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Lead Capture",
                description: "Automatically capture leads from multiple sources and qualify them instantly."
              },
              {
                step: "02",
                title: "Lead Scoring",
                description: "AI scores leads based on engagement and fit, prioritizing the best opportunities."
              },
              {
                step: "03",
                title: "Nurture & Engage",
                description: "Automated follow-up sequences keep prospects engaged throughout the sales cycle."
              },
              {
                step: "04",
                title: "Proposal & Quote",
                description: "Generate professional proposals with pricing that closes deals faster."
              },
              {
                step: "05",
                title: "Close & Analyze",
                description: "Track deal outcomes and analyze performance to improve future sales."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proven Sales Results</h2>
            <p className="text-xl text-muted-foreground">
              See how our sales platform drives real revenue growth for businesses like yours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "200%", label: "Increase in qualified leads" },
              { metric: "45%", label: "Shorter sales cycles" },
              { metric: "85%", label: "Improvement in close rates" },
              { metric: "60%", label: "Growth in average deal size" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Tools */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Sales Toolkit</h2>
            <p className="text-xl text-muted-foreground">
              Everything your sales team needs to succeed, integrated into one powerful platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Email Templates & Sequences",
              "Call Logging & Recording",
              "Meeting Scheduler",
              "Document Management",
              "Commission Tracking",
              "Territory Management",
              "Sales Reporting",
              "Mobile Sales App",
              "Integration Hub"
            ].map((tool, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                <span className="text-lg">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Accelerate Your Sales?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join sales teams who've doubled their revenue using our intelligent sales platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Selling Today
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-indigo-600">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesRevenue;