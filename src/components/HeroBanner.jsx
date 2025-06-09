import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/assets/nepal-hero.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
            Hamro Yatra Nepal
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-medium italic">
            Discover Nepal, Live the Journey
          </p>
          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-gray-100 transition">
            Explore Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
