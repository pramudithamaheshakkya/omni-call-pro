import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Calendar, Users, Target, Lightbulb, Award, Globe } from "lucide-react";

const AboutUs = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const storyMilestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Started as a small team with a big vision to transform how businesses manage their workflows and customer relationships.",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Successfully onboarded our first enterprise client, proving our platform's scalability and reliability.",
      icon: <Users className="w-8 h-8" />
    },
    {
      year: "2021",
      title: "Product Launch",
      description: "Launched our comprehensive CRM and workflow automation platform, revolutionizing business operations.",
      icon: <Target className="w-8 h-8" />
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations internationally, serving clients across multiple continents and time zones.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for innovation in business automation and customer experience excellence.",
      icon: <Award className="w-8 h-8" />
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuously innovating with AI-powered features and expanding our platform capabilities.",
      icon: <Calendar className="w-8 h-8" />
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % storyMilestones.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + storyMilestones.length) % storyMilestones.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                So how did{" "}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                  our platform
                </span>{" "}
                come to be?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Well for us, it happened somewhere in between collaborating and communicating, 
                engaging, and scaling rapidly. All while being totally transparent and working 
                the way we want.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-card rounded-3xl p-8 shadow-card">
                <div className="w-full h-full bg-primary/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center">
                      <Users className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold">People First</h3>
                    <p className="text-muted-foreground">Building solutions that put people at the center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* It's All About People Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">It's all about the people</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As we integrated and automated, built workflows, created templates, and expanded 
                our community beyond our wildest expectations, we continued to grow. It is through 
                this journey that our comprehensive Work OS was born.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to fuel our growth by evolving into a multi-product company, 
                providing people, teams, and companies powerful products to help turn their work 
                visions into a reality. <strong>We're only just getting started.</strong>
              </p>
              <Button size="lg" className="mt-6">
                Join Our Journey
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Mission Driven</h3>
                    <p className="text-sm text-muted-foreground">
                      Empowering businesses to achieve more through intelligent automation
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft mt-8">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold">Innovation First</h3>
                    <p className="text-sm text-muted-foreground">
                      Continuously pushing boundaries to deliver cutting-edge solutions
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold">Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Building a thriving ecosystem of successful businesses
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft mt-8">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Global Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Serving businesses worldwide with localized expertise
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a simple idea to a platform that powers thousands of businesses worldwide
            </p>
          </div>

          <div className="relative">
            <Card className="max-w-4xl mx-auto shadow-card">
              <CardContent className="p-12">
                <div className="flex items-center justify-between mb-8">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={prevStory}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <div className="text-center flex-1 mx-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {storyMilestones[currentStory].icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {storyMilestones[currentStory].year}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {storyMilestones[currentStory].title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {storyMilestones[currentStory].description}
                    </p>
                  </div>

                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={nextStory}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Timeline dots */}
                <div className="flex justify-center space-x-2">
                  {storyMilestones.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentStory 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft hover:shadow-card transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of working together to achieve extraordinary results
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-card transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries to create solutions that make a difference
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-card transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to delivering the highest quality in everything we create
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;