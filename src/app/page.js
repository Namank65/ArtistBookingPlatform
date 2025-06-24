import Hero from "./components/Hero";
import TopTierTalent from "./components/TopTierTalent";
import CarouselComp from "./components/carousel";

export default function Home() {
  return (
    <main className="px-6 py-10">
      <Hero/>
      <TopTierTalent/>
      <CarouselComp/>
    </main>
  );
}
