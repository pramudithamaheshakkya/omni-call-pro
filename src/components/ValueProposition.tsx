import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, BarChart3, Settings } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-green" />,
      title: "📈 Boost Productivity",
      description: "AI automation, one-click actions, and zero manual busywork—your team gets more done, faster."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-orange" />,
      title: "🎯 Close More Deals",
      description: "Smart CRM pipelines and lead tracking help you convert faster—with better follow-up and fewer drop-offs."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-brand-blue" />,
      title: "📊 Make Better Decisions",
      description: "Real-time dashboards and insights put the data you need at your fingertips—no guesswork, just clarity."
    },
    {
      icon: <Settings className="w-8 h-8 text-brand-purple" />,
      title: "⚙️ Scale With Confidence",
      description: "Whether you're a 3-person team or a 300-seat call center, Uniconnect grows with you—seamlessly."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Here's how you grow with us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your communication workflow with intelligent automation and seamless integration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;