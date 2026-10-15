import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Portfolio — Digital craft, built with purpose",
  description:
    "A software developer's portfolio featuring thoughtful web experiences, useful products, and experiments in progress.",
  applicationName: "Developer Portfolio",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Developer Portfolio",
    description: "Thoughtful digital products, built with purpose.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
