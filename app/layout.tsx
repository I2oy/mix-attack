import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MixAttack",
  description: "Randomize Lists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*Adding background color here instead of main so scrolling past limit won't show white*/}
      <body className={cn(inter.className, "bg-neutral-900")}>{children}</body>
    </html>
  );
}
