import Reveal from "@/components/Reveal";

type Props = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ kicker, title, description, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : ""}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="hazard h-1.5 w-12 rounded-full" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">
          {kicker}
        </span>
      </div>
      <h2 className="font-display mt-4 text-4xl sm:text-5xl font-extrabold uppercase leading-tight text-white">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-steel-300 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
