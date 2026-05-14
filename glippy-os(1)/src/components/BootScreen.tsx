import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid, CheckCircle2 } from "lucide-react";

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-[#f7f9fc]">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#d4e3ff_100%)] opacity-50" />

      {/* Background Imagery (Aero World) */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 -z-20 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHAVkuQ4NqqVGyi1HhK-CGYxmbu_mrZrl6G0kRyce2cSw2fK0LLekRYOQM3Z-KzcWAQgZx-9Sxmk16-Ljh2oACx7HZMxRSq7uNGe3fTKw1OetmJETNZJ1L3sXQmv0kU-oFq60wnzXDHk34vlFmo4i_1HzKun7Ki9Jg_-1XnzXv6oMMa7wVA_ljfE96UMRuy0wQfQH0bGa15o8pFRFU184mSe5wFJE_SgH8-QIyfWXRTAakrNAciFFrQlUtm7wyafRYKTDt5uZga8XT"
          alt="Aero Background"
          className="w-full h-full object-cover blur-sm opacity-30"
          referrerPolicy="no-referrer"
        />
      </div>

      <motion.main
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        className="w-full max-w-[800px] h-[600px] bg-white rounded-xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-between py-16 border border-[#c0c7d4]/30"
      >
        {/* Top Branding Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#005fac] to-[#0078d7] flex items-center justify-center shadow-lg border-t border-l border-white/60">
              <LayoutGrid className="text-white w-10 h-10" />
            </div>
            <h1 className="text-5xl bg-gradient-to-b from-[#005fac] to-[#004884] bg-clip-text text-transparent italic font-bold tracking-tighter">
              TJN.OS
            </h1>
          </div>
          <div className="px-6 py-1 rounded-full bg-[#d3e5f1]/30 border border-white/50 backdrop-blur-sm">
            <p className="text-[13px] text-[#005fac] font-bold tracking-widest uppercase">
              Precision Computing
            </p>
          </div>
        </div>

        {/* Center Loading Visual */}
        <div className="w-full px-16 flex flex-col items-center">
          {/* Progress Container */}
          <div className="w-full max-w-md h-8 bg-[#e6e8eb] rounded-lg p-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-[#c0c7d4]/40 relative">
            <div
              className="h-full rounded-sm bg-gradient-to-b from-[#0078d7] via-[#005fac] to-[#004884] shadow-[0_0_10px_rgba(0,120,215,0.4)] relative overflow-hidden flex transition-all duration-300"
              style={{ width: `${progress}%` }}
            >
              {/* Gloss Layer */}
              <div className="absolute inset-0 gloss-reflection pointer-events-none" />
              {/* Candy Cane Texture */}
              <div className="absolute inset-0 candy-cane-fill opacity-30" />
            </div>
          </div>

          {/* Status Text */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-2xl text-[#414752] opacity-80 font-semibold">
              Initializing TJN.OS...
            </p>
            <AnimatePresence>
              {progress > 80 && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center space-x-2 text-[#006d36] font-bold"
                >
                  <CheckCircle2 size={16} />
                  <p className="text-[11px] uppercase tracking-wider">
                    System Check: OK
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Visuals */}
        <div className="w-full px-12 flex justify-between items-end">
          <div className="flex space-x-4 opacity-40 grayscale">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI2QVlNLO8OZBrE9goLzwxdV9xSsUWQ2wCurPNAgz0DWGszboNXg7ZEznMP-aiIIsnFhFXpSDTAPMXCdeuvildGHYG7SwMmB2_DxndqAliy-8ZyLlKf0bt9yAn8QrnvfsrT8QJYounruO3LkqIq6bfjCh_ijWLr18LBOwKIFudViCUCTCLHvbE9fukTIQVrX9WVt_EdChDxQmpi1uwYiSIb-iuGKGl3kUVXsEJUEj9O8n8CuAmiWaXjBXi7Qvvdrc__UENOhfnoh-k"
              alt="Partner Logos"
              className="h-8"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-right text-[#717784] text-[11px]">
            <p>v2.0.4-LUNA-GLASS</p>
            <p className="opacity-70">© 2004-2024 TJN Corporation</p>
          </div>
        </div>

        {/* Bevel Overlay */}
        <div className="absolute inset-0 pointer-events-none border-[12px] border-[#e6e8eb]/40 rounded-xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-white/60" />
      </motion.main>
    </div>
  );
}
