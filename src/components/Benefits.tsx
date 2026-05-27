import { motion } from "framer-motion";
import { Globe, Cpu, Headphones } from "lucide-react";

const benefits = [
{
  icon: Globe,
  title: "Global Network",
  description: "Connected warehouses across key global markets"
},
{
  icon: Cpu,
  title: "Smart Technology",
  description: "AI-powered logistics optimization"
},
{
  icon: Headphones,
  title: "24/7 Support",
  description: "Round-the-clock customer assistance"
}];


const Benefits = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Fulflit is a cross-border logistics and fulfillment platform built to help SME e-commerce brands sell internationally with confidence. We enable businesses to reduce international shipping costs by up to 30%, deliver faster by positioning inventory closer to customers, and increase conversions through Cash on Delivery (COD) in key GCC markets. From store integration and inventory management to shipping, last-mile delivery, and COD remittance, Fulflit manages the entire fulfillment journey end to end. Our single, easy-to-use dashboard gives brands complete visibility into every order, from pickup to final delivery—without long-term contracts, heavy setup, or technical complexity. Designed to scale with growing businesses, Fulflit makes global selling simple, transparent, and reliable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map(() => null)}
        </div>
      </div>
    </section>);

};

export default Benefits;