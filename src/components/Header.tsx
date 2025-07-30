import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/351de0d9-a30a-4d8c-bb5e-855e4586b3aa.png" 
                alt="Uniconnect Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 md:w-[700px] md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-muted-foreground uppercase tracking-wider">Categories</h4>
                        <div className="space-y-3">
                          <NavigationMenuLink href="#crm" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">CRM (Customer Relationship Management)</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Manage customer relationships and data efficiently
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#campaign" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Campaign Management</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Create and manage marketing campaigns
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#omnichannel" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Omni-Channel Communication</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Connect across all communication channels
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#workflow" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Workflow Automation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Automate business processes and workflows
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#reports" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Reports & Dashboards</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Analytics and reporting tools
                            </p>
                          </NavigationMenuLink>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-muted-foreground uppercase tracking-wider">Advanced Features</h4>
                        <div className="space-y-3">
                          <NavigationMenuLink href="#ai" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Artificial Intelligence (AI)</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              AI-powered insights and automation
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#ai-agent" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">AI Agent (Virtual Assistant)</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Intelligent virtual assistant capabilities
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#integration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Third-Party Integration</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Connect with external tools and services
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#workflow-management" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Workflow Management</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Advanced workflow design and management
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#access-control" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Access Control</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Security and permission management
                            </p>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Product</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-6">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-muted-foreground uppercase tracking-wider">Solutions</h4>
                        <div className="space-y-3">
                          <NavigationMenuLink href="#edge" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Edge</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Edge computing solutions for real-time processing
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#cloud" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Cloud</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Scalable cloud-based platform solutions
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#enterprise" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Enterprise</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Enterprise-grade solutions for large organizations
                            </p>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#use-case" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                    Use Case
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="outline" className="hidden sm:inline-flex">
              Contact Sales
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;