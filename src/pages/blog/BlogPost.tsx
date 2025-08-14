import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, CalendarDaysIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";

// Blog post data
const blogPosts = {
  "connect-ai-agents-apps": {
    id: 1,
    title: "Connect AI agents and apps to Uniconnect",
    description: "Seamlessly connect AI agents and apps to your account. Once connected, they can manage boards, assign tasks, generate insights, and keep Uniconnect as your source of truth.",
    category: "Announcement",
    date: "January 28, 2025",
    readTime: "8 min read",
    author: "Sarah Chen",
    image: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png",
    content: {
      sections: [
        {
          id: "key-takeaways",
          title: "Key takeaways",
          content: [
            "AI agents can now directly integrate with Uniconnect workflows to automate routine tasks and provide intelligent insights",
            "The new API allows third-party apps to seamlessly sync data while maintaining Uniconnect as your single source of truth",
            "Automated task assignment and board management reduces manual overhead by up to 70% for teams using AI integrations",
            "Enhanced security protocols ensure all AI agents operate within your organization's permission framework"
          ]
        },
        {
          id: "introduction",
          title: "Transforming work with intelligent automation",
          content: [
            "The future of work is here, and it's powered by artificial intelligence. Today, we're excited to announce a groundbreaking update that transforms how teams interact with Uniconnect: native AI agent integration.",
            "This isn't just another feature update. It's a fundamental shift in how work gets done. By connecting AI agents directly to your Uniconnect workspace, you're creating an intelligent ecosystem where routine tasks handle themselves, insights surface automatically, and your team can focus on what matters most: strategic thinking and creative problem-solving.",
            "Whether you're managing complex projects, coordinating across departments, or scaling operations, AI agents now work alongside your team as tireless digital assistants that never miss a deadline, forget a task, or lose track of important details."
          ]
        },
        {
          id: "how-it-works",
          title: "How AI integration works",
          content: [
            "Connecting AI agents to Uniconnect is surprisingly simple, yet incredibly powerful. Here's how the magic happens:",
            "**Seamless Authentication**: AI agents authenticate through secure OAuth protocols, ensuring they operate within your organization's security framework. No additional passwords or complex setup procedures required.",
            "**Intelligent Task Management**: Once connected, AI agents can create boards, assign tasks, update statuses, and even prioritize work based on deadlines and dependencies. They understand context and make decisions that align with your team's workflows.",
            "**Real-time Data Sync**: Every action taken by an AI agent is immediately reflected in your Uniconnect workspace. Your human team members see updates in real-time, maintaining complete visibility into both human and AI-driven work.",
            "**Smart Insights Generation**: AI agents don't just execute tasks—they analyze patterns, identify bottlenecks, and surface insights that help your team work more efficiently."
          ]
        },
        {
          id: "practical-applications",
          title: "Practical applications that drive results",
          content: [
            "The possibilities for AI integration are virtually limitless. Here are some real-world applications already transforming how teams work:",
            "**Project Management Automation**: AI agents can monitor project health, automatically reassign tasks when team members are overloaded, and flag potential delays before they impact deadlines.",
            "**Customer Support Enhancement**: Connect your customer support AI to Uniconnect and watch as support tickets automatically become tasks, are assigned to the right team members, and track resolution times without any manual intervention.",
            "**Marketing Campaign Orchestration**: AI agents can manage entire marketing campaigns, creating tasks for content creation, scheduling social media posts, and tracking campaign performance metrics—all within your existing Uniconnect workflows.",
            "**Sales Pipeline Management**: Integrate your sales AI to automatically update deal stages, create follow-up tasks, and generate reports on pipeline health, ensuring no opportunity falls through the cracks."
          ]
        },
        {
          id: "getting-started",
          title: "Getting started with AI agents",
          content: [
            "Ready to supercharge your workflow with AI? Here's your step-by-step guide to getting started:",
            "**Step 1: Choose Your AI Agent**: Select from our growing marketplace of pre-built AI agents, or connect your existing AI tools through our flexible API.",
            "**Step 2: Configure Permissions**: Set up exactly what your AI agent can and cannot do. You maintain complete control over access levels and capabilities.",
            "**Step 3: Map Your Workflows**: Define how AI actions should integrate with your existing processes. The more context you provide, the smarter your AI agent becomes.",
            "**Step 4: Monitor and Optimize**: Use our built-in analytics to track AI performance and optimize configurations for maximum efficiency.",
            "The entire setup process takes less than 30 minutes, and our step-by-step wizard guides you through every detail."
          ]
        },
        {
          id: "security-and-compliance",
          title: "Enterprise-grade security and compliance",
          content: [
            "We understand that integrating AI into your workflow raises important security and compliance questions. That's why we've built enterprise-grade protections into every aspect of our AI integration platform:",
            "**Zero-trust Architecture**: Every AI agent operates under strict permission controls. They can only access data and perform actions that you explicitly authorize.",
            "**Audit Trail Transparency**: Every AI action is logged with complete traceability. You can see exactly what was done, when it was done, and by which AI agent.",
            "**Data Privacy Protection**: AI agents process data according to your organization's privacy policies. Sensitive information remains secure and is handled according to regulatory requirements like GDPR and CCPA.",
            "**Compliance Monitoring**: Built-in compliance checks ensure AI actions align with your industry regulations and internal policies."
          ]
        }
      ]
    }
  },
  "ai-blocks-open": {
    id: 2,
    title: "AI Blocks are now open to everyone",
    description: "Easily add AI to your workflows with ready-made AI actions and watch smarter work get done, faster.",
    category: "Announcement",
    date: "January 21, 2025",
    readTime: "6 min read",
    author: "Marcus Rodriguez",
    image: "/lovable-uploads/351de0d9-a30a-4d8c-bb5e-855e4586b3aa.png",
    content: {
      sections: [
        {
          id: "key-takeaways",
          title: "Key takeaways",
          content: [
            "AI Blocks are now available to all Uniconnect users, democratizing access to powerful automation capabilities",
            "Pre-built AI actions eliminate the need for technical expertise, making AI accessible to every team member",
            "Drag-and-drop interface allows anyone to build sophisticated AI workflows in minutes, not hours",
            "Integration with popular AI services like OpenAI, Claude, and Google AI provides flexibility and choice"
          ]
        },
        {
          id: "introduction",
          title: "Democratizing AI for every team",
          content: [
            "Artificial intelligence shouldn't be locked behind technical barriers or reserved for data scientists. Today, we're breaking down those walls by making AI Blocks available to every Uniconnect user, regardless of technical background.",
            "AI Blocks represent a fundamental shift in how teams interact with artificial intelligence. Instead of writing code or configuring complex APIs, you simply drag and drop pre-built AI actions into your workflows. It's as easy as building with digital LEGO blocks.",
            "This update isn't just about convenience—it's about democratizing the power of AI so every team member can automate routine tasks, generate insights, and make data-driven decisions without waiting for technical support."
          ]
        },
        {
          id: "available-blocks",
          title: "Powerful AI blocks ready to use",
          content: [
            "Our AI Blocks library includes dozens of pre-built actions designed to handle the most common workplace tasks:",
            "**Content Generation Blocks**: Automatically write emails, create summaries, generate meeting notes, and produce marketing copy that matches your brand voice.",
            "**Data Analysis Blocks**: Extract insights from spreadsheets, identify trends in your data, and generate reports that highlight key findings without manual analysis.",
            "**Communication Blocks**: Translate content into multiple languages, adjust tone for different audiences, and ensure consistent messaging across all channels.",
            "**Decision Support Blocks**: Analyze options, evaluate risks, and provide recommendation frameworks to support better decision-making processes.",
            "Each block comes with customizable parameters, so you can tailor AI behavior to match your specific needs and workflows."
          ]
        },
        {
          id: "workflow-examples",
          title: "Real workflow examples",
          content: [
            "Here are some practical ways teams are already using AI Blocks to transform their daily operations:",
            "**Customer Support Automation**: When a new support ticket arrives, AI Blocks automatically categorize the issue, suggest relevant help articles, and draft initial responses for your team to review and send.",
            "**Content Marketing Pipeline**: AI Blocks can research trending topics, generate content outlines, write first drafts, and even suggest social media posts to amplify your content across channels.",
            "**Project Status Reporting**: Combine multiple AI Blocks to gather project data, analyze progress, identify potential risks, and generate executive-ready status reports without manual data compilation.",
            "**Lead Qualification Process**: AI Blocks can analyze incoming leads, score them based on your criteria, assign them to appropriate sales team members, and even draft personalized outreach messages."
          ]
        },
        {
          id: "building-workflows",
          title: "Building your first AI workflow",
          content: [
            "Creating AI-powered workflows is now as simple as connecting puzzle pieces. Here's how to build your first automation:",
            "**Start with a Trigger**: Choose what starts your workflow—a new task, updated status, incoming message, or scheduled time.",
            "**Add AI Blocks**: Drag in the AI actions you need. Each block has simple configuration options with helpful examples and suggestions.",
            "**Connect the Flow**: Link blocks together to create sophisticated logic. Output from one AI block can feed into the next, creating powerful automation chains.",
            "**Test and Refine**: Use our built-in testing tools to see exactly how your workflow will behave before you activate it for your team.",
            "The visual workflow builder shows you exactly how data flows through your automation, making it easy to understand and modify as your needs evolve."
          ]
        }
      ]
    }
  },
  "outreach-sequences": {
    id: 3,
    title: "Build an outreach machine with Sequences",
    description: "Transform your customer outreach with automated sequences that nurture leads and drive conversions.",
    category: "New release",
    date: "January 15, 2025",
    readTime: "10 min read",
    author: "Elena Vasquez",
    image: "/lovable-uploads/6d5806f0-77e9-4436-a728-4ebc5583a983.png",
    content: {
      sections: [
        {
          id: "key-takeaways",
          title: "Key takeaways",
          content: [
            "Sequences automate multi-touch outreach campaigns that nurture leads through personalized communication flows",
            "Built-in analytics track open rates, response rates, and conversion metrics to optimize your outreach performance",
            "Smart timing algorithms send messages at optimal times based on recipient behavior and engagement patterns",
            "Integration with CRM data ensures every message is personalized and contextually relevant to the recipient's journey"
          ]
        },
        {
          id: "introduction",
          title: "The evolution of customer outreach",
          content: [
            "Customer outreach has evolved far beyond single emails and cold calls. Today's buyers expect personalized, timely communication that provides value at every touchpoint. Manual outreach simply can't scale to meet these expectations.",
            "That's why we've built Sequences—an intelligent outreach automation platform that transforms one-time messages into sophisticated, multi-touch campaigns that nurture relationships and drive results.",
            "Sequences don't just automate your outreach; they make it smarter. By analyzing recipient behavior, optimizing send times, and personalizing content based on CRM data, Sequences ensure every message delivers maximum impact."
          ]
        },
        {
          id: "how-sequences-work",
          title: "How sequences transform outreach",
          content: [
            "Sequences operate on a simple but powerful principle: the right message, to the right person, at the right time. Here's how they make this happen:",
            "**Behavioral Triggers**: Sequences automatically adapt based on recipient actions. If someone opens your email but doesn't respond, they receive a different follow-up than someone who doesn't engage at all.",
            "**Smart Timing**: Our algorithms analyze when each recipient is most likely to engage, automatically scheduling messages for optimal delivery times.",
            "**Dynamic Personalization**: Every message pulls live data from your CRM, ensuring content is always relevant and personalized to the recipient's current situation.",
            "**Multi-channel Coordination**: Sequences can coordinate across email, social media, and even task creation for your sales team, creating a unified outreach experience."
          ]
        },
        {
          id: "sequence-types",
          title: "Sequence types for every goal",
          content: [
            "Different outreach goals require different approaches. Sequences provides templates optimized for specific objectives:",
            "**Lead Nurturing Sequences**: Gradually build relationships with prospects through educational content, case studies, and soft touches that demonstrate value without being pushy.",
            "**Sales Follow-up Sequences**: Systematically follow up on proposals, quotes, and opportunities with persistence that's professional, not annoying.",
            "**Customer Onboarding Sequences**: Guide new customers through implementation with helpful resources, check-ins, and proactive support to ensure success.",
            "**Re-engagement Sequences**: Win back inactive customers or prospects with targeted messaging that addresses their specific concerns and barriers.",
            "**Event Promotion Sequences**: Build excitement for webinars, conferences, or product launches with coordinated messaging that drives attendance and engagement."
          ]
        },
        {
          id: "analytics-optimization",
          title: "Analytics that drive optimization",
          content: [
            "Sequences provides comprehensive analytics that help you understand what's working and optimize for better results:",
            "**Performance Dashboards**: Track key metrics like open rates, response rates, and conversion rates across all your sequences in real-time.",
            "**A/B Testing Framework**: Test different subject lines, message content, and send times to identify what resonates best with your audience.",
            "**Engagement Scoring**: Understand which prospects are most engaged and ready for direct sales contact versus those who need more nurturing.",
            "**ROI Tracking**: Connect sequence activities to revenue outcomes, showing exactly how your automated outreach contributes to business results.",
            "These insights don't just inform future sequences—they automatically optimize current ones, continuously improving performance without manual intervention."
          ]
        },
        {
          id: "getting-started",
          title: "Building your first sequence",
          content: [
            "Creating your first sequence is straightforward, but the results can be transformative. Here's your step-by-step guide:",
            "**Define Your Goal**: Start by clearly identifying what you want to achieve—lead generation, customer retention, event promotion, or something else entirely.",
            "**Choose Your Template**: Select from our library of proven sequence templates, or build from scratch if you have specific requirements.",
            "**Customize Your Messages**: Adapt the content to match your brand voice and specific value proposition. Use merge tags to personalize based on CRM data.",
            "**Set Up Triggers and Timing**: Define what actions trigger the sequence and how much time should pass between messages.",
            "**Test and Launch**: Use our preview mode to see exactly how your sequence will behave, then launch to a small test group before rolling out broadly.",
            "Most teams see immediate improvements in response rates and engagement, with many reporting 3-5x better results compared to manual outreach efforts."
          ]
        }
      ]
    }
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>← Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8 animate-fade-in">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Category Badge */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDaysIcon className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-black hover:bg-black/90 text-white">
              Get Started
            </Button>
          </div>

          {/* Hero Image */}
          <div className="aspect-video mb-12 overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Table of Contents */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-lg font-semibold text-foreground mb-4">Explore article topics</h2>
            <div className="space-y-2">
              {post.content.sections.map((section, index) => (
                <Link 
                  key={section.id}
                  to={`#${section.id}`}
                  className="block text-primary hover:text-primary/80 transition-colors story-link"
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {post.content.sections.map((section, index) => (
              <section 
                key={section.id} 
                id={section.id}
                className="mb-16 animate-fade-in"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                
                <div className="space-y-6">
                  {section.content.map((paragraph, pIndex) => {
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      // Handle bold subheadings
                      const boldText = paragraph.slice(2, -2);
                      const [title, ...rest] = boldText.split("**: ");
                      return (
                        <div key={pIndex} className="space-y-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {title}
                          </h3>
                          {rest.length > 0 && (
                            <p className="text-muted-foreground leading-relaxed">
                              {rest.join("**: ")}
                            </p>
                          )}
                        </div>
                      );
                    } else if (paragraph.includes("**Step") || paragraph.includes("**")) {
                      // Handle step-by-step content with bold sections
                      const parts = paragraph.split("**");
                      return (
                        <div key={pIndex} className="space-y-2">
                          {parts.map((part, partIndex) => {
                            if (partIndex % 2 === 1) {
                              // Bold parts
                              return (
                                <span key={partIndex} className="font-semibold text-foreground">
                                  {part}
                                </span>
                              );
                            } else {
                              // Regular parts
                              return (
                                <span key={partIndex} className="text-muted-foreground">
                                  {part}
                                </span>
                              );
                            }
                          })}
                        </div>
                      );
                    } else if (Array.isArray(section.content) && typeof paragraph === "string" && section.id === "key-takeaways") {
                      // Handle bullet points for key takeaways
                      return (
                        <ul key={pIndex} className="space-y-3">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    } else {
                      // Regular paragraphs
                      return (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      );
                    }
                  })}
                </div>
              </section>
            ))}
          </article>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-muted/50 rounded-lg text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to transform your workflow?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of teams who've revolutionized their operations with Uniconnect's intelligent platform.
            </p>
            <Button size="lg" className="bg-black hover:bg-black/90 text-white">
              Try Uniconnect Free
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;