import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all hero images - easily replaceable
import heroWarehouse from "@/assets/hero-warehouse.jpg";
import cargoShip from "@/assets/cargo-ship.jpg";
import cargoPlane from "@/assets/cargo-plane.jpg";
import fleetVans from "@/assets/fleet-vans.jpg";

/**
 * Hero Section with Scroll-Based Animation
 * 
 * Features:
 * - Full viewport height (100vh) with sticky positioning
 * - Smooth zoom-out effect on scroll (scale decreases)
 * - Cross-fade transitions between 4 images
 * - GPU-accelerated transforms for premium feel
 * - Centered content that stays fixed during animation
 * - Responsive design for desktop and mobile
 */
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the extended container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring animation for buttery transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // ============================================
  // ZOOM EFFECT - Scale decreases on scroll
  // ============================================
  const imageScale = useTransform(smoothProgress, [0, 1], [1.15, 1]);
  
  // Subtle vertical parallax for depth
  const imageY = useTransform(smoothProgress, [0, 1], ["0%", "5%"]);

  // ============================================
  // IMAGE CROSS-FADE TRANSITIONS
  // Each image fades in and out at specific scroll points
  // ============================================
  
  // Image 1: Warehouse - visible at start, fades out
  const opacity1 = useTransform(smoothProgress, [0, 0.2, 0.3], [1, 1, 0]);
  
  // Image 2: Cargo Ship - fades in, then out
  const opacity2 = useTransform(smoothProgress, [0.15, 0.3, 0.5, 0.6], [0, 1, 1, 0]);
  
  // Image 3: Cargo Plane - fades in, then out
  const opacity3 = useTransform(smoothProgress, [0.45, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  
  // Image 4: Fleet Vans - fades in and stays
  const opacity4 = useTransform(smoothProgress, [0.7, 0.85, 1], [0, 1, 1]);

  // Text transitions - stage 1 (images 1&2) and stage 2 (images 3&4)
  const text1Opacity = useTransform(smoothProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const text2Opacity = useTransform(smoothProgress, [0.4, 0.55, 1], [0, 1, 1]);

  // ============================================
  // CONTENT TRANSFORMS
  // Content stays centered but has subtle movement
  // ============================================
  const contentY = useTransform(smoothProgress, [0, 0.8, 1], [0, -30, -60]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 1, 0]);
  
  // Dark overlay increases slightly as we scroll for better readability
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.45, 0.5, 0.55]);

  // Scroll indicator fades out as user starts scrolling
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  // Image data array for clean mapping
  const images = [
    { src: heroWarehouse, alt: "Modern logistics warehouse", opacity: opacity1 },
    { src: cargoShip, alt: "Cargo ship for sea freight", opacity: opacity2 },
    { src: cargoPlane, alt: "Cargo plane for air freight", opacity: opacity3 },
    { src: fleetVans, alt: "Delivery van fleet", opacity: opacity4 },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative"
      // Extended height for scroll tracking - adjust for desired scroll duration
      style={{ height: "300vh" }}
    >
      {/* Sticky container - stays at 100vh */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* ============================================
            BACKGROUND IMAGES WITH CROSS-FADE
            Each image is absolutely positioned and fades based on scroll
            GPU-accelerated with will-change and transform
            ============================================ */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 will-change-transform"
            style={{
              scale: imageScale,
              y: imageY,
              opacity: image.opacity,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              // Preload images for smooth transitions
              loading={index === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}

        {/* Dark overlay for content readability */}
        <motion.div 
          className="absolute inset-0 bg-foreground pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* Floating decorative elements for depth */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -100]),
            opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.4, 0.1]),
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -150]),
            opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.3, 0.1]),
          }}
        />

        {/* ============================================
            HERO CONTENT - Stays centered
            Subtle vertical movement and fade on scroll
            ============================================ */}
        <motion.div 
          className="relative h-full container mx-auto px-4 lg:px-8 flex items-center"
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
        >
          <div className="max-w-3xl pt-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/20 rounded-full backdrop-blur-sm">
                Global Fulfillment Solutions
              </span>
            </motion.div>

            {/* Text Stage 1 */}
            <motion.div style={{ opacity: text1Opacity }} className="absolute max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Sell Globally, Without{" "}
                <span className="text-primary">Logistics Headaches</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
                Fulflit enables SME e-commerce brands to sell globally with ease. Our end-to-end logistics platform covers warehousing & fulfilment, cross-border shipping, last-mile delivery, and COD — all in one place.
              </p>
            </motion.div>

            {/* Text Stage 2 */}
            <motion.div style={{ opacity: text2Opacity }} className="absolute max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Built for{" "}
                <span className="text-primary">Growing Brands</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
                Expanding internationally is tough for small and mid-sized brands due to high shipping costs, delivery failures, COD challenges, and limited visibility. Fulflit solves this by giving SMEs access to regional warehouses, reliable delivery partners, and real-time tracking — without heavy upfront investment.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-[280px] md:mt-[260px] lg:mt-[300px]"
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

        {/* ============================================
            SCROLL INDICATOR
            Fades out as user begins scrolling
            ============================================ */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: scrollIndicatorOpacity }}
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
