import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // This line is crucial for all styles to work
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Udyam Admin Portal",
  description: "Crowd-sourced civic issue reporting and resolution system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Renders the navigation bar at the top */}
        <Navbar />

        {/* Creates a styled main content area for your pages */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}