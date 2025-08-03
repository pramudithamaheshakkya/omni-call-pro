import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, BarChart3, Settings, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const ValueProposition = () => {
  const growthSteps = [
    {
      step: "01",
      icon: <Target className="w-6 h-6" />,
      title: "Start Smart",
      subtitle: "Quick Setup & Instant Impact",
      description: "Get up and running in minutes with our intuitive platform. No complex configurations—just immediate results.",
      features: ["5-minute onboarding", "Pre-built templates", "Zero learning curve"],
      color: "from-blue-500 to-blue-600",
      accentColor: "bg-blue-100 text-blue-700"
    },
    {
      step: "02", 
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scale Seamlessly",
      subtitle: "Grow Without Growing Pains",
      description: "Add team members, expand features, and increase capacity without missing a beat or breaking your budget.",
      features: ["Flexible team scaling", "Usage-based pricing", "Enterprise-ready infrastructure"],
      color: "from-emerald-500 to-emerald-600",
      accentColor: "bg-emerald-100 text-emerald-700"
    },
    {
      step: "03",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Optimize Continuously",
      subtitle: "Data-Driven Growth",
      description: "Leverage AI insights and real-time analytics to make smarter decisions and unlock new opportunities.",
      features: ["Predictive analytics", "Performance insights", "Automated optimizations"],
      color: "from-purple-500 to-purple-600",
      accentColor: "bg-purple-100 text-purple-700"
    },
    {
      step: "04",
      icon: <Settings className="w-6 h-6" />,
      title: "Innovate Together",
      subtitle: "Future-Proof Partnership",
      description: "Stay ahead with cutting-edge features, dedicated support, and a platform that evolves with your needs.",
      features: ["Regular feature updates", "24/7 expert support", "Innovation roadmap access"],
      color: "from-orange-500 to-orange-600",
      accentColor: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-grid-16 opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 border-slate-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Growth Journey
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Here's how you{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              grow with us
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From startup to enterprise, we're with you every step of the way. 
            Our platform grows, adapts, and evolves alongside your business.
          </p>
        </div>

        {/* Growth Journey Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {growthSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step number indicator */}
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className={`mx-auto w-12 h-12 rounded-xl ${step.accentColor} flex items-center justify-center`}>
                      {step.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">
                Ready to start your growth journey?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that chose to grow smarter, not harder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;