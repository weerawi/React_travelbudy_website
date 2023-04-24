import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="">
      <h1 className="">Travel Buddy</h1>
      <ul className="  ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      {/* <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div> */}
      <div
        className={
          !nav
            ? "fixed  left-0 top-0 w-[40%] h-full border-r border-r-gray-500 bg-[#014c63] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full  text-3xl font-bold text-[cyan] mt-7 ml-4">
          WEB.I
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-500">Home</li>
          <li className="p-4 border-b border-gray-500">Company</li>
          <li className="p-4 border-b border-gray-500">Resources</li>
          <li className="p-4 border-b border-gray-500">About</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
