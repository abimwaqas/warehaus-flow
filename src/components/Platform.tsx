import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Workflow, BarChart3 } from "lucide-react";
import platformDashboard from "@/assets/platform-dashboard.png";

const features = [
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Monitor your shipments and inventory in real-time",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Streamline operations with intelligent automation",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Data-driven insights for better decision making",
  },
];

const Platform = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Flextock-style parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 overflow-hidden" id="platform" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
              Our Platform
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-card transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Dashboard Preview with Scroll Animation */}
          <div className="relative" style={{ perspective: "1200px" }}>
            <motion.div
              style={{
                y,
                rotateX,
                scale,
                opacity,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img 
                  src={platformDashboard} 
                  alt="Fulflit Platform Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating decoration */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 -z-10"
              />
              
              {/* Additional floating element */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-primary/15 border border-primary/25 -z-10"
              />
            </motion.div>
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            You give us the task and the desired result, and we will come up with the 
            best logistics scheme for fast and safe delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;
