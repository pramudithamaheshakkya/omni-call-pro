import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  businessEmail: z
    .string()
    .email("Please enter a valid email address")
    .refine((email) => {
      const personalDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
      const domain = email.split("@")[1];
      return !personalDomains.includes(domain);
    }, "Please use a business email address"),
  phoneNumber: z.string().optional(),
  companyName: z.string().optional(),
  subject: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  country: z.string().optional(),
  preferredContact: z.enum(["email", "phone"]).optional(),
  consent: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),
});

type FormData = z.infer<typeof formSchema>;

const ContactUs = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      businessEmail: "",
      phoneNumber: "",
      companyName: "",
      subject: "",
      message: "",
      country: "",
      preferredContact: "email",
      consent: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Talk with our sales team to see how{" "}
                  <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                    Uniconnect Edge
                  </span>{" "}
                  can fit your needs
                </h1>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Discuss the best solution to meet your business goals</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Get tailored pricing information</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Discover how to streamline your communication workflows</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-8">
                  For technical or billing support, visit our{" "}
                  <a href="#" className="text-brand-purple hover:underline">Help Center</a>
                </p>
              </div>

              {/* Testimonial */}
              <div className="bg-card p-6 rounded-xl border">
                <blockquote className="text-lg font-medium mb-4">
                  "Uniconnect Edge transformed our call center operations, saving us over 1,500 hours of staff time monthly and boosting our productivity by 30%."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-muted-foreground">Operations Director | TechCorp Solutions</p>
                  </div>
                </div>
              </div>

              {/* Trust Logos */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Trusted by leading companies worldwide</p>
                <div className="flex items-center space-x-8 opacity-60">
                  <div className="text-2xl font-bold text-muted-foreground">MOTOROLA</div>
                  <div className="text-2xl font-bold text-muted-foreground">UNIVERSAL</div>
                  <div className="text-2xl font-bold text-muted-foreground">LIONSGATE</div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:sticky lg:top-8">
              <Card className="border shadow-card">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Contact our sales team</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="First name*" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="businessEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Last name*" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="businessEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Work email*" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Job title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Company name*" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Company size*" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-10">1-10 employees</SelectItem>
                                  <SelectItem value="11-50">11-50 employees</SelectItem>
                                  <SelectItem value="51-200">51-200 employees</SelectItem>
                                  <SelectItem value="201-500">201-500 employees</SelectItem>
                                  <SelectItem value="500+">500+ employees</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="What would you like to manage?*" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="calls">Call Management</SelectItem>
                                  <SelectItem value="crm">CRM Integration</SelectItem>
                                  <SelectItem value="auto-dialer">Auto Dialing</SelectItem>
                                  <SelectItem value="all">All Features</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your team and what work you'd like to manage with Uniconnect Edge"
                                className="min-h-[100px] resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <label className="text-xs text-muted-foreground">
                                By clicking submit, I acknowledge Uniconnect's{" "}
                                <a href="#" className="text-brand-purple hover:underline">
                                  Privacy Policy
                                </a>
                              </label>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white rounded-lg h-12"
                        size="lg"
                      >
                        Submit
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;