export default function Footer() {
    return (
        <footer className="bg-black py-8">
            <div className="container mx-auto px-6 text-center text-white">
                <p>
                    &copy; {new Date().getFullYear()} University of Alberta Robotics Association.
                    All rights reserved :)
                </p>
            </div>
        </footer>
    );
}