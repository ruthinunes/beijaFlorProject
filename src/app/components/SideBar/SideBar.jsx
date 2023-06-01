"use client";
import { useSidebar } from "@/app/hooks/useSidebar";
import React from "react";
import { menu } from "@/app/page";
import Image from "next/image";
import { Link } from "react-scroll";
import { AiFillCloseSquare, AiOutlineHome } from "react-icons/ai";

const SideBar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`z-[999999] fixed inset-0 bg-black opacity-50 transition-opacity ${
          isOpen ? "visible" : "invisible"
        } ${isOpen ? "ease-out duration-300" : "ease-in duration-200"}`}
        onClick={handleClose}
      >
      </div>
      {/* Sidebar */}
      <div
          className={`fixed inset-y-0 left-0 w-64 bg-gray-200 z-[999999] transform transition-transform menu ${
            isOpen
              ? "translate-x-0 ease-out duration-300"
              : "-translate-x-full ease-in duration-200"
          }`}
        >
          <div className="my-7 h-16 flex items-center justify-between px-4 text-2xl font-bold">
            <div className="w-full flex justify-center ml-[1rem] mt-1 relative bottom-[6px]">
              <Image src="/imgs/Logos/3.png" width={100} height={100} alt="" />
            </div>

            <button
              title="close"
              onClick={handleClose}
              className="focus:outline-none"
            >
              <AiFillCloseSquare className="h-6 w-6 text-gray-700 hover:text-gray-500" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto text-xl">
            <ul>
                {menu.map((item)=>
                    item.href.startsWith("https") ?(
                        <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <li className="px-4 hover:bg-gray-300 cursor-pointer">
                      {item.title}
                    </li>
                  </a>
                    ) : (
                        <Link
                    key={item.href}
                    activeClass="font-bold active"
                    to={item.href}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={item.offset || 0}
                    className="cursor-pointer"
                  >
                    <li className="px-4 hover:bg-gray-300 cursor-pointer flex gap-2">
                      {item.icon && (
                        <i className="relative top-[2px]">{item.icon}</i>
                      )}
                      {item.title}
                    </li>
                  </Link>
                    )
                )}
            </ul>
          </div>
        </div>
    </>
  );
};

export default SideBar;
