import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Robin consistently delivers clean, intuitive designs that strike the perfect balance between aesthetic and usability. Whether it's for a complex workflow or a lightweight self-service feature, the user experience always feels effortless and refined.",
      company: "Squire",
      author: "Dave Salvant",
      role: "Co-founder of Squire",
      avatar: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png",
      linkedinUrl: "#"
    },
    {
      id: 2,
      quote: "The automation capabilities have transformed our workflow completely. We've reduced manual tasks by 80% and our team can now focus on strategic initiatives rather than repetitive processes.",
      company: "TechFlow Solutions",
      author: "Sarah Chen",
      role: "Operations Director",
      avatar: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png",
      linkedinUrl: "#"
    },
    {
      id: 3,
      quote: "Implementation was seamless and the results were immediate. Our customer satisfaction scores increased by 35% within the first month of deployment.",
      company: "CustomerFirst Inc",
      author: "Michael Rodriguez",
      role: "CEO & Founder",
      avatar: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png",
      linkedinUrl: "#"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardPosition = (index: number) => {
    const position = (index - currentIndex + testimonials.length) % testimonials.length;
    
    if (position === 0) {
      return "z-30 opacity-100 transform translate-x-0 translate-y-0 rotate-0 scale-100";
    } else if (position === 1) {
      return "z-20 opacity-70 transform translate-x-6 translate-y-3 rotate-2 scale-95";
    } else {
      return "z-10 opacity-40 transform translate-x-12 translate-y-6 -rotate-1 scale-90";
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
             backgroundSize: '24px 24px'
           }}>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
            Testimonials
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Trusted by Founders<br />
            Backed by Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Results that speak through founder voices.
          </p>
        </div>

        {/* Main Card Display */}
        <div className="flex justify-center items-center min-h-[600px] relative">
          {/* Testimonial Cards Stack */}
          <div className="relative w-full max-w-2xl">
            {/* Paper Clip Effect */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
              <div className="w-20 h-10 bg-gradient-to-b from-muted-foreground/15 to-muted-foreground/5 
                            rounded-lg shadow-sm border border-muted-foreground/10
                            before:content-[''] before:absolute before:top-1/2 before:left-1/2 
                            before:w-3 before:h-3 before:bg-muted-foreground/20 before:rounded-full
                            before:transform before:-translate-x-1/2 before:-translate-y-1/2">
              </div>
            </div>

            {/* Stacked Cards Container */}
            <div className="relative h-[500px]">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={`absolute inset-0 bg-card border-0 shadow-2xl transition-all duration-700 ease-out ${getCardPosition(index)}
                            rounded-2xl hover:shadow-3xl`}
                  style={{
                    boxShadow: index === currentIndex 
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                      : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <CardContent className="p-12 h-full flex flex-col">
                    {/* Company Name */}
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-foreground tracking-wide uppercase">
                        {testimonial.company}
                      </h3>
                    </div>

                    {/* Quote Section */}
                    <div className="flex-1 flex items-center justify-center mb-8">
                      <blockquote className="text-xl leading-relaxed text-muted-foreground max-w-lg">
                        <span className="text-6xl text-muted-foreground/20 leading-none font-serif">"</span>
                        <p className="mt-4 text-center">{testimonial.quote}</p>
                      </blockquote>
                    </div>

                    {/* Author Section */}
                    <div className="flex items-center justify-between pt-8 border-t border-border/30">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-14 h-14 rounded-full object-cover shadow-md ring-2 ring-muted"
                        />
                        <div>
                          <p className="font-semibold text-foreground text-lg">{testimonial.author}</p>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="rounded-full w-12 h-12 p-0 hover:scale-110 transition-transform"
                      >
                        <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 text-blue-600" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="lg"
            onClick={prevTestimonial}
            className="absolute left-4 z-50 rounded-full w-14 h-14 bg-background/80 backdrop-blur-sm
                      shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={nextTestimonial}
            className="absolute right-4 z-50 rounded-full w-14 h-14 bg-background/80 backdrop-blur-sm
                      shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentIndex 
                  ? "bg-primary w-8 shadow-lg" 
                  : "bg-muted-foreground/25 w-3 hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;