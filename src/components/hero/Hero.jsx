import devfolio from "../../assets/icons/devfolio.png";
import heroPhoto from "../../assets/images/heroSection.svg";
import clipPathIcon from "../../assets/icons/clipPath.png";
import dateIcon from "../../assets/icons/date.png";
import discordIcon from "../../assets/icons/discordIcon.svg";
import heroSmallPhoto from "../../assets/images/hero_smallbox.svg";
import calendar from "../../assets/images/calendar.png";

export default function Hero() {
  return (
    <div id="home" className="Hero-section flex flex-col md:flex-row lg:px-16  h-auto">
      <div className="section1 p-4 lg:p-16 lg:w-3/5 flex flex-col gap-y-10">
        <div className="about flex flex-col text-center lg:text-start">
          <h1 className=" text-7xl flex-shrink-0 font-poppins text-101 font-bold leading-46.2 tracking-wide bg-gradient-to-r from-indigo-800 to-teal-400  bg-clip-text text-transparent mb-2">
            GENESIS
          </h1>
          <div className="flex flex-col h-115 items-center justify-center flex-shrink-0 text-white font-poppins text-20 font-semibold leading-normal pr-107">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            dolores quod maxime, corrupti pariatur vitae, temporibus eveniet
            eligendi impedit earum itaque non sunt deserunt nobis dolorem! Omnis
            tenetur cum dolores provident neque nemo fuga quod!
          </div>
        </div>

        <div className="flex flex-col w-full justify-center md:flex-row lg:flex-col gap-3 ">
          <div className="flex gap-x-2 items-center">
            <img className="w-12" src={calendar} alt="date of the event" />
            <span className="text-white font-poppins font-bold leading-normal">
              30<sup>TH</sup> TO 31<sup>ST</sup>JAN 2024
            </span>
          </div>
          <div className="flex flex-row gap-x-4 items-center">
            <img className="w-12" src={clipPathIcon} alt="venue"/>
            <span className="text-white font-bold leading-normal">
              MINI HALL-2
            </span>
          </div>
        </div>

        <div className="hero-buttons -pl-10 flex flex-col gap-y-4 sm:flex-row justify-center">
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
      <div className="section2 hidden lg:flex flex-col items-center justify-center">
        <img
          src={heroPhoto}
          alt="hero"
          className="inline-flex pt-12 max-w-80 "
        />
        <img src={heroSmallPhoto} alt="small box" className="mx-auto w-8" />
      </div>
    </div>
  );
}
