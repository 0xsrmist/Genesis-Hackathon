import SectionTitle from "../../ui/sectiontitle/SectionTitle";
import { useState } from "react";

export default function Timeline() {

  const [step, setstep] = useState(0)

  return (
    <div className="flex flex-col gap-12 p-12 lg:mx-52 items-center justify-center">
      <SectionTitle name={"TIMELINE"} />
      <div className="TimelineContent flex flex-col gap-8">
        <div className="daysHeading flex items-cente text-blue-200 sm:justify-between  gap-4">
          <button
            onClick={() => { setstep(0) }}
            className={`day1 border-b-2 px-20 p-3 ${step === 0 ? 'border-purple-600 text-purple-600' : 'border-white text-white'}`}
          >
            <div className="flex flex-col">
              <span className="w-148 h-43 flex-shrink-0 font-Poppins text-2xl font-bold">
                DAY 01
              </span>
              <span className="font-Poppins text-sm font-semibold">
                30 January
              </span>
            </div>
          </button>
          <button onClick={() => { setstep(1) }} className={`day1 border-b-2 px-20 p-3 ${step === 1 ? 'border-purple-600 text-purple-600' : 'border-white text-white'}`}>
            <div className="flex flex-col">
              <span className="w-148 h-43 flex-shrink-0 font-Poppins text-2xl font-bold">
                DAY 02
              </span>
              <span className="font-Poppins text-sm font-semibold">
                31 January
              </span>
            </div>
          </button>
        </div>
        <div className="tableContent flex flex-col gap-4 flex-shrink-0 rounded-2xl bg-gray-300 overflow-hidden">

          {/* Heading */}
          <div
            className="relative"
          >
            <div className="absolute inset-0 py-6" style={{
              opacity: 0.72,
              background: "linear-gradient(180deg, #FF09E6 -41.73%, #2422FF )",
            }}></div>
            <div className="flex flex-row py-3 justify-around absolute inset-0">
              <span className="text-black font-Poppins text-xl  font-extrabold ">
                Time
              </span>
              <span className="text-black font-Poppins text-xl  font-extrabold leading-normal">
                Content
              </span>
              <span className="text-black font-Poppins text-xl  font-extrabold leading-normal">
                Speakers
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit
            rerum distinctio impedit esse soluta commodi placeat aspernatur
            ipsum accusamus ducimus molestias dignissimos repellat alias dicta
            dolorem iusto minima similique error, fugiat quaerat. Placeat
            ratione accusantium facilis dolor maiores cumque perspiciatis minus
            inventore, molestiae exercitationem ea veniam doloribus incidunt
            fuga.
          </div>

        </div>
      </div>
    </div>
  );
}
