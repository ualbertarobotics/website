import { motion } from "framer-motion";
import React, { useState } from "react";

export default function JoinUsSection() {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleJoinClick = async () => {
        try {
            const response = await fetch("https://ipapi.co/json/");
            const data = await response.json();

            if (data.city === "Edmonton") {
                window.location.href = "https://discord.gg/hTksjuVhJ2";
            } else {
                setModalMessage(
                    "Unfortunately, you appear to be from outside of our local area. If you are connected to a VPN, please disconnect to continue. If this is a mistake, email us at ualbertarobotics@gmail.com."
                );
                setShowModal(true);
            }
        } catch (error) {
            console.error("Error fetching location data:", error);
            setModalMessage(
                "There was an error checking your location. Please try again later or email us at ualbertarobotics@gmail.com."
            );
            setShowModal(true);
        }
    };

    return (
        <section id="students" className="bg-black py-16">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-4xl font-bold text-white text-center mb-6">Join Us</h2>
                    <p className="text-lg text-white leading-relaxed text-center max-w-3xl mx-auto mb-8">
                        Are you a student passionate about robotics and innovation? Join our community
                        to gain hands-on experience and work on exciting projects!
                    </p>
                    <div className="text-center">
                        <button
                            onClick={handleJoinClick}
                            className="border-2 border-theme1 text-theme2 px-10 py-2 rounded-xl font-medium hover:bg-amber-900"
                        >
                            Join Us
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-dark p-6 rounded-lg shadow-lg max-w-md text-center border-amber-500 border-2">
                        <p className="text-white mb-4">{modalMessage}</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
