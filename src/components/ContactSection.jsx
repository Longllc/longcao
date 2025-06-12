import React from 'react';

export default function ContactSection() {
  const handleCopy = () => {
    navigator.clipboard.writeText('longcao0521@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <section className="snap-start min-h-screen bg-black text-white px-8 py-20 flex flex-col items-center justify-center gap-8">
      <h2 className="text-3xl md:text-4xl text-[#E78A8A]">Get In Touch</h2>
      <p className="text-base md:text-lg text-center max-w-xl">
        Feel free to reach out for collaborations, commissions, or just to connect. 
        I'm always open to new creative opportunities.
      </p>
      <div
        className="text-lg md:text-xl font-mono bg-white text-black px-6 py-3 rounded-lg cursor-pointer hover:bg-[#E78A8A] hover:text-white transition"
        onClick={handleCopy}
      >
        longcao0521@gmail.com
      </div>
      <div className="flex gap-6 mt-6 text-lg">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E78A8A]">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/long.cao2000" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E78A8A]">
          Instagram
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E78A8A]">
          GitHub
        </a>
      </div>
    </section>
  );
}
