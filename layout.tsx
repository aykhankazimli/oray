import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORAY Education",
  description: "Buraxılış imtahanı, SAT və İngilis dili hazırlığı",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
