import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  PhoneIcon, 
  PhoneArrowDownLeftIcon, 
  UsersIcon, 
  ShieldCheckIcon, 
  BoltIcon, 
  ComputerDesktopIcon, 
  SpeakerWaveIcon,
  CpuChipIcon
} from "@heroicons/react/24/outline";

const Features = () => {
  const features = [
    {
      icon: <PhoneIcon className="h-8 w-8" />,
      title: "Crystal-Clear Voice Quality",
      description: "Experience flawless voice communication every time. Deliver reliable, high-quality calls that keep conversations smooth and professional.",
      gradient: "from-purple-500 to-purple-600",
      badge: "Premium Audio"
    },
    {
      icon: <PhoneArrowDownLeftIcon className="h-8 w-8" />,
      title: "Effortless Call Transfers",
      description: "Never lose a customer due to a missed handoff. Transfer calls instantly—whether attended or blind transfers.",
      gradient: "from-blue-500 to-indigo-600",
      badge: "Seamless"
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Instant Conference Calls",
      description: "Collaborate on the fly. Bring multiple people into the conversation with just a click—perfect for team problem-solving.",
      gradient: "from-indigo-500 to-purple-600",
      badge: "Team Power"
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Protect your business communications with enterprise-grade security. 2FA keeps unauthorized users out and data safe.",
      gradient: "from-cyan-400 to-blue-500",
      badge: "2FA Protected"
    },
    {
      icon: <ComputerDesktopIcon className="h-8 w-8" />,
      title: "Revolutionary Dock Mode",
      description: "Anchor the softphone interface to any edge of your desktop. Stay connected, stay productive.",
      gradient: "from-red-400 to-pink-500",
      badge: "Unique Feature"
    },
    {
      icon: <BoltIcon className="h-8 w-8" />,
      title: "Lightning-Fast Performance",
      description: "Optimized desktop softphone runs smoothly on standard PCs, ensuring crisp calls without draining resources.",
      gradient: "from-green-400 to-emerald-500",
      badge: "Optimized"
    },
    {
      icon: <SpeakerWaveIcon className="h-8 w-8" />,
      title: "Advanced Call Handling",
      description: "Manage multiple calls with ease—hold, resume, park, or send DTMF tones seamlessly. Empower your agents with professional tools.",
      gradient: "from-orange-400 to-red-500",
      badge: "Full Control"
    },
    {
      icon: <CpuChipIcon className="h-8 w-8" />,
      title: "AI-Powered Features",
      description: "Stay ahead with AI-powered call summaries, real-time transcription, and smart assistant prompts coming soon.",
      gradient: "from-violet-500 to-purple-600",
      badge: "Coming Soon"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Everything you need to transform your desktop into a high-performance communication hub
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className={`h-[400px] bg-gradient-to-br ${feature.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer`}>
                    <CardContent className="p-8 h-full flex flex-col justify-between text-white">
                      <div>
                        <div className="mb-6 p-3 rounded-2xl bg-white/20 backdrop-blur-sm w-fit group-hover:bg-white/30 transition-colors">
                          {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed text-base">
                          {feature.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                          {feature.badge}
                        </Badge>
                        <div className="text-white/60 text-sm font-medium">
                          0{index + 1}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-12 gap-4">
              <CarouselPrevious className="static translate-y-0 bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg h-12 w-12" />
              <CarouselNext className="static translate-y-0 bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg h-12 w-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Features;