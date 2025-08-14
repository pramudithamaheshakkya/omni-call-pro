import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BuildingOffice2Icon, ClockIcon, ShieldCheckIcon, TruckIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const ConstructionBuilding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Construction & Building</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              From Blueprint to Completion
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Manage construction projects with precision using advanced scheduling, safety compliance, and real-time progress tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">Start Building</Button>
              <Button variant="outline" size="lg" className="px-8 py-3">View Construction Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Construction Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From project planning to final delivery, manage every aspect of your construction projects with advanced tools and insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "Project Scheduling",
                description: "Advanced Gantt charts with critical path analysis, resource allocation, and milestone tracking for on-time delivery."
              },
              {
                icon: <ShieldCheckIcon className="h-8 w-8" />,
                title: "Safety Compliance",
                description: "Comprehensive safety management with incident tracking, inspection checklists, and regulatory compliance monitoring."
              },
              {
                icon: <TruckIcon className="h-8 w-8" />,
                title: "Resource Management",
                description: "Optimize equipment, materials, and labor allocation with real-time tracking and automated procurement workflows."
              },
              {
                icon: <BuildingOffice2Icon className="h-8 w-8" />,
                title: "Progress Monitoring",
                description: "Visual progress tracking with photo documentation, quality checkpoints, and automated progress reports."
              },
              {
                icon: <CurrencyDollarIcon className="h-8 w-8" />,
                title: "Budget & Cost Control",
                description: "Real-time budget tracking with cost forecasting, change order management, and profitability analysis."
              },
              {
                icon: <BuildingOffice2Icon className="h-8 w-8" />,
                title: "Subcontractor Coordination",
                description: "Streamlined subcontractor management with scheduling, communication, and performance tracking tools."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Lifecycle */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Project Lifecycle</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage every phase of construction from initial planning through project handover and maintenance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                phase: "01",
                title: "Pre-Construction",
                description: "Site surveys, permits, design reviews, and initial planning with stakeholder collaboration."
              },
              {
                phase: "02",
                title: "Planning & Design",
                description: "Detailed project planning with 3D modeling, material planning, and resource scheduling."
              },
              {
                phase: "03",
                title: "Construction",
                description: "Active construction management with daily logs, progress tracking, and quality control."
              },
              {
                phase: "04",
                title: "Quality Assurance",
                description: "Comprehensive inspections, testing protocols, and compliance verification before handover."
              },
              {
                phase: "05",
                title: "Project Closeout",
                description: "Final documentation, warranty management, and maintenance scheduling for ongoing operations."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {phase.phase}
                </div>
                <h3 className="text-lg font-semibold mb-4">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Safety First Approach</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive safety management tools that help maintain zero-incident construction sites.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Safety Protocols",
                description: "Standardized safety procedures with digital checklists, training modules, and certification tracking.",
                features: ["Safety Checklists", "Training Records", "Certification Tracking", "PPE Management"]
              },
              {
                category: "Incident Management",
                description: "Immediate incident reporting with investigation workflows, corrective actions, and trend analysis.",
                features: ["Incident Reporting", "Investigation Workflows", "Corrective Actions", "Trend Analysis"]
              },
              {
                category: "Regulatory Compliance",
                description: "Automated compliance monitoring with OSHA standards, local regulations, and audit preparation.",
                features: ["OSHA Compliance", "Local Regulations", "Audit Preparation", "Documentation"]
              }
            ].map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Metrics */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project Success Metrics</h2>
            <p className="text-xl text-muted-foreground">
              Track the metrics that matter most for successful construction project delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "95%", label: "On-time project completion" },
              { metric: "25%", label: "Reduction in change orders" },
              { metric: "80%", label: "Improvement in safety scores" },
              { metric: "15%", label: "Cost savings per project" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Modern Construction Technology</h2>
            <p className="text-xl text-muted-foreground">
              Integrate with cutting-edge construction technologies for enhanced productivity and precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                technology: "BIM Integration",
                description: "Building Information Modeling integration for 3D visualization and clash detection."
              },
              {
                technology: "Drone Surveying",
                description: "Aerial progress monitoring and site surveying with automated reporting."
              },
              {
                technology: "IoT Sensors",
                description: "Real-time monitoring of equipment, environmental conditions, and safety parameters."
              },
              {
                technology: "Mobile Apps",
                description: "Field-ready mobile applications for inspections, reporting, and communication."
              },
              {
                technology: "Document Control",
                description: "Centralized document management with version control and collaboration tools."
              },
              {
                technology: "Equipment Tracking",
                description: "GPS-enabled equipment tracking with maintenance scheduling and utilization reports."
              },
              {
                technology: "Weather Integration",
                description: "Weather data integration for proactive scheduling and risk management."
              },
              {
                technology: "Quality Control",
                description: "Digital quality control with photo documentation and automated workflows."
              }
            ].map((tech, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-semibold mb-2">{tech.technology}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Build Better with Smart Technology</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join construction teams who've improved project delivery and safety outcomes with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-orange-600">
              Book Construction Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConstructionBuilding;