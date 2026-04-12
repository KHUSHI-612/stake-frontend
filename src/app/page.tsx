import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PuzzleVisual from "@/components/PuzzleVisual";
import PriceProgression from "@/components/PriceProgression";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-[#131d2e]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Hero Section */}
      <HeroSection />
      
      {/* Cinematic Ambient Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.15)_0%,transparent_70%)] blur-[120px]"></div>
      </div>

      {/* Main Content Sections */}
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 z-10">
        <PuzzleVisual />
        <PriceProgression />
      </div>


    </main>
  );
}
