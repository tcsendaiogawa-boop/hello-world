"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    const raf = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      requestAnimationFrame(raf);
    };

    const addHover = () => document.body.classList.add("hovering");
    const removeHover = () => document.body.classList.remove("hovering");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });
    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        id="cursor-dot"
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height,background-color] duration-300"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        className="fixed top-0 left-0 w-[38px] h-[38px] border border-[rgba(0,209,255,0.35)] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-300"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />
    </>
  );
}
