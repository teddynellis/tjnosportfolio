import { Play, Pause, SkipBack, SkipForward, Volume2, Music, ListMusic, Sliders as Equalizer, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const TRACKS = [
  { 
    id: "01", 
    name: "Neon Horizon", 
    artist: "Aero Dreamers",
    duration: "03:42",
    art: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq92Pbzs4NZa5K_Czggjns4P5W8qtC2OdT5cIiRRoIXCHcOnRBNN9meNJw2z8xuQIK-7da1gTH8cZJ5ljmTtLHv3e5HKgnuA0TJir1F6jnAlpaP8935JHjN5CcjoHUDoFim0x80h85Ya_L-d8IGenHOosXQgZ3JvspTcP0y9GWv8H8LIYlhwXVq2Lso027d1FIw3_oGt1JnkFH5yPNY3nAG_IHjQMgBx1F_LqjbdwGKViXb0stOXNVkUmPs7WXyiaIMMZwO204GncU"
  },
  { 
    id: "02", 
    name: "Digital Dreams", 
    artist: "Synthetic Soul",
    duration: "04:15",
    art: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "03", 
    name: "Cyber Morning", 
    artist: "Circuit Breaker",
    duration: "02:58",
    art: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "04", 
    name: "Aero Glide", 
    artist: "Cloud Surfer",
    duration: "05:12",
    art: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop"
  },
];

export function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const currentTrack = TRACKS[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  return (
    <div className="flex flex-col h-full bg-[#f7f9fc]">
      {/* Player Top Section */}
      <div className="p-6 flex flex-col gap-6">
        <div className="flex gap-6">
          {/* Album Art */}
          <div className="w-32 h-32 rounded-lg shadow-2xl overflow-hidden border border-white/20 relative group">
            <img 
              src={currentTrack.art} 
              alt={currentTrack.name}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isPlaying ? 'animate-pulse' : ''}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Controls & Info */}
          <div className="flex flex-col justify-center flex-grow">
            <h2 className="text-2xl font-bold text-[#191c1e] leading-tight">{currentTrack.name}</h2>
            <p className="text-[#50616b] font-medium">{currentTrack.artist}</p>
            
            <div className="flex items-center gap-4 mt-4">
              <SkipBack 
                size={24} 
                className="text-[#005fac] cursor-pointer hover:scale-110 transition-transform"
                onClick={handlePrevious}
              />
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-[#005fac] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>
              <SkipForward 
                size={24} 
                className="text-[#005fac] cursor-pointer hover:scale-110 transition-transform"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>

        {/* Visualizer Area (Animated bars) */}
        <div className="h-24 bg-black/5 rounded-xl border border-black/5 p-4 flex items-end justify-between gap-1 overflow-hidden">
          {Array.from({ length: 32 }).map((_, i) => (
            <motion.div 
              key={i} 
              className="w-full bg-gradient-to-t from-[#006d36] to-[#4ae183] rounded-t-sm"
              initial={{ height: "10%" }}
              animate={{ 
                height: isPlaying 
                  ? [`${Math.random() * 80 + 20}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 80 + 20}%`] 
                  : "10%" 
              }}
              transition={{ 
                duration: isPlaying ? 0.4 + Math.random() * 0.4 : 0.2,
                repeat: isPlaying ? Infinity : 0,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="h-2 w-full bg-black/10 rounded-full overflow-hidden relative border border-white/20">
            <div className={`h-full bg-[#006d36] rounded-full candy-cane-fill shadow-[0_0_10px_rgba(74,225,131,0.5)] transition-all duration-1000 ${isPlaying ? 'w-2/3' : 'w-1/4'}`} />
          </div>
          <div className="flex justify-between text-[10px] font-bold text-[#566771]">
            <span>{isPlaying ? '02:14' : '00:00'}</span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>
      </div>

      {/* Quick Tabs */}
      <div className="px-6 flex gap-2">
        <button className="flex-1 py-1 px-2 rounded-md bg-[#eceef1] text-[11px] font-bold text-[#414752] border border-white active:shadow-inner transition-all">PLAYLIST</button>
        <button className="flex-1 py-1 px-2 rounded-md bg-[#0078d7] text-[11px] font-bold text-white shadow-md border border-white/20 transition-all">EQ</button>
        <button className="flex-1 py-1 px-2 rounded-md bg-[#eceef1] text-[11px] font-bold text-[#414752] border border-white active:shadow-inner transition-all">VIS</button>
        <button className="flex-1 py-1 px-2 rounded-md bg-[#eceef1] text-[11px] font-bold text-[#414752] border border-white active:shadow-inner transition-all">LIB</button>
      </div>

      {/* Playlist Preview */}
      <div className="mt-4 flex-grow bg-white/50 border-t border-black/5 overflow-y-auto">
        <div className="p-4 space-y-1">
           {TRACKS.map((track, idx) => (
             <div 
               key={track.id} 
               onClick={() => {
                 setCurrentTrackIndex(idx);
                 setIsPlaying(true);
               }}
               className={`flex justify-between items-center px-4 py-2 rounded-md transition-colors cursor-pointer ${idx === currentTrackIndex ? 'bg-[#0078d7] text-white shadow-md' : 'hover:bg-[#f2f4f7] text-[#414752]'}`}
             >
               <div className="flex items-center gap-3">
                 <span className={`text-[11px] font-mono ${idx === currentTrackIndex ? 'text-white' : 'opacity-50'}`}>{track.id}.</span>
                 <span className="text-[13px] font-medium">{track.name}</span>
               </div>
               <span className="text-[11px] opacity-70">{track.duration}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
