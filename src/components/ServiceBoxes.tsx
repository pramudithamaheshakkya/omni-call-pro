import { Check } from "lucide-react";

const ServiceBoxes = () => {
  const boxes = [
    {
      color: "#5CC2E2",
      title: "Marketing",
      subtitle: "& Brand",
      description: "Launch impactful campaigns",
      sparkle: "✨",
      features: [
        "Campaign automation",
        "Lead generation", 
        "Brand management",
        "Analytics tracking"
      ]
    },
    {
      color: "#ED6571",
      title: "Project Management",
      subtitle: "& Tasks", 
      description: "Deliver on time, every time",
      sparkle: "✨",
      features: [
        "Task management",
        "Team collaboration",
        "Resource planning", 
        "Progress tracking"
      ]
    },
    {
      color: "#1A187E",
      title: "Sales",
      subtitle: "& Revenue",
      description: "Focus on promising deals",
      sparkle: "✨",
      features: [
        "Pipeline management",
        "Deal tracking",
        "Revenue forecasting",
        "Customer insights"
      ]
    },
    {
      color: "#5F67F6", 
      title: "Developers",
      subtitle: "& Software",
      description: "Amplify sprint velocity",
      sparkle: "✨",
      features: [
        "Bug tracking",
        "Sprint planning",
        "Code reviews",
        "Release management"
      ]
    },
    {
      color: "#FD2254",
      title: "HR", 
      subtitle: "& Recruiting",
      description: "Secure top talent effortlessly",
      sparkle: "✨",
      features: [
        "Talent acquisition",
        "Employee onboarding",
        "Performance tracking",
        "Training programs"
      ]
    },
    {
      color: "#5BC67B",
      title: "IT",
      subtitle: "& Support", 
      description: "Resolve tickets",
      subDescription: "10 times faster",
      sparkle: "✨",
      features: [
        "IT service desk",
        "Ticket management", 
        "SLA tracking",
        "AI response suggestions"
      ]
    },
    {
      color: "#613D6E",
      title: "Operations",
      subtitle: "& Finance",
      description: "Scale operations seamlessly",
      sparkle: "✨", 
      features: [
        "Process automation",
        "Financial reporting",
        "Quality control",
        "Cost management"
      ]
    },
    {
      color: "#899CF8",
      title: "Construction",
      subtitle: "& Building",
      description: "Manage projects seamlessly",
      sparkle: "✨",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="rounded-3xl p-6 text-white flex flex-col justify-between h-[420px] w-full max-w-[300px] mx-auto"
            style={{ backgroundColor: box.color }}
          >
            <div className="space-y-6">
              <div className="space-y-0">
                <h2 className="text-4xl font-light leading-tight">{box.title}</h2>
                <h3 className="text-4xl font-light leading-tight">{box.subtitle}</h3>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-normal">{box.description}</span>
                </div>
                {box.subDescription && (
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-normal">{box.subDescription}</span>
                    <span className="text-lg">{box.sparkle}</span>
                  </div>
                )}
                {!box.subDescription && (
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{box.sparkle}</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                {box.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-base font-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="mt-6 bg-white text-gray-800 px-8 py-3 rounded-full font-medium text-base hover:bg-gray-100 transition-colors self-start">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBoxes;