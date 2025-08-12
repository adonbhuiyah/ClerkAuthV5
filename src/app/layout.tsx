import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // works with variable fonts
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: "ClerkAuthV5",
  description: "ClerkAuthV5 -- AdonBhuiyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ theme: dark }}>
      <html lang="en" className="hydrated">
        <body className={inter.className}>
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <div className="mx-auto max-w-6xl">
              <Navbar />
              <div className="flex h-screen flex-col">{children}</div>
            </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
