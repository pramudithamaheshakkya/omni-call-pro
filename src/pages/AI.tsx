import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  ArrowRight
} from "lucide-react";

const AI = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-slate-900 leading-tight">
              AI that works for you
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're solving work challenges with AI-first products so that you can achieve more than humanly possible.
            </p>
          </div>

          {/* Product Tabs */}
          <div className="flex justify-center mb-16 gap-4 flex-wrap">
            <div className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              <Bot className="h-5 w-5" />
              CRM AI
            </div>
            <div className="bg-slate-100 text-slate-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Contact Center
            </div>
            <div className="bg-slate-100 text-slate-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5" />
              Workflow AI
            </div>
            <div className="bg-slate-100 text-slate-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Analytics AI
            </div>
          </div>

          {/* Main Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Left Card - CRM Intelligence */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Transform customer relationships with intelligent CRM
              </h2>
              <div className="bg-slate-800 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Lead Score</span>
                    <span className="text-emerald-400 font-medium">High Risk</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Next Action</span>
                    <span className="text-blue-400 font-medium">Follow-up Call</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Predicted Close</span>
                    <span className="text-purple-400 font-medium">85% probability</span>
                  </div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&crop=entropy" 
                alt="CRM Dashboard" 
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Right Card - AI Agent */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">
                Drive customer success at scale
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Customer Success AI</p>
                  <p className="text-sm text-slate-500">Digital Worker</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <p className="text-slate-700 text-sm">
                  "I've identified 12 high-value customers at risk of churn. Would you like me to create personalized retention campaigns for each?"
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop&crop=entropy" 
                alt="Customer Success Dashboard" 
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Sections */}
      
      {/* Contact Center AI Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Resolve countless requests with no added headcount
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Smart Ticket Routing</h3>
                    <p className="text-slate-600">AI automatically routes tickets to the right agents based on expertise and workload</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Sentiment Analysis</h3>
                    <p className="text-slate-600">Real-time emotion detection helps prioritize urgent cases</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Automated Responses</h3>
                    <p className="text-slate-600">AI provides instant answers for common queries while escalating complex issues</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=entropy" 
                alt="Contact Center Dashboard" 
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Live Support</span>
                </div>
                <p className="text-xs text-slate-600">24/7 AI assistance active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Sidekick Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=80&h=80&fit=crop&crop=faces" 
              alt="AI Assistant" 
              className="w-20 h-20 rounded-full mx-auto mb-6"
            />
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Work just got done<br />with AI sidekick
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The Digital Worker that understands your business, thinks ahead, 
              and sees work through from strategy to execution.
            </p>
            <Button className="mt-8 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
              Request Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Digital Workers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Sales Advisor */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Sales Advisor</h3>
                  <p className="text-sm text-slate-500">Digital Worker</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-slate-700">
                  "I've identified 3 high-probability deals that need immediate attention. 
                  Shall I draft personalized follow-up emails?"
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Lead scoring & prioritization</li>
                <li>• Deal forecasting</li>
                <li>• Automated follow-ups</li>
              </ul>
            </div>

            {/* Customer Success AI */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Customer Success AI</h3>
                  <p className="text-sm text-slate-500">Digital Worker</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-slate-700">
                  "Customer health score dropped for Account ABC. I've prepared a retention strategy. Review?"
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Churn prediction</li>
                <li>• Health scoring</li>
                <li>• Proactive outreach</li>
              </ul>
            </div>

            {/* Support Agent */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Support Agent</h3>
                  <p className="text-sm text-slate-500">Digital Worker</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-slate-700">
                  "Detected spike in password reset requests. I've created a help article and notified the team."
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Instant ticket resolution</li>
                <li>• Knowledge base updates</li>
                <li>• Escalation management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The power of AI right where you work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Blocks */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Automate anything with AI</h3>
              <p className="text-slate-600 mb-3">Powered by AI Blocks</p>
              <p className="text-sm text-slate-500">
                Create custom automations that learn from your business patterns and adapt over time.
              </p>
            </div>

            {/* Product Power-ups */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Take on challenges once thought unsolvable</h3>
              <p className="text-slate-600 mb-3">Powered by Product Power-ups</p>
              <p className="text-sm text-slate-500">
                Advanced AI capabilities that solve complex business problems automatically.
              </p>
            </div>

            {/* Digital Workforce */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Human work done by digital workers</h3>
              <p className="text-slate-600 mb-3">Powered by Digital Workforce</p>
              <p className="text-sm text-slate-500">
                AI agents that work alongside your team, handling routine tasks and complex workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to revolutionize your customer relationships?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Experience the power of AI-driven CRM and contact center solutions. 
              Transform every customer interaction into an opportunity for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI;