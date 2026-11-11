import React, { useRef, useState, useEffect } from 'react';
import { Footprints, MessageSquare, Stethoscope, FileText, Map, Sparkles } from 'lucide-react';
import { InteractiveHotspot } from './hospitalWorld';

interface VirtualJoystickProps {
  onMove: (input: { x: number; y: number; active: boolean }) => void;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  onInteract: () => void;
  onExamine: () => void;
  onOpenEMR: () => void;
  onOpenMap: () => void;
  activeHotspot: InteractiveHotspot | null;
}

export const VirtualJoystick: React.FC<VirtualJoystickProps> = ({
  onMove,
  isRunning,
  setIsRunning,
  onInteract,
  onExamine,
  onOpenEMR,
  onOpenMap,
  activeHotspot,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [knobPos, setKnobPos] = useState({ x: 0, y: 0 });
  const [isHolding, setIsHolding] = useState(false);
  const touchIdRef = useRef<number | null>(null);

  const radius = 50; // max knob travel in pixels

  const handleTouchStart = (e: React.TouchEvent) => {
    if (touchIdRef.current !== null) return;
    const touch = e.changedTouches[0];
    touchIdRef.current = touch.identifier;
    setIsHolding(true);
    updateKnob(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchIdRef.current === null) return;
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === touchIdRef.current) {
        updateKnob(touch.clientX, touch.clientY);
        break;
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchIdRef.current === null) return;
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === touchIdRef.current) {
        touchIdRef.current = null;
        setIsHolding(false);
        setKnobPos({ x: 0, y: 0 });
        onMove({ x: 0, y: 0, active: false });
        break;
      }
    }
  };

  const updateKnob = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const distance = Math.hypot(dx, dy);

    const clampedDist = Math.min(distance, radius);
    const angle = Math.atan2(dy, dx);

    const posX = Math.cos(angle) * clampedDist;
    const posY = Math.sin(angle) * clampedDist;

    setKnobPos({ x: posX, y: posY });

    // Normalized outputs between -1 and 1
    const normX = posX / radius;
    const normY = posY / radius;

    onMove({ x: normX, y: normY, active: true });
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end p-4 md:p-6 overflow-hidden select-none">
      <div className="flex items-end justify-between w-full">
        {/* Virtual Joystick (Lower-Left) */}
        <div className="pointer-events-auto relative flex flex-col items-center">
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            className="w-32 h-32 rounded-full bg-slate-900/60 backdrop-blur-md border-2 border-sky-400/40 shadow-2xl flex items-center justify-center relative touch-none cursor-pointer"
          >
            {/* Guide Rings */}
            <div className="w-20 h-20 rounded-full border border-sky-300/20 pointer-events-none" />
            <div className="w-10 h-10 rounded-full border border-sky-300/30 pointer-events-none" />

            {/* Joystick Thumb Knob */}
            <div
              style={{
                transform: `translate(${knobPos.x}px, ${knobPos.y}px)`,
                transition: isHolding ? 'none' : 'transform 0.15s ease-out',
              }}
              className="absolute w-14 h-14 rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 border-2 border-white/80 shadow-lg flex items-center justify-center text-white"
            >
              <div className="w-4 h-4 rounded-full bg-white/40" />
            </div>
          </div>
          <span className="text-[10px] font-bold text-sky-300/80 mt-1 uppercase tracking-wider">
            JOYSTICK KONTROL
          </span>
        </div>

        {/* Action Buttons Cluster (Lower-Right) */}
        <div className="pointer-events-auto flex flex-col items-end gap-2.5">
          {/* Quick Actions Row */}
          <div className="flex items-center gap-2">
            {/* Toggle Run / Sprint */}
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`p-3 rounded-2xl flex items-center gap-1.5 shadow-lg border transition-all active:scale-90 ${
                isRunning
                  ? 'bg-amber-500 text-white border-amber-300 ring-2 ring-amber-400/40'
                  : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title="Lari Cepat (Shift)"
            >
              <Footprints className="w-5 h-5" />
              <span className="text-xs font-bold">{isRunning ? 'LARI ON' : 'JALAN'}</span>
            </button>

            {/* Open EMR Records */}
            <button
              onClick={onOpenEMR}
              className="p-3 bg-slate-900/80 text-sky-400 border border-slate-700/80 rounded-2xl shadow-lg hover:text-white active:scale-90 flex items-center gap-1.5"
              title="Buka Rekam Medis"
            >
              <FileText className="w-5 h-5" />
              <span className="text-xs font-bold hidden sm:inline">REKAM MEDIS</span>
            </button>

            {/* Open Hospital Map */}
            <button
              onClick={onOpenMap}
              className="p-3 bg-slate-900/80 text-teal-400 border border-slate-700/80 rounded-2xl shadow-lg hover:text-white active:scale-90 flex items-center gap-1.5"
              title="Peta Rumah Sakit"
            >
              <Map className="w-5 h-5" />
              <span className="text-xs font-bold hidden sm:inline">PETA RS</span>
            </button>
          </div>

          {/* Primary Action Button (Interact / Talk / Examine) */}
          <div className="flex items-center gap-2">
            {/* Examine Button */}
            <button
              onClick={onExamine}
              className="px-4 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-teal-300 border border-teal-500/40 rounded-2xl shadow-xl flex items-center gap-2 active:scale-95 transition-transform"
            >
              <Stethoscope className="w-5 h-5 text-teal-400" />
              <span className="text-xs font-bold">PERIKSA FISIK</span>
            </button>

            {/* Main Primary Interact Button [E] */}
            <button
              onClick={onInteract}
              className={`px-5 py-4 rounded-2xl flex items-center gap-2.5 shadow-2xl transition-all active:scale-95 border-2 ${
                activeHotspot
                  ? 'bg-gradient-to-r from-sky-500 via-sky-600 to-teal-500 text-white border-white ring-4 ring-sky-400/40 animate-pulse'
                  : 'bg-slate-900/90 text-slate-400 border-slate-700 hover:text-white'
              }`}
            >
              <MessageSquare className="w-6 h-6 text-white" />
              <div className="text-left">
                <div className="text-[10px] font-bold text-sky-200 uppercase tracking-wider">
                  {activeHotspot ? 'BERDEKATAN' : 'TOMBOL AKSI'}
                </div>
                <div className="text-sm font-black">
                  {activeHotspot ? activeHotspot.promptAction : 'INTERAKSI [E]'}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
