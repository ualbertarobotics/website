"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import NeonAnimation from "@/app/NeonAnimation";
import Projects from "@/app/Projects";

export default function Page() {
    return (
        <>
            {/* Header */}
            <header className="z-50 bg-dark text-white shadow-md">
                <div className="py-3 text-white">
                    <div className="container mx-auto px-5 lg:px-10">
                        <div className="flex items-center justify-between">
                            <Link href="/">
                                <Image
                                    src="/assets/Logo.svg"
                                    alt="UARA"
                                    height={40}
                                    width={140}
                                />
                            </Link>
                            <FaBars className="h-5 w-5 md:hidden"/>
                            <nav className="hidden md:flex gap-6 items-center">
                                <a href="#about" className="font-medium">About Us</a>
                                <a href="#teams" className="font-medium">Projects & Teams</a>
                                <a href="#students" className="font-medium">Join Us</a>
                                {/*<a href="#sponsors" className="font-medium">Sponsors</a>*/}
                                <a href="mailto:ualbertarobotics@gmail.com">
                                    <button
                                        className="border-2 border-theme1 text-theme2 px-2 py-1 rounded-xl font-medium">
                                        Support Us
                                    </button>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* Neon Animation Section */}
            <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-black">
                <NeonAnimation/>
            </section>

            {/* About Us Section */}
            <section id="about" className="bg-black py-16 pb-44 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* About Us Image */}
                        <motion.div
                            className="relative w-full h-64 md:h-96"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Image
                                src="/assets/tempabout.png"
                                alt="About Us"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                        {/* About Us Details */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <h2 className="text-5xl font-bold text-white mb-6">
                                Making robotics more accessible, one project at a time
                            </h2>
                            <p className="text-lg text-white leading-relaxed mb-4">
                                The University of Alberta Robotics Association (UARA) is a passionate community of
                                students dedicated to learning, innovating, and building impactful robotic systems.
                                Our mission is to empower the next generation of engineers and innovators through
                                hands-on projects and collaboration.
                            </p>
                            {/*<a
                                href="#projects"
                                className="inline-block mt-4 bg-[#c99529] text-white px-6 py-3 rounded-md font-medium hover:bg-[#956f1e] transition duration-300"
                            >
                                Learn More About Our Teams
                            </a>*/}
                        </motion.div>
                    </div>
                </div>
                {/* Purple Glow */}
                <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-theme1/50 to-transparent animate-pulse-slow"></div>
            </section>

            <Projects/>

            {/* Join Us Section */}
            <section id="students" className="bg-black py-16" >
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h2 className="text-4xl font-bold text-white text-center mb-6">
                            Join Us
                        </h2>
                        <p className="text-lg text-white leading-relaxed text-center max-w-3xl mx-auto mb-8">
                            Are you a student passionate about robotics and innovation? Join our community
                            to gain hands-on experience and work on exciting projects!
                        </p>
                        <div className="text-center">
                            <a href="https://discord.gg/hTksjuVhJ2">
                                <button
                                    className="border-2 border-theme1 text-theme2 px-10 py-2 rounded-xl font-medium hover:bg-amber-900 ">
                                    Join Us
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sponsors Section
            <section id="sponsors" className="bg-black py-16" >
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h2 className="text-4xl font-bold text-white text-center mb-6">
                            Our Sponsors
                        </h2>
                        <p className="text-lg text-white leading-relaxed text-center max-w-3xl mx-auto mb-8">
                            We are grateful to our sponsors for supporting innovation and education. Partner
                            with us to make an impact.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4"].map((sponsor, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#231f20] p-6 rounded-lg shadow-lg text-white"
                                    whileHover={{scale: 1.05}}
                                    transition={{duration: 0.3}}
                                >
                                    <h3 className="text-lg font-bold">{sponsor}</h3>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <a
                                href="#"
                                className="bg-amber-950 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-900 transition duration-300"
                            >
                                Become a Sponsor
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>*/}

            {/* Footer */}
            <footer className="bg-black py-8">
                <div className="container mx-auto px-6 text-center text-white">
                    <p>
                        &copy; {new Date().getFullYear()} University of Alberta Robotics Association.
                        All rights reserved :)
                    </p>
                </div>
            </footer>
        </>
    );
}
