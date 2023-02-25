import Image from "next/image";
import { SOCIALS } from "../../consts";

export default function Footer() {
  return (
    <div className="relative mt-20">
      <img
        src={"/footer-bg.png"}
        alt="footer background"
        className="w-full h-full absolute  -z-10 max-lg:object-cover"
      />
      <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-3 lg:items-end justify-items-center px-4 md:px-16 py-4">
        <div className="flex max-lg:order-2">
          {SOCIALS.map(({ icon, link }, i) => (
            <a href={link} target="_blank" key={i} className="mr-4">
              <Image alt={icon} src={icon} width={32} height={32} />
            </a>
          ))}
        </div>
        <Image
          src={"/logo-big.png"}
          alt="logo big"
          height={72}
          width={72}
          className="max-lg:order-1 max-lg:hidden"
        />
        <Image
          src={"/logo-big.png"}
          alt="logo big"
          height={48}
          width={48}
          className="max-lg:order-1 lg:hidden"
        />

        <span className="text-xs max-lg:order-3">
          2023 Copyrights & Protected , QuickSeat App
        </span>
      </div>
    </div>
  );
}
