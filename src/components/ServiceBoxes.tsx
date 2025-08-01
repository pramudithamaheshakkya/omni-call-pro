import { Check } from "lucide-react";

const ServiceBoxes = () => {
  const boxes = [
    {
      color: "#5CC2E2",
      title: "Marketing",
      subtitle: "& Brand",
      description: "Launch impactful campaigns ✨",
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
      description: "Deliver on time, every time ✨",
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
      description: "Focus on promising deals ✨",
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
      description: "Amplify sprint velocity ✨",
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
      description: "Secure top talent effortlessly ✨",
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
      description: "Resolve tickets 10 times faster ✨",
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
      description: "Scale operations seamlessly ✨", 
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
      description: "Manage projects seamlessly ✨",
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
            className="rounded-2xl p-8 text-white flex flex-col justify-between h-[400px] w-full max-w-[280px] mx-auto"
            style={{ backgroundColor: box.color }}
          >
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-3xl font-light tracking-wide">{box.title}</h2>
                <h3 className="text-2xl font-light tracking-wide opacity-90">{box.subtitle}</h3>
              </div>
              
              <p className="text-base font-normal leading-relaxed">{box.description}</p>
              
              <div className="space-y-3">
                {box.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-white bg-opacity-30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-base font-normal opacity-95">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="mt-8 bg-white text-gray-800 px-8 py-3 rounded-full font-medium text-base hover:bg-gray-100 transition-colors w-fit">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBoxes;