import { motion } from "framer-motion";
import { Warehouse, Ship, Banknote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Warehouse,
    title: "Warehousing & Fulfillment",
    subtitle: "Store Stock Closer to Your Customers",
    description: "Fulflit lets you store inventory in regional warehouses, so orders reach customers faster and cost less.",
    features: ["Inventory storage", "Order packing", "Local dispatch"],
    benefits: ["Faster deliveries", "Lower shipping costs", "Better customer satisfaction"],
  },
  {
    icon: Ship,
    title: "Bulk Shipping (Air & Sea)",
    subtitle: "Move Stock Internationally at Lower Cost",
    description: "Send inventory in bulk from Pakistan to the Middle East or other markets using air or sea freight.",
    features: ["Air freight options", "Sea freight options", "Customs handling"],
    benefits: ["Stock replenishment", "Fast-moving products", "Planned expansion"],
  },
  {
    icon: Banknote,
    title: "Direct Shipping with COD",
    subtitle: "Sell More with Cash on Delivery",
    description: "Fulflit supports COD deliveries in GCC countries, helping SME brands increase trust and conversion rates.",
    features: ["Customs handling", "Reliable last-mile delivery", "COD collection & remittance"],
    benefits: ["Higher conversions", "Customer trust", "Global reach"],
  },
];

const Solutions = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="solutions">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Logistics <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical logistics solutions for e-commerce brands that want to sell regionally or globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2 text-foreground">{solution.title}</h3>
                <p className="text-primary font-medium mb-4">{solution.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">We handle:</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-foreground mb-3">You get:</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;