import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlusIcon, UserGroupIcon, ChartBarIcon, DocumentTextIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const HRRecruiting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-red-100 dark:from-pink-950 dark:to-red-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">HR & Recruiting</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Secure Top Talent Effortlessly
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your talent acquisition and employee management with intelligent recruiting workflows and comprehensive HR analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">Start Hiring</Button>
              <Button variant="outline" size="lg" className="px-8 py-3">See HR Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Talent Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From recruiting to employee development, manage your entire workforce lifecycle with one integrated platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <UserPlusIcon className="h-8 w-8" />,
                title: "Smart Candidate Tracking",
                description: "AI-powered candidate matching and automated screening to identify the best talent faster than ever before."
              },
              {
                icon: <DocumentTextIcon className="h-8 w-8" />,
                title: "Streamlined Onboarding",
                description: "Digital onboarding workflows with automated paperwork, training schedules, and integration checklists."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Performance Management",
                description: "Continuous performance tracking with goal setting, 360-degree feedback, and development planning."
              },
              {
                icon: <AcademicCapIcon className="h-8 w-8" />,
                title: "Learning & Development",
                description: "Personalized training programs with skill gap analysis and automated learning path recommendations."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Employee Engagement",
                description: "Pulse surveys, engagement analytics, and retention insights to keep your team motivated and productive."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "HR Analytics",
                description: "Comprehensive workforce analytics with diversity metrics, turnover analysis, and predictive insights."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
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

      {/* Recruitment Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Modern Recruitment Pipeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your hiring process from job posting to offer acceptance with automated workflows and intelligent screening.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Job Posting",
                description: "Multi-platform job posting with automated distribution to job boards and social networks."
              },
              {
                step: "02",
                title: "Candidate Screening",
                description: "AI-powered resume screening and automated skill assessments to identify top candidates."
              },
              {
                step: "03",
                title: "Interview Management",
                description: "Scheduling automation, interview scorecards, and collaborative evaluation tools."
              },
              {
                step: "04",
                title: "Offer & Onboarding",
                description: "Digital offer letters, e-signatures, and seamless transition to employee onboarding."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Lifecycle */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Employee Lifecycle</h2>
            <p className="text-xl text-muted-foreground">
              Support your employees from day one through their entire journey with your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Onboarding",
                description: "Welcome new hires with structured onboarding programs that ensure quick integration and early success.",
                features: ["Digital Paperwork", "Buddy System", "Training Schedules", "Progress Tracking"]
              },
              {
                phase: "Development",
                description: "Continuous learning and career development with personalized growth plans and skill assessments.",
                features: ["Skill Mapping", "Learning Paths", "Mentorship Programs", "Career Planning"]
              },
              {
                phase: "Retention",
                description: "Keep top talent engaged with regular feedback, recognition programs, and career advancement opportunities.",
                features: ["Performance Reviews", "Recognition Systems", "Succession Planning", "Exit Interviews"]
              }
            ].map((phase, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{phase.phase}</h3>
                <p className="text-muted-foreground mb-6">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HR Metrics */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">HR Performance Metrics</h2>
            <p className="text-xl text-muted-foreground">
              Track the metrics that matter most for building and maintaining a high-performing workforce.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "75%", label: "Faster time-to-hire" },
              { metric: "90%", label: "Employee satisfaction rate" },
              { metric: "40%", label: "Reduction in turnover" },
              { metric: "60%", label: "Improved onboarding efficiency" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance & Benefits Management</h2>
            <p className="text-xl text-muted-foreground">
              Stay compliant and manage employee benefits with automated workflows and comprehensive tracking.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "GDPR Compliance",
              "Benefits Administration",
              "Leave Management",
              "Payroll Integration",
              "Tax Documentation",
              "Insurance Management",
              "Regulatory Reporting",
              "Audit Trails"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg">
                <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Transform Your HR Operations</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join HR teams who've revolutionized their talent management with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-pink-600">
              Book HR Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HRRecruiting;