"use client";

import Header from "@/app/components/Header"
import NeonAnimation from "@/app/components/NeonAnimation";
import About from "@/app/components/About"
import Projects from "@/app/components/Projects";
import JoinUs from "@/app/components/JoinUs"
import Footer from "@/app/components/Footer"


export default function Page() {
    return (
        <>
            <Header/>

            <NeonAnimation/>

            <About/>

            <Projects/>

            <JoinUs/>

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

            <Footer/>
        </>
    );
}
