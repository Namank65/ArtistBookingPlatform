import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComp = () => {
  return (
    <div>
      <Carousel className="w-3xl flex flex-col max-w-5xl mx-auto mt-40 gap-6 ">
        <CarouselContent className="ml-0 h-60 ">
          <CarouselItem className=" bg-green-100 rounded-xl p-6 text-center flex flex-col items-center justify-center"><p className="text-lg italic mb-2">
        “Artistly helped me find the perfect DJ for my wedding. The whole booking process was so smooth and professional.”
      </p>
      <h4 className="font-semibold text-gray-700">— Priya Sharma, Delhi</h4>
      <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</p></CarouselItem>
          <CarouselItem className=" bg-green-100 rounded-xl p-6 text-center flex flex-col items-center justify-center"><p className="text-lg italic mb-2">
        “I discovered an amazing dance group through Artistly. It made our college fest a hit!”
      </p>
      <h4 className="font-semibold text-gray-700">— Arjun Mehta, Mumbai</h4>
      <p className="text-yellow-500 mt-2">⭐⭐⭐⭐</p></CarouselItem>
          <CarouselItem className="bg-green-100 p-6 rounded-xl text-center flex flex-col items-center justify-center "><p className="text-lg italic mb-2">
        “Such a great platform to explore performers across categories. Highly recommended for event planners!”
      </p>
      <h4 className="font-semibold text-gray-700">— Sneha Roy, Bangalore</h4>
      <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</p></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComp;
