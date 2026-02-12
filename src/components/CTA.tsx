import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const CTA = () => {
  return <section className="py-12 lg:py-16 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            End-to-End Fulfillment, Powered by Technology
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Fulflit is a technology platform that orchestrates your entire fulfillment journey — from order placement and inventory to shipping, delivery, COD, and returns. Our system connects warehouses, carriers, and last-mile partners into one intelligent workflow, giving you real-time visibility, automated decisions, and full control without operational complexity. Ready to Ship Beyond Borders? Fulflit makes international e-commerce simple, affordable, and scalable for SMEs in Pakistan and the Middle East. Built as a Platform, Trusted as a Partner.
          </p>
          
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
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => window.open("https://core.fulflit.com/customer/register", "_blank")}>
              Sign Up Here
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default CTA;