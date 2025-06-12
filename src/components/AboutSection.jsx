import React from 'react';

export default function AboutSection() {
  return (
    <section className="snap-start min-h-screen bg-black text-white px-4 py-20 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="w-full max-w-sm">
        <img
          src="/images/photo.jpg"
          alt="Portrait"
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>
      <div className="max-w-2xl text-left space-y-6 px-4">
        <h2 className="text-3xl md:text-4xl text-[#E78A8A] font-light">About Me</h2>
        <p className="text-base md:text-lg leading-relaxed">
          I’m an artist and visual designer passionate about storytelling through animation, painting, and immersive visual experiences.
          My work blends emotional resonance with aesthetic experimentation, often exploring the boundary between nature, memory, and the surreal.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          I hold a Master’s degree from USC School of Cinematic Arts in Animation, and I’ve participated in various collaborative and solo exhibitions.
          I specialize in background painting, visual development, and animated installation.
        </p>
      </div>
    </section>
  );
}
