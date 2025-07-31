import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const UseCase = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    setOpenItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const useCases = [
    {
      id: "marketing",
      title: "Marketing",
      subtitle: "& Brand",
      description: "Launch impactful campaigns",
      color: "bg-primary",
      summary: [
        "Campaign automation",
        "Lead generation",
        "Brand management",
        "Analytics tracking"
      ],
      features: [
        "Email Campaign Management - Create, schedule, and track email campaigns",
        "Lead Scoring & Qualification - Automatically score leads based on behavior",
        "Customer Segmentation - Divide customers into targeted groups",
        "Marketing Analytics - Track ROI and campaign performance",
        "Social Media Integration - Manage all social platforms in one place",
        "Content Management - Store and organize marketing materials"
      ]
    },
    {
      id: "project-management",
      title: "Project Management",
      subtitle: "& Tasks",
      description: "Deliver on time, every time",
      color: "bg-secondary",
      summary: [
        "Task management",
        "Team collaboration",
        "Resource planning",
        "Progress tracking"
      ],
      features: [
        "Task Assignment & Tracking - Assign tasks to team members and track progress",
        "Project Timeline Management - Visual timeline and milestone tracking",
        "Resource Allocation - Manage team workload and capacity",
        "Budget Tracking - Monitor project costs and expenses",
        "Collaboration Tools - Team communication and file sharing",
        "Progress Reporting - Generate detailed project status reports"
      ]
    },
    {
      id: "sales",
      title: "Sales",
      subtitle: "& Revenue",
      description: "Focus on the most promising deals",
      color: "bg-accent",
      summary: [
        "Pipeline management",
        "Deal tracking",
        "Revenue forecasting",
        "Customer insights"
      ],
      features: [
        "Lead Management - Track leads from source to conversion",
        "Sales Pipeline - Visual pipeline with drag-and-drop functionality",
        "Quote & Proposal Generation - Create professional quotes quickly",
        "Sales Forecasting - Predict revenue and sales trends",
        "Contact Management - Centralized customer database",
        "Performance Analytics - Track individual and team performance"
      ]
    },
    {
      id: "developers",
      title: "Developers",
      subtitle: "& Software",
      description: "Amplify sprint velocity",
      color: "bg-primary",
      summary: [
        "Bug tracking",
        "Sprint planning",
        "Code reviews",
        "Release management"
      ],
      features: [
        "Bug Tracking & Resolution - Track and manage software issues",
        "Sprint Planning - Plan and manage development sprints",
        "Code Review Management - Organize and track code reviews",
        "Release Management - Coordinate software releases",
        "Development Analytics - Track development velocity and metrics",
        "API Integration - Connect with development tools and platforms"
      ]
    },
    {
      id: "hr",
      title: "HR",
      subtitle: "& Recruiting",
      description: "Secure top talent effortlessly",
      color: "bg-secondary",
      summary: [
        "Talent acquisition",
        "Employee onboarding",
        "Performance tracking",
        "Training programs"
      ],
      features: [
        "Candidate Tracking - Manage job applications and candidates",
        "Employee Onboarding - Streamline new hire processes",
        "Performance Management - Track employee performance and goals",
        "Training & Development - Manage employee training programs",
        "Leave Management - Track vacation and sick leave",
        "Recruitment Analytics - Analyze hiring metrics and trends"
      ]
    },
    {
      id: "it",
      title: "IT",
      subtitle: "& Support",
      description: "Resolve tickets 10 times faster",
      color: "bg-accent",
      summary: [
        "Ticket resolution",
        "Asset management",
        "System monitoring",
        "User support"
      ],
      features: [
        "Ticket Management - Track and resolve IT support requests",
        "Asset Management - Manage IT equipment and software licenses",
        "Knowledge Base - Centralized repository for IT solutions",
        "Incident Response - Coordinate responses to IT incidents",
        "System Monitoring - Monitor IT infrastructure health",
        "User Access Management - Control system access and permissions"
      ]
    },
    {
      id: "operations",
      title: "Operations",
      subtitle: "& Finance",
      description: "Scale operations seamlessly",
      color: "bg-primary",
      summary: [
        "Process automation",
        "Financial reporting",
        "Quality control",
        "Cost management"
      ],
      features: [
        "Process Automation - Automate routine operational tasks",
        "Inventory Management - Track and manage inventory levels",
        "Financial Reporting - Generate financial statements and reports",
        "Vendor Management - Manage supplier relationships",
        "Quality Control - Track and ensure quality standards",
        "Cost Analysis - Analyze operational costs and efficiency"
      ]
    },
    {
      id: "construction",
      title: "Construction",
      subtitle: "& Building",
      description: "Manage projects from blueprint to completion",
      color: "bg-secondary",
      summary: [
        "Project scheduling",
        "Safety compliance",
        "Resource allocation",
        "Progress monitoring"
      ],
      features: [
        "Project Scheduling - Plan construction timelines and milestones",
        "Resource Management - Manage equipment, materials, and labor",
        "Safety Compliance - Track safety protocols and incidents",
        "Progress Tracking - Monitor construction progress with photos",
        "Budget Management - Track project costs and change orders",
        "Subcontractor Management - Coordinate with subcontractors"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Use Cases
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our CRM solution adapts to different industries and business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <Collapsible
              key={useCase.id}
              open={openItems.includes(useCase.id)}
              onOpenChange={() => toggleItem(useCase.id)}
              className="h-fit"
            >
              <CollapsibleTrigger asChild>
                <div className={`${useCase.color} rounded-lg p-6 text-white cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl aspect-square flex flex-col justify-between`}>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold">{useCase.title}</h3>
                      <p className="text-sm opacity-90">{useCase.subtitle}</p>
                    </div>
                    <div className="space-y-1">
                      {useCase.summary.map((point, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                          <span className="text-xs opacity-80">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openItems.includes(useCase.id) ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-4">
                <div className={`${useCase.color} rounded-lg p-6 shadow-sm text-white`}>
                  <h4 className="text-lg font-semibold mb-4">
                    CRM Features for {useCase.title}
                  </h4>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UseCase;