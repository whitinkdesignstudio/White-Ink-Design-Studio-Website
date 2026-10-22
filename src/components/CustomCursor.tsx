"use client";

import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  time: number;
  width: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  color: string;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const penRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // References for animation state
  const mousePos = useRef({ x: -100, y: -100 });
  const lastMousePos = useRef({ x: -100, y: -100 });
  const points = useRef<Point[]>([]);
  const particles = useRef<Particle[]>([]);
  const animFrameId = useRef<number | null>(null);
  const lastMoveTime = useRef<number>(0);

  useEffect(() => {
    // Detect touch-only devices
    if (typeof window !== "undefined") {
      const hasTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      if (hasTouch && !window.matchMedia("(pointer: fine)").matches) {
        setIsTouch(true);
        return;
      }
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    const resizeCanvas = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (!isVisible) setIsVisible(true);

      const dx = x - lastMousePos.current.x;
      const dy = y - lastMousePos.current.y;
      const dist = Math.hypot(dx, dy);

      mousePos.current = { x, y };
      const now = performance.now();
      lastMoveTime.current = now;

      // Update pen DOM position directly for zero lag
      if (penRef.current) {
        penRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Add trail point if moved
      if (dist > 1.5 || points.current.length === 0) {
        // Dynamic ribbon thickness: expands slightly when moving faster
        const speed = Math.min(dist / 4, 3);
        const width = Math.max(3, Math.min(6.5, 3.5 + speed));

        points.current.unshift({
          x,
          y,
          time: now,
          width,
        });

        // Medium tail length: keep at most 18 points (~320-380ms lifespan)
        if (points.current.length > 18) {
          points.current.pop();
        }

        // Emit golden water droplets / golden dots
        const goldColors = [
          "#FDE08A", // Bright golden sunlight
          "#EAB308", // Vivid gold
          "#D4AF37", // Metallic royal gold
          "#CA8A04", // Deep ochre gold
          "#FFFFFF", // Shimmering ink reflection
        ];

        // Emit 1-2 droplets per significant movement
        const count = dist > 8 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          const angle = Math.atan2(dy, dx) + Math.PI + (Math.random() - 0.5) * 0.9;
          const pSpeed = Math.random() * 1.8 + 0.4;
          const maxLife = Math.random() * 20 + 22; // ~350ms-500ms life
          particles.current.push({
            x: x + (Math.random() - 0.5) * 3,
            y: y + (Math.random() - 0.5) * 3,
            vx: Math.cos(angle) * pSpeed,
            vy: Math.sin(angle) * pSpeed + 0.15, // slight downward fluid gravity
            size: Math.random() * 2.8 + 1.2,
            alpha: 1,
            life: maxLife,
            maxLife,
            color: goldColors[Math.floor(Math.random() * goldColors.length)],
          });
        }

        lastMousePos.current = { x, y };
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      points.current = [];
    };

    const handleMouseEnter = () => setIsVisible(true);

    // Detect clickable element hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Canvas animation loop
    let frameCount = 0;
    const render = () => {
      frameCount++;
      const now = performance.now();

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 1. Expire old points for smooth tail contraction
      const maxAge = 360; // Milliseconds lifetime for medium tail length
      while (
        points.current.length > 0 &&
        now - points.current[points.current.length - 1].time > maxAge
      ) {
        points.current.pop();
      }

      // 2. Draw Golden Water Ribbon (Fluid Golden Tail Stream)
      const pts = points.current;
      if (pts.length > 2) {
        // We draw the liquid ribbon as two undulating fluid outlines or a flowing tapered stroke
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Outer warm ambient golden water glow
        ctx.shadowColor = "#D4AF37";
        ctx.shadowBlur = 10;

        for (let i = 0; i < pts.length - 1; i++) {
          const p1 = pts[i];
          const p2 = pts[i + 1];

          // Compute age factor (0 at head, 1 at tail end)
          const ratio = i / (pts.length - 1);
          const alpha = (1 - ratio) * 0.75;
          const width = p1.width * (1 - ratio * 0.85);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          // Curve through midpoint for fluid smoothness
          const mx = (p1.x + p2.x) / 2;
          const my = (p1.y + p2.y) / 2;
          ctx.quadraticCurveTo(p1.x, p1.y, mx, my);

          // Golden fluid gradient from rich amber-gold to soft champagne
          ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
          ctx.lineWidth = Math.max(0.8, width);
          ctx.stroke();

          // Inner brighter golden highlight core
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.quadraticCurveTo(p1.x, p1.y, mx, my);
          ctx.strokeStyle = `rgba(255, 243, 196, ${alpha * 0.9})`;
          ctx.lineWidth = Math.max(0.5, width * 0.42);
          ctx.stroke();
        }

        ctx.restore();
      }

      // 3. Draw Golden Dots / Water Droplets
      if (particles.current.length > 0) {
        ctx.save();
        for (let i = particles.current.length - 1; i >= 0; i--) {
          const p = particles.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.94; // fluid resistance
          p.vy *= 0.94;
          p.life--;
          p.alpha = Math.max(0, p.life / p.maxLife);

          if (p.life <= 0) {
            particles.current.splice(i, 1);
            continue;
          }

          // Draw glistening golden droplet
          const currentRadius = p.size * (0.4 + 0.6 * p.alpha);

          // Outer glowing golden halo
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * 0.85;
          ctx.fill();

          // Inner sparkling specular center dot
          if (currentRadius > 1.2) {
            ctx.beginPath();
            ctx.arc(
              p.x - currentRadius * 0.25,
              p.y - currentRadius * 0.25,
              currentRadius * 0.35,
              0,
              Math.PI * 2
            );
            ctx.fillStyle = "#FFFFFF";
            ctx.globalAlpha = p.alpha * 0.9;
            ctx.fill();
          }
        }
        ctx.restore();
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <>
      {/* Golden Water & Dots Fluid Canvas Tail */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[999998] transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Fountain Ink Pen Tip Cursor */}
      <div
        ref={penRef}
        className="pointer-events-none fixed top-0 left-0 z-[999999] transition-opacity duration-200 select-none will-change-transform"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Pen Container: Tip is anchored exactly at (0, 0) */}
        <div
          className={`relative transition-transform duration-150 ease-out origin-top-left ${
            isClicking
              ? "scale-90 rotate-[-4deg]"
              : isHovered
              ? "scale-110 rotate-[-2deg]"
              : "scale-100 rotate-0"
          }`}
          style={{
            transformOrigin: "0px 0px",
          }}
        >
          {/* Subtle Golden Glow aura around Pen Tip */}
          <div
            className={`absolute -top-3 -left-3 w-8 h-8 rounded-full pointer-events-none transition-all duration-300 ${
              isHovered
                ? "bg-[#D4AF37]/35 blur-md scale-125"
                : "bg-[#B88746]/20 blur-sm scale-100"
            }`}
          />

          {/* SVG Fountain Ink Pen:
              The very fine tip of the nib is positioned precisely at (0, 0),
              with the metallic golden nib and pen barrel angling down-right at ~45°.
          */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_7px_rgba(184,135,70,0.45)]"
          >
            <defs>
              {/* Luxury Gold Polish Gradient for Nib */}
              <linearGradient id="goldNibGradient" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF8E7" />
                <stop offset="25%" stopColor="#E5B25D" />
                <stop offset="55%" stopColor="#C59A58" />
                <stop offset="85%" stopColor="#9E7234" />
                <stop offset="100%" stopColor="#6E4D1B" />
              </linearGradient>

              {/* Obsidian Black & Dark Metal Inlay for Grip Body */}
              <linearGradient id="penBodyGradient" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2A2A2A" />
                <stop offset="50%" stopColor="#141414" />
                <stop offset="100%" stopColor="#0A0A0A" />
              </linearGradient>

              {/* Pure Gold Accent Trim */}
              <linearGradient id="goldTrim" x1="8" y1="12" x2="16" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFEFB8" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#AA7C11" />
              </linearGradient>
            </defs>

            {/* Pen Barrel / Upper Grip Section */}
            <path
              d="M14 18 L25 29 C26 30 27.5 30 28.5 29 L29 28.5 C30 27.5 30 26 29 25 L18 14 Z"
              fill="url(#penBodyGradient)"
              stroke="#B88746"
              strokeWidth="0.75"
            />

            {/* Gold Ring Collar Band */}
            <path
              d="M12.5 16.5 L16.5 12.5 L18 14 L14 18 Z"
              fill="url(#goldTrim)"
            />

            {/* Fountain Pen Gold Nib Section:
                Tip touches (0, 0) perfectly for micro-precise pointer clicking.
            */}
            <path
              d="M0 0
                 C 2.2 4.5, 4.5 8, 8 11.5
                 L 13.5 15.5
                 L 15.5 13.5
                 L 11.5 8
                 C 8 4.5, 4.5 2.2, 0 0 Z"
              fill="url(#goldNibGradient)"
              stroke="#D4AF37"
              strokeWidth="0.5"
            />

            {/* Engraved Nib Center Slit & Breather Hole */}
            <line
              x1="0"
              y1="0"
              x2="7.5"
              y2="7.5"
              stroke="#141414"
              strokeWidth="0.85"
              strokeLinecap="round"
            />
            <circle
              cx="7.5"
              cy="7.5"
              r="1.15"
              fill="#141414"
              stroke="#FFF8E7"
              strokeWidth="0.4"
            />

            {/* Filigree Decorative Engraving along Nib Flanks */}
            <path
              d="M3 6 C 4.5 7.5, 6 8.5, 8.5 9"
              stroke="#FFF8E7"
              strokeWidth="0.45"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M6 3 C 7.5 4.5, 8.5 6, 9 8.5"
              stroke="#FFF8E7"
              strokeWidth="0.45"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Glistening Golden Ink Droplet at the Nib Tip */}
            <circle
              cx="0.5"
              cy="0.5"
              r="1.4"
              fill="#FFE899"
              className="animate-pulse"
            />
            <circle
              cx="0.3"
              cy="0.3"
              r="0.5"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
