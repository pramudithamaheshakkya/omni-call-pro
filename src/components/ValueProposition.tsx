import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const ValueProposition = () => {
  const growthPaths = [
    {
      title: "Smart Start & Setup",
      subtitle: "& execution",
      description: "Get up and running instantly with our intelligent onboarding that adapts to your business needs.",
      tags: ["Quick deployment", "Smart configurations", "Zero training required"],
      color: "bg-gradient-to-br from-purple-400 to-purple-500",
      textColor: "text-white"
    },
    {
      title: "Operational efficiency",
      subtitle: "",
      description: "Streamline workflows and boost productivity with AI-powered automation and intelligent routing.",
      tags: ["AI-powered workflows", "Smart automation", "Resource optimization"],
      color: "bg-gradient-to-br from-emerald-400 to-emerald-500",
      textColor: "text-white"
    },
    {
      title: "Real-time growth tracking",
      subtitle: "",
      description: "Monitor performance, identify opportunities, and scale with data-driven insights.",
      tags: ["Analytics dashboards", "Growth metrics", "Performance insights"],
      color: "bg-gradient-to-br from-slate-800 to-slate-900",
      textColor: "text-white"
    }
  ];

  const companyLogos = [
    { name: "TechCorp", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=entropy" },
    { name: "InnovateLab", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=entropy" },
    { name: "DataFlow", src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop&crop=entropy" },
    { name: "ScaleUp", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=entropy" },
    { name: "GrowthLab", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=entropy" },
    { name: "TeamSync", src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop&crop=entropy" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-slate-600 mb-4 text-lg">Uniconnect for Enterprise</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Here's how you grow with us
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Explore the growth solution that leaders trust and teams love.
          </p>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full">
            Contact sales
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Growth Path Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {growthPaths.map((path, index) => (
            <Card key={index} className={`${path.color} ${path.textColor} border-0 rounded-3xl overflow-hidden relative min-h-[400px] group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {path.title}
                    </h3>
                    {path.subtitle && (
                      <p className="text-xl opacity-90 mb-4">
                        {path.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    {path.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-white/90 leading-relaxed">
                    {path.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/20 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    <ArrowDownIcon className="mr-2 h-4 w-4" />
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {companyLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-12 object-contain filter contrast-0 hover:contrast-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-32 space-y-32">
          {/* Smart Start Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Smart Start & Setup
              </h3>
              <p className="text-xl text-slate-600 mb-8">
                Get your team productive from day one with intelligent onboarding that understands your business needs.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center">
                    <ArrowDownIcon className="mr-2 h-5 w-5 text-purple-500" />
                    Quick deployment
                  </h4>
                  <p className="text-slate-600 ml-7">
                    Set up your entire communication infrastructure in minutes, not days
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center">
                    <ArrowDownIcon className="mr-2 h-5 w-5 text-purple-500" />
                    Smart configurations
                  </h4>
                  <p className="text-slate-600 ml-7">
                    AI automatically configures optimal settings based on your team size and industry
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center">
                    <ArrowDownIcon className="mr-2 h-5 w-5 text-purple-500" />
                     Zero training required
                  </h4>
                  <p className="text-slate-600 ml-7">
                    Intuitive interface that your team can master in under 30 minutes
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=entropy" 
                alt="Smart Setup Dashboard" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg border">
                <p className="text-sm font-semibold text-slate-900">Setup Complete</p>
                <p className="text-xs text-slate-600">Ready in 5 minutes</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-slate-50 rounded-3xl p-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to transform how you grow?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that chose to scale smarter with Uniconnect.
            </p>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg rounded-full">
              Contact sales
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;