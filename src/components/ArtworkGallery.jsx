import React, { useState } from 'react';

const artworks = [
  '/images/art1.jpg',
  '/images/art2.jpg',
  '/images/art3.jpg',
  '/images/art4.jpg',
  '/images/art5.jpg',
  '/images/art6.jpg',
  '/images/art7.jpg',
  '/images/art8.jpg',
  '/images/art9.jpg'
];

export default function ArtworkGallery() {
  const [zoomed, setZoomed] = useState(null);

  const toggleZoom = (index) => {
    setZoomed(zoomed === index ? null : index);
  };

  return (
    <section className="snap-start min-h-screen bg-black text-white px-8 py-16 relative">
      <h2 className="text-4xl text-center mb-12 text-[#E78A8A]">Selected Artworks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {artworks.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => toggleZoom(index)}
          >
            <img
              src={src}
              alt={`Artwork ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {zoomed !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer transition-all duration-700 ease-in-out"
          onClick={() => setZoomed(null)}
        >
          <img
            src={artworks[zoomed]}
            alt={`Zoomed Artwork ${zoomed + 1}`}
            className="max-w-full max-h-full object-contain scale-90 transition-transform duration-700 ease-in-out hover:scale-100"
          />
        </div>
      )}
    </section>
  );
}
