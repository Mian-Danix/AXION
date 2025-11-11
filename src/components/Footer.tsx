import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="bg-linear-to-t from-gray-900 to-black text-gray-300 rounded-t-4xl py-12 px-20 flex flex-col md:flex-row justify-between items-start gap-10">

            <div className="flex-1">
                <h1 className="text-2xl font-bold text-white mb-4">ShipAxis</h1>
                <p className="text-sm leading-relaxed max-w-sm">
                    ShipAxis provides reliable global shipment solutions with real-time tracking and fast delivery across continents. Trusted by businesses worldwide.
                </p>
            </div>

            <div className="flex-1">
                <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition">Track Shipment</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                </ul>
            </div>

            <div className="flex-1">
                <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
                <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><HiOutlineLocationMarker size={16} /> 45 Harbor Ave, New York, USA</li>
                    <li className="flex items-center gap-2"><HiOutlinePhone size={16} /> +1 (800) 456-9090</li>
                    <li className="flex items-center gap-2"><HiOutlineMail size={16} /> support@shipaxis.com</li>
                </ul>
                <div className="flex gap-4 mt-5">
                    <a href="#" className="hover:text-blue-400"><FaFacebookF size={18} /></a>
                    <a href="#" className="hover:text-blue-400"><FaTwitter size={18} /></a>
                    <a href="#" className="hover:text-blue-400"><FaInstagram size={18} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
