import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Projects Dashboard",
  description: "Assessment dashboard shell for student project mentoring"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
