import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import BusinessValue from "@/components/BusinessValue";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ValueProposition />
      <Features />
      <BusinessValue />
      <SuccessStories />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
