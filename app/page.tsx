import {
  FanFact,
  GivingBack,
  Hero,
  Navbar,
  OurVision,
  Wings,
} from "./components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurVision />
      <FanFact />
      <Wings />
      <GivingBack />
    </div>
  );
}
