import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndPrivacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Privacy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Terms of Service</h2>
              <p className="text-muted-foreground mb-4">
                By using Uniconnect Edge software, you agree to these terms and conditions. Please read them carefully.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Acceptable Use</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Use the software in compliance with all applicable laws</li>
                <li>Do not attempt to reverse engineer or modify the software</li>
                <li>Respect intellectual property rights</li>
                <li>Do not use the service for illegal or harmful activities</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Service Availability</h3>
              <p className="text-muted-foreground mb-4">
                We strive to maintain 99.9% uptime for our services. Scheduled maintenance will be communicated in advance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Privacy Overview</h2>
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. We collect only the necessary information to provide our services effectively.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Account information (name, email, organization)</li>
                <li>Usage data and analytics</li>
                <li>Communication logs (for service improvement)</li>
                <li>Technical information (device type, software version)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Provide and improve our services</li>
                <li>Customer support and troubleshooting</li>
                <li>Security monitoring and fraud prevention</li>
                <li>Communication about service updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your data only as long as necessary to provide our services or as required by law. You can request data deletion at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about these terms or our privacy practices, please contact us at legal@uniconnect.ai
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndPrivacy;