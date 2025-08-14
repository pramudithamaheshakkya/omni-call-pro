import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import ContactUs from "./pages/ContactUs";
import UseCase from "./pages/UseCase";
import Security from "./pages/Security";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyChoices from "./pages/PrivacyChoices";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import CRM from "./pages/CRM";
import CampaignManagement from "./pages/CampaignManagement";
import OmniChannel from "./pages/OmniChannel";
import WorkflowAutomation from "./pages/WorkflowAutomation";
import Reports from "./pages/Reports";
import AI from "./pages/AI";
import AIAgent from "./pages/AIAgent";
import Integration from "./pages/Integration";
import WorkflowManagement from "./pages/WorkflowManagement";
import AccessControl from "./pages/AccessControl";
import Edge from "./pages/Edge";
import Cloud from "./pages/Cloud";
import Enterprise from "./pages/Enterprise";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/use-case" element={<UseCase />} />
            <Route path="/security" element={<Security />} />
            <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy-choices" element={<PrivacyChoices />} />
            <Route path="/support" element={<Support />} />
            
            {/* Feature Pages */}
            <Route path="/crm" element={<CRM />} />
            <Route path="/campaign-management" element={<CampaignManagement />} />
            <Route path="/omnichannel" element={<OmniChannel />} />
            <Route path="/workflow-automation" element={<WorkflowAutomation />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/ai-agent" element={<AIAgent />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/workflow-management" element={<WorkflowManagement />} />
            <Route path="/access-control" element={<AccessControl />} />
            
            {/* Product Pages */}
            <Route path="/edge" element={<Edge />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
