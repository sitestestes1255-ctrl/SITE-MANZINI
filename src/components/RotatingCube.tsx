import { site } from "@/content";

const faces = [
  "translateZ(70px)",
  "rotateY(90deg) translateZ(70px)",
  "rotateY(180deg) translateZ(70px)",
  "rotateY(-90deg) translateZ(70px)",
  "rotateX(90deg) translateZ(70px)",
  "rotateX(-90deg) translateZ(70px)",
];

export default function RotatingCube() {
  return (
    <div className="cube-scene hidden lg:block" aria-hidden="true">
      <div className="cube">
        {faces.map((transform, i) => (
          <div key={i} className="cube-face" style={{ transform }}>
            <img src={site.logoSrc} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
