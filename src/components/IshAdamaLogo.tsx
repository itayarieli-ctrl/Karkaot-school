import Image from "next/image";

type Props = {
  variant?: "dark" | "light";
  className?: string;
};

// Real ish adama logo assets (extracted from the brand master file).
// - "dark"  → header line-art mark (brown, transparent) for light backgrounds
// - "light" → footer boxed wordmark (white-on-taupe) for dark backgrounds
export default function IshAdamaLogo({ variant = "dark", className }: Props) {
  if (variant === "light") {
    return (
      <Image
        src="/logo/footer-logo.png"
        alt="איש אדמה — קרקעות בהשקעה בטוחה"
        width={1100}
        height={696}
        className={className}
        style={{ width: "auto", height: "100%", objectFit: "contain" }}
      />
    );
  }
  return (
    <Image
      src="/logo/header-mark.png"
      alt="איש אדמה"
      width={1200}
      height={432}
      priority
      className={className}
      style={{ width: "auto", height: "100%", objectFit: "contain" }}
    />
  );
}
