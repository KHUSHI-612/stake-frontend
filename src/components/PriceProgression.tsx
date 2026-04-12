"use client";

import { motion } from "framer-motion";

const batches = [
  { id: 1, name: "Batch 1", price: "$4,000", status: "sold" },
  { id: 2, name: "Batch 2", price: "$4,250", status: "sold" },
  { id: 3, name: "Batch 3", price: "$4,500", status: "sold" },
  { id: 4, name: "Batch 4", price: "$4,750", status: "active" },
  { id: 5, name: "Batch 5", price: "$5,000", status: "upcoming" },
  { id: 6, name: "Batch 6", price: "$5,250", status: "upcoming" },
];

const PriceProgression = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 z-20 relative">
      <div className="bg-[#131d2e] border border-white/[0.06] transition-colors duration-500 rounded-[20px] sm:rounded-[28px] p-3 sm:p-4 md:p-6 backdrop-blur-xl relative overflow-hidden">
        {/* Precise Orange Ambient Glows matching reference */}
        <div className="absolute top-0 left-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#e8860c]/[0.22] blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#e8860c]/[0.18] blur-[80px] sm:blur-[100px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-3 sm:gap-4 px-1 sm:px-2">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#e8860c] tracking-tight">
            Price Progression (200 Tokens)
          </h2>
          
          <div className="flex items-center space-x-3">
            <span className="bg-white text-gray-900 text-[9px] font-extrabold tracking-[0.08em] uppercase px-3 py-1.5 rounded-md shadow-sm">
              SOLD OUT 1-3
            </span>
            <span className="bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/40 text-[9px] font-extrabold tracking-[0.08em] uppercase px-3 py-1.5 rounded-md shadow-[0_0_12px_rgba(34,197,94,0.3),0_0_4px_rgba(34,197,94,0.2)]">
              ACTIVE 4
            </span>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll | Tablet: 2-row wrap | Desktop: 6-column grid */}
        <div className="flex overflow-x-auto py-2 md:grid md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 no-scrollbar snap-x snap-mandatory md:flex-wrap md:overflow-visible">
          {batches.map((batch) => (
            <motion.div
              key={batch.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`min-w-[140px] md:min-w-0 p-3 sm:p-4 rounded-xl border transition-all duration-300 snap-center relative group cursor-pointer flex flex-col justify-center ${
                batch.status === "active"
                  ? "bg-[#0d121d] border-[#e8860c]"
                  : "bg-[#151722]/50 border-white/[0.04] hover:border-white/10"
              }`}
            >
              <p className={`text-[10px] md:text-[11px] font-bold tracking-wider mb-0.5 ${
                batch.status === "active" ? "text-[#e8860c]" : "text-gray-400"
              }`}>
                {batch.name}
              </p>
              
              <div className="flex items-baseline mb-0">
                <p className={`text-base sm:text-lg md:text-xl font-extrabold tabular-nums ${
                  batch.status === "active" ? "text-[#e8860c]" : "text-white"
                }`}>
                  {batch.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceProgression;
