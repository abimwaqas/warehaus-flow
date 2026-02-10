import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MapPin, Workflow, BarChart3 } from "lucide-react";
import platformDashboard from "@/assets/platform-dashboard.png";

const features = [
  {
    icon: MapPin,
    title: "📦 Orders",
    description: "Manage all international orders from one dashboard",
  },
  {
    icon: Workflow,
    title: "📊 Inventory",
    description: "Live stock visibility across all warehouses",
  },
  {
    icon: BarChart3,
    title: "🚚 Smart Shipping",
    description: "Best route selected based on cost & speed",
  },
  {
    icon: MapPin,
    title: "📍 Live Tracking",
    description: "Track every order from pickup to delivery",
  },
  {
    icon: BarChart3,
    title: "📈 Insights",
    description: "Delivery, COD, and cost performance at a glance",
  },
];

const Platform = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Main section scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Flextock-style dramatic 3D transforms with spring smoothing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dramatic rotation: starts at 25deg, flattens to 0, then tilts to -15deg
  const rotateX = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [35, 8, 0, -15]);
  
  // Y translation for parallax effect
  const y = useTransform(smoothProgress, [0, 0.5, 1], [150, 0, -80]);
  
  // Scale effect
  const scale = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.8, 0.95, 1, 0.95]);
  
  // Opacity for fade in/out
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);

  // Shadow intensity based on scroll
  const shadowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.1, 0.4, 0.1]);

  return (
    <section 
      className="py-32 lg:py-48 bg-secondary/30 overflow-hidden" 
      id="platform" 
      ref={containerRef}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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

          {/* Right - Dashboard Preview with Flextock-style 3D Scroll Animation */}
          <div 
            ref={imageRef}
            className="relative lg:min-h-[500px] flex items-center justify-center"
            style={{ perspective: "1500px" }}
          >
            <motion.div
              style={{
                rotateX,
                y,
                scale,
                opacity,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
              className="relative w-full"
            >
              {/* Glow effect behind dashboard */}
              <motion.div 
                className="absolute inset-0 -z-10 blur-3xl"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.2), transparent 70%)",
                  opacity: shadowOpacity,
                  transform: "translateZ(-50px) scale(1.2)",
                }}
              />
              
              {/* Main dashboard image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                <img 
                  src={platformDashboard} 
                  alt="Fulflit Platform Dashboard" 
                  className="w-full h-auto"
                />
                
                {/* Reflection/shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Floating decoration - top right */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotateZ: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-8 -right-8 w-28 h-28 rounded-2xl bg-primary/10 border border-primary/20 -z-10"
                style={{ transform: "translateZ(-30px)" }}
              />
              
              {/* Floating decoration - bottom left */}
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotateZ: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: 1.5 
                }}
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-xl bg-primary/15 border border-primary/25 -z-10"
                style={{ transform: "translateZ(-20px)" }}
              />

              {/* Additional floating element - top left */}
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  x: [0, -5, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: 0.5 
                }}
                className="absolute -top-4 -left-12 w-16 h-16 rounded-full bg-primary/5 border border-primary/10 -z-10"
                style={{ transform: "translateZ(-40px)" }}
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
          className="mt-24 text-center"
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
