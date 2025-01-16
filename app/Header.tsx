import Image from "next/image";
import { FaBars } from "react-icons/fa";

export const Header = () => {
    return (
        <header className="sticky z-50 bg-black text-white shadow-md" >
            <div className="py-3 text-white bg-black">
                <div className="container">
                    <div className="flex items-center justify-between mx-5">
                        <Image
                            src="/assets/Logo.svg"
                            alt="UARA"
                            height={40}
                            width={140}
                        />
                        <FaBars className="h-5 w-5 md:hidden" /> {/* Updated icon */}
                        <nav className="hidden md:flex gap-6 items-center">
                            <a href="#" className="font-medium">Current Projects</a>
                            <a href="#" className="font-medium">About</a>
                            <a href="#" className="font-medium">Leadership</a>
                            <a href="#" className="font-medium">Students</a>
                            <button className="border-2 border-theme1 text-theme2 px-2 py-1 rounded-xl font-medium">
                                Support Us
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
