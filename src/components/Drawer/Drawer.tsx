import { FiX } from "react-icons/fi";

export default function Drawer({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-black bg-opacity-[70%] backdrop-blur-lg  inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <FiX
        onClick={() => {
          setIsOpen(false);
        }}
        color="white"
        size={24}
        className="absolute right-0 m-5 z-20"
      />
      <section
        className={
          "w-full max-w-lg left-0 absolute   h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        {children}
      </section>
    </main>
  );
}
