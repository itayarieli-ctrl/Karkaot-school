type Props = {
  variant?: "dark" | "light";
  className?: string;
};

// Inline SVG approximation of the ish adama logo.
// Replace by uploading /public/logo.svg via GitHub web UI when the real
// asset is available — the <IshAdamaLogo> component will then swap to
// rendering that file.
export default function IshAdamaLogo({ variant = "dark", className }: Props) {
  const color = variant === "dark" ? "#4A3E36" : "#FCFBF7";
  return (
    <div className={className} aria-label="איש אדמה — קרקעות בהשקעה בטוחה">
      <svg
        viewBox="0 0 200 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        {/* horizontal ground line + single-line silhouette */}
        <path
          d="M5 48 H60 V40 a4 4 0 0 1 4 -4 a6 12 0 0 1 6 -18 a6 12 0 0 1 6 18 a4 4 0 0 1 4 4 V48 H100 V32 a2 2 0 0 1 2 -2 V20 a2 2 0 0 1 2 -2 a2 2 0 0 1 2 2 V30 a2 2 0 0 1 2 2 L130 14 L150 32 a2 2 0 0 1 2 2 V48 H195"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* underline */}
        <line
          x1="5"
          y1="55"
          x2="195"
          y2="55"
          stroke={color}
          strokeWidth="1.5"
        />
        {/* wordmark — text fallback until real font/asset arrives */}
        <text
          x="100"
          y="85"
          textAnchor="middle"
          fontFamily="Arimo, system-ui, sans-serif"
          fontWeight="700"
          fontSize="26"
          fill={color}
          direction="rtl"
        >
          איש אדמה
        </text>
        {/* sub-line decorative */}
        <line
          x1="55"
          y1="98"
          x2="145"
          y2="98"
          stroke={color}
          strokeWidth="0.8"
        />
        <text
          x="100"
          y="107"
          textAnchor="middle"
          fontFamily="Arimo, system-ui, sans-serif"
          fontWeight="400"
          fontSize="7"
          fill={color}
          direction="rtl"
        >
          קרקעות בהשקעה בטוחה
        </text>
      </svg>
    </div>
  );
}
