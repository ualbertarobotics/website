import Image from "next/image";

export default function Page() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full min-h-[80vh] flex items-center justify-center">
                {/* Full-screen background image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/assets/Icon6.png" // Replace with your image path
                        alt="Full Screen Background"
                        layout="fill" // Ensures the image covers the container
                        objectFit="cover" // Ensures the image scales properly
                        className="fullscreen-image"
                        priority // Optimizes for initial load
                    />
                </div>

                {/* Overlay content */}
                <div className="relative z-10 text-center text-white bg-black/50 p-6 rounded-lg">
                    <h1 className="text-5xl font-bold">Welcome to UARA</h1>
                    <p className="mt-4 text-xl">
                        Innovating the future of robotics at the University of Alberta
                    </p>
                    <button className="mt-6 bg-amber-950 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-900">
                        Learn More
                    </button>
                </div>
            </section>

            {/* About Us Section */}
            <section className="bg-gray-950 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
                    <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </section>

            {/* Current Project Section */}
            <section className="bg-black py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Project Image */}
                        <div className="relative w-full h-64 md:h-96">
                            <Image
                                src="/assets/Icon6.png"
                                alt="Current Project"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        {/* Project Details */}
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Our Current Project
                            </h2>
                            <p className="text-lg text-white leading-relaxed mb-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 bg-amber-950 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-900"
                            >
                                Learn More About Our Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-8">
                <div className="container mx-auto px-6 text-center text-white">
                    <p>&copy; {new Date().getFullYear()} University of Alberta Robotics Association. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
