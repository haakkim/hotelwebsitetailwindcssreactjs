import React from "react";

const Hero = () => {
  const bgStyle = {
    backgroundImage:
      "url('https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="bg-black h-screen text-center bg-center relative -z-10 text-white"
      style={bgStyle}
    >
      <div className="absolute top-0 left-0 w-full h-[70vh]  opacity-90">
        <div
          className="flex items-center justify-center h-[70vh] text-center
            max-w-[1000px] mx-auto "
        >
          <div className="text-center">
            <h1 className="font-semibold text-3xl">
              Start your Events At HotelView
            </h1>
            <p className=" py-4 mt-2 text-4xl font-bold text-md">
              Discover Uncomertable Moment at HotelView{" "}
            </p>
            <p className=" text-2xl py-4 font-bold ">
              Enjoy your gateway to Exquisite Experience{" "}
            </p>
            <button className="border rounded-full bg-blue-900 text-2xl px-6 py-2">
              {" "}
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
