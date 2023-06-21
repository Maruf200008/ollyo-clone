import { Metadata } from "next";
import { PrivacyPolicy } from "./components";

export const metadata: Metadata = {
  title: "Privacy | Careers",
};

export default function Privacy() {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
}
