import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().max(100, "Company name is too long").optional(),
  message: z.string().min(1, "Please tell us about your logistics needs").max(1000, "Message is too long"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`Quote Request from ${data.company || data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "Not provided"}\n\nMessage:\n${data.message}`
    );
    
    window.location.href = `mailto:waqas@fulflit.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Info Card */}
          <div className="bg-primary rounded-3xl p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              How to ensure logistics in a new region?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Tell us more about your task, we will calculate the cost and contact you within a few hours
            </p>
          </div>

          {/* Right Side - Form Card */}
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="h-12 rounded-xl border-border bg-background"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Your Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@company.com" 
                          className="h-12 rounded-xl border-border bg-background"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Company Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Company" 
                          className="h-12 rounded-xl border-border bg-background"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Tell us about your logistics needs</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your shipping requirements, volume, destinations, etc." 
                          className="min-h-[120px] rounded-xl border-border bg-background resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  Get Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
