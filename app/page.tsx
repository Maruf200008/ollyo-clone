import {
  Contact,
  FanFact,
  GivingBack,
  GlobalTeam,
  Hero,
  OurVision,
  Wings,
} from "./components";

export const metadata = {
  title: "Ollyo",
  description: "Software Company Ltd.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <OurVision />
      <FanFact />
      <Wings />
      <GivingBack />
      <GlobalTeam />
      <Contact />
    </div>
  );
}
