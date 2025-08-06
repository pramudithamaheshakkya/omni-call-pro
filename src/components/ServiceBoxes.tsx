import { CheckIcon, ArrowLeftIcon, PresentationChartBarIcon, UsersIcon, ArrowTrendingUpIcon, ChartBarIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, PaintBrushIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ServiceBoxes = () => {
  const [expandedBox, setExpandedBox] = useState<number | null>(null);

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
      ],
      expandedContent: {
        tagline: "Drive growth with intelligent marketing automation",
        intro: "Transform your marketing efforts with AI-powered campaigns, advanced segmentation, and real-time analytics that convert prospects into loyal customers.",
        featureTable: [
          { feature: "Campaign Builder", description: "Visual drag-and-drop campaign creation with A/B testing" },
          { feature: "Lead Scoring", description: "AI-powered lead qualification and prioritization" },
          { feature: "Email Automation", description: "Personalized email sequences based on user behavior" },
          { feature: "Social Media Integration", description: "Multi-platform posting and engagement tracking" },
          { feature: "Analytics Dashboard", description: "Real-time campaign performance and ROI metrics" }
        ],
        screenshots: [
          { title: "Campaign Builder", description: "Intuitive visual campaign creation" },
          { title: "Segmentation Dashboard", description: "Advanced audience targeting" },
          { title: "Analytics Dashboard", description: "Real-time performance tracking" }
        ],
        crmFeatures: [
          "Contact segmentation and targeting",
          "Campaign performance tracking",
          "Lead nurturing workflows",
          "Integration with sales pipeline",
          "Customer journey mapping"
        ],
        scenarios: [
          { icon: PresentationChartBarIcon, title: "Product Launch", description: "Coordinate multi-channel launch campaigns" },
          { icon: UsersIcon, title: "Customer Retention", description: "Re-engage inactive customers with personalized content" },
          { icon: ArrowTrendingUpIcon, title: "Lead Generation", description: "Capture and nurture high-quality leads" },
          { icon: ChartBarIcon, title: "Performance Analysis", description: "Measure and optimize campaign ROI" }
        ],
        benefits: [
          { name: "🎯 Increased Conversion", impact: "30% higher conversion rates with AI-powered personalization" },
          { name: "⚡ Time Savings", impact: "75% reduction in campaign setup time with automation" },
          { name: "📊 Better Insights", impact: "Real-time analytics for data-driven decision making" },
          { name: "🚀 Scalable Growth", impact: "Handle 10x more campaigns without additional resources" }
        ]
      }
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
      ],
      expandedContent: {
        tagline: "Streamline projects with intelligent task management",
        intro: "Keep teams aligned and projects on track with automated workflows, real-time collaboration, and predictive analytics.",
        featureTable: [
          { feature: "Task Automation", description: "Automate recurring tasks and dependencies" },
          { feature: "Resource Management", description: "Optimize team allocation and workload" },
          { feature: "Timeline Tracking", description: "Visual project timelines with milestone alerts" },
          { feature: "Collaboration Hub", description: "Centralized communication and file sharing" }
        ],
        crmFeatures: [
          "Project pipeline management",
          "Client communication tracking",
          "Budget and time tracking",
          "Deliverable management"
        ],
        scenarios: [
          { icon: CalendarIcon, title: "Sprint Planning", description: "Plan and track development sprints" },
          { icon: UsersIcon, title: "Team Coordination", description: "Align cross-functional teams" },
          { icon: PresentationChartBarIcon, title: "Milestone Tracking", description: "Monitor project progress" }
        ],
        benefits: [
          { name: "⏰ On-Time Delivery", impact: "95% of projects delivered on schedule" },
          { name: "🤝 Team Productivity", impact: "40% increase in team efficiency" },
          { name: "📋 Clear Accountability", impact: "Transparent task ownership and progress" }
        ]
      }
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
      ],
      expandedContent: {
        tagline: "Close more deals with intelligent sales automation",
        intro: "Accelerate your sales cycle with AI-powered lead scoring, automated follow-ups, and predictive analytics.",
        featureTable: [
          { feature: "Lead Scoring", description: "AI-powered qualification and prioritization" },
          { feature: "Pipeline Management", description: "Visual sales funnel with automated stages" },
          { feature: "Revenue Forecasting", description: "Predictive analytics for accurate projections" },
          { feature: "Deal Intelligence", description: "Insights and recommendations for closing deals" }
        ],
        crmFeatures: [
          "Contact and company management",
          "Sales pipeline tracking",
          "Quote and proposal generation",
          "Performance analytics"
        ],
        scenarios: [
          { icon: PresentationChartBarIcon, title: "Lead Qualification", description: "Identify and prioritize hot prospects" },
          { icon: ArrowTrendingUpIcon, title: "Revenue Growth", description: "Optimize sales performance" }
        ],
        benefits: [
          { name: "💰 Revenue Growth", impact: "25% increase in closed deals" },
          { name: "⚡ Faster Sales Cycle", impact: "50% reduction in time to close" }
        ]
      }
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
      ],
      expandedContent: {
        tagline: "Accelerate development with intelligent project tools",
        intro: "Streamline your development workflow with automated testing, intelligent code reviews, and seamless deployment.",
        featureTable: [
          { feature: "Sprint Planning", description: "Agile project management with automated velocity tracking" },
          { feature: "Bug Tracking", description: "Intelligent issue detection and resolution" },
          { feature: "Code Reviews", description: "Automated code quality and security checks" },
          { feature: "Release Management", description: "Streamlined deployment with rollback capabilities" }
        ],
        crmFeatures: [
          "Project timeline management",
          "Team collaboration tools",
          "Client communication tracking",
          "Delivery milestone tracking"
        ],
        scenarios: [
          { icon: CalendarIcon, title: "Sprint Management", description: "Plan and execute development sprints" },
          { icon: PresentationChartBarIcon, title: "Quality Assurance", description: "Ensure code quality and reliability" }
        ],
        benefits: [
          { name: "🚀 Faster Delivery", impact: "40% faster sprint completion" },
          { name: "🐛 Fewer Bugs", impact: "60% reduction in production issues" }
        ]
      }
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
      ],
      expandedContent: {
        tagline: "Transform HR with intelligent talent management",
        intro: "Streamline recruitment, onboarding, and employee development with AI-powered tools and automation.",
        featureTable: [
          { feature: "Talent Acquisition", description: "AI-powered candidate matching and screening" },
          { feature: "Employee Onboarding", description: "Automated workflows for seamless integration" },
          { feature: "Performance Tracking", description: "Continuous feedback and goal management" },
          { feature: "Training Programs", description: "Personalized learning paths and skill development" }
        ],
        crmFeatures: [
          "Candidate pipeline management",
          "Employee engagement tracking",
          "Performance review automation",
          "Training progress monitoring"
        ],
        scenarios: [
          { icon: UsersIcon, title: "Recruitment", description: "Find and hire top talent efficiently" },
          { icon: ArrowTrendingUpIcon, title: "Employee Development", description: "Foster growth and retention" }
        ],
        benefits: [
          { name: "👥 Better Hiring", impact: "50% improvement in candidate quality" },
          { name: "📈 Employee Retention", impact: "30% increase in retention rates" }
        ]
      }
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
      ],
      expandedContent: {
        tagline: "Revolutionize IT support with intelligent automation",
        intro: "Provide exceptional IT support with AI-powered ticket resolution, automated workflows, and predictive maintenance.",
        featureTable: [
          { feature: "Smart Ticketing", description: "AI-powered ticket classification and routing" },
          { feature: "Automated Responses", description: "Instant solutions for common issues" },
          { feature: "SLA Management", description: "Automated tracking and escalation" },
          { feature: "Knowledge Base", description: "Self-service portal with intelligent search" }
        ],
        crmFeatures: [
          "Customer support tracking",
          "Service level management",
          "Asset and inventory management",
          "User satisfaction monitoring"
        ],
        scenarios: [
          { icon: ChatBubbleLeftRightIcon, title: "Ticket Resolution", description: "Resolve issues faster with AI assistance" },
          { icon: ChartBarIcon, title: "Performance Analytics", description: "Track and improve support metrics" }
        ],
        benefits: [
          { name: "⚡ Faster Resolution", impact: "10x faster average resolution time" },
          { name: "😊 Higher Satisfaction", impact: "95% customer satisfaction rating" }
        ]
      }
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
      ],
      expandedContent: {
        tagline: "Optimize operations with intelligent automation",
        intro: "Streamline business operations with automated workflows, real-time reporting, and predictive analytics.",
        featureTable: [
          { feature: "Process Automation", description: "Streamline repetitive tasks and workflows" },
          { feature: "Financial Reporting", description: "Real-time financial dashboards and insights" },
          { feature: "Quality Control", description: "Automated quality assurance and compliance" },
          { feature: "Cost Management", description: "Track and optimize operational expenses" }
        ],
        crmFeatures: [
          "Vendor relationship management",
          "Contract and compliance tracking",
          "Budget and expense management",
          "Operational performance metrics"
        ],
        scenarios: [
          { icon: ChartBarIcon, title: "Financial Analysis", description: "Monitor and optimize financial performance" },
          { icon: PresentationChartBarIcon, title: "Process Optimization", description: "Improve operational efficiency" }
        ],
        benefits: [
          { name: "💰 Cost Savings", impact: "20% reduction in operational costs" },
          { name: "📊 Better Visibility", impact: "Real-time operational insights" }
        ]
      }
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
      ],
      expandedContent: {
        tagline: "Build smarter with intelligent project management",
        intro: "Manage construction projects with precision using automated scheduling, safety tracking, and resource optimization.",
        featureTable: [
          { feature: "Project Scheduling", description: "Automated timeline management with dependency tracking" },
          { feature: "Safety Compliance", description: "Real-time safety monitoring and reporting" },
          { feature: "Resource Allocation", description: "Optimize equipment and workforce allocation" },
          { feature: "Progress Monitoring", description: "Visual progress tracking with milestone alerts" }
        ],
        crmFeatures: [
          "Client project communication",
          "Subcontractor management",
          "Budget and cost tracking",
          "Compliance documentation"
        ],
        scenarios: [
          { icon: CalendarIcon, title: "Project Planning", description: "Plan and schedule construction phases" },
          { icon: UsersIcon, title: "Team Coordination", description: "Coordinate multiple construction teams" }
        ],
        benefits: [
          { name: "⏰ On-Time Completion", impact: "90% of projects completed on schedule" },
          { name: "🔒 Safety First", impact: "50% reduction in safety incidents" }
        ]
      }
    }
  ];

  const handleBoxClick = (index: number) => {
    setExpandedBox(index);
  };

  const handleBack = () => {
    setExpandedBox(null);
  };

  if (expandedBox !== null) {
    const box = boxes[expandedBox];
    const content = box.expandedContent;
    
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Use Cases
            </Button>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white text-lg font-medium"
                   style={{ backgroundColor: box.color }}>
                <span>{box.title} {box.subtitle}</span>
                <span>{box.sparkle}</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground">{content.tagline}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{content.intro}</p>
            </div>

            {/* Feature Table */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Key Features</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Feature</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {content.featureTable.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.feature}</TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Screenshots Section */}
            {content.screenshots && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {content.screenshots.map((screenshot, index) => (
                    <div key={index} className="space-y-3">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center p-4">
                          <ChartBarIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm font-medium text-muted-foreground">
                            {screenshot.title} Preview
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="font-medium text-foreground">{screenshot.title}</h3>
                        <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CRM Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">CRM Integration Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.crmFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: box.color }}>
                      <CheckIcon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-World Scenarios */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Real-World Scenarios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.scenarios.map((scenario, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-lg border bg-card">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: box.color }}>
                      <scenario.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{scenario.title}</h3>
                      <p className="text-muted-foreground">{scenario.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Table */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Why It Matters</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Benefit</TableHead>
                    <TableHead>Impact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {content.benefits.map((benefit, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{benefit.name}</TableCell>
                      <TableCell>{benefit.impact}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* CTA Section */}
            <div className="text-center py-12">
              <Button 
                size="lg" 
                className="text-white px-8 py-4 text-lg"
                style={{ backgroundColor: box.color }}
              >
                Get Started with {box.title} {box.subtitle}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ${
        expandedBox !== null ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        {boxes.map((box, index) => (
          <div
            key={index}
            className="rounded-3xl p-6 text-white flex flex-col justify-between h-[420px] w-full max-w-[300px] mx-auto cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: box.color }}
            onClick={() => handleBoxClick(index)}
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
                      <CheckIcon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-base font-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="mt-6 bg-white text-gray-800 px-8 py-3 rounded-full font-medium text-base hover:bg-gray-100 transition-colors self-start"
              onClick={(e) => {
                e.stopPropagation();
                handleBoxClick(index);
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBoxes;