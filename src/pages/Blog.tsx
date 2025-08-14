import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      slug: "connect-ai-agents-apps",
      title: "Connect AI agents and apps to Uniconnect",
      description: "Seamlessly connect AI agents and apps to your account. Once connected, they can manage boards, assign tasks, generate insights, and keep Uniconnect as your source of truth.",
      image: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png",
      category: "Announcement",
      date: "January 28, 2025",
      featured: true
    },
    {
      id: 2,
      slug: "ai-blocks-open",
      title: "AI Blocks are now open to everyone",
      description: "Easily add AI to your workflows with ready-made AI actions and watch smarter work get done, faster.",
      image: "/lovable-uploads/351de0d9-a30a-4d8c-bb5e-855e4586b3aa.png",
      category: "Announcement",
      date: "January 21, 2025",
      featured: true
    }
  ];

  const blogPosts = [
    {
      id: 3,
      slug: "outreach-sequences",
      title: "Build an outreach machine with Sequences",
      description: "Transform your customer outreach with automated sequences that nurture leads and drive conversions.",
      category: "New release",
      date: "January 15, 2025",
      image: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png"
    },
    {
      id: 4,
      slug: "workflow-automation-2",
      title: "Workflow Automation 2.0 is here",
      description: "Enhanced automation capabilities with advanced triggers, conditions, and actions for seamless business processes.",
      category: "Feature update",
      date: "January 10, 2025",
      image: "/lovable-uploads/351de0d9-a30a-4d8c-bb5e-855e4586b3aa.png"
    },
    {
      id: 5,
      slug: "enterprise-security",
      title: "Enterprise Security Features",
      description: "Advanced security controls and compliance features designed for enterprise-grade protection.",
      category: "Security",
      date: "January 5, 2025",
      image: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png"
    },
    {
      id: 6,
      slug: "crm-integration-improvements",
      title: "CRM Integration Improvements",
      description: "Better sync capabilities and enhanced data mapping for seamless CRM integrations.",
      category: "Improvement",
      date: "December 28, 2024",
      image: "/lovable-uploads/351de0d9-a30a-4d8c-bb5e-855e4586b3aa.png"
    },
    {
      id: 7,
      slug: "mobile-performance-updates",
      title: "Mobile App Performance Updates",
      description: "Faster loading times and improved user experience across all mobile platforms.",
      category: "Performance",
      date: "December 20, 2024",
      image: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png"
    },
    {
      id: 8,
      slug: "advanced-analytics-dashboard",
      title: "Advanced Analytics Dashboard",
      description: "New analytics capabilities with real-time insights and customizable reporting options.",
      category: "Analytics",
      date: "December 15, 2024",
      image: "/lovable-uploads/351de0d9-a30a-4d8c-bb5e-855e4586b3aa.png"
    }
  ];

  const categories = ["All", "Announcement", "New release", "Feature update", "Security", "Improvement", "Performance", "Analytics"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">What's new</h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Discover the latest feature releases, improvements, and updates on web, desktop and mobile apps.
            </p>
          </div>

          {/* Featured Posts Carousel */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <Button variant="ghost" size="sm" className="rounded-full">
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 hover-scale">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {post.category}
                      </Badge>
                      <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {post.description}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                        Learn more →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                {/* Search */}
                <div className="relative mb-6">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search" 
                    className="pl-10"
                  />
                </div>

                {/* Filters */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Filters</h3>
                  
                  <div>
                    <Button variant="ghost" className="w-full justify-between mb-2">
                      Release type
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <Button variant="ghost" className="w-full justify-between mb-2">
                      Product
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <Button variant="ghost" className="w-full justify-between mb-2">
                      Teams
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <Button variant="ghost" className="w-full justify-between">
                      Plan
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button variant="link" className="text-sm text-muted-foreground">
                    Clear all
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">All Updates & Releases</h2>
              </div>

              {/* Timeline */}
              <div className="space-y-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-primary rounded-full mr-4"></div>
                    <h3 className="text-lg font-semibold text-foreground">January</h3>
                  </div>
                  
                  <div className="space-y-8 ml-8">
                    {blogPosts.slice(0, 3).map((post) => (
                      <Link key={post.id} to={`/blog/${post.slug}`}>
                        <div className="flex gap-6 group cursor-pointer hover-scale transition-all duration-300">
                          <div className="flex-shrink-0">
                            <Badge variant="outline" className="mb-2">
                              New release
                            </Badge>
                            <p className="text-sm text-muted-foreground">{post.date}</p>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-muted-foreground mb-4">
                              {post.description}
                            </p>
                            <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                              Read more →
                            </Button>
                          </div>
                          <div className="flex-shrink-0 w-32 h-20">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-muted rounded-full mr-4"></div>
                    <h3 className="text-lg font-semibold text-foreground">December</h3>
                  </div>
                  
                  <div className="space-y-8 ml-8">
                    {blogPosts.slice(3).map((post) => (
                      <Link key={post.id} to={`/blog/${post.slug}`}>
                        <div className="flex gap-6 group cursor-pointer hover-scale transition-all duration-300">
                          <div className="flex-shrink-0">
                            <Badge variant="outline" className="mb-2">
                              {post.category}
                            </Badge>
                            <p className="text-sm text-muted-foreground">{post.date}</p>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-muted-foreground mb-4">
                              {post.description}
                            </p>
                            <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                              Read more →
                            </Button>
                          </div>
                          <div className="flex-shrink-0 w-32 h-20">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;