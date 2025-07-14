import { constants } from "buffer";
import React from "react";
import Image from "next/image";


export default function Services() {
    const sCards = [
        { header: "Custom Websites", description: "Websites tailored to your needs" },
        { header: "Landing Pages", description: "Landing pages designed to convert visitors" },
        { header: "E-commerce", description: "E-commerce websites with a focus on conversion" },
        { header: "Web Apps", description: "Web apps designed to enhance user experience" },
        { header: "Micro-site", description: "Micro-sites designed to provide value" },
        { header: "Blogs", description: "Blogs focused on providing value" }
    ];

    return (
        <section className="relative mx-auto backdrop-blur-lg p-6 md:p-10 min-h-screen">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
                    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                        Our services are designed to help you achieve your goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Image Section */}
                    <div className=" relative w-full h-full">
                        <Image
                        src="/smart-hand.jpg"
                        alt="Services"
                        fill
                        priority
                        className="w-fit h-auto object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
                        >
                        </Image>
                    </div>

                    {/* Services Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {sCards.map((card) => (
                            <div
                                key={card.header}
                                className="text-white border border-white/10 rounded-3xl p-6 shadow-xl text-center backdrop-blur-xl hover:scale-105 transition-transform duration-300"
                            >
                                <h3 className="text-lg md:text-xl font-semibold">{card.header}</h3>
                                <p className="italic text-sm md:text-base">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}