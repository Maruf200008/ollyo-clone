import { Poppins, Roboto_Slab } from "next/font/google";

export const roboto_slab = Roboto_Slab({
  weight: ["900"],
  preload: false,
  display: "swap",
});

export const poppins = Poppins({
  weight: ["500", "600", "900"],
  style: ["normal"],
  preload: false,
  display: "swap",
});
