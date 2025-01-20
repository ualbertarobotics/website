import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="z-50 bg-dark text-white shadow-md">
            <div className="py-3 text-white">
                <div className="container mx-auto px-5 lg:px-10">
                    {/* Desktop & Mobile Navbar Container */}
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/">
                            <Image
                                src="/assets/Logo.svg"
                                alt="UARA"
                                height={40}
                                width={140}
                            />
                        </Link>

                        {/* Hamburger Menu (visible on mobile only) */}
                        <button
                            type="button"
                            className="md:hidden block text-white"
                            onClick={toggleMenu}
                        >
                            <FaBars className="h-6 w-6" />
                        </button>

                        {/* Desktop Nav Links (hidden on mobile) */}
                        <nav className="hidden md:flex gap-6 items-center">
                            <a href="#about" className="font-medium">
                                About Us
                            </a>
                            <a href="#teams" className="font-medium">
                                Projects & Teams
                            </a>
                            <a href="#students" className="font-medium">
                                Join Us
                            </a>
                            <a href="mailto:ualbertarobotics@gmail.com">
                                <button
                                    className="border-2 border-theme1 text-theme2 px-2 py-1 rounded-xl font-medium"
                                >
                                    Support Us
                                </button>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-dark bg-opacity-95 flex flex-col justify-center items-center md:hidden">
                    {/* Close icon */}
                    <button
                        type="button"
                        className="absolute top-5 right-5 text-white"
                        onClick={toggleMenu}
                    >
                        <FaTimes className="h-6 w-6" />
                    </button>

                    {/* Mobile Nav Links */}
                    <nav className="flex flex-col gap-8 text-xl">
                        <a href="#about" onClick={toggleMenu} className="font-medium">
                            About Us
                        </a>
                        <a href="#teams" onClick={toggleMenu} className="font-medium">
                            Projects & Teams
                        </a>
                        <a href="#students" onClick={toggleMenu} className="font-medium">
                            Join Us
                        </a>
                        <a href="mailto:ualbertarobotics@gmail.com" onClick={toggleMenu}>
                            <button
                                className="border-2 border-theme1 text-theme2 px-3 py-2 rounded-xl font-medium"
                            >
                                Support Us
                            </button>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
