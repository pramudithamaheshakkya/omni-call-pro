import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Security</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Protection & Security</h2>
              <p className="text-muted-foreground mb-4">
                At Uniconnect Edge, we take security seriously. Our comprehensive security framework ensures your data and communications are protected at every level.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Encryption</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>End-to-end encryption for all voice and data communications</li>
                <li>AES-256 encryption for data at rest</li>
                <li>TLS 1.3 for data in transit</li>
                <li>Encrypted storage of all user credentials and sensitive information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Infrastructure Security</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>SOC 2 Type II compliant data centers</li>
                <li>24/7 security monitoring and incident response</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for all administrative access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Compliance</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>GDPR compliant data processing</li>
                <li>HIPAA compliance for healthcare organizations</li>
                <li>ISO 27001 certified security management</li>
                <li>Regular compliance assessments and certifications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Access Controls</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Role-based access control (RBAC)</li>
                <li>Single Sign-On (SSO) integration</li>
                <li>Advanced user authentication options</li>
                <li>Audit trails for all user activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Security Updates</h2>
              <p className="text-muted-foreground mb-4">
                We continuously monitor for security threats and provide automatic security updates to ensure your system remains protected against the latest vulnerabilities.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;