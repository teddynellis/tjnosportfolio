import React, { useState, useCallback, ReactNode } from "react";
import { motion } from "motion/react";
import { TopBar } from "./TopBar";
import { Taskbar } from "./Taskbar";
import { Window } from "./Window";
import { MediaPlayer } from "./apps/MediaPlayer";
import { FileExplorer } from "./apps/FileExplorer";
import { Photography } from "./apps/Photography";
import { AppId } from "../types";
import { 
  Home, 
  FolderSearch, 
  PlayCircle, 
  MessageSquare, 
  Trash2, 
  LayoutGrid,
  PersonStanding,
  Mail,
  Camera
} from "lucide-react";
import { cn } from "../lib/utils";

export function Desktop() {
  const [activeApp, setActiveApp] = useState<AppId>('home');
  const [openApps, setOpenApps] = useState<AppId[]>([]);
  
  // Contact Form State
  const [mailForm, setMailForm] = useState({ subject: '', message: '', email: '' });
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleSendMail = async () => {
    if (!mailForm.subject || !mailForm.message) {
      setSendError("Please fill in all fields.");
      return;
    }

    setIsSending(true);
    setSendError(null);
    setSendSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: mailForm.subject,
          message: mailForm.message,
          fromEmail: mailForm.email
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSendSuccess(true);
        setMailForm({ subject: '', message: '', email: '' });
        setTimeout(() => setSendSuccess(false), 5000);
      } else {
        setSendError(data.error || "Failed to send message.");
      }
    } catch (err) {
      setSendError("Connection error. Is the server running?");
    } finally {
      setIsSending(false);
    }
  };

  const toggleApp = useCallback((id: AppId) => {
    setActiveApp(id);
    if (id === 'home') {
      setOpenApps([]);
    } else if (!openApps.includes(id)) {
      setOpenApps(prev => [...prev, id]);
    }
  }, [openApps]);

  const closeApp = useCallback((id: AppId) => {
    setOpenApps(prev => prev.filter(appId => appId !== id));
    if (activeApp === id) {
      setActiveApp('home');
    }
  }, [activeApp]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f7f9fc]">
      {/* Desktop Background */}
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQxhoEZte6vzfCvq5WSkzpkeO0kORY-_0o19XnfFiU64nMJPb5tMmLv9k105aKvXtYuFl0RygomCbjX8PWeM-5lUttvUiRHrPAabyR295Xr-gARn1Ooqu9voYESRR2s_9SElL1XrLM6qPFvhoMGFoXC11wz6Rx296G_3M8Hz4KsEwdwqpeT-N2Lshml3xWMdaUYGgDNqgI48mHMT_87DFS38_v6GjWMAtCJEwzxRQOOx9sYWQxjGC2-kmfDIvrs7BZqCftLK2r5gpe" 
          alt="Desktop Wallpaper"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#005fac]/10 mix-blend-overlay" />
      </div>

      <TopBar />

      {/* Desktop Icons Grid */}
      <main className="relative z-10 pt-16 px-8 h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-rows-6 gap-6 content-start pointer-events-none">
        <DesktopIcon 
          id="home" 
          label="Home" 
          icon={<Home size={32} />} 
          color="from-[#005fac] to-[#0078d7]"
          onClick={() => toggleApp('home')}
        />
        <DesktopIcon 
          id="explorer" 
          label="Case Studies" 
          icon={<FolderSearch size={32} />} 
          color="from-[#005fac] to-[#0078d7]"
          onClick={() => toggleApp('explorer')}
        />
        <DesktopIcon 
          id="media" 
          label="Media Center" 
          icon={<PlayCircle size={32} />} 
          color="from-[#191c1e] to-[#414752]"
          onClick={() => toggleApp('media')}
        />
        <DesktopIcon 
          id="about" 
          label="About Me" 
          icon={<PersonStanding size={32} />} 
          color="from-[#005fac] to-[#a4c9ff]"
          onClick={() => toggleApp('about')}
        />
        <DesktopIcon 
          id="photos" 
          label="Photography" 
          icon={<Camera size={32} />} 
          color="from-[#006d36] to-[#6afe9c]"
          onClick={() => toggleApp('photos')}
        />
        <DesktopIcon 
          id="mail" 
          label="Contact" 
          icon={<Mail size={32} />} 
          color="from-[#ba1a1a] to-[#ffdad6]"
          onClick={() => toggleApp('mail')}
        />
      </main>

      {/* Windows Layer */}
      <Window
        title="Portfolio Explorer - Route_Relief.doc"
        icon={<FolderSearch size={16} />}
        isOpen={openApps.includes('explorer')}
        onClose={() => closeApp('explorer')}
        onMinimize={() => setActiveApp('home')}
        isActive={activeApp === 'explorer'}
        onFocus={() => setActiveApp('explorer')}
        colorClass="from-[#005fac] to-[#0078d7]"
      >
        <FileExplorer />
      </Window>

      <Window
        title="TJN.OS Media Player"
        icon={<PlayCircle size={16} />}
        isOpen={openApps.includes('media')}
        onClose={() => closeApp('media')}
        onMinimize={() => setActiveApp('home')}
        isActive={activeApp === 'media'}
        onFocus={() => setActiveApp('media')}
        className="max-w-md h-[550px]"
        colorClass="from-[#191c1e] to-[#414752]"
      >
        <MediaPlayer />
      </Window>

      <Window
        title="Photo Gallery - Ethereal.pic"
        icon={<Camera size={16} />}
        isOpen={openApps.includes('photos')}
        onClose={() => closeApp('photos')}
        onMinimize={() => setActiveApp('home')}
        isActive={activeApp === 'photos'}
        onFocus={() => setActiveApp('photos')}
        className="max-w-5xl h-[700px]"
        colorClass="from-[#006d36] to-[#6afe9c]"
      >
        <Photography />
      </Window>

      <Window
        title="About Teddy"
        icon={<PersonStanding size={16} />}
        isOpen={openApps.includes('about')}
        onClose={() => closeApp('about')}
        onMinimize={() => setActiveApp('home')}
        isActive={activeApp === 'about'}
        onFocus={() => setActiveApp('about')}
        className="max-w-md h-[400px]"
        colorClass="from-[#005fac] to-[#a4c9ff]"
      >
        <div className="p-8 flex flex-col items-center text-center gap-4">
          <div className="w-24 h-24 rounded-full border-4 border-[#005fac] p-1 shadow-xl overflow-hidden">
            <img 
              src="/assets/teddy_profile.png" 
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
              }}
              alt="Teddy Nellis" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#191c1e]">Teddy Nellis</h2>
          <p className="text-[#414752] italic">"Always building, always pixel pushing."</p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-[#d3e5f1] text-[#005fac] rounded-full text-[12px] font-bold">Designer</span>
            <span className="px-3 py-1 bg-[#6afe9c] text-[#006d36] rounded-full text-[12px] font-bold">Developer</span>
          </div>
        </div>
      </Window>

      <Window
        title="Compose Mail"
        icon={<Mail size={16} />}
        isOpen={openApps.includes('mail')}
        onClose={() => closeApp('mail')}
        onMinimize={() => setActiveApp('home')}
        isActive={activeApp === 'mail'}
        onFocus={() => setActiveApp('mail')}
        className="max-w-md h-[500px]"
        colorClass="from-[#ba1a1a] to-[#ffdad6]"
      >
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#717784] uppercase">To:</label>
            <div className="w-full bg-[#f2f4f7] border border-[#c0c7d4] rounded px-3 py-2 text-[13px] text-[#414752]">
              teddy.nellis@gmail.com
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#717784] uppercase">Your Email (Optional):</label>
            <input 
              value={mailForm.email}
              onChange={(e) => setMailForm(prev => ({ ...prev, email: e.target.value }))}
              className="w-full border border-[#c0c7d4] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#005fac]" 
              placeholder="your@email.com" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#717784] uppercase">Subject:</label>
            <input 
              value={mailForm.subject}
              onChange={(e) => setMailForm(prev => ({ ...prev, subject: e.target.value }))}
              className="w-full border border-[#c0c7d4] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#005fac]" 
              placeholder="Inquiry about projects" 
            />
          </div>
          <div className="space-y-1">
             <label className="text-[11px] font-bold text-[#717784] uppercase">Message:</label>
             <textarea 
               value={mailForm.message}
               onChange={(e) => setMailForm(prev => ({ ...prev, message: e.target.value }))}
               className="w-full h-32 border border-[#c0c7d4] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#005fac] resize-none"
             ></textarea>
          </div>

          {sendError && (
            <div className="text-[11px] text-[#ba1a1a] font-bold bg-[#ffdad6] px-3 py-1 rounded">
              {sendError}
            </div>
          )}

          {sendSuccess && (
            <div className="text-[11px] text-[#006d36] font-bold bg-[#6afe9c]/20 px-3 py-1 rounded">
              Message sent successfully!
            </div>
          )}

          <button 
            onClick={handleSendMail}
            disabled={isSending}
            className="w-full bg-[#ba1a1a] text-white py-2 rounded font-bold hover:bg-[#9d1717] transition-colors shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSending ? "Sending..." : "Send Message"}
            {!isSending && <Mail size={16} />}
          </button>
        </div>
      </Window>

      {/* Placeholders for Chat and Trash */}
      <Window
        title="Messenger"
        icon={<MessageSquare size={16} />}
        isOpen={openApps.includes('chat')}
        onClose={() => closeApp('chat')}
        onMinimize={() => setActiveApp('home')}
        isActive={activeApp === 'chat'}
        onFocus={() => setActiveApp('chat')}
        className="max-w-sm h-[400px]"
        colorClass="from-[#008946] to-[#6afe9c]"
      >
        <div className="flex-grow flex flex-col items-center justify-center text-[#566771] p-8 text-center gap-4">
          <MessageSquare size={48} className="opacity-20" />
          <p className="font-bold">Chat service is currently offline.</p>
          <span className="text-xs opacity-60">Checking for updates in 2004...</span>
        </div>
      </Window>

      <Window
        title="Recycle Bin"
        icon={<Trash2 size={16} />}
        isOpen={openApps.includes('trash')}
        onClose={() => closeApp('trash')}
        onMinimize={() => setActiveApp('home')}
        isActive={activeApp === 'trash'}
        onFocus={() => setActiveApp('trash')}
        className="max-w-lg h-[400px]"
        colorClass="from-[#50616b] to-[#eceef1]"
      >
        <div className="flex-grow flex flex-col items-center justify-center text-[#566771] p-8 text-center gap-4">
          <Trash2 size={48} className="opacity-20" />
          <p className="font-bold italic">Recycle Bin is empty.</p>
        </div>
      </Window>

      <Taskbar 
        activeApp={activeApp} 
        onAppClick={toggleApp} 
        openApps={openApps}
      />
    </div>
  );
}

interface IconProps {
  id: string;
  label: string;
  icon: ReactNode;
  color: string;
  onClick: () => void;
}

function DesktopIcon({ label, icon, color, onClick }: IconProps) {
  return (
    <motion.div 
      drag
      dragMomentum={false}
      onClick={onClick}
      className="flex flex-col items-center gap-1 group cursor-pointer w-24 h-24 transition-transform active:scale-95 pointer-events-auto z-20"
    >
      <div className="w-16 h-16 glass-panel rounded-xl flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all">
        <div className={cn(
          "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-lg glossy-button text-white",
          color
        )}>
          {icon}
        </div>
      </div>
      <span className="text-white text-[13px] font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2 py-0.5 rounded group-hover:bg-[#005fac]/40 text-center">
        {label}
      </span>
    </motion.div>
  );
}
