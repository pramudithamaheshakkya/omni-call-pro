import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BusinessValue = () => {
  const valueProps = [
    {
      value: "Boost Agent Productivity",
      feature: "Intuitive, user-friendly Windows desktop app",
      impact: "Faster onboarding, less training, agents become productive from day one—driving higher call volumes and efficiency.",
      color: "purple"
    },
    {
      value: "Slash Communication Costs",
      feature: "VoIP softphone, no need for expensive desk phones or PRI lines",
      impact: "Reduce telecom expenses by up to 60%; scale easily without extra hardware or costly infrastructure.",
      color: "green"
    },
    {
      value: "Deliver Superior Customer Experience",
      feature: "Advanced call handling: attended/blind transfers, conferences, call parking, DTMF",
      impact: "Fewer dropped calls, faster resolutions, and seamless multi-party collaboration, leading to happier customers and stronger loyalty.",
      color: "blue"
    },
    {
      value: "Enterprise-Grade Security",
      feature: "Two-Factor Authentication (2FA), encrypted calls (SRTP/TLS)",
      impact: "Protect sensitive data and comply with regulations—build customer trust and reduce risk of breaches.",
      color: "orange"
    },
    {
      value: "Future-Proof with AI Enhancements",
      feature: "Upcoming AI features: transcription, smart summaries, real-time assistance",
      impact: "Automate manual tasks, improve call accuracy, empower agents with insights—accelerate resolution and boost satisfaction.",
      color: "pink"
    },
    {
      value: "Reliable, High-Performance",
      feature: "Lightweight desktop app optimized for Windows",
      impact: "Maintain crystal-clear calls without slowing down other business-critical applications—ensuring smooth workflows.",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return 'bg-brand-purple/10 text-brand-purple border-brand-purple/20';
      case 'green':
        return 'bg-brand-green/10 text-brand-green border-brand-green/20';
      case 'blue':
        return 'bg-brand-blue/10 text-brand-blue border-brand-blue/20';
      case 'orange':
        return 'bg-brand-orange/10 text-brand-orange border-brand-orange/20';
      case 'pink':
        return 'bg-brand-pink/10 text-brand-pink border-brand-pink/20';
      default:
        return 'bg-brand-purple/10 text-brand-purple border-brand-purple/20';
    }
  };

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Business Value That Drives Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the direct impact Uniconnect Edge has on your bottom line and operational efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <Card key={index} className="border border-border/50 hover:border-brand-purple/30 hover:shadow-card transition-all duration-300 group">
              <CardHeader className="space-y-3">
                <Badge variant="outline" className={`w-fit ${getColorClasses(prop.color)}`}>
                  Business Value
                </Badge>
                <CardTitle className="text-xl text-foreground group-hover:text-brand-purple transition-colors">
                  {prop.value}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Feature:</h4>
                  <p className="text-sm text-muted-foreground">
                    {prop.feature}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Impact on Your Business:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {prop.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessValue;