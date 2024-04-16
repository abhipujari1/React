import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { LiaHireAHelper } from "react-icons/lia";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  const [toggel, setToggel] = useState(false);

  const shoSideMenu = () => {
    console.log("Hii");
    setToggel(true);
  };
  const hideSideMenu = () => {
    setToggel(false);
  };

  const links = [
    {
      icon: <IoSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "new",
    },
    {
      icon: <LiaHireAHelper />,
      name: "Help",
    },
    {
      icon: <IoPerson />,
      name: "Sign In",
    },
    {
      icon: <FaShoppingCart />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 "
        onClick={hideSideMenu}
        style={{
          opacity: toggel ? 1 : 0,
          visibility: toggel ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] bg-white h-full absolute duration-500"
          style={{ left: toggel ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] max-auto flex items-center">
          <div className="w-[100px] ">
            <img src="images/Logo.png" className="w-full" alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-black">
              {" "}
              Location{" "}
            </span>{" "}
            and others{" "}
            <RxCaretDown
              onClick={shoSideMenu}
              fontSize={25}
              className="font-bold inline  hover:text-[#fc8019] text-gray-600 cursor-pointer"
            />
          </div>
          <nav className="hidden md:flex list-none gap-10 ml-auto font-bold text-[18px]">
            {links.map((link, index) => {
              return (
                <li className="cursor-pointer flex hover:text-[#fc8019] items-center gap-2">
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
