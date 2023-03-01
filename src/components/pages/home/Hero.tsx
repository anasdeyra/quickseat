import { Select, TextInput } from "@mantine/core";
import { customArray } from "country-codes-list";
import Image from "next/image";
import { useState } from "react";
import Modal from "../../Modal/Modal";

const COUNTRY_NAMES = customArray({
  //@ts-ignore
  label: "{countryNameEn}",
  value: "{countryNameEn}",
});
const COUNTRY_CODES = customArray({
  //@ts-ignore
  label: "+{countryCallingCode}",
  value: "{countryCode} (+{countryCallingCode})",
});

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

        <form className="mt-8 flex flex-col grow max-w-2xl rounded-xl border-2 border-[#67246d] text-start mx-auto p-4 gap-3">
          <TextInput label="First name" placeholder="John" required />
          <TextInput label="Last name" placeholder="Doe" required />
          <TextInput
            label="Email"
            placeholder="john@example.com"
            required
            type={"email"}
          />

          <TextInput
            label="Outlet name"
            placeholder="Your restaurent, Bar, Club, Venue"
            required
          />
          <Select
            data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "More"]}
            label="Number of outlets"
            placeholder="Number of outlets"
            styles={{
              item: {
                "&[data-selected]": {
                  "&, &:hover": { backgroundColor: "#67246d" },
                },
              },
            }}
          />
          <div className="flex gap-2">
            <Select
              data={COUNTRY_CODES}
              label="Country code"
              placeholder="+1"
              styles={{
                root: {
                  flexGrow: 0,
                  flexBasis: "100px",
                },
              }}
            />
            <TextInput
              label="Phone number"
              placeholder="123456789"
              required
              styles={{
                root: {
                  flexGrow: 2,
                },
              }}
            />
          </div>
          <Select
            data={COUNTRY_NAMES}
            label="Outlet Country"
            placeholder="Outlet Country"
            styles={{
              item: {
                "&[data-selected]": {
                  "&, &:hover": { backgroundColor: "#67246d" },
                },
              },
            }}
          />
          <Select
            data={[
              "Not using a reservation mangement system",
              "Currently using a reservation management system",
            ]}
            label="Current status"
            placeholder="Current status"
            styles={{
              item: {
                "&[data-selected]": {
                  "&, &:hover": { backgroundColor: "#67246d" },
                },
              },
            }}
          />

          <button className="mt-2 bg-[#67246d] rounded md:rounded-md px-8 py-2 font-medium text-sm md:order-2 md:ml-auto">
            Request a demo
          </button>
        </form>
      </Modal>
    </div>
  );
}
