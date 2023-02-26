import Image from "next/image";
import { useState } from "react";
import Modal from "../../Modal/Modal";

export default function Hero() {
  //modal disclosure
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 md:px-16">
      <Image
        width={1920}
        height={1026}
        alt="background"
        src={"/hero-bg.png"}
        className="absolute w-screen top-0 left-0 -z-[1] h-[700px]  object-cover sm:object-fill"
      />
      <h1 className="font-bold text-3xl sm:text-5xl sm:max-w-2xl sm:mx-auto mt-8">
        What happens in your outlet, stays in QuickSeat App.
      </h1>
      <h2 className="font-medium mt-4 sm:mt-8 sm:max-w-4xl sm:text-lg sm:mx-auto">
        QuickSeat is a new technology to digitalize your business. It is a live
        reservation system suitable for clubs, bars, lounges, restaurants,
        stayings and hotels that allows to manage internal bookings and receive
        new reservations through our online guiding platform.
      </h2>

      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="text-sm sm:text-base uppercase cursor-pointer inline-block px-4 py-3 bg-white rounded-2xl text-primary font-bold mt-8 mx-auto active:scale-[0.99]"
      >
        Request a Demo
      </button>
      <br />

      <Image
        alt="hero"
        src={"/hero-illu.png"}
        width={700}
        height={446}
        className="inline-block "
      />
      <br />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3 className="text-primary text-2xl font-bold text-center">
          REQUEST A DEMO
        </h3>
      </Modal>
    </div>
  );
}
