import type { Metadata } from "next";
import { Inter, Playwrite_DE_LA } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playwrite = Playwrite_DE_LA({ variable: "--font-playwrite" });

export const metadata: Metadata = {
  title: "Ahmad Syah Ramadhan — Product & Technology",
  description:
    "Portfolio of Ahmad Syah Ramadhan — Product Manager, Software Engineer, and Technology Innovator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.className} ${playwrite.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
