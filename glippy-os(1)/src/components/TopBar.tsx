import { Wifi, Volume2, LayoutGrid, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function TopBar() {
  const [time, setTime] = useState(new Date());
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex justify-between items-center w-full px-4 h-10 z-[100] fixed top-0 bg-gradient-to-b from-[#005fac] via-[#0078d7] to-[#005fac] shadow-md border-b border-[#0078d7] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 cursor-pointer hover:brightness-110 active:shadow-inner transition-all scale-95">
          <LayoutGrid className="text-white w-5 h-5 fill-current" />
          <span className="text-lg font-bold italic text-white tracking-tight">TJN.OS</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium h-full relative">
          <div className="relative group">
            <button 
              onClick={() => setIsProgramsOpen(!isProgramsOpen)}
              className="px-3 py-1 text-white bg-white/20 rounded-sm shadow-inner transition-all hover:bg-white/30"
            >
              Programs
            </button>
            {isProgramsOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 glass-panel rounded-lg py-3 px-4 z-[110] aero-window text-[#191c1e] text-[12px] font-bold italic">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#006d36] animate-pulse" />
                  more themes coming soon :)
                </div>
              </div>
            )}
          </div>
          <button className="px-3 py-1 text-[#d4e3ff] hover:bg-white/10 rounded-sm transition-all">Files</button>
          <button className="px-3 py-1 text-[#d4e3ff] hover:bg-white/10 rounded-sm transition-all">Help</button>
        </nav>
      </div>

      <div className="flex items-center gap-4 text-white">
        <div className="flex gap-3 items-center">
          <Wifi className="w-4 h-4" />
          <Volume2 className="w-4 h-4" />
          <div className="flex flex-col items-end leading-none border-l border-white/20 pl-3">
            <span className="text-[11px] font-bold">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <span className="text-[9px] opacity-80">
              {time.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
