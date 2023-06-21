import { Benefits, JoinUs, Magnificent, Vallues, WorkWith } from "./components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ollyo | Careers",
};

export default function Careers() {
  return (
    <div>
      <WorkWith />
      <Vallues />
      <Benefits />
      <JoinUs />
      <Magnificent />
    </div>
  );
}
