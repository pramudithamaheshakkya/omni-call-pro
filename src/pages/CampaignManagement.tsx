import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SpeakerWaveIcon, CalendarIcon, PresentationChartBarIcon, EnvelopeIcon, UsersIcon } from "@heroicons/react/24/outline";

const CampaignManagement = () => {
  const features = [
    {
      icon: <SpeakerWaveIcon className="h-8 w-8" />,
      title: "Campaign Builder",
      description: "Create multi-channel campaigns with drag-and-drop simplicity"
    },
    {
      icon: <CalendarIcon className="h-8 w-8" />,
      title: "Scheduling",
      description: "Plan and schedule campaigns across multiple time zones"
    },
    {
      icon: <PresentationChartBarIcon className="h-8 w-8" />,
      title: "Audience Targeting",
      description: "Precise targeting based on demographics and behavior"
    },
    {
      icon: <PresentationChartBarIcon className="h-8 w-8" />,
      title: "Performance Tracking",
      description: "Real-time analytics and ROI measurement"
    },
    {
      icon: <EnvelopeIcon className="h-8 w-8" />,
      title: "Email Automation",
      description: "Automated email sequences and drip campaigns"
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Segmentation",
      description: "Advanced customer segmentation for personalized campaigns"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Marketing Automation</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Campaign Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create and manage marketing campaigns that drive results. From planning to execution 
            to analysis, manage every aspect of your marketing efforts in one platform.
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
          <h2 className="text-3xl font-bold mb-4">Launch your next successful campaign</h2>
          <p className="text-muted-foreground mb-6">
            Join marketing teams who've increased their conversion rates by 40%
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Start Campaign
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              View Templates
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampaignManagement;