import React from "react";

const Landing: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto flex flex-col items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to My Website
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                    I help businesses build modern, responsive websites using Tailwind CSS
                    and TypeScript.
                </p>
                <div className="flex gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                        Get Started
                    </button>
                    <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg font-medium transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Landing;
