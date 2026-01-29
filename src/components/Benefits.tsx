import { motion } from "framer-motion";
import { Truck, Warehouse, DollarSign, Globe, BarChart3, Zap } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Save up to 30%",
    description: "On international shipping costs with our optimized routes and bulk rates.",
  },
  {
    icon: Truck,
    title: "Faster Deliveries",
    description: "Store stock closer to customers for quick last-mile delivery.",
  },
  {
    icon: Globe,
    title: "COD in GCC",
    description: "Offer Cash on Delivery in GCC markets to increase conversions.",
  },
  {
    icon: BarChart3,
    title: "Real-time Tracking",
    description: "Track every order from pickup to delivery with live updates.",
  },
  {
    icon: Zap,
    title: "Easy Dashboard",
    description: "Manage everything from one intuitive, powerful platform.",
  },
  {
    icon: Warehouse,
    title: "No Heavy Setup",
    description: "No long-term contracts or complex onboarding required.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Benefits = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="product">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">Fulflit</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for growing brands. Expanding internationally is tough for small and mid-sized 
            brands—Fulflit is designed to solve exactly these problems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(162_100%_42%/0.1)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;