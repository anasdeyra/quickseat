import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Drawer from "../Drawer/Drawer";
import { LINKS } from "../../consts";
import { useRouter } from "next/router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <div className="flex justify-center">
      <div className="py-6 px-4 md:px-16 flex items-center absolute justify-between w-full z-10 max-w-[1440px] mx-auto">
        <Link title="home" href={"/"}>
          <Image
            alt="logo"
            width={32}
            height={32}
            src={isHome ? "/logo.png" : "/logo-colored.png"}
            className="min-[1000px]:w-12 min-[1000px]:h-12"
          />
        </Link>
        <ul
          className={`gap-8 uppercase hidden min-[1000px]:flex ${
            isHome ? "" : "text-primary"
          }`}
        >
          {LINKS.map((props, i) => (
            <NavLink
              {...props}
              isActive={router.pathname === props.path}
              key={i}
            />
          ))}
        </ul>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="ml-3 transition active:scale-[0.95] min-[1000px]:hidden"
        >
          <HiMenuAlt1 size={32} color={isHome ? "white" : "#5e246d"} />
        </button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="p-4 pt-6">
            <Link title="home" href={"/"}>
              <Image alt="logo" width={32} height={32} src={"/logo.png"} />
            </Link>
            <ul className="gap-2 uppercase flex flex-col mt-6">
              {LINKS.map((props, i) => (
                <NavLink
                  {...props}
                  isActive={router.pathname === props.path}
                  key={i}
                />
              ))}
            </ul>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

function NavLink({ label, path, isActive }: NavLinkProps) {
  return (
    <a className={`${isActive ? "font-bold" : ""}`} href={path}>
      <li>{label}</li>
    </a>
  );
}

interface NavLinkProps {
  label: string;
  path: string;
  isActive: boolean;
}
