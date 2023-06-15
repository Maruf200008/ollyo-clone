import {
  Contact,
  FanFact,
  Footer,
  GivingBack,
  GlobalTeam,
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
      <GlobalTeam />
      <Contact />
      <Footer />
    </div>
  );
}
