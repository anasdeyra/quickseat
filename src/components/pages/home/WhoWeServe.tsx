import Image from "next/image";
import React from "react";
import { WWS } from "../../../consts";

export default function WhoWeServe() {
  return (
    <div id="who-we-serve" className="px-4 md:px-16 max-w-[1440px] mx-auto">
      <h2 className="font-bold text-[#353f76] text-2xl mt-28">WHO WE SERVE</h2>
      <h3 className="text-black font-medium mt-2">
        Reservations, Events or Bookings, QuickSeat is here to meet the
        ever-changing needs of hospitality
      </h3>

      <div className="flex mt-16 gap-16 text-start">
        <div className="flex flex-col gap-8">
          {WWS.map(({ title, description }, i) => (
            <p key={i} className="text-black">
              <span className="font-bold text-lg text-[#353f76] mr-3">
                {title}
              </span>
              {description}
            </p>
          ))}
        </div>
        <Image
          src="/wws.png"
          alt="who we server"
          width={655}
          height={692}
          className="max-w-md max-lg:hidden"
        />
      </div>
    </div>
  );
}
