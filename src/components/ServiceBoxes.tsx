import { Check } from "lucide-react";

const ServiceBoxes = () => {
  const boxes = [
    {
      color: "5CC2E2",
      title: "Marketing",
      subtitle: "& Brand",
      description: "Launch impactful campaigns",
      features: [
        "Campaign automation",
        "Lead generation",
        "Brand management",
        "Analytics tracking"
      ]
    },
    {
      color: "ED6571",
      title: "Project Management",
      subtitle: "& Tasks",
      description: "Deliver on time, every time",
      features: [
        "Task management",
        "Team collaboration",
        "Resource planning",
        "Progress tracking"
      ]
    },
    {
      color: "1A187E",
      title: "Sales",
      subtitle: "& Revenue",
      description: "Focus on promising deals",
      features: [
        "Pipeline management",
        "Deal tracking",
        "Revenue forecasting",
        "Customer insights"
      ]
    },
    {
      color: "5F67F6",
      title: "Developers",
      subtitle: "& Software",
      description: "Amplify sprint velocity",
      features: [
        "Bug tracking",
        "Sprint planning",
        "Code reviews",
        "Release management"
      ]
    },
    {
      color: "FD2254",
      title: "HR",
      subtitle: "& Recruiting",
      description: "Secure top talent effortlessly",
      features: [
        "Talent acquisition",
        "Employee onboarding",
        "Performance tracking",
        "Training programs"
      ]
    },
    {
      color: "5BC67B",
      title: "IT",
      subtitle: "& Support",
      description: "Resolve tickets 10 times faster",
      features: [
        "IT service desk",
        "Ticket management",
        "SLA tracking",
        "AI response suggestions"
      ]
    },
    {
      color: "613D6E",
      title: "Operations",
      subtitle: "& Finance",
      description: "Scale operations seamlessly",
      features: [
        "Process automation",
        "Financial reporting",
        "Quality control",
        "Cost management"
      ]
    },
    {
      color: "899CF8",
      title: "Construction",
      subtitle: "& Building",
      description: "Manage projects seamlessly",
      features: [
        "Project scheduling",
        "Safety compliance",
        "Resource allocation",
        "Progress monitoring"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Industry Solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how our platform adapts to different industries and business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="rounded-lg p-6 text-white aspect-square flex flex-col justify-between"
            style={{ backgroundColor: `#${box.color}` }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold leading-tight">{box.title}</h3>
                <h4 className="text-xl font-light opacity-90">{box.subtitle}</h4>
              </div>
              
              <p className="text-sm font-medium opacity-95">{box.description}</p>
              
              <div className="space-y-2">
                {box.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm opacity-90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBoxes;