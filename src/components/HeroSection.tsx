"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-[14vh] sm:pt-[18vh] md:pt-[20vh] pb-[200px] sm:pb-[300px] md:pb-[400px] overflow-visible">
      {/* Background Image with Advanced Ovelay & Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "linear" 
          }}
          className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
        />
        {/* Navy-blue darkening gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to bottom, rgba(13, 20, 33, 0.45), rgba(13, 20, 33, 0.55))' }}
        ></div>
        {/* Smooth Section Transition Fade */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none z-10" 
          style={{ background: 'linear-gradient(to bottom, transparent 0%, #131d2e 100%)' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Discover <span className="text-[#e8860c]">high-growth</span><br />
            property investments
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-light px-2"
          >
            Join the CEG Equity Token batch. Start building your portfolio with fractional ownership of global assets.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link 
              href="#" 
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#e8860c] hover:bg-[#d4790b] rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(232,134,12,0.4)] hover:shadow-[0_0_35px_rgba(232,134,12,0.6)] transform hover:-translate-y-1"
            >
              Start Earning Now 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
