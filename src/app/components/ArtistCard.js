import Image from "next/image";

export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center">
      <Image
        src={artist.image}
        alt={artist.name}
        width={150}
        height={150}
        className="rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{artist.name}</h3>
      <p className="text-sm text-gray-500">{artist.category}</p>
      <p className="text-sm text-gray-500">{artist.location}</p>
      <p className="text-sm font-medium text-primary">{artist.priceRange}</p>
      <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
        Ask for Quote
      </button>
    </div>
  );
}
