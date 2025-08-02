import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, PieChart, TrendingUp, Calendar, Download, Eye } from "lucide-react";

const Reports = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Interactive Dashboards",
      description: "Real-time visual dashboards with customizable widgets"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Data Visualization",
      description: "Beautiful charts and graphs for better data understanding"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Trend Analysis",
      description: "Identify patterns and trends in your business data"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Scheduled Reports",
      description: "Automated report generation and delivery"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Export Options",
      description: "Export reports in PDF, Excel, and other formats"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Custom Views",
      description: "Create personalized report views for different users"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Business Intelligence</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Reports & Dashboards
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your data into actionable insights with powerful analytics and reporting tools. 
            Create beautiful dashboards and comprehensive reports for data-driven decision making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Turn data into decisions</h2>
          <p className="text-muted-foreground mb-6">
            Make faster, smarter decisions with comprehensive business intelligence
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Create Dashboard
            </button>
            <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium">
              View Samples
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;