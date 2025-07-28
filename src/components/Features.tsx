import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  PhoneCall, 
  Users, 
  Shield, 
  Zap, 
  Monitor, 
  Headphones,
  Brain
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Phone className="w-8 h-8 text-brand-blue" />,
      title: "Crystal-Clear Voice Quality",
      description: "Experience flawless voice communication every time. Whether handling customer inquiries or launching sales campaigns, Uniconnect Edge delivers reliable, high-quality calls that keep conversations smooth and professional.",
      badge: "Core Feature"
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-brand-green" />,
      title: "Effortless Call Transfers",
      description: "Never lose a customer due to a missed handoff. Transfer calls instantly—whether you need to consult first or connect them immediately. Your team stays agile, and your customers feel valued.",
      badge: "Attended & Blind"
    },
    {
      icon: <Users className="w-8 h-8 text-brand-orange" />,
      title: "Instant Conference Calls",
      description: "Collaborate on the fly. Bring multiple people into the conversation with just a click—perfect for team problem-solving, quick escalations, or group sales calls. Keep everyone in sync, effortlessly.",
      badge: "Team Collaboration"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-purple" />,
      title: "Enterprise-Grade Security",
      description: "Protect your business communications with enterprise-grade security. 2FA keeps unauthorized users out, so your data and customer conversations stay safe and compliant.",
      badge: "2FA Protected"
    },
    {
      icon: <Monitor className="w-8 h-8 text-brand-pink" />,
      title: "Revolutionary Dock Mode",
      description: "Anchor the softphone interface to any edge of your desktop. Keep call controls visible and accessible at all times—effortlessly manage calls while multitasking without switching windows.",
      badge: "Productivity Boost"
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-blue" />,
      title: "Lightning-Fast Performance",
      description: "No heavy apps or system slowdowns. Our optimized desktop softphone runs smoothly on standard PCs, ensuring every call is crisp and clear without draining resources.",
      badge: "Optimized"
    },
    {
      icon: <Headphones className="w-8 h-8 text-brand-green" />,
      title: "Advanced Call Handling",
      description: "Manage multiple calls with ease—hold, resume, park, or send DTMF tones seamlessly. Empower your agents with tools that boost efficiency and keep every call on track.",
      badge: "Full Control"
    },
    {
      icon: <Brain className="w-8 h-8 text-brand-orange" />,
      title: "AI Features Coming Soon",
      description: "Stay ahead of the curve with AI-powered call summaries, real-time transcription, and smart assistant prompts. These tools will revolutionize your agents' workflow, reducing manual work.",
      badge: "Future Ready"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your desktop into a high-performance communication hub
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 hover:border-brand-purple/30 hover:shadow-card transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs bg-brand-purple/10 text-brand-purple">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-brand-purple transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;