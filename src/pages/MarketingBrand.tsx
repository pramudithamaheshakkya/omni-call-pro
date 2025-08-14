import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SpeakerWaveIcon, ChartBarIcon, UsersIcon, EnvelopeIcon, BoltIcon } from "@heroicons/react/24/outline";

const MarketingBrand = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Marketing & Brand</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Launch Impactful Campaigns
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your marketing strategy with intelligent automation, precise targeting, and data-driven insights that drive real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">Start Free Trial</Button>
              <Button variant="outline" size="lg" className="px-8 py-3">Watch Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything Marketing Teams Need</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From campaign creation to performance analysis, we've got every aspect of your marketing workflow covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <SpeakerWaveIcon className="h-8 w-8" />,
                title: "Campaign Builder",
                description: "Create multi-channel campaigns with drag-and-drop simplicity. Design email sequences, social media campaigns, and automated workflows."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Advanced Analytics",
                description: "Track campaign performance with real-time dashboards. Monitor ROI, conversion rates, and customer engagement metrics."
              },
              {
                icon: <UsersIcon className="h-8 w-8" />,
                title: "Audience Segmentation",
                description: "Create precise customer segments based on behavior, demographics, and purchase history for targeted messaging."
              },
              {
                icon: <EnvelopeIcon className="h-8 w-8" />,
                title: "Email Automation",
                description: "Set up sophisticated email workflows that nurture leads and convert prospects into loyal customers automatically."
              },
              {
                icon: <BoltIcon className="h-8 w-8" />,
                title: "Lead Scoring",
                description: "Automatically score and qualify leads based on their actions and engagement levels to prioritize follow-ups."
              },
              {
                icon: <SpeakerWaveIcon className="h-8 w-8" />,
                title: "Brand Management",
                description: "Maintain consistent brand identity across all campaigns with centralized asset management and approval workflows."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to transform your marketing operations and drive better results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Set Up Campaigns",
                description: "Create campaigns using our intuitive builder. Choose from templates or build from scratch with drag-and-drop components."
              },
              {
                step: "02",
                title: "Target Your Audience",
                description: "Define your target segments using advanced filters. Leverage behavioral data and demographics for precise targeting."
              },
              {
                step: "03",
                title: "Analyze & Optimize",
                description: "Monitor performance in real-time. Use AI-powered insights to optimize campaigns and improve ROI continuously."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground">
              See the impact our marketing platform has on businesses like yours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "150%", label: "Increase in lead generation" },
              { metric: "85%", label: "Improvement in campaign ROI" },
              { metric: "60%", label: "Reduction in manual tasks" },
              { metric: "45%", label: "Faster campaign deployment" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of marketing teams who've already revolutionized their campaigns with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingBrand;