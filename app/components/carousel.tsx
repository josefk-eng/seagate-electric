'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const slides = [
  {
    image: '/images/image1.jpeg',
    title: 'Welcome to Seagate Electric',
    text: 'A reliable partner offering infrastructure services to ISPs, network installations for telco operators, wireless customer premises equipment, wired fibre to home (FTTH) services, relocations and support services',
  },
  {
    image: '/images/image2.jpeg',
    title: 'Fibre Optic Infrastructure',
    text: 'Installation and termination of fibre optic networks inside and outside of buildings, fibre patch-panel installations, laying of telephone cables for voice and data applications.',
  },
  {
    image: '/images/image3.png',
    title: 'Radio and Wireless Services',
    text: 'Radio Base Station and microwave equipments installation, configuration, commissioning, network optimization and maintenance for local GSM service providers.',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAnimKey((k) => k + 1);
  };

  const currentSlide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image src={slide.image} alt={`Slide ${index + 1}`} fill className="object-cover" />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-black rounded-full p-2 z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-black rounded-full p-2 z-20"
      >
        <ChevronRight />
      </button>

      {/* Animated overlay card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={animKey}
          initial={{ y: '60%', opacity: 0 }}
          animate={{ y: '110%', opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute w-full z-30 flex justify-center"
        >
          <Card className="bg-black/70 border-0 border-t-4 border-red-600 shadow-xl w-[60%] text-center rounded-none text-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2">{currentSlide.title}</h2>
              <p className="mb-4 text-white">{currentSlide.text}</p>
              <Button className="bg-black hover:bg-gray-800 text-white border-2 border-white-600 hover:border-red-600 rounded-full px-4 py-2 transition duration-300">
                Find out more
              </Button>

              
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className=" abolute right-1/2 top-4">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setCurrent(idx);
                      setAnimKey((k) => k + 1);
                    }}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      idx === current ? 'bg-red-600' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
    </div>
  );
}
