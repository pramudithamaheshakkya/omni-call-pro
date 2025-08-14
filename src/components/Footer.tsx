import { Button } from "@/components/ui/button";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/30 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-xl font-bold text-foreground">Uniconnect Edge</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transform your desktop into a high-performance communication hub with our next-generation 
              softphone designed exclusively for Microsoft Windows.
            </p>
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-primary hover:opacity-90">
                Start Free Trial
              </Button>
              <Button variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-brand-purple" />
                <span className="text-muted-foreground">sales@uniconnect.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-brand-purple" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-brand-purple" />
                <span className="text-muted-foreground">Global Headquarters</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2024 Uniconnect Edge. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 md:mt-0">
              <a href="/security" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Security</a>
              <a href="/terms-and-privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms and Privacy</a>
              <a href="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
              <a href="/privacy-choices" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Your Privacy Choices</a>
              <a href="/support" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;