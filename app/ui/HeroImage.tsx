import * as React from "react";
import Image from "next/image";

export default function HeroImage() {
  return (
    <Image
      src="/hero-desktop.png"
      width={1000}
      height={760}
      className="block"
      alt="Coin flip game"
    />
  );
}
