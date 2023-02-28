import Image from "next/image";
import React from "react";
import { SOLUTIONS } from "../../../consts";
import SolutionCard from "../../Solution/SolutionCard";

export default function Solutions() {
  return (
    <div className="px-4 md:px-16 ">
      <Image
        alt="hero"
        src={"/img2.png"}
        height={903}
        width={1440}
        className=" sm:inline-block mt-28"
      />
      <h2 className="font-bold text-black text-2xl mt-28">SOLUTIONS</h2>
      <div className="flex justify-center flex-wrap mt-16 gap-8 max-w-[1440px] mx-auto">
        {SOLUTIONS.map((props, i) => (
          <SolutionCard key={i} {...props} />
        ))}
      </div>
    </div>
  );
}
