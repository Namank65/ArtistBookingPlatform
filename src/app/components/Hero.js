import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-[#8c52ff] mt-20 shadow-2xl shadow-amber-50 py-20 px-6 text-center rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slideFromLeft">
          Discover and Book the Best Performing Artists 🎤
        </h1>
        <p className="text-lg text-gray-950 mb-6">
          Connect with singers, dancers, DJs, and more — all in one platform.
        </p>
        <Link href="/exploreArtists"><button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-primary/90">
          Explore Artists
        </button></Link>
      </section>
    </div>
  );
};

export default Hero;
