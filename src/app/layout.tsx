import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "קרקע 101 — לימוד וייעוץ להשקעות בקרקע בישראל",
  description:
    "המקום שלומדים בו על קרקעות בישראל. קורס דיגיטלי, קהילה, וייעוץ מקצועי לעסקאות קונקרטיות. בלי הבטחות, עם שקיפות מלאה.",
  openGraph: {
    title: "קרקע 101 — לימוד וייעוץ להשקעות בקרקע בישראל",
    description:
      "המקום שלומדים בו על קרקעות בישראל. קורס, קהילה, וייעוץ עסקאות.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${arimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
