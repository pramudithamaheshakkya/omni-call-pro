import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatBubbleLeftIcon, ArrowTrendingUpIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/outline";

const SuccessStories = () => {
  const stories = [
    {
      company: "Insurance Call Center — Sri Lanka",
      agents: "60+ Agents",
      icon: <UsersIcon className="w-6 h-6 text-brand-blue" />,
      challenge: "Slow, manual call transfers and outdated desk phones led to frustrating delays and poor call quality, impacting customer satisfaction.",
      solution: "Implemented Uniconnect Edge's sleek Windows desktop app with seamless headset integration.",
      result: "Instant call transfers, clear audio, and a remarkable boost in agent productivity enabling faster resolutions and happier customers.",
      color: "blue"
    },
    {
      company: "Leading BPO Client",
      agents: "150+ Agents",
      icon: <ArrowTrendingUpIcon className="w-6 h-6 text-brand-green" />,
      challenge: "Lengthy and complicated training on legacy VoIP phones slowed new agent ramp-up and limited call capacity.",
      solution: "Deployed Uniconnect Edge with its intuitive, user-friendly interface that new hires mastered in just 30 minutes.",
      result: "Daily call volume surged by 22% without adding staff—significantly improving operational efficiency and customer reach.",
      color: "green"
    },
    {
      company: "Healthcare Hotline Support",
      agents: "Multi-department",
      icon: <ClockIcon className="w-6 h-6 text-brand-orange" />,
      challenge: "Complex calls involving multiple medical staff were difficult to manage, with cumbersome conference and transfer processes increasing call times.",
      solution: "Leveraged Uniconnect Edge's effortless conference calling and smart call management features.",
      result: "Streamlined team communication and collaboration cut average call handling time by 35%, freeing healthcare professionals to focus more on patient care.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-brand-blue/30 bg-brand-blue/5';
      case 'green':
        return 'border-brand-green/30 bg-brand-green/5';
      case 'orange':
        return 'border-brand-orange/30 bg-brand-orange/5';
      default:
        return 'border-brand-purple/30 bg-brand-purple/5';
    }
  };

  return (
    <section id="success-stories" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real Success Stories with Uniconnect Edge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how organizations across industries are transforming their communication workflows
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className={`border-2 ${getColorClasses(story.color)} hover:shadow-card transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {story.icon}
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{story.company}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {story.agents}
                      </Badge>
                    </div>
                  </div>
                  <ChatBubbleLeftIcon className="w-8 h-8 text-muted-foreground/30" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {story.solution}
                    </p>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Result:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {story.result}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;