import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";

export default function SolutionCard({
  icon,
  title,
  description,
  more,
}: SolutionCardProps) {
  const [isReadMore, setIsReadMore] = useState(false);
  const ref = useClickOutside(() => {
    isReadMore && setIsReadMore(false);
  });

  return (
    <div
      ref={ref}
      className="z-10 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl bg-white p-4 flex flex-col items-center basis-80"
    >
      {isReadMore ? (
        <>
          <div className="flex gap-2 flex-col my-3">
            {more.map((item, i) => (
              <p className="text-black text-start text-sm font-medium" key={i}>
                &bull; {item}
              </p>
            ))}
          </div>
          <span
            onClick={() => {
              setIsReadMore(false);
            }}
            className="italic font-medium mt-auto text-xs text-secondary cursor-pointer"
          >
            hide
          </span>
        </>
      ) : (
        <>
          <div className="bg-gradient-to-b p-2 from-[#752b6a] to-[#8d2e6a] rounded-full">
            <Image
              src={icon}
              alt={title}
              height={32}
              width={32}
              className="object-contain aspect-square"
            />
          </div>
          <h3 className="uppercase font-bold text-black mt-3">{title}</h3>
          <p className="font-medium text-black mt-1 text-sm mb-3">
            {description}
          </p>
          <span
            onClick={() => {
              setIsReadMore(true);
            }}
            className="italic font-medium mt-auto text-xs text-secondary cursor-pointer"
          >
            Read more...
          </span>
        </>
      )}
    </div>
  );
}

export interface SolutionCardProps {
  icon: string;
  description: string;
  more: string[];
  title: string;
}
