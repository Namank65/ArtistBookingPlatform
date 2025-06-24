"use client";
import React from 'react';
import CategoryCard from "./CategoryCard";
import { Drum, Mic2, Music, PartyPopper } from "lucide-react";
import { useRouter } from 'next/navigation';


const TopTierTalent = () => {
    const router = useRouter();
    const handleCardClick = (category) => {
    router.push(`/exploreArtists?category=${category}`);
  };
  return (
    <section className="mt-40">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Explore Our Top-Tier Talent in Singing, Dancing, DJing, and More
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto ">
          <CategoryCard
            title="Singers"
            icon={<Mic2 className="text-primary" />}
            onClick={() => handleCardClick("Singer")}
          />
          <CategoryCard
            title="Dancers"
            icon={<PartyPopper className="text-primary" />}
            onClick={() => handleCardClick("Dancer")}
          />
          <CategoryCard 
          title="DJs" 
          icon={<Music className="text-primary" />} 
          onClick={() => handleCardClick("DJ")}
          />
          <CategoryCard
            title="Speakers"
            icon={<Drum className="text-primary" />}
            onClick={() => handleCardClick("Speaker")}
          />
        </div>
      </section>
  )
}

export default TopTierTalent
