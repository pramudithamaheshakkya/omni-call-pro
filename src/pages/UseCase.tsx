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
      color: "bg-gradient-to-br from-sky-400 to-cyan-500",
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
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
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
      color: "bg-gradient-to-br from-emerald-400 to-teal-500",
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
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
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
      color: "bg-gradient-to-br from-purple-600 to-violet-700",
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
      color: "bg-gradient-to-br from-red-400 to-pink-500",
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
      color: "bg-gradient-to-br from-blue-600 to-indigo-700",
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
      color: "bg-gradient-to-br from-orange-500 to-red-600",
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
            >
              <CollapsibleTrigger asChild>
                <div className={`${useCase.color} rounded-2xl p-6 text-white cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">{useCase.title}</h3>
                      <p className="text-lg opacity-90">{useCase.subtitle}</p>
                    </div>
                    <p className="text-sm opacity-80">{useCase.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform duration-200 ${
                          openItems.includes(useCase.id) ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-4">
                <div className="bg-card border rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    CRM Features for {useCase.title}
                  </h4>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
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