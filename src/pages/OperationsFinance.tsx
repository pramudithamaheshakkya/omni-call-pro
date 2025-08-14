import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CogIcon, CurrencyDollarIcon, ChartBarIcon, ClipboardDocumentCheckIcon, TruckIcon } from "@heroicons/react/24/outline";

const OperationsFinance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-950 dark:to-indigo-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Operations & Finance</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Scale Operations Seamlessly
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Optimize your business operations with intelligent automation, real-time financial insights, and comprehensive process management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">Optimize Operations</Button>
              <Button variant="outline" size="lg" className="px-8 py-3">View Finance Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Operational Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your operations and financial processes with intelligent automation and real-time visibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CogIcon className="h-8 w-8" />,
                title: "Process Automation",
                description: "Automate routine operational tasks with intelligent workflows that adapt to your business rules and requirements."
              },
              {
                icon: <TruckIcon className="h-8 w-8" />,
                title: "Supply Chain Management",
                description: "End-to-end visibility into your supply chain with vendor management, inventory tracking, and demand forecasting."
              },
              {
                icon: <CurrencyDollarIcon className="h-8 w-8" />,
                title: "Financial Planning & Analysis",
                description: "Comprehensive financial planning with budgeting, forecasting, and variance analysis for better decision making."
              },
              {
                icon: <ClipboardDocumentCheckIcon className="h-8 w-8" />,
                title: "Quality Control Systems",
                description: "Systematic quality management with inspection workflows, compliance tracking, and corrective action management."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Performance Analytics",
                description: "Real-time operational dashboards with KPI tracking, trend analysis, and predictive insights."
              },
              {
                icon: <CurrencyDollarIcon className="h-8 w-8" />,
                title: "Cost Management",
                description: "Advanced cost accounting with activity-based costing, profit center analysis, and cost optimization recommendations."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Modules */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Financial Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrated financial modules that provide complete visibility and control over your organization's finances.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                module: "Accounting & Reporting",
                description: "Full general ledger with automated journal entries, financial statements, and regulatory compliance reporting.",
                features: ["General Ledger", "Financial Statements", "Tax Reporting", "Audit Trails"]
              },
              {
                module: "Budgeting & Forecasting",
                description: "Dynamic budgeting with scenario planning, rolling forecasts, and variance analysis for strategic planning.",
                features: ["Budget Creation", "Scenario Analysis", "Rolling Forecasts", "Variance Reports"]
              },
              {
                module: "Cash Flow Management",
                description: "Real-time cash position monitoring with payment processing, receivables management, and liquidity planning.",
                features: ["Cash Position", "Payment Processing", "AR/AP Management", "Liquidity Planning"]
              }
            ].map((module, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{module.module}</h3>
                <p className="text-muted-foreground mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Efficiency */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Operational Efficiency Metrics</h2>
            <p className="text-xl text-muted-foreground">
              Drive continuous improvement with data-driven insights into your operational performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "65%", label: "Reduction in manual processes" },
              { metric: "40%", label: "Improvement in cycle times" },
              { metric: "85%", label: "Increase in data accuracy" },
              { metric: "30%", label: "Cost savings achieved" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Tailored operational workflows and financial controls designed for your specific industry requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                industry: "Manufacturing",
                features: ["Production Planning", "Inventory Control", "Quality Assurance", "Cost Accounting"]
              },
              {
                industry: "Retail",
                features: ["Merchandise Planning", "Store Operations", "POS Integration", "Margin Analysis"]
              },
              {
                industry: "Healthcare",
                features: ["Patient Billing", "Resource Management", "Compliance Tracking", "Cost Centers"]
              },
              {
                industry: "Professional Services",
                features: ["Project Accounting", "Time Tracking", "Billing Management", "Resource Planning"]
              }
            ].map((solution, index) => (
              <Card key={index} className="p-4">
                <h3 className="text-lg font-semibold mb-3">{solution.industry}</h3>
                <ul className="space-y-1">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise Integration & Compliance</h2>
            <p className="text-xl text-muted-foreground">
              Connect with existing systems and maintain compliance with industry standards and regulations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">System Integrations</h3>
              <div className="grid grid-cols-2 gap-4">
                {["ERP Systems", "CRM Platforms", "Banking APIs", "E-commerce", "Payroll Systems", "Tax Software"].map((integration, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Compliance Standards</h3>
              <div className="grid grid-cols-2 gap-4">
                {["SOX Compliance", "GAAP Standards", "IFRS Reporting", "ISO 9001", "Data Privacy", "Financial Audits"].map((standard, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join operations teams who've achieved operational excellence and financial transparency with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600">
              Book Operations Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OperationsFinance;