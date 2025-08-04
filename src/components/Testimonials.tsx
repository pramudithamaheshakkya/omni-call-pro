import { useState } from "react";
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardPosition = (index: number) => {
    const position = (index - currentIndex + testimonials.length) % testimonials.length;
    
    if (position === 0) {
      return "z-30 transform rotate-0 scale-100";
    } else if (position === 1) {
      return "z-20 transform rotate-2 scale-95 translate-x-4 translate-y-2";
    } else if (position === 2) {
      return "z-10 transform -rotate-1 scale-90 -translate-x-2 translate-y-4";
    } else {
      return "z-0 transform rotate-3 scale-85 translate-x-8 translate-y-6 opacity-50";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Founders<br />
            Backed by Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Results that speak through founder voices.
          </p>
        </div>

        <div className="flex justify-center items-center min-h-[500px] relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-0 z-40 rounded-full w-12 h-12 shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-0 z-40 rounded-full w-12 h-12 shadow-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Testimonial Cards Stack */}
          <div className="relative w-full max-w-lg">
            {/* Clip/Pin Effect */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-40">
              <div className="w-16 h-8 bg-gradient-to-b from-muted-foreground/20 to-muted-foreground/10 rounded-sm shadow-sm"></div>
            </div>

            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`absolute inset-0 bg-card border shadow-lg transition-all duration-500 ease-in-out ${getCardPosition(index)}`}
                style={{
                  transitionProperty: "transform, opacity, z-index"
                }}
              >
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  {/* Company Logo/Name */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground tracking-wide">
                      {testimonial.company}
                    </h3>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 flex items-center">
                    <blockquote className="text-lg leading-relaxed text-muted-foreground text-center">
                      <span className="text-4xl text-muted-foreground/30 leading-none">"</span>
                      <span className="block mt-2">{testimonial.quote}</span>
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover shadow-sm"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="rounded-full w-10 h-10 p-0"
                    >
                      <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-primary w-8" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;