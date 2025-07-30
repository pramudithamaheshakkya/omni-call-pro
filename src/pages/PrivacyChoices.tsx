import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PrivacyChoices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Your Privacy Choices</h1>
          <p className="text-muted-foreground mb-8">
            Manage your privacy preferences and control how your data is used.
          </p>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Collection Preferences</CardTitle>
                <CardDescription>
                  Control what information we collect and how it's used
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-medium">Analytics and Performance</Label>
                    <p className="text-sm text-muted-foreground">
                      Help us improve our services by sharing usage analytics
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-medium">Marketing Communications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about new features and promotions
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-medium">Personalized Experience</Label>
                    <p className="text-sm text-muted-foreground">
                      Customize your experience based on usage patterns
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Preferences</CardTitle>
                <CardDescription>
                  Manage cookie settings and tracking preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-medium">Essential Cookies</Label>
                    <p className="text-sm text-muted-foreground">
                      Required for the website to function properly
                    </p>
                  </div>
                  <Switch defaultChecked disabled />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-medium">Performance Cookies</Label>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-medium">Targeting Cookies</Label>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver relevant advertisements
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Rights</CardTitle>
                <CardDescription>
                  Exercise your rights regarding personal data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <div className="text-left">
                      <div className="font-medium">Download My Data</div>
                      <div className="text-sm text-muted-foreground">Get a copy of your personal data</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <div className="text-left">
                      <div className="font-medium">Correct My Data</div>
                      <div className="text-sm text-muted-foreground">Update incorrect information</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <div className="text-left">
                      <div className="font-medium">Delete My Account</div>
                      <div className="text-sm text-muted-foreground">Permanently delete your account</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <div className="text-left">
                      <div className="font-medium">Contact Privacy Team</div>
                      <div className="text-sm text-muted-foreground">Get help with privacy questions</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Integrations</CardTitle>
                <CardDescription>
                  Manage data sharing with third-party services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-medium">CRM Integration</Label>
                    <p className="text-sm text-muted-foreground">
                      Share contact data with connected CRM systems
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-medium">Analytics Platforms</Label>
                    <p className="text-sm text-muted-foreground">
                      Share usage data with analytics services
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-gradient-primary hover:opacity-90">
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyChoices;