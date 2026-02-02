import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import cargoShip from "@/assets/cargo-ship.jpg";
import cargoPlane from "@/assets/cargo-plane.jpg";
import fleetVans from "@/assets/fleet-vans.jpg";

const LogisticsJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Split view (Sea + Air) transitions
  const splitOpacity = useTransform(smoothProgress, [0, 0.15, 0.4, 0.5], [0, 1, 1, 0]);
  const splitScale = useTransform(smoothProgress, [0, 0.5], [1.15, 1]);
  
  // Fleet vans transitions
  const vansOpacity = useTransform(smoothProgress, [0.4, 0.55, 0.85, 1], [0, 1, 1, 0]);
  const vansScale = useTransform(smoothProgress, [0.4, 0.9], [1.15, 1]);

  // Overlay for readability
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.5, 0.4]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[200vh]"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Stage 1: Split View - Sea (left) + Air (right) */}
        <motion.div 
          className="absolute inset-0 flex"
          style={{
            opacity: splitOpacity,
            scale: splitScale,
          }}
        >
          <div className="w-1/2 h-full overflow-hidden relative">
            <img
              src={cargoShip}
              alt="Cargo ship for sea freight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/30" />
          </div>
          <div className="w-1/2 h-full overflow-hidden relative">
            <img
              src={cargoPlane}
              alt="Cargo plane for air freight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-foreground/30" />
          </div>
          
          {/* Labels */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 flex items-center justify-center">
              <motion.div 
                className="text-center"
                style={{ opacity: splitOpacity }}
              >
                <span className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
                  Sea Freight
                </span>
              </motion.div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <motion.div 
                className="text-center"
                style={{ opacity: splitOpacity }}
              >
                <span className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
                  Air Freight
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stage 2: Fleet Vans - Last Mile */}
        <motion.div 
          className="absolute inset-0"
          style={{
            opacity: vansOpacity,
            scale: vansScale,
          }}
        >
          <img
            src={fleetVans}
            alt="Delivery van fleet"
            className="w-full h-full object-cover"
          />
          
          {/* Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center"
              style={{ opacity: vansOpacity }}
            >
              <span className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
                Last Mile Delivery
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Dark overlay */}
        <motion.div 
          className="absolute inset-0 bg-foreground pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
      </div>
    </section>
  );
};

export default LogisticsJourney;
