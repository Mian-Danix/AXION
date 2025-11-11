import React, { useState } from 'react';
import ContactUs from '../screens/Contact';

const Navigation = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b w-full flex items-center border-gray-200 shadow-md justify-between px-10 py-4 bg-[#f1f1f154] backdrop-blur-md">
                <div className="text-xl font-bold">/AXION</div>

                <nav className="flex items-center gap-8 text-sm font-semibold text-gray-700 hover:text-bold">
                    <a href="#">Technology</a>
                    <a href="#">Our Approach</a>
                    <a href="#">Services</a>
                    <a href="#">About Us</a>
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowContact(true)}
                        className="px-4 py-1 text-lg rounded-full border bg-black text-white hover:bg-white hover:text-black hover:border-black"
                    >
                        Contact Us
                    </button>
                    <button className="px-4 py-1 text-lg rounded-full border  hover:bg-black hover:text-white">
                        Sign Up
                    </button>
                </div>
            </header>

            {/* ContactUs Drawer */}
            {showContact && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 z-40"
                        onClick={() => setShowContact(false)}
                    />
                    <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-lg z-50 overflow-auto">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold">Contact Us</h2>
                            <button
                                onClick={() => setShowContact(false)}
                                className="text-gray-500 hover:text-black text-2xl"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            <ContactUs />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navigation;
