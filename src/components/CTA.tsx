import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const CTA = () => {
  return <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground lg:text-4xl">
            End-to-End Fulfillment, Powered by Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fulflit is a technology platform that orchestrates your entire fulfillment journey — from order placement and inventory to shipping, delivery, COD, and returns. Our system connects warehouses, carriers, and last-mile partners into one intelligent workflow, giving you real-time visibility, automated decisions, and full control without operational complexity. Ready to Ship Beyond Borders? Fulflit makes international e-commerce simple, affordable, and scalable for SMEs in Pakistan and the Middle East. Built as a Platform, Trusted as a Partner.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }} className="flex justify-center">
          <Button variant="hero" size="xl" onClick={() => window.open("https://core.fulflit.com/customer/register", "_blank")}>
            Sign Up Here
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default CTA;