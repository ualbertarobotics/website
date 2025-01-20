import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
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
                            The University of Alberta Robotics Association (UARA) is a passionate
                            community of students dedicated to learning, innovating, and building
                            impactful robotic systems. Our mission is to empower the next generation of
                            engineers and innovators through hands-on projects and collaboration.
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* Purple Glow */}
            <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-theme1/50 to-transparent animate-pulse-slow"></div>
        </section>
    );
}