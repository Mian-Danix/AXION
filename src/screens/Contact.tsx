import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface ContactFormData {
    fullName: string;
    username: string;
    email: string;
    password: string;
    message: string;
}

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: '',
        username: '',
        email: '',
        password: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        // Update only the field that changed
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Basic validation for required fields
        const { fullName, username, email, password, message } = formData;
        if (!fullName || !username || !email || !password || !message) {
            alert('Please fill out all fields.');
            return;
        }
        // Email format validation (simple regex check)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // If validation passes
        alert('Form submitted successfully!');
        // Optionally reset the form
        setFormData({ fullName: '', username: '', email: '', password: '', message: '' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                {/* Full Name Field */}
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                />

                {/* Username Field */}
                <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                />

                {/* Email Field */}
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                />

                {/* Password Field */}
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                />

                {/* Message Field */}
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
