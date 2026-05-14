import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Square } from "lucide-react";
import { cn } from "../lib/utils";

interface WindowProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  isActive: boolean;
  onFocus: () => void;
  className?: string;
  colorClass?: string;
}

export function Window({
  title,
  icon,
  children,
  isOpen,
  onClose,
  onMinimize,
  isActive,
  onFocus,
  className,
  colorClass = "from-[#005fac] to-[#0078d7]"
}: WindowProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag
          dragMomentum={false}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={onFocus}
          className={cn(
            "fixed inset-0 m-auto w-full max-w-4xl h-[600px] aero-window bg-white/90 backdrop-blur-xl rounded-xl flex flex-col overflow-hidden z-40",
            !isActive && "brightness-95",
            className
          )}
        >
          {/* Title Bar */}
          <div className={cn(
            "h-10 flex items-center justify-between px-3 shrink-0 select-none border-b border-[#0078d7] relative",
            "bg-gradient-to-b", colorClass
          )}>
            <div className="absolute inset-0 gloss-reflection pointer-events-none" />
            <div className="flex items-center gap-2 z-10">
              <div className="text-white">
                {icon}
              </div>
              <span className="text-white text-[13px] font-bold tracking-tight drop-shadow-sm">
                {title}
              </span>
            </div>

            <div className="flex items-center gap-1 z-10">
              <button 
                onClick={(e) => { e.stopPropagation(); onMinimize(); }}
                className="w-7 h-6 glossy-button bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center text-white"
              >
                <Minus size={14} />
              </button>
              <button className="w-7 h-6 glossy-button bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center text-white">
                <Square size={10} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="w-10 h-6 bg-gradient-to-b from-[#f87171] to-[#b91c1c] border border-[#7f1d1d] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] rounded-sm flex items-center justify-center text-white hover:brightness-110 active:brightness-90"
              >
                <X size={16} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="flex-grow overflow-hidden flex flex-col">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
