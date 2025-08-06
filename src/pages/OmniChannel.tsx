import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, Phone, Video, Smartphone, Globe } from "lucide-react";

const OmniChannel = () => {
  const channels = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat",
      description: "Real-time website chat support"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      description: "Professional email communication"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Voice Calls",
      description: "High-quality voice communication"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Calls",
      description: "Face-to-face video meetings"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "SMS/WhatsApp",
      description: "Mobile messaging integration"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Social Media",
      description: "Connect across social platforms"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Communication Platform</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Omni-Channel Communication
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect across all communication channels seamlessly. Provide consistent, 
            personalized experiences whether customers reach you via chat, email, phone, or social media.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {channels.map((channel, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {channel.icon}
                </div>
                <CardTitle>{channel.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{channel.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Unify your customer communications</h2>
          <p className="text-muted-foreground mb-6">
            Reduce response times by 60% and increase customer satisfaction
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Get Started
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              See Demo
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OmniChannel;