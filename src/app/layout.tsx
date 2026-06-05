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
  title: "לימודי קרקעות | איש אדמה — קורס וייעוץ להשקעות בקרקע בישראל",
  description:
    "קורס מוקלט בגישה חופשית, קורס פרונטלי אישי, וייעוץ מקצועי לעסקאות קרקע קונקרטיות. מאלעד אדליס מנצור, מייסד איש אדמה.",
  openGraph: {
    title: "לימודי קרקעות | איש אדמה",
    description:
      "קורס וייעוץ להשקעות בקרקע בישראל — מאלעד אדליס מנצור.",
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
