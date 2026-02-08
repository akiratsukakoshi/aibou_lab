import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Sawarabi_Mincho } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto" });
const mincho = Sawarabi_Mincho({ weight: "400", subsets: ["latin"], variable: "--font-mincho" });

export const metadata: Metadata = {
    title: "AIBOU LAB",
    description: "Co-existing with AI agents for Micro-Businesses",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${noto.variable} ${mincho.variable} font-sans antialiased bg-washi text-sumi`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
