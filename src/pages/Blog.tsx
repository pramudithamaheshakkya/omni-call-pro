import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Connect AI agents and apps to OmniCall Pro",
      description: "Seamlessly connect AI agents and apps to your account. Once connected, they can manage boards, assign tasks, generate insights, and keep OmniCall Pro as your source of truth.",
      image: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png",
      category: "Announcement",
      date: "January 15, 2025",
      featured: true
    },
    {
      id: 2,
      title: "AI Blocks are now open to everyone",
      description: "Easily add AI to your workflows with ready-made AI actions and watch smarter work get done, faster.",
      image: "/lovable-uploads/351de0d9-a30a-4d8c-bb5e-855e4586b3aa.png",
      category: "Announcement", 
      date: "January 10, 2025",
      featured: true
    }
  ];

  const allPosts = [
    {
      id: 3,
      title: "Effortless service excellence is here",
      description: "OmniCall Pro service is officially out of beta. Empower any team to deliver efficient service at scale with powerful AI capabilities.",
      category: "Announcement",
      date: "January 8, 2025",
      type: "New release"
    },
    {
      id: 4,
      title: "Build an outreach machine with Sequences",
      description: "Create automated email sequences that nurture leads and convert prospects into customers with our new Sequences feature.",
      category: "New release",
      date: "January 5, 2025",
      type: "New release"
    },
    {
      id: 5,
      title: "Advanced workflow automation templates",
      description: "Get started faster with pre-built workflow templates designed for common business processes across industries.",
      category: "Feature update",
      date: "January 3, 2025",
      type: "Feature update"
    },
    {
      id: 6,
      title: "Enhanced CRM dashboard with real-time insights",
      description: "Make data-driven decisions with our upgraded CRM dashboard featuring real-time analytics and customizable widgets.",
      category: "Feature update",
      date: "December 28, 2024",
      type: "Feature update"
    },
    {
      id: 7,
      title: "Multi-channel campaign orchestration",
      description: "Coordinate campaigns across email, SMS, social media, and phone calls from a single unified platform.",
      category: "New release",
      date: "December 25, 2024",
      type: "New release"
    },
    {
      id: 8,
      title: "Enterprise-grade security enhancements",
      description: "Advanced security features including SSO, advanced encryption, and compliance certifications for enterprise customers.",
      category: "Security update",
      date: "December 20, 2024",
      type: "Security update"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="monday-section bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="monday-heading mb-6">What's new</h1>
            <p className="monday-subheading mb-8">
              Discover the latest feature releases, improvements, and updates on web, desktop and mobile apps.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="monday-card overflow-hidden group cursor-pointer">
                <div className="aspect-video overflow-hidden">
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
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search" 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="text-sm font-medium text-foreground">
                  Filters
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Release type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    <SelectItem value="announcement">Announcement</SelectItem>
                    <SelectItem value="new-release">New release</SelectItem>
                    <SelectItem value="feature-update">Feature update</SelectItem>
                    <SelectItem value="security-update">Security update</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All products</SelectItem>
                    <SelectItem value="crm">CRM</SelectItem>
                    <SelectItem value="ai">AI</SelectItem>
                    <SelectItem value="workflow">Workflow</SelectItem>
                    <SelectItem value="integration">Integration</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Teams" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All teams</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All plans</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="ghost" className="text-primary">
                  Clear all
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Updates & Releases */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">All Updates & Releases</h2>
            
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <h3 className="text-lg font-medium">January</h3>
                </div>
                
                {allPosts.map((post) => (
                  <div key={post.id} className="relative flex gap-6">
                    <div className="relative z-10 flex h-6 w-6 items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
                    </div>
                    
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-medium mb-2 hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        {post.description}
                      </p>
                      
                      <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                        Read more →
                      </Button>
                    </div>
                    
                    <div className="hidden lg:block w-64 h-32 bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <div className="text-xs text-muted-foreground">Feature Preview</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;