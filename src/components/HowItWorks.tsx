import { motion } from "framer-motion";
import { Store, Package, Truck, CreditCard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Store,
    title: "Connect Your Store",
    description: "Sync your Shopify, WooCommerce, or other store and start receiving orders automatically.",
  },
  {
    number: "02",
    icon: Package,
    title: "Send Inventory",
    description: "Store stock in Fulflit warehouses or ship orders directly to customers.",
  },
  {
    number: "03",
    icon: Truck,
    title: "We Pack & Deliver",
    description: "Fulflit handles packing, customs, shipping, COD, and last-mile delivery.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Track & Get Paid",
    description: "Track deliveries in real time and receive COD without hassle.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30" id="how-it-works">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Simple. Transparent. Reliable.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-border via-primary/50 to-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="relative text-center group"
              >
                {/* Step Circle */}
                <div className="relative mx-auto mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-20 h-20 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center mx-auto relative z-10 group-hover:border-primary group-hover:shadow-lg transition-all duration-300"
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;