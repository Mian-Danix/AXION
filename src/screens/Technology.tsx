import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Technology: React.FC = () => {
    const features = [
        {
            title: "Real-Time Tracking",
            desc: "Stay up-to-date with your shipments from pick-up to delivery.",
        },
        {
            title: "Data Analytics",
            desc: "Gain insights into your supply chain, identify bottlenecks, and make data-driven decisions.",
        },
        {
            title: "Automated Updates",
            desc: "Receive timely notifications about your shipments, including expected delivery times and delays.",
        },
        {
            title: "Secure Portal",
            desc: "Access your account anytime with our secure online portal for booking, managing, and tracking shipments.",
        },
    ];

    return (
        <section className="px-10 py-16 bg-gray-50">
            <div className="flex flex-col lg:flex-row justify-between gap-12">


                <div className="max-w-lg">
                    <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                        /Technology
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                        Innovation that Moves Your Business
                    </h2>
                    <img
                        src="/c6.jpeg"
                        alt="Container"
                        className="rounded-2xl w-full h-[420px] object-cover shadow-md"
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                        We leverage the latest technology to improve the way we manage your
                        shipments.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                        {features.map((feature, i) => (
                            <div key={i}>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
                                <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition">
                                    Learn More <HiArrowNarrowRight size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
