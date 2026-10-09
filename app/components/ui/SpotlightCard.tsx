"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointer(event: MouseEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
    element.style.setProperty("--rotate-x", `${((event.clientY - rect.top) / rect.height - 0.5) * -3}deg`);
    element.style.setProperty("--rotate-y", `${((event.clientX - rect.left) / rect.width - 0.5) * 3}deg`);
  }

  function resetTilt() {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--rotate-x", "0deg");
    element.style.setProperty("--rotate-y", "0deg");
  }

  return (
    <div ref={ref} onMouseMove={handlePointer} onMouseLeave={resetTilt} className={`spotlight-card ${className}`}>
      {children}
    </div>
  );
}
