import type { Metadata } from "next";
import "./globals.css";
import '@next/font/google';
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
    weight: ['400', '700'], // Specify weights to include
    subsets: ['latin'], // Specify subsets
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
        <html lang="en">
            <body className="${josefinSans.className} antialiased">
                {children}
            </body>
        </html>
    );
}
