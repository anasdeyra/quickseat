import Image from "next/image";
import React from "react";
import { PRICING_FEATURES, SYSTEM } from "../../../consts";
import SystemCard from "../../System/SystemCard";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export default function Pricing() {
  //modal disclosure
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="pricing"
      className="mt-16 md:mt-32 relative bg-gradient-to-b from-[#51183D] to-[#353E76] px-4 md:px-16"
    >
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
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="ml-auto text-sm sm:text-base uppercase cursor-pointer px-4 py-3 bg-white rounded-2xl text-primary font-bold mt-8 active:scale-[0.99]"
          >
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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <h3 className="text-primary text-xl font-bold text-center">
            GET THE MOST ADVANCED PLAN FOR LESS
          </h3>
          <h4 className="text-primary text font-medium text-center mt-2">
            Comprehensive tools to give more control and flexibility for your
            team to enhance guest experience
          </h4>
          <div className="flex flex-col gap-4 mt-6 w-max mx-auto">
            {PRICING_FEATURES.map((feature, i) => (
              <div className="flex items-center" key={i}>
                <FiCheckCircle size={20} color="#67246d" />
                <p className="text-primary text-lg font-medium ml-2">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href="/#contact-us"
            className="text-sm w-max sm:text-base uppercase cursor-pointer px-6 py-3 bg-primary block mx-auto rounded-2xl font-bold mt-8 active:scale-[0.99]"
          >
            get started
          </Link>
        </div>
      </Modal>
    </div>
  );
}
