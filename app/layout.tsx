import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | LearnHub",
    default: "LearnHub — Interactive Learning Platform",
  },
  description:
    "Learn AI protocols, frameworks, and modern dev concepts with structured deep-dive tutorials.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
