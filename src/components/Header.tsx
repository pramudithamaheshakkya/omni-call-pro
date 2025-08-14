import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            
            <NavigationMenu className="hidden lg:flex">
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
                          <NavigationMenuLink href="/crm" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">CRM (Customer Relationship Management)</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Manage customer relationships and data efficiently
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/campaign-management" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Campaign Management</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Create and manage marketing campaigns
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/omnichannel" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Omni-Channel Communication</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Connect across all communication channels
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/workflow-automation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Workflow Automation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Automate business processes and workflows
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/reports" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                          <NavigationMenuLink href="/ai" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Artificial Intelligence (AI)</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              AI-powered insights and automation
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/ai-agent" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">AI Agent (Virtual Assistant)</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Intelligent virtual assistant capabilities
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/integration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Third-Party Integration</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Connect with external tools and services
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/workflow-management" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Workflow Management</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Advanced workflow design and management
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/access-control" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                          <NavigationMenuLink href="/edge" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Edge</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Edge computing solutions for real-time processing
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/cloud" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Cloud</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Scalable cloud-based platform solutions
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink href="/enterprise" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                  <NavigationMenuLink href="/use-case" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                    Use Case
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/about-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
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
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Bars3Icon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 pt-6">
                  <a href="/" className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                    Home
                  </a>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Features</h3>
                    <div className="grid gap-3 pl-4">
                      <a href="/crm" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        CRM
                      </a>
                      <a href="/campaign-management" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Campaign Management
                      </a>
                      <a href="/omnichannel" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Omni-Channel
                      </a>
                      <a href="/workflow-automation" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Workflow Automation
                      </a>
                      <a href="/reports" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Reports & Dashboards
                      </a>
                      <a href="/ai" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        AI
                      </a>
                      <a href="/ai-agent" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        AI Agent
                      </a>
                      <a href="/integration" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Integration
                      </a>
                      <a href="/workflow-management" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Workflow Management
                      </a>
                      <a href="/access-control" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Access Control
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Product</h3>
                    <div className="grid gap-3 pl-4">
                      <a href="/edge" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Edge
                      </a>
                      <a href="/cloud" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Cloud
                      </a>
                      <a href="/enterprise" className="text-sm text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                        Enterprise
                      </a>
                    </div>
                  </div>

                  <a href="/use-case" className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                    Use Case
                  </a>
                  
                  <a href="/contact" className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </a>
                  
                  <a href="/blog" className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                    Blog
                  </a>
                  
                  <a href="/about-us" className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors" onClick={() => setIsOpen(false)}>
                    About Us
                  </a>

                  <div className="flex flex-col space-y-3 pt-6 border-t">
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                    <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;