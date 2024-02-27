import React from "react";

const NavBar = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between items-center mx-auto max-w-[95%]">
        <div className="items-center">
          <h1 className="text-blue-700 text-5xl">
            Hotel <span className="text-white text-5xl">View</span>
          </h1>
        </div>
        <div className="flex">
          <ul className="flex gap-10 px-6 py-2 font-semibold text-xl uppercase">
            <li className="text-white cursor-pointer hover:text-blue-300">
              Home
            </li>
            <li className="text-white cursor-pointer hover:text-blue-300">
              About
            </li>
            <li className="text-white cursor-pointer hover:text-blue-300">
              Services
            </li>
            <li className="text-white cursor-pointer hover:text-blue-300">
              Prices
            </li>
            <li className="text-white cursor-pointer hover:text-blue-300">
              Chefs
            </li>
          </ul>
        </div>

        <button className="font-semibold px-6 py-2 text-white  border rounded-full bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default NavBar;
