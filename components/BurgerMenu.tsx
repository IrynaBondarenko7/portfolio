"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Button, Dialog, DialogPanel, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import data from "../data.json";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={openMenu} aria-label="open menu">
        <HiOutlineMenuAlt1 className="w-8 h-8 2xl:w-9 2xl:h-9 hover:shadow-sm inline-block hover:shadow-white transition-all duration-300 rounded-sm" />
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeMenu}
      >
        <div className="fixed inset-0 z-10  overflow-y-auto w-screen backdrop-blur-sm bg-white/5">
          <div className="flex min-h-full items-center justify-end ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="-translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel
                transition
                className="w-[70%] h-dvh max-w-md  p-6 bg-bgColor duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <Button
                  aria-label="close menu"
                  className="ml-auto mb-20 py-1.5 px-2 xl:py-2 xl:px-2.5 text-sm/6 xl:text-base font-semibold text-white focus:shadow-sm hover:shadow-sm inline-block focus:shadow-white hover:shadow-white rounded-lg  transition-all duration-300"
                  onClick={closeMenu}
                >
                  <MdClose className="xl:w-6 xl:h-6" />
                </Button>
                <div className="flex flex-col justify-center items-center gap-5">
                  <ul className="flex flex-col gap-2 font-bona-nova items-center">
                    {data.links.map((link) => (
                      <li className="burger-item xl:text-xl" key={link.name}>
                        <Link href={link.path} onClick={closeMenu}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </>
  );
};
