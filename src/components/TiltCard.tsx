import { useRef, useState, type ReactNode, type MouseEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

export default function TiltCard({ children, className = "", maxTilt = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`,
    });
    setGlow({ x: px * 100, y: py * 100, active: true });
  };

  const handleLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)",
      transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
    });
    setGlow((g) => ({ ...g, active: false }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ ...style, transformStyle: "preserve-3d", willChange: "transform" }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-sm transition-opacity duration-300"
        style={{
          opacity: glow.active ? 1 : 0,
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(245,158,11,0.14), transparent 55%)`,
        }}
      />
      {children}
    </div>
  );
}
