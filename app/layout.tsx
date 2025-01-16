import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { Header } from "./Header"; // Import the Header component
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
    variable: "--font-hind-siliguri",
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "UofA Robotics Association",
    description:
        "The University of Alberta Robotics Association is a dynamic group of innovators passionate about advancing robotics technology.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={hindSiliguri.variable}>
        <body className="antialiased font-sans">
        <Header />
        {children}
        </body>
        </html>
    );
}
