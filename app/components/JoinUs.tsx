import { motion } from "framer-motion";

export default function JoinUsSection() {
    return (
        <section id="students" className="bg-black py-16">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true, amount: 0.2}} // Ensures the animation plays when in view
                >
                    <h2 className="text-4xl font-bold text-white text-center mb-6">Join Us</h2>
                    <p className="text-lg text-white leading-relaxed text-center max-w-3xl mx-auto mb-8">
                        Are you a student passionate about robotics and innovation? Join our community
                        to gain hands-on experience and work on exciting projects!
                    </p>
                    <div className="text-center">
                        <a href="https://discord.gg/hTksjuVhJ2">
                            <button
                                className="border-2 border-theme1 text-theme2 px-10 py-2 rounded-xl font-medium hover:bg-amber-900">
                                Join Us
                            </button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}