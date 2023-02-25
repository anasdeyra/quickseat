import Image from "next/image";
import ContactForm from "../components/pages/home/ContactForm";
import WhoWeServe from "../components/pages/home/WhoWeServe";
import SolutionCard from "../components/Solution/SolutionCard";
import SystemCard from "../components/System/SystemCard";
import { SOLUTIONS, SYSTEM } from "../consts";

export default function Home() {
  return (
    <div className="pt-40 text-center relative">
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
          QuickSeat is a new technology to digitalize your business. It is a
          live reservation system suitable for clubs, bars, lounges,
          restaurants, stayings and hotels that allows to manage internal
          bookings and receive new reservations through our online guiding
          platform.
        </h2>

        <button className="text-sm sm:text-base uppercase cursor-pointer inline-block px-4 py-3 bg-white rounded-2xl text-primary font-bold mt-8 mx-auto active:scale-[0.99]">
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
      </div>
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

      <div className="mt-16 md:mt-32 relative bg-gradient-to-b from-[#51183D] to-[#353E76] px-4 md:px-16">
        <img
          src="/waves-top.svg"
          alt="waves-top"
          className="w-full absolute left-0 h-12 lg:h-24 z-10"
        />

        <div className="lg:flex items-center gap-8 justify-center">
          <Image
            alt="screens"
            src={"/img1.png"}
            width={700}
            height={375}
            className="object-cover inline-block mt-32"
          />
          <div className="lg:text-start lg:flex flex-col">
            <h2 className="uppercase font-bold text-2xl lg:text-3xl">
              Why choose QuickSeat?
            </h2>
            <h3 className="text-base lg:text-xl font-medium mt-2">
              While others offer basic plans for high prices, we at QuickSeat
              always Go Pro for less
            </h3>
            <button className="ml-auto text-sm sm:text-base uppercase cursor-pointer px-4 py-3 bg-white rounded-2xl text-primary font-bold mt-8 active:scale-[0.99]">
              view pricing
            </button>
          </div>
        </div>
        <div className="mt-12 sm:mt-16">
          <h2 className="uppercase font-bold text-2xl ">
            DISCOVER A FULL SYSTEM TAILORED TO YOUR BUSINESS
          </h2>
          <h3 className="text-base lg:text-xl font-medium mt-2">
            The easiest, smartest and most user-friendly reservation system App
          </h3>
        </div>
        <div className="flex justify-center flex-wrap pb-32 mt-8 sm:mt-20 gap-4 md:gap-8 max-w-[1440px] mx-auto">
          {SYSTEM.map((props, i) => (
            <SystemCard key={i} {...props} />
          ))}
        </div>
        <div className="custom-shape-divider-bottom-1677174281">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <WhoWeServe />
      {/* <ContactForm /> */}
    </div>
  );
}
