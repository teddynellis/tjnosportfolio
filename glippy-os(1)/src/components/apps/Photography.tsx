import { useState } from "react";
import { 
  Camera, 
  Image as ImageIcon, 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  Search,
  ExternalLink,
  Maximize2,
  Share2
} from "lucide-react";

const ALBUMS = [
  {
    id: "landscape",
    name: "Landscape",
    title: "Landscape: A Study of Nature's Immensity",
    description: "Capturing the raw power and silent majesty of natural environments across the globe.",
    story: "This series explores the untamed beauty of the physical world. From volcanic ridges to glacial valleys, I documented the scale of nature compared to the human presence.",
    technique: "Shot on phase-one medium format with extreme attention to dynamic range. Post-processed to emphasize the natural, organic tones of the Earth.",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5?q=80&w=2070&auto=format&fit=crop",
    caption: "Fig 1.1: Sunset over the Icelandic highlands.",
    equipment: "Phase One XF, 80mm Schneider-Kreuznach lens."
  },
  {
    id: "film-photography",
    name: "Film Photography",
    title: "Film Photography: Analog Grain & Neon Grain",
    description: "A series of shots captured on 35mm and medium format film, embracing the organic imperfections of the medium.",
    story: "There is a soul in film that digital cannot replicate. This collection captures the streets of Tokyo and New York during the quietest hours, where the grain of the film merges with the mist of the city.",
    technique: "Shot primarily on Kodak Portra 400 and Cinestill 800T, developed and scanned manually to preserve the highlights of neon lanterns.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop",
    caption: "Fig 2.1: Shinjuku crossing on 35mm Cinestill 800T.",
    equipment: "Leica M6, 35mm f/2 Summicron."
  },
  {
    id: "client-work",
    name: "Client Work",
    title: "Client Work: Professional Visual Stories",
    description: "Commercial and editorial assignments for global brands, focused on storytelling and precision.",
    story: "Collaborating with creative directors and brands to translate their message into a visual language that resonates with their audience.",
    technique: "A balance of high-production studio lighting and location-based documentary style to ensure brand consistency and emotional impact.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    caption: "Fig 3.1: Editorial spread for an international travel magazine.",
    equipment: "Sony A7R V, 24-70mm f/2.8 GM II."
  }
];

export function Photography() {
  const [activeAlbumId, setActiveAlbumId] = useState(ALBUMS[0].id);
  const activeAlbum = ALBUMS.find(a => a.id === activeAlbumId) || ALBUMS[0];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Explorer Toolbar */}
      <div className="h-10 bg-[#f8f9fa] border-b border-[#c0c7d4]/20 flex items-center px-4 gap-6 shrink-0">
        <div className="flex items-center gap-4 text-[#414752]">
          <button className="flex items-center gap-1 hover:text-[#005fac] transition-colors">
            <ArrowLeft size={18} />
            <span className="text-[13px] font-medium">Back</span>
          </button>
          <button className="flex items-center gap-1 hover:text-[#005fac] transition-colors opacity-50">
            <ArrowRight size={18} />
          </button>
          <RotateCw size={16} className="ml-2 cursor-pointer hover:rotate-180 transition-transform duration-500" />
        </div>
        
        <div className="flex-grow flex items-center bg-[#f2f4f7] rounded border border-[#c0c7d4] px-3 py-1 text-[#414752] text-[12px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
          <Camera size={14} className="mr-2 text-[#005fac]" />
          C:\Users\Teddy\Pictures\Gallery\{activeAlbum.name.replace(/ /g, '_')}
        </div>

        <div className="w-48 flex items-center bg-white rounded border border-[#c0c7d4] px-3 py-1 text-[#717784] text-[12px]">
          <Search size={14} className="mr-2" />
          Filter
        </div>
      </div>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#f8f9fa] border-r border-[#c0c7d4]/30 flex flex-col shrink-0">
          <div className="p-4 space-y-6">
            <div>
              <h3 className="text-[11px] font-bold text-[#414752] uppercase tracking-widest mb-4">Gallery</h3>
              <ul className="space-y-1">
                {ALBUMS.map((item) => {
                  const isActive = item.id === activeAlbumId;
                  return (
                    <li key={item.id}>
                      <button 
                        onClick={() => setActiveAlbumId(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-r-lg transition-all text-left ${
                          isActive 
                            ? 'bg-[#005fac]/10 border-l-4 border-[#005fac] text-[#005fac] font-bold' 
                            : 'hover:bg-[#f0f2f5] text-[#414752]'
                        }`}
                      >
                        <ImageIcon size={16} />
                        <span className="text-[13px]">{item.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-bold text-[#414752] uppercase tracking-widest mb-4">Specs</h3>
              <div className="p-3 bg-white rounded-lg border border-[#c0c7d4]/30 text-[11px] text-[#414752] leading-relaxed italic">
                {activeAlbum.equipment}
              </div>
            </div>
          </div>

          <div className="mt-auto p-4 flex gap-2">
            <button className="flex-1 p-2 bg-[#f2f4f7] rounded border border-[#c0c7d4] flex items-center justify-center hover:bg-white transition-colors">
              <Maximize2 size={16} className="text-[#414752]" />
            </button>
            <button className="flex-1 p-2 bg-[#f2f4f7] rounded border border-[#c0c7d4] flex items-center justify-center hover:bg-white transition-colors">
              <Share2 size={16} className="text-[#414752]" />
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow overflow-y-auto bg-white p-12 scroll-smooth" key={activeAlbumId}>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <div className="text-[12px] font-bold text-[#005fac] mb-2 tracking-widest uppercase">{activeAlbum.name}</div>
              <h1 className="text-4xl font-bold text-[#191c1e] mb-6 leading-tight">{activeAlbum.title}</h1>
              <p className="text-lg text-[#414752] leading-relaxed max-w-2xl">
                {activeAlbum.description}
              </p>
            </header>

            {/* Large Image */}
            <div className="relative group mb-12 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={activeAlbum.image}
                alt={activeAlbum.name}
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#717784] border-b border-[#c0c7d4] pb-2">The Story</h2>
                <p className="text-[#414752] leading-relaxed italic">
                  "{activeAlbum.story}"
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#717784] border-b border-[#c0c7d4] pb-2">The Technique</h2>
                <p className="text-[#414752] leading-relaxed">
                  {activeAlbum.technique}
                </p>
              </div>
            </div>

            <div className="mt-16 flex items-center justify-between border-t border-[#c0c7d4] pt-8">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full border-2 border-[#005fac] p-0.5 overflow-hidden">
                    <img 
                      src="/assets/teddy_profile.png" 
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                      }}
                      alt="Teddy Nellis" 
                      className="w-full h-full rounded-full object-cover" 
                    />
                 </div>
                 <div>
                    <div className="text-[13px] font-bold text-[#191c1e]">Teddy Nellis</div>
                    <div className="text-[11px] text-[#717784]">Portfolio Creator</div>
                 </div>
              </div>
              <button className="text-[#005fac] font-bold text-[13px] hover:underline flex items-center gap-1">
                Download RAW <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
