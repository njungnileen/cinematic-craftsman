import { useEffect, useRef } from "react";

export function GrainBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        el.style.setProperty("--px", `${x}px`);
        el.style.setProperty("--py", `${y}px`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        style={{ transform: "translate(var(--px,0), var(--py,0))", transition: "transform 0.6s ease-out" }}
      >
        <div
          className="blob animate-float-slow"
          style={{
            width: 700,
            height: 700,
            top: "-10%",
            left: "-10%",
            background: "radial-gradient(circle, rgba(201,162,39,0.35), transparent 60%)",
          }}
        />
        <div
          className="blob animate-float-slow"
          style={{
            width: 600,
            height: 600,
            bottom: "-15%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(120,90,200,0.22), transparent 60%)",
            animationDelay: "-6s",
          }}
        />
        <div
          className="blob animate-float-slow"
          style={{
            width: 500,
            height: 500,
            top: "40%",
            left: "45%",
            background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent 60%)",
            animationDelay: "-12s",
          }}
        />
      </div>
      <div aria-hidden className="grain-overlay" />
    </>
  );
}