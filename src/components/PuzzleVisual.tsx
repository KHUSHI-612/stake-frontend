"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const PuzzleVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center center"]
  });

  const pieceY = useTransform(scrollYProgress, [0, 1], [isMobile ? -100 : -250, 0]);
  const pieceScale = useTransform(scrollYProgress, [0, 1], [isMobile ? 1.2 : 1.4, 1]);
  const pieceRotate = useTransform(scrollYProgress, [0, 1], [isMobile ? 15 : 35, 0]);
  const pieceOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  return (
    <section ref={containerRef} className="relative w-full max-w-[1400px] mx-auto pb-8 -mt-[160px] sm:-mt-[240px] md:-mt-[340px] z-10" id="digital-assets">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 relative h-full">

        {/* Left Side: Puzzle Visual Card */}
        <motion.div
          className="relative w-full lg:w-[70%] rounded-3xl overflow-visible shadow-2xl z-10 flex-shrink-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Puzzle Board Image */}
          <div className="w-full rounded-xl sm:rounded-3xl overflow-hidden border border-white/20 border-b-0 shadow-[0_30px_70px_rgba(0,0,0,0.6)] bg-[#111] relative">
            <Image
              src="/board.png"
              alt="Property Visualization"
              className="w-full h-auto object-cover scale-[1.01]"
              width={1000}
              height={600}
              priority
            />
            {/* Inner shadow/gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
          </div>
          {/* Blue Blur Overlay - covers bottom border completely */}
          <div
            className="absolute bottom-[-4px] left-[-1px] right-[-1px] h-36 sm:h-48 pointer-events-none z-10 rounded-b-3xl"
            style={{
              background: 'linear-gradient(to top, #131d2e 0%, rgba(19, 29, 46, 0.95) 25%, rgba(25, 45, 80, 0.6) 50%, transparent 100%)',
            }}
          ></div>

          {/* Scroll-Driven Parallax Drop Component */}
          <motion.div
            className="absolute top-[43%] sm:top-[41%] left-[46%] w-[18%] sm:w-[22%] z-20"
            style={{
              y: pieceY,
              scale: pieceScale,
              rotate: pieceRotate,
              opacity: pieceOpacity,
              perspective: 1000
            }}
          >
            <Image
              src="/piece.png"
              alt="Jigsaw Piece"
              width={300}
              height={300}
              className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

        </motion.div>



        <motion.div
          className="w-full lg:w-[28%] flex flex-col justify-center items-center lg:items-start gap-y-4 sm:gap-y-8 z-20 lg:pl-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="p-0 relative overflow-visible">
            <div className="text-[1.8rem] sm:text-4xl lg:text-[48px] font-[800] text-white leading-[1.2] sm:leading-none tracking-tight mb-4 sm:mb-8 text-center lg:text-left">
              Access<br className="hidden lg:inline" />{" "}
              premium<br className="hidden lg:inline" />{" "}
              property<br className="hidden lg:inline" />{" "}
              ownership<br className="hidden lg:inline" />{" "}
              <span className="text-[#e8860c] relative inline-block">
                {/* Animated Arrow Sequence - Hidden on mobile/tablet */}
                <motion.div
                  className="hidden lg:block absolute right-full top-1/2 -translate-y-[40%] mr-2 w-[240px] z-20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="animate-pulse-slow">
                    <Image
                      src="/arrow.png"
                      alt="Highlight Arrows"
                      width={240}
                      height={60}
                      className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(232,134,12,0.5)] mix-blend-screen"
                    />
                  </div>
                </motion.div>
                <span className="text-[#ff8c00]">for $150</span>
              </span>
            </div>

            <motion.div
              className="flex flex-col items-center lg:items-start p-4 sm:p-5 px-5 sm:px-6 rounded-xl border border-white/10 bg-[#2a3548]/50 backdrop-blur-xl w-full sm:w-auto lg:w-fit shadow-2xl relative overflow-hidden group"
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[13px] text-white/90 font-bold mb-2.5">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={26}
                  height={26}
                  className="object-contain"
                />
                <span className="tracking-wide">All Time Returns</span>
              </div>

              <div className="flex items-end justify-center lg:justify-start space-x-2">
                <span className="text-lg md:text-xl font-bold text-white tabular-nums tracking-tighter leading-none">
                  AED 165,000
                </span>
                <span className="text-[11px] text-[#22c55e] font-bold pb-0.5">
                  +111%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PuzzleVisual;
