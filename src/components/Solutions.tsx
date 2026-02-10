import { motion } from "framer-motion";
import { Warehouse, Ship, Banknote, Send } from "lucide-react";

const solutions = [
  {
    icon: Warehouse,
    title: "International Warehousing & Fulfilment with Last-Mile",
    description: "Store inventory in regional warehouses closer to customers. Faster local order processing and dispatch. Integrated last-mile delivery across key markets. Lower shipping costs and improved delivery experience.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Ship,
    title: "Bulk Shipping (By Air & By Sea)",
    description: "Move inventory in bulk from Pakistan to GCC and other markets. Cost-effective air and sea freight options. Ideal for stock replenishment and planned expansion. Reliable transit with end-to-end coordination.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: Send,
    title: "Direct Shipping",
    description: "Ship orders directly from origin to customers worldwide. No need to pre-position inventory. Full customs handling and international delivery. Best for testing new markets and low-volume orders.",
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    icon: Banknote,
    title: "Cash on Delivery Services",
    description: "Offer COD across GCC markets. Increase customer trust and conversion rates. Reliable last-mile delivery with COD handling. Secure COD collection and timely remittance.",
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
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;