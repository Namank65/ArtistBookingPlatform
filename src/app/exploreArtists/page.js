"use client";

import { useState} from "react";
import { useSearchParams } from "next/navigation";
import ArtistCard from "../components/ArtistCard";
import artists from "../data/artists";

const categories = ["All", "Singer", "DJ", "Dancer", "Speaker"];
const locations = ["All", "Mumbai", "Delhi", "Kolkata", "Chennai"];
const priceRanges = ["All", "₹0 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000 - ₹30,000"];

export default function ExploreArtistsPage() {
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL || "All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const filterByPrice = (price) => {
    if (selectedPrice === "All") return true;

    const [min, max] = selectedPrice.replace(/[₹,\s]/g, "").split("-").map(Number);
    const [artistMin] = price.replace(/[₹,\s]/g, "").split("-").map(Number);

    return artistMin >= min && artistMin <= max;
  };

  const filteredArtists = artists.filter((artist) => {
    const categoryMatch = selectedCategory === "All" || artist.category === selectedCategory;
    const locationMatch = selectedLocation === "All" || artist.location === selectedLocation;
    const priceMatch = filterByPrice(artist.priceRange);
    return categoryMatch && locationMatch && priceMatch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 ">
      <h1 className="text-3xl text-white font-bold mb-6 text-center">Explore Artists</h1>

      {/* Filter Section */}
      <div className="grid sm:grid-cols-3 gap-4 mb-10 text-white">
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-4 py-2 bg-slate-950 rounded-2xl"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Location Filter */}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="border  px-4 py-2 bg-slate-950 rounded-2xl"
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Price Filter */}
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="border px-4 py-2 bg-slate-950 rounded-2xl"
        >
          {priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Artist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No artists found.</p>
        )}
      </div>
    </div>
  );
}
