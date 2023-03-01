import Image from "next/image";
import Link from "next/link";
import { useState, Fragment } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Drawer from "../Drawer/Drawer";
import { LINKS } from "../../consts";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";

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
          {LINKS.map((props, i) =>
            props.subLinks ? (
              <MenuDropDown {...props} />
            ) : (
              <NavLink
                {...props}
                isActive={router.pathname === props.path}
                key={i}
              />
            )
          )}
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
              {LINKS.map((props, i) =>
                props.subLinks ? (
                  props.subLinks.map((subLink, i) => (
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      {...subLink}
                      isActive={router.pathname === subLink.path}
                      key={i}
                    />
                  ))
                ) : (
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    {...props}
                    isActive={router.pathname === props.path}
                    key={i}
                  />
                )
              )}
            </ul>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

function NavLink({ label, path, isActive, onClick }: NavLinkProps) {
  return (
    <a
      onClick={onClick}
      className={`${isActive ? "font-bold" : ""}`}
      href={path}
    >
      <li>{label}</li>
    </a>
  );
}

interface NavLinkProps {
  label: string;
  path: string;
  isActive: boolean;
  onClick?: () => void;
}

function MenuDropDown({ label, subLinks }: MenuDropDownProps) {
  const router = useRouter();
  const isActive = subLinks.some((link) => link.path === router.pathname);
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left cursor-pointer">
        <div>
          <Menu.Button as="li" className={isActive ? "font-bold" : ""}>
            {label}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {subLinks.map(({ label, path }) => (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={path}
                      className={`${
                        active ? "bg-primary text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {label}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

interface MenuDropDownProps {
  label: string;
  subLinks: { label: string; path: string }[];
}
