"use client";
import React, { useState } from "react";

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate submission
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SeaGate Electric LTD</h2>
          <p className="mb-2">Plot 25A
Mukubira Road Makerere
Kampala Uganda
</p><br />
          <p>Phone: +256 414672855 <br />
          Email: info@seagate-electric.co.ug</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline break-words">Home</a></li>
            <li><a href="#" className="hover:underline break-words">The Company</a></li>
            <li><a href="#" className="hover:underline break-words">Our Services</a></li>
            <li><a href="#" className="hover:underline break-words">Our Products</a></li>
            <li><a href="#" className="hover:underline break-words">Our Tools</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase">Our Servies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline break-words">Fibre Infrastructure</a></li>
            <li><a href="#" className="hover:underline break-words">Radio And Wireless Networks</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase">Want to stay in the loop?</h3>
          <p className="mb-2">Sign up for the latest deals, product news, and more from seagate electric</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-grow px-3 py-2 rounded bg-gray-800 text-white focus:outline-none min-w-0"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white whitespace-nowrap"
            >
              Sign me up
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {submitted && <p className="text-green-500 text-sm mt-2">Thanks for subscribing!</p>}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
          <div className="break-words">&copy; {new Date().getFullYear()} Seagate-Electric LTD. All rights reserved.</div>
          <div className="text-center break-words">Designed by Company</div>
          <div className="flex justify-center sm:justify-end gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
