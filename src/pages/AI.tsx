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
  Headphones
} from "lucide-react";

const AI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              AI Integration
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-400 bg-clip-text text-transparent">
              AI-Powered CRM & Contact Center Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transform customer relationships with intelligent automation. Our AI agents deliver 
              personalized experiences, predictive insights, and seamless workflow management 
              for next-generation CRM and contact center operations.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="text-blue-300 text-sm font-medium mb-2">Active Conversations</h3>
                  <p className="text-2xl font-bold text-white">2,847</p>
                  <p className="text-xs text-blue-200">+12% from yesterday</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-lg p-4 border border-emerald-500/30">
                  <h3 className="text-emerald-300 text-sm font-medium mb-2">Response Time</h3>
                  <p className="text-2xl font-bold text-white">1.2s</p>
                  <p className="text-xs text-emerald-200">-34% improvement</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg p-4 border border-purple-500/30">
                  <h3 className="text-purple-300 text-sm font-medium mb-2">Satisfaction Score</h3>
                  <p className="text-2xl font-bold text-white">98.5%</p>
                  <p className="text-xs text-purple-200">+5.2% this month</p>
                </div>
              </div>
              <div className="flex items-center justify-center py-8">
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
                  <Bot className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-slate-300 text-sm">AI Agent Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-slate-700/50 text-slate-300">
              Explore what's included
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Inspiring benefits awaits you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {/* Large Feature Card */}
            <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl p-8 text-slate-900">
              <Brain className="h-12 w-12 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Maximum Intelligence</h3>
              <p className="text-lg opacity-90">
                Engage customers with AI-powered conversations that understand context, emotion, and intent.
              </p>
            </div>

            {/* Invite People */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-2 border-slate-800"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-2 border-slate-800"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full border-2 border-slate-800"></div>
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-400 text-xs">Team</Badge>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaborative AI</h3>
              <p className="text-slate-400 text-sm">
                AI agents work seamlessly with human agents for optimal customer experience.
              </p>
            </div>

            {/* Growth Chart */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-emerald-400 font-semibold">Growth</h3>
                <TrendingUp className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="flex items-end space-x-1 mb-3">
                {[30, 50, 40, 70, 60, 90, 80].map((height, i) => (
                  <div 
                    key={i} 
                    className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm"
                    style={{ height: `${height}%`, width: '12px' }}
                  ></div>
                ))}
              </div>
              <h4 className="text-white font-bold text-lg mb-1">Track Performance</h4>
              <p className="text-slate-400 text-sm">Real-time AI performance metrics and insights.</p>
            </div>

            {/* Fast Iterations */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="bg-slate-700/50 rounded-lg p-3 mb-4 w-fit">
                <Zap className="h-6 w-6 text-yellow-400" />
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-400 text-xs mb-2">NEW</Badge>
              <h3 className="text-white font-bold mb-2">Instant Response</h3>
              <p className="text-slate-400 text-sm">Lightning-fast AI responses under 200ms.</p>
            </div>

            {/* Custom Support */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-slate-700/50 rounded-lg p-2">
                    <p className="text-slate-300 text-xs">Hey there!</p>
                    <p className="text-slate-300 text-xs">How can I help you?</p>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">24/7 AI Support</h3>
              <p className="text-slate-400 text-sm">Round-the-clock intelligent customer assistance.</p>
            </div>

            {/* Integrations */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-slate-700/50 rounded p-2 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-blue-400" />
                </div>
                <div className="bg-slate-700/50 rounded p-2 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="bg-slate-700/50 rounded p-2 flex items-center justify-center">
                  <Users className="h-4 w-4 text-purple-400" />
                </div>
                <div className="bg-slate-700/50 rounded p-2 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-yellow-400" />
                </div>
                <div className="bg-slate-700/50 rounded p-2 flex items-center justify-center">
                  <Target className="h-4 w-4 text-red-400" />
                </div>
                <div className="bg-slate-700/50 rounded p-2 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">100% Integrated</h3>
              <p className="text-slate-400 text-sm">
                Seamlessly connect all your existing CRM and communication tools.
              </p>
            </div>

            {/* Design Iterations */}
            <div className="lg:col-span-2 bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Workflow Automation</h3>
                  <p className="text-slate-400">
                    Get intelligent workflow suggestions and automated task routing.
                  </p>
                </div>
                <div className="bg-emerald-500/20 rounded-lg p-3">
                  <Clock className="h-6 w-6 text-emerald-400" />
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="flex-1 h-2 bg-emerald-400/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovation is central to our AI ethos. We continually explore new{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
                technologies
              </span>{" "}
              and strategies to revolutionize how people interact with CRM systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Workflow Agent */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">18k</h3>
              <p className="text-slate-400 mb-4">AI Workflow Agents Deployed</p>
              <div className="space-y-2">
                <div className="text-sm text-slate-300">• Intelligent lead scoring and routing</div>
                <div className="text-sm text-slate-300">• Automated follow-up sequences</div>
                <div className="text-sm text-slate-300">• Predictive customer behavior analysis</div>
              </div>
            </div>

            {/* Performance Excellence */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl p-8 border border-emerald-500/30">
              <Badge className="bg-emerald-500/30 text-emerald-300 mb-4">LIVE</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">
                Empowering CRM with Elevated AI Standards
              </h3>
              <p className="text-emerald-200 mb-4">Driving Customer Excellence</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-300">Resolution Rate</span>
                  <span className="text-sm font-bold text-white">94.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-300">First Contact Resolution</span>
                  <span className="text-sm font-bold text-white">87.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-300">Customer Satisfaction</span>
                  <span className="text-sm font-bold text-white">98.5%</span>
                </div>
              </div>
            </div>

            {/* CRM Intelligence */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">CRM Intelligence</h3>
              <p className="text-slate-400 mb-4">Your Customer Relationship Ally</p>
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">Customer Insights</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    AI analyzes customer interactions to provide actionable insights
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm font-medium text-white">Predictive Analytics</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Forecast customer needs and optimize engagement strategies
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Center Excellence */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Contact Center Excellence</h3>
              <p className="text-slate-400 mb-4">Intelligent Call Management</p>
              <div className="space-y-3">
                <div className="text-sm text-slate-300">
                  • Smart call routing based on customer context
                </div>
                <div className="text-sm text-slate-300">
                  • Real-time sentiment analysis during calls
                </div>
                <div className="text-sm text-slate-300">
                  • Automated quality scoring and coaching
                </div>
                <div className="text-sm text-slate-300">
                  • Intelligent knowledge base suggestions
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">
                CRM Performance Standards
              </h3>
              <p className="text-slate-400 mb-4">Advanced Business Intelligence</p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Lead Conversion Optimization</h4>
                  <p className="text-xs text-slate-300">
                    AI identifies high-value prospects and optimizes conversion paths
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Journey */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Customer Journey AI</h3>
                <MessageSquare className="h-6 w-6 text-blue-400" />
              </div>
              <p className="text-slate-400 mb-4">Personalized Experience Orchestration</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm text-slate-300">Journey mapping & optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-slate-300">Behavioral trigger automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-slate-300">Cross-channel experience sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-3xl p-12 text-center border border-slate-600/50">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to revolutionize your customer relationships?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Experience the power of AI-driven CRM and contact center solutions. 
              Transform every customer interaction into an opportunity for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 px-8 py-4 text-lg">
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