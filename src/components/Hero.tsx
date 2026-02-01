import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWarehouse from "@/assets/hero-warehouse.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring animation for natural motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // 3D perspective transforms - ZOOM OUT effect (starts zoomed in, zooms out on scroll)
  const backgroundScale = useTransform(smoothProgress, [0, 0.7, 1], [1.25, 1.1, 1]);
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);
  const backgroundRotateX = useTransform(smoothProgress, [0, 0.5, 1], [0, 4, 8]);
  
  // Content transforms - moves up and fades as you scroll
  const contentY = useTransform(smoothProgress, [0, 0.5, 1], [0, -30, -80]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.4, 0.8], [1, 0.9, 0]);
  const contentScale = useTransform(smoothProgress, [0, 0.6, 1], [1, 0.97, 0.9]);
  
  // Overlay darkness increases as you scroll
  const overlayOpacity = useTransform(smoothProgress, [0, 0.6, 1], [0.5, 0.55, 0.6]);

  return (
    <section 
      ref={containerRef}
      className="relative flex items-start overflow-hidden"
      style={{ height: "150vh" }} // 1.5x viewport height for tighter scroll
    >
      {/* Sticky container that stays in view */}
      <div className="sticky top-0 w-full h-screen overflow-hidden" style={{ perspective: "1500px" }}>
        {/* Background Image with 3D transforms - ZOOM OUT on scroll */}
        <motion.div 
          className="absolute inset-0 origin-center"
          style={{
            scale: backgroundScale,
            y: backgroundY,
            rotateX: backgroundRotateX,
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={heroWarehouse}
            alt="Modern logistics warehouse"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dynamic dark overlay */}
        <motion.div 
          className="absolute inset-0 bg-foreground"
          style={{ opacity: overlayOpacity }}
        />

        {/* Floating decorative elements with parallax */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -200]),
            opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.5, 0]),
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -300]),
            opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.4, 0]),
          }}
        />

        {/* Content with scroll-based transforms */}
        <motion.div 
          className="relative h-full container mx-auto px-4 lg:px-8 flex items-center"
          style={{
            y: contentY,
            opacity: contentOpacity,
            scale: contentScale,
          }}
        >
          <div className="max-w-3xl pt-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/20 rounded-full backdrop-blur-sm">
                Global Fulfillment Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white"
            >
              From Warehouse to Doorstep,{" "}
              <span className="text-primary">Seamlessly</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
            >
              Fulflit is the platform that coordinates global logistics from factory to customer door — 
              empowering businesses to ship anywhere, sell everywhere and grow faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => window.open("https://core.fulflit.com/customer/register", "_blank")}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]),
          }}
        >
          <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
