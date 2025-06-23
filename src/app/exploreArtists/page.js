"use client";

import { useState } from "react";
import ArtistCard from "../components/ArtistCard";
import artists from "../data/artists";
import { useSearchParams } from "next/navigation";

const categories = ["All", "Singer", "DJ", "Dancer", "Speaker"];

export default function ExploreArtistsPage() {
  const searchParams = useSearchParams();
const categoryFromURL = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL || "All");

  const filteredArtists =
    selectedCategory === "All"
      ? artists
      : artists.filter((a) => a.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Artists</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category
                ? "bg-[#8c52ff] text-white"
                : "bg-white text-gray-700"
            } hover:bg-[#8c52ff] hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Artist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}