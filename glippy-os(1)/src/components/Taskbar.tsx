import { Monitor, PlayCircle, MessageSquare, Trash2, FolderSearch } from "lucide-react";
import { cn } from "../lib/utils";
import { AppId } from "../types";

interface TaskbarProps {
  activeApp: AppId;
  onAppClick: (id: AppId) => void;
  openApps: AppId[];
}

export function Taskbar({ activeApp, onAppClick, openApps }: TaskbarProps) {
  const items = [
    { id: 'home' as AppId, icon: Monitor, label: 'Desktop' },
    { id: 'explorer' as AppId, icon: FolderSearch, label: 'Portfolio' },
    { id: 'media' as AppId, icon: PlayCircle, label: 'Media' },
    { id: 'chat' as AppId, icon: MessageSquare, label: 'Chat' },
    { id: 'trash' as AppId, icon: Trash2, label: 'Trash' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-[100] flex justify-center gap-4 items-center px-4 pb-2 pt-1 bg-white/70 backdrop-blur-xl border-t border-white/40 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      {items.map((item) => {
        const isActive = activeApp === item.id;
        const isOpen = openApps.includes(item.id);
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => onAppClick(item.id)}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 hover:scale-110",
              isActive 
                ? "bg-gradient-to-t from-[#0078d7] to-[#005fac] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] brightness-110" 
                : "text-[#566771] hover:backdrop-brightness-125"
            )}
          >
            <Icon size={20} fill={isActive ? "currentColor" : "none"} />
            <span className="text-[11px] font-semibold mt-0.5">{item.label}</span>
            {isOpen && !isActive && (
              <div className="absolute -bottom-1 w-1 h-1 bg-[#005fac] rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
