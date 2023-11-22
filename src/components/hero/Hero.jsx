import React from "react";
import devfolio from "../../assets/icons/devfolio.png";
import heroPhoto from "../../assets/images/heroSection.svg";
import clipPathIcon from "../../assets/icons/clipPath.png";
import dateIcon from "../../assets/icons/date.png";
import discordIcon from "../../assets/icons/discordIcon.svg";
import heroSmallPhoto from "../../assets/images/hero_smallbox.svg";

export default function Hero() {
  return (
    <div className="Hero-section flex flex-col md:flex-row p-1 max-h-screen h-auto">
      <div className="section1 p-16">
        <div className="about">
          <h1 className=" md:w-3/5 text-5xl flex-shrink-0 font-poppins text-101 font-bold leading-46.2 tracking-wide bg-gradient-to-r from-indigo-800 to-teal-400  bg-clip-text text-transparent mb-2">
            GENESIS
          </h1>
          <div className="flex flex-col w-3/5 h-115 items-center justify-center flex-shrink-0 text-white font-poppins text-20 font-semibold leading-normal pr-107">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            repudiandae fugit, expedita possimus vero suscipit.
          </div>
        </div>

        <div className="event-details ">
          <div className="dateOfEvent flex items-center relative -mx-20 ">
            <img src={dateIcon} alt="date of the event" />
            <span className="text-white font-poppins text-25 font-bold leading-normal -mx-20">
              30<sup>TH</sup> TO 31<sup>ST</sup>JAN 2024
            </span>
          </div>
          <div className="venueOfEvent relative flex flex-row items-center -top-20 left-1">
            <img src={clipPathIcon} alt="venue" className="" />
            <span className="text-white font-bold leading-normal ml-11">
              MINI HALL-2
            </span>
          </div>
        </div>

        <div className="hero-buttons -pl-10 flex flex-row">
          <button className="w-90 h-12 flex-shrink-0 rounded-full bg-[#1A72FF] px-4 py-8 flex items-center justify-center font-semibold max-w-1/2 w-auto mr-2">
            <img
              src={devfolio}
              alt="devfolio"
              className="w-8 h-8 flex-shrink-0"
            />
            <span className="ml-1">Apply from Devfolio</span>
          </button>

          <button className="w-90 h-12 flex-shrink-0 rounded-full bg-[#5865F2] px-6 py-8 font-semibold ml-3 flex items-center max-w-1/2 w-auto">
            <img src={discordIcon} alt="" className="w-8 h-8 flex-shrink-0" />
            <span className="ml-4">Join Discord</span>
          </button>
        </div>
      </div>
      <div className="section2 flex flex-col items-center justify-center p-10">
        <img
          src={heroPhoto}
          alt="hero"
          className="inline-flex pt-12 max-w-80 "
        />
        <img src={heroSmallPhoto} alt="small box" className="mx-auto w-1/10" />
      </div>
    </div>
  );
}
