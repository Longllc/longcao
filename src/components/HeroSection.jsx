import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="snap-start relative h-screen w-screen bg-black text-white overflow-hidden">
      <video
        src="/videos/video1.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        muted
        autoPlay
        loop
        playsInline
      />
      <div className="z-10 relative h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-[12rem] font-extralight text-[#E78A8A] mt-20 mb-4">LONG CAO</h1>
        <p className="text-2xl text-[#E78A8A] font-extralight">Artist / Animator / Designer</p>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaChevronDown size={28} className="text-white opacity-70 hover:opacity-100 transition" />
      </motion.div>
    </section>
  );
}
