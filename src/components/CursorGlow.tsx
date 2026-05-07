"use client";

import { useEffect, useRef } from "react";

// ============================================================
// Cursor Glow Effect
// Follows mouse with a soft radial gradient glow
// ============================================================

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Only show on non-touch devices
    const isTouchDevice = "ontouchstart" in window;
    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" />;
}
