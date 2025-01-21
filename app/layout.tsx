import type { Metadata } from "next";
import "./globals.css";

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
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
