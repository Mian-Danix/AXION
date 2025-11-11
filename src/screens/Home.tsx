import React from "react";

const Home: React.FC = () => {
    const solutions = [

        {
            title: "International Shipping",
            desc: "We manage global shipping from origin to destination, providing both air and sea freight options to suit your timeline and budget.",
            img: "/c1.jpeg",
        },
        {
            title: "Warehousing & Distribution",
            desc: "Our strategically located warehouses ensure fast, secure storage and distribution of your products. With flexible storage options.",
            img: "/c2.png",
        },
        {
            title: "Last-Mile Delivery",
            desc: "Our reliable last-mile delivery service ensures that your products reach the final destination efficiently, providing tracking and real-time updates.",
            img: "/c3.jpg",
        },
        {
            title: "Supply Chain Optimization",
            desc: "Our expert team analyzes and improves your supply chain, reducing costs, minimizing delays, and maximizing efficiency.",
            img: "/c4.jpeg",
        },
        {
            title: "Customs Clearance",
            desc: "We navigate the complexities of customs regulations, ensuring your shipments clear smoothly and without unnecessary delays.",
            img: "/c5.jpeg",
        },
    ];

    return (
        <section className="px-10 py-16 bg-white">

            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Logistics Solutions</h2>
                <button className="px-5 py-2 rounded-full border text-sm font-medium hover:bg-black hover:text-white transition">
                    See All
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {solutions.map((item, i) => (
                    <div
                        key={i}
                        className="relative rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 p-5 text-white">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm mt-2 text-gray-200">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Home;
