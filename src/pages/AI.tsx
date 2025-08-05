import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Phone, 
  Bot,
  TrendingUp,
  Clock,
  Target,
  Headphones,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Cpu,
  Network,
  Database,
  Mic,
  Eye,
  FileText,
  Settings,
  Globe,
  Sparkles,
  ChevronRight,
  Code,
  Layers,
  Activity,
  Award,
  Gauge
} from "lucide-react";

const AI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section 1: Hero Section with Neural Network Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, 
              hsl(var(--primary)) 0%, 
              hsl(var(--primary-variant)) 25%, 
              hsl(var(--accent)) 50%, 
              hsl(var(--secondary)) 75%, 
              hsl(var(--primary)) 100%)`
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Neural Network Solutions
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Revolutionize your business
              <br />
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                with cutting-edge
              </span>
              <br />
              Neural Network solutions
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              Harness the power of advanced AI technology to transform your operations, 
              automate complex processes, and unlock unprecedented business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-12 py-4 text-lg font-semibold">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute bottom-20 left-20 hidden lg:block animate-fade-in">
          <Card className="bg-red-900/80 backdrop-blur-sm border-red-500/20 text-white p-4 w-64">
            <CardContent className="p-0">
              <h3 className="font-bold mb-2">Neural Network Maintenance</h3>
              <p className="text-sm opacity-90">and Support:</p>
              <p className="text-xs mt-2 opacity-70">
                Providing ongoing maintenance, monitoring, and support services to ensure optimal performance.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-20 right-20 hidden lg:block animate-fade-in">
          <Card className="bg-orange-900/80 backdrop-blur-sm border-orange-500/20 text-white p-4 w-64">
            <CardContent className="p-0">
              <h3 className="font-bold mb-2">Real-Time Prediction</h3>
              <p className="text-sm opacity-90">and Inference</p>
              <p className="text-xs mt-2 opacity-70">
                Advanced AI algorithms delivering instant insights and predictions for your business.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="absolute top-32 right-32 hidden xl:block animate-fade-in">
          <Card className="bg-blue-900/80 backdrop-blur-sm border-blue-500/20 text-white p-3 w-48">
            <CardContent className="p-0">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-4 w-4" />
                <span className="text-sm font-semibold">Natural Language</span>
              </div>
              <p className="text-sm opacity-90">Processing</p>
              <div className="text-right mt-2">
                <span className="text-2xl font-bold text-blue-300">500+</span>
                <p className="text-xs opacity-70">Active users every day</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2: Core AI Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core AI Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive suite of artificial intelligence solutions designed to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "Machine Learning", desc: "Advanced algorithms that learn and adapt from your data patterns", color: "blue" },
              { icon: Network, title: "Neural Networks", desc: "Deep learning systems that mimic human brain functionality", color: "purple" },
              { icon: Mic, title: "Speech Recognition", desc: "Natural language processing for voice-enabled applications", color: "green" },
              { icon: Eye, title: "Computer Vision", desc: "Visual recognition and analysis for image-based solutions", color: "orange" }
            ].map((tech, index) => (
              <div key={index} className="group hover-scale">
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-${tech.color}-100`}>
                      <tech.icon className={`h-8 w-8 text-${tech.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                    <p className="text-muted-foreground">{tech.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: AI-Powered Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4">AI-Powered Solutions</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Intelligent automation for every industry
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our AI solutions adapt to your specific industry needs, providing intelligent automation 
                that enhances productivity and drives innovation across all sectors.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: BarChart3, title: "Predictive Analytics", desc: "Forecast trends and make data-driven decisions" },
                  { icon: Shield, title: "Intelligent Security", desc: "Advanced threat detection and prevention systems" },
                  { icon: Cpu, title: "Process Automation", desc: "Streamline workflows with intelligent automation" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-primary rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">AI Performance Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Processing Speed</span>
                    <span className="font-bold">99.9% Efficiency</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-[99%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span>Accuracy Rate</span>
                    <span className="font-bold">98.7% Precision</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-[98%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span>Learning Capacity</span>
                    <span className="font-bold">Advanced AI</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Digital Workers Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Your Digital Workforce
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered digital workers that integrate seamlessly into your team, 
              handling complex tasks with human-like intelligence and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                name: "Sales Intelligence AI",
                role: "Revenue Optimization Specialist",
                description: "Analyzes market trends, predicts customer behavior, and optimizes sales strategies for maximum revenue growth.",
                capabilities: ["Lead Scoring", "Sales Forecasting", "Pipeline Optimization", "Market Analysis"],
                color: "blue"
              },
              {
                icon: Users,
                name: "Customer Experience AI",
                role: "Relationship Management Expert",
                description: "Monitors customer interactions, predicts satisfaction levels, and proactively addresses potential issues.",
                capabilities: ["Sentiment Analysis", "Churn Prediction", "Personalization", "Support Automation"],
                color: "emerald"
              },
              {
                icon: Bot,
                name: "Operations Intelligence AI",
                role: "Process Optimization Manager",
                description: "Streamlines business processes, identifies inefficiencies, and automates routine operational tasks.",
                capabilities: ["Process Mining", "Workflow Automation", "Resource Allocation", "Quality Control"],
                color: "purple"
              }
            ].map((worker, index) => (
              <Card key={index} className="group hover-scale border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-${worker.color}-100 rounded-xl flex items-center justify-center`}>
                      <worker.icon className={`h-6 w-6 text-${worker.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{worker.name}</h3>
                      <p className="text-sm text-muted-foreground">{worker.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{worker.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Core Capabilities:</h4>
                    {worker.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Industry Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI solutions are tailored for diverse industries, delivering specific value propositions 
              that address unique challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { industry: "Healthcare", icon: Shield, applications: ["Medical Diagnosis", "Drug Discovery", "Patient Monitoring", "Treatment Planning"] },
              { industry: "Finance", icon: BarChart3, applications: ["Fraud Detection", "Risk Assessment", "Algorithmic Trading", "Credit Scoring"] },
              { industry: "Manufacturing", icon: Settings, applications: ["Quality Control", "Predictive Maintenance", "Supply Chain", "Production Optimization"] },
              { industry: "Retail", icon: Target, applications: ["Demand Forecasting", "Price Optimization", "Customer Segmentation", "Inventory Management"] },
              { industry: "Education", icon: FileText, applications: ["Personalized Learning", "Student Assessment", "Content Creation", "Performance Analytics"] },
              { industry: "Transportation", icon: Globe, applications: ["Route Optimization", "Autonomous Vehicles", "Traffic Management", "Logistics Planning"] }
            ].map((industry, index) => (
              <Card key={index} className="group hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <industry.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">{industry.industry}</h3>
                  </div>
                  <div className="space-y-2">
                    {industry.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Advanced Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Cutting-edge capabilities that set our AI solutions apart from conventional systems, 
                delivering unprecedented performance and reliability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Layers, title: "Multi-Layer Processing", desc: "Deep neural networks with advanced layered architecture" },
                  { icon: Code, title: "Self-Learning Algorithms", desc: "Continuous improvement through machine learning" },
                  { icon: Activity, title: "Real-Time Analytics", desc: "Instant data processing and insights generation" },
                  { icon: Gauge, title: "Performance Optimization", desc: "Automatic tuning for maximum efficiency" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Neural Network Processing</h3>
                    <Sparkles className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Advanced deep learning algorithms process complex data patterns with human-like intelligence.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Active Learning Mode</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Predictive Intelligence</h3>
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Forecast future trends and behaviors with exceptional accuracy using advanced prediction models.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">97.3% Accuracy Rate</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: AI Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our AI Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to building intelligent solutions that deliver measurable results 
              and transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Analysis", desc: "Deep dive into your business needs and data landscape", icon: Eye },
              { step: "02", title: "AI Model Design", desc: "Custom neural network architecture tailored to your requirements", icon: Brain },
              { step: "03", title: "Training & Optimization", desc: "Advanced machine learning with continuous improvement cycles", icon: Settings },
              { step: "04", title: "Deployment & Support", desc: "Seamless integration with ongoing maintenance and updates", icon: Zap }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <process.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Performance Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Performance Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real metrics from our AI implementations demonstrating tangible business impact 
              and return on investment across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "99.7%", label: "Accuracy Rate", desc: "Average AI model precision across all implementations", icon: Award },
              { metric: "300%", label: "ROI Increase", desc: "Average return on investment within first year", icon: TrendingUp },
              { metric: "75%", label: "Cost Reduction", desc: "Operational cost savings through automation", icon: BarChart3 },
              { metric: "24/7", label: "Availability", desc: "Continuous AI operation with 99.9% uptime", icon: Clock }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: AI Security & Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4">Security & Compliance</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise-Grade AI Security
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our AI solutions are built with security-first architecture, ensuring data protection, 
                privacy compliance, and ethical AI practices throughout all operations.
              </p>

              <div className="space-y-6">
                {[
                  { 
                    title: "Data Encryption", 
                    desc: "End-to-end encryption with advanced cryptographic protocols",
                    icon: Shield 
                  },
                  { 
                    title: "Privacy Protection", 
                    desc: "GDPR, CCPA, and global privacy regulation compliance",
                    icon: Eye 
                  },
                  { 
                    title: "Audit Trails", 
                    desc: "Complete transparency with detailed AI decision logging",
                    icon: FileText 
                  },
                  { 
                    title: "Ethical AI", 
                    desc: "Bias detection and fairness monitoring in all AI models",
                    icon: Award 
                  }
                ].map((security, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <security.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{security.title}</h3>
                      <p className="text-muted-foreground">{security.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Security Certifications</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { cert: "ISO 27001", desc: "Information Security Management" },
                  { cert: "SOC 2 Type II", desc: "Security & Availability Controls" },
                  { cert: "GDPR Compliant", desc: "Data Protection Regulation" },
                  { cert: "HIPAA Ready", desc: "Healthcare Information Security" }
                ].map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">{cert.cert}</h4>
                    <p className="text-xs text-muted-foreground">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: AI Integration Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless Integration Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect our AI solutions with your existing technology stack through robust APIs, 
              pre-built connectors, and flexible integration options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "API-First Architecture",
                desc: "RESTful APIs with comprehensive documentation and SDK support",
                icon: Code,
                integrations: ["REST APIs", "GraphQL", "Webhooks", "Real-time Events"]
              },
              {
                title: "Cloud Platforms",
                desc: "Native integration with major cloud service providers",
                icon: Globe,
                integrations: ["AWS", "Azure", "Google Cloud", "Multi-Cloud"]
              },
              {
                title: "Enterprise Systems",
                desc: "Pre-built connectors for popular business applications",
                icon: Database,
                integrations: ["CRM Systems", "ERP Platforms", "Data Warehouses", "BI Tools"]
              }
            ].map((integration, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <integration.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{integration.title}</h3>
                  <p className="text-muted-foreground mb-4">{integration.desc}</p>
                  <div className="space-y-2">
                    {integration.integrations.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Success Stories & Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories & Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world examples of how our AI solutions have transformed businesses 
              across different industries and scales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                company: "TechCorp Manufacturing",
                industry: "Manufacturing",
                result: "40% efficiency increase",
                challenge: "Production line optimization and quality control automation",
                solution: "Implemented computer vision AI for real-time defect detection and predictive maintenance",
                outcome: "Reduced defect rates by 85% and prevented 12 potential equipment failures",
                icon: Settings
              },
              {
                company: "HealthSystem Plus",
                industry: "Healthcare",
                result: "60% faster diagnosis",
                challenge: "Medical image analysis and patient data processing",
                solution: "Deployed deep learning models for radiology image analysis and clinical decision support",
                outcome: "Improved diagnostic accuracy by 30% and reduced patient wait times significantly",
                icon: Shield
              },
              {
                company: "RetailMax Global",
                industry: "Retail",
                result: "25% revenue growth",
                challenge: "Customer behavior prediction and inventory optimization",
                solution: "Implemented AI-driven demand forecasting and personalized recommendation engines",
                outcome: "Reduced inventory costs by 35% while increasing customer satisfaction scores",
                icon: Target
              }
            ].map((story, index) => (
              <Card key={index} className="group hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <story.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{story.company}</h3>
                      <p className="text-sm text-muted-foreground">{story.industry}</p>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">{story.result}</div>
                    <p className="text-sm text-muted-foreground">Performance Improvement</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">Challenge:</h4>
                      <p className="text-muted-foreground">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Solution:</h4>
                      <p className="text-muted-foreground">{story.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Outcome:</h4>
                      <p className="text-muted-foreground">{story.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Future of AI Innovation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Future of AI Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore cutting-edge AI technologies and emerging trends that will shape 
              the next generation of intelligent business solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Next-Generation AI Technologies</h3>
              <div className="space-y-6">
                {[
                  {
                    tech: "Quantum Machine Learning",
                    desc: "Leveraging quantum computing for exponentially faster AI processing",
                    status: "Research Phase"
                  },
                  {
                    tech: "Neuromorphic Computing",
                    desc: "Brain-inspired computing architectures for ultra-efficient AI",
                    status: "Development"
                  },
                  {
                    tech: "Autonomous AI Agents",
                    desc: "Self-managing AI systems that can adapt and evolve independently",
                    status: "Beta Testing"
                  },
                  {
                    tech: "Explainable AI (XAI)",
                    desc: "Transparent AI models that provide clear reasoning for decisions",
                    status: "Available"
                  }
                ].map((tech, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-bold">{tech.tech}</h4>
                        <Badge variant="outline" className="text-xs">{tech.status}</Badge>
                      </div>
                      <p className="text-muted-foreground">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">AI Research & Development</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Active Research Projects</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">$10M+</div>
                  <p className="text-sm text-muted-foreground">Annual R&D Investment</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
                  <p className="text-sm text-muted-foreground">PhD Researchers</p>
                </div>
                
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Innovation Pipeline</h4>
                  <p className="text-sm text-muted-foreground">
                    Stay ahead with early access to breakthrough AI technologies 
                    through our innovation partnership program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
              Join thousands of companies already leveraging our AI solutions to drive innovation, 
              improve efficiency, and unlock new growth opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-12 py-4 text-lg font-semibold">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Free 30-Day Trial</h3>
                <p className="text-sm opacity-80">Experience our AI solutions with no commitment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Expert Support</h3>
                <p className="text-sm opacity-80">Dedicated AI specialists to guide your implementation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Proven Results</h3>
                <p className="text-sm opacity-80">Join 500+ companies achieving measurable ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI;