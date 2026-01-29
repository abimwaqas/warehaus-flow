import { motion } from "framer-motion";
import { Warehouse, Ship, Banknote, ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Warehouse,
    title: "Inbound Logistics",
    description: "We handle the coordination, receipt, and transportation of your goods into your storage facilities or production plants, ensuring timely and accurate deliveries every step of the way.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Package,
    title: "Outbound Logistics",
    description: "From order fulfillment to final delivery, we manage the complete outbound process to ensure your products reach customers quickly and efficiently.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: Ship,
    title: "Bulk Shipping (Air & Sea)",
    description: "Send inventory in bulk from Pakistan to the Middle East or other markets using air or sea freight at competitive rates.",
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    icon: Banknote,
    title: "COD Services",
    description: "Fulflit supports COD deliveries in GCC countries, helping SME brands increase trust and conversion rates with customers.",
    color: "from-amber-500/20 to-amber-600/10",
  },
];

const Solutions = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Find the most profitable way of delivery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical logistics solutions for e-commerce brands that want to sell regionally or globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>

                {/* CTA */}
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
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