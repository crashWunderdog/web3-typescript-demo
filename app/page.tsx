import * as React from "react";

import HeroImage from "./ui/HeroImage";

export default function Page() {
  return (
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      <HeroImage />
    </div>
  );
}
