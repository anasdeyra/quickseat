import Image from "next/image";
import { ABOUT_US_FEATURES, FOUNDERS, JOIN_US } from "../consts";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import { FileInput, Select, Textarea, TextInput } from "@mantine/core";

export default function About() {
  //modal disclosure
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-[1000px]:pt-32 pt-24 px-4 md:px-16 max-w-[1440px] mx-auto">
      <div className="mt-16 flex items-end">
        <img
          src="/about-bg.png"
          alt="background"
          className="w-screen left-0 object-cover h-full absolute -z-10"
        />
        <div className="text-center xl:text-left self-start">
          <h1 className="text-primary font-bold text-4xl">Who we are</h1>
          <p className="text-primary font-medium mt-4">
            We started our journey as employees in different outlets where we
            enriched our management skills in customer service and outlets.
            Along the road we used several systems where we faced a lot of
            struggles and gaps in applying real time operations including
            reservations, floor management, guest data base collection and
            follow up strategies. We were successful in understanding all types
            of needs requested from different operation managers and owners This
            how it all started, we insisted on combining the easiest, smartest
            and most user-friendly widgets within one app which can be
            implemented in real life to all types of Restaurants, Nightclubs &
            Bars and Hotels & Stayings. With constantly changing demands of
            outlets, we are always keen on implementing the most advanced
            technologies leading us to expand internationally at a rate that has
            never been achieved.
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="mt-10 bg-primary py-3 px-6 rounded-2xl inline-block font-medium cursor-pointer active:scale-[0.97]"
          >
            JOIN THE TEAM
          </button>
        </div>
        <img
          src={"/about-illu.png"}
          alt="illustration"
          className="h-[300px] hidden xl:block mt-52"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8 md:gap-16 mt-32">
        {ABOUT_US_FEATURES.map(({ description, icon, title }, i) => (
          <div className="flex items-center flex-col text-center" key={i}>
            <Image src={icon} alt="title" width={100} height={100} />
            <h2 className="text-black font-bold text-2xl my-2">{title}</h2>
            <p className="text-black font-medium">{description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-primary text-3xl font-bold text-center mt-20 lg:mt-32">
        MEET THE TEAM
      </h2>
      <p className="text-primary font-medium mt-4 text-center">
        We value diversity, creativity, and innovation. We translate those
        values in our product, support, and everyday work. Our Technical,
        Customer Success, Sales Engine teams are always ready to serve our
        clients every step of the way.
      </p>
      <div className="flex gap-16 mt-8 flex-wrap mx-auto justify-center">
        {FOUNDERS.map(({ name, position, image }, i) => (
          <div className="flex items-center flex-col text-center mt-16" key={i}>
            <Image
              src={image}
              alt="title"
              width={484}
              height={533}
              className="h-80 w-80 object-contain"
            />
            <h2 className="text-black font-bold text-2xl mt-6">{name}</h2>
            <p className="text-black font-medium">{position}</p>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="max-w-4xl">
        <h2 className="text-2xl text-primary font-semibold text-center">
          <span className="font-extrabold">T</span>ogether{" "}
          <span className="font-extrabold">E</span>veryone{" "}
          <span className="font-extrabold">A</span>chieves{" "}
          <span className="font-extrabold">M</span>ore
        </h2>
        <h3 className="font-medium text-lg text-primary text-center">
          Willing to make a difference? Let’s make it together
        </h3>

        <div className="flex gap-4 flex-wrap mt-8 justify-center">
          {JOIN_US.map(({ description, title }, i) => (
            <div
              className="basis-[250px]  rounded-xl bg-purple-100 p-2 text-center"
              key={i}
            >
              <h3 className="font-bold text-lg text-primary">{title}</h3>
              <p className="font-medium text-sm text-primary mt-2">
                {description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl text-primary font-bold text-center mt-16">
          Why Join our team
        </h2>
        <p className="text-primary font-medium mt-4 max-w-[800px] mx-auto">
          We started our journey as employees in different outlets where we
          enriched our operations skills in customer service and outlets
          management. <br /> <br />
          Along the road, we used several systems where we faced a lot of
          struggles and gaps in applying real time operations including
          reservations, floor management, guest database collection and follow
          up strategies. <br />
          We were successful in understanding all types of needs requested from
          different operation managers and owners. This is how it all started;
          we insisted on combining the Easiest, Smartest and Most User-Friendly
          widgets whithin one app "QuickSeat" which can be implemented in real
          life to all types of Restaurants, Nightclubs, Bars and Hotels &
          Stayings. <br /> <br />
          With constantly changing demands of outlets, we are always keen on
          implementing the most advanced technologies which lead us to expanding
          internationally at a rate that has never been achieved.
        </p>

        <form className="mt-8 flex flex-col grow max-w-[800px] rounded-xl border-2 border-[#67246d] text-start mx-auto p-4 gap-3">
          <TextInput label="Full name" placeholder="John Doe" required />
          <TextInput
            label="Email"
            placeholder="john@example.com"
            required
            type={"email"}
          />

          <div className="flex gap-2">
            <TextInput
              label="Country code"
              placeholder="+1"
              required
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

          <FileInput label="Your CV" placeholder="Upload your CV" required />

          <Textarea
            minRows={4}
            label="Cover letter"
            placeholder="Tell us about yourself and why you would like to join our team!"
            required
          />

          <button className="mt-2 bg-[#67246d] rounded md:rounded-md px-8 py-2 font-medium text-sm md:order-2 md:ml-auto">
            Apply now
          </button>
        </form>
      </Modal>
    </div>
  );
}
