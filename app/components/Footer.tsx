import { FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black py-8">
            <div className="container mx-auto px-6 text-center text-white">
                {/* Links Section */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="http://www.youtube.com/@uAlbertaRobotics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-600 transition duration-300"
                        aria-label="YouTube"
                    >
                        <FaYoutube size={28} />
                    </a>
                    <a
                        href="https://github.com/ualbertarobotics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-700 transition duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://www.instagram.com/ualbertarobotics/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={28} />
                    </a>
                </div>

                {/* Text Section */}
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} University of Alberta Robotics Association.
                    All rights reserved :)
                </p>
            </div>
        </footer>
    );
}
