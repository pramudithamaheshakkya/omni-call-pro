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
      color: "bg-[#5CC2E2]",
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
      color: "bg-[#ED6571]",
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
      color: "bg-[#1A187E]",
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
      color: "bg-[#5F67F6]",
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
      color: "bg-[#FD2254]",
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
      color: "bg-[#5BC67B]",
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
      color: "bg-[#613D6E]",
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
      color: "bg-[#899CF8]",
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
                {useCase.id === 'marketing' ? (
                  <div className="bg-white rounded-lg p-8 shadow-sm text-gray-900 max-w-6xl">
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">💼 Use Case: Marketing & Brand</h2>
                        <h3 className="text-xl font-semibold text-gray-700">Empower Your Marketing Team with Data-Driven Campaigns & Automation</h3>
                        <p className="text-gray-600 max-w-4xl mx-auto">
                          Take your brand to the next level with our intelligent marketing suite. Designed for marketing professionals who want to build awareness, generate leads, and measure ROI — all in one streamlined platform.
                        </p>
                      </div>

                      {/* Solutions Table */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">🚀 Our Solutions for Marketing Teams</h3>
                        <h4 className="text-lg font-semibold text-gray-700">✅ What You Get:</h4>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 rounded-lg">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="border border-gray-300 px-4 py-3 font-medium">Campaign Automation</td><td className="border border-gray-300 px-4 py-3">Build multi-step marketing journeys with automated emails, triggers, and follow-ups.</td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Lead Generation Tools</td><td className="border border-gray-300 px-4 py-3">Capture leads through web forms, landing pages, and gated content — directly into the CRM.</td></tr>
                              <tr><td className="border border-gray-300 px-4 py-3 font-medium">Brand Management System</td><td className="border border-gray-300 px-4 py-3">Maintain consistent branding across teams with approved assets and templates.</td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Analytics & Reporting Dashboards</td><td className="border border-gray-300 px-4 py-3">Real-time insights on campaign performance, conversion rates, and audience behavior.</td></tr>
                              <tr><td className="border border-gray-300 px-4 py-3 font-medium">Content Repository</td><td className="border border-gray-300 px-4 py-3">Central location to manage marketing materials: brochures, visuals, videos, and documents.</td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Social Media Integration</td><td className="border border-gray-300 px-4 py-3">Schedule, monitor, and engage with audiences across all major social platforms.</td></tr>
                              <tr><td className="border border-gray-300 px-4 py-3 font-medium">Customer Segmentation</td><td className="border border-gray-300 px-4 py-3">Group your audience by behavior, location, demographics, or interest for targeted campaigns.</td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Marketing CRM Integration</td><td className="border border-gray-300 px-4 py-3">Automatically sync campaign results with CRM leads and pipelines for smarter sales handoff.</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Screenshots Section */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">📸 How It Works (Screenshots & Walkthroughs)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-3">
                            <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
                              <span className="text-gray-500">📷 Screenshot 1</span>
                            </div>
                            <h4 className="font-semibold">Campaign Builder</h4>
                            <p className="text-sm text-gray-600">Shows a drag-and-drop email automation flow. "Easily build sequences like Welcome Series, Lead Nurture, or Abandoned Cart."</p>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
                              <span className="text-gray-500">📷 Screenshot 2</span>
                            </div>
                            <h4 className="font-semibold">Segmentation Dashboard</h4>
                            <p className="text-sm text-gray-600">Displays filters used to segment the audience based on engagement and behavior. "Send tailored messages that connect with the right people at the right time."</p>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
                              <span className="text-gray-500">📷 Screenshot 3</span>
                            </div>
                            <h4 className="font-semibold">Analytics Dashboard</h4>
                            <p className="text-sm text-gray-600">A graph showing open rates, click-throughs, and conversions. "Visualize performance across all your campaigns in one place."</p>
                          </div>
                        </div>
                      </div>

                      {/* CRM Features */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">🧠 CRM Features for Marketing</h3>
                        <p className="text-gray-600">All marketing efforts are tightly integrated with our CRM module to ensure full visibility and performance tracking:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm"><strong>Email Campaign Management</strong> – Design, schedule, and track marketing emails</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm"><strong>Lead Scoring & Qualification</strong> – Identify top leads based on behavior</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm"><strong>Customer Segmentation</strong> – Group users for more targeted communication</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm"><strong>Marketing Analytics</strong> – Real-time performance reports and dashboards</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm"><strong>Social Media Integration</strong> – Manage multiple social accounts in one interface</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm"><strong>Content Management</strong> – Store and share reusable marketing materials</span>
                          </li>
                        </ul>
                      </div>

                      {/* Real-World Scenarios */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">🎯 Real-World Marketing Scenarios</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <span className="text-xl">📢</span>
                            <span className="text-sm"><strong>Launch a New Product:</strong> Design campaigns, run ads, track engagement, and qualify leads</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-xl">📊</span>
                            <span className="text-sm"><strong>Measure Campaign ROI:</strong> Know exactly how many leads or conversions came from each campaign</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-xl">🧬</span>
                            <span className="text-sm"><strong>Segment by Behavior:</strong> Target frequent website visitors with exclusive offers</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-xl">✉️</span>
                            <span className="text-sm"><strong>Email Workflows:</strong> Automatically send nurture emails after form submissions</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-xl">📣</span>
                            <span className="text-sm"><strong>Multi-Channel Outreach:</strong> Run campaigns across email, SMS, social media, and web</span>
                          </li>
                        </ul>
                      </div>

                      {/* Benefits Table */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">💡 Why It Matters</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 rounded-lg">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Benefit</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Impact</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="border border-gray-300 px-4 py-3">🎯 Targeted Outreach</td><td className="border border-gray-300 px-4 py-3">Higher engagement and lower unsubscribe rates</td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3">🔁 Automation</td><td className="border border-gray-300 px-4 py-3">Save time and reduce manual work</td></tr>
                              <tr><td className="border border-gray-300 px-4 py-3">📈 Data-Driven Campaigns</td><td className="border border-gray-300 px-4 py-3">Make better decisions using clear metrics</td></tr>
                              <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3">🤝 Sales-Marketing Alignment</td><td className="border border-gray-300 px-4 py-3">Improve lead quality and conversion rates</td></tr>
                              <tr><td className="border border-gray-300 px-4 py-3">💼 Brand Consistency</td><td className="border border-gray-300 px-4 py-3">Deliver a professional and unified brand experience</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
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
                )}
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