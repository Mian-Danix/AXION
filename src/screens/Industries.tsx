import React from "react";
import { FaStore, FaIndustry, FaHeartbeat, FaMicrochip } from "react-icons/fa";

const Industries: React.FC = () => {
    const industries = [
        {
            title: "Retail & E-commerce",
            desc: "Streamline your fulfillment process, reduce delivery times, and improve customer satisfaction.",
            icon: <FaStore size={20} />,
            active: false,
        },
        {
            title: "Manufacturing",
            desc: "Optimize your supply chain, from raw materials to finished goods, with efficient transportation and services.",
            icon: <FaIndustry size={20} />,
            active: true,
        },
        {
            title: "Healthcare & Pharmacy",
            desc: "Ensure the safe, timely delivery of temperature-sensitive products and critical shipments.",
            icon: <FaHeartbeat size={20} />,
            active: false,
        },
        {
            title: "Technology & Electronics",
            desc: "Handle high-value, sensitive products with care, ensuring fast, secure delivery across global markets.",
            icon: <FaMicrochip size={20} />,
            active: false,
        },
    ];

    return (
        <section className="px-10 py-16 bg-gray-50">

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-10">
                <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                        /Industries We Serve
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 max-w-lg">
                        Tailored Logistics for Every Business
                    </h2>
                </div>
                <div className="max-w-md text-gray-600 text-sm leading-relaxed">
                    At /AXION, we understand that every industry has unique logistics
                    challenges. That’s why we offer customized solutions for a wide range
                    of sectors.
                    <div className="flex items-center gap-4 mt-4">
                        <button className="p-2 border rounded-full hover:bg-black hover:text-white transition">
                            ←
                        </button>
                        <button className="p-2 border rounded-full hover:bg-black hover:text-white transition">
                            →
                        </button>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, i) => (
                    <div
                        key={i}
                        className={`rounded-2xl p-8 shadow-sm transition-all duration-300 ${industry.active
                            ? "bg-gray-900 text-white"
                            : "bg-white hover:shadow-md"
                            }`}
                    >
                        <div
                            className={`w-10 h-10 flex items-center justify-center rounded-full mb-4 ${industry.active ? "bg-white text-black" : "bg-gray-100"
                                }`}
                        >
                            {industry.icon}
                        </div>
                        <h3
                            className={`text-lg font-semibold mb-2 ${industry.active ? "text-white" : "text-gray-900"
                                }`}
                        >
                            {industry.title}
                        </h3>
                        <p
                            className={`text-sm leading-relaxed ${industry.active ? "text-gray-300" : "text-gray-600"
                                }`}
                        >
                            {industry.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Industries;
