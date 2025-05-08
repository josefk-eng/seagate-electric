'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
export default function HomePage() {
    return (
        <main className="relative min-h-screen ">
        {/* Background Image */}
      <div className="absolute inset-0">
        <Image
            src="/images/image3.png"
            alt="Background"
            width={600} height={400}
            className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-opacity-40" />
      </div>
      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md w-full bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
          <p className="text-white/80 mb-6">
            We're building something amazing. Stay in the loop.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Notify Me
            </button>
          </form>
        </motion.div>
      </div>
      </main>
    );
  }