import Image from "next/image";

export default function SolutionCard({
  icon,
  title,
  description,
  link,
}: SolutionCardProps) {
  return (
    <div className=" drop-shadow-lg hover:drop-shadow-2xl cursor-pointer rounded-2xl bg-white p-4 flex flex-col items-center basis-80">
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
      <p className="font-medium text-black mt-1 text-sm">{description}</p>
    </div>
  );
}

export interface SolutionCardProps {
  icon: string;
  description: string;
  link: string;
  title: string;
}
