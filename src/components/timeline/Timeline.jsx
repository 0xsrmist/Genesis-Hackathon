import React from "react";
import SectionTitle from "../../ui/sectiontitle/SectionTitle";

export default function Timeline() {
  return (
    <div className="flex flex-col gap-12 p-12 lg:mx-52 items-center justify-center">
      <div className="justify-center timelineHeading w-screen ">
        <SectionTitle name={"TIMELINE"} />
      </div>
      <div className="TimelineContent flex flex-col gap-8">
        <div className="daysHeading flex items-cente text-blue-200 sm:justify-between  gap-4">
          <button className="day1 border-b-2  px-20 border-purple-600 p-3">
            <div className="flex flex-col">
              <span className="w-148 h-43 flex-shrink-0 text-purple-600 font-Poppins text-2xl font-bold">
                DAY 01
              </span>
              <span className="text-purple-600 font-Poppins text-sm font-semibold">
                30 January
              </span>
            </div>
          </button>
          <button className="day2 border-b-2  px-20 border-purple-600 p-2">
            <div className="flex flex-col">
              <span className="w-148 h-43 flex-shrink-0 text-purple-600 font-Poppins text-2xl font-bold">
                DAY 02
              </span>
              <span className="text-purple-600 font-Poppins text-sm font-semibold">
                31 January
              </span>
            </div>
          </button>
        </div>
        <div className="tableContent w-1292 h-1003 flex-shrink-0 rounded-2xl bg-gray-300 overflow-hidden">
          <div
            className="flex flex-row justify-around  py-3"
            style={{
              opacity: 0.72,
              background: "linear-gradient(180deg, #FF09E6 -41.73%, #2422FF )",
            }}
          >
            <span className="text-black font-Poppins text-45  font-extrabold ">
              Time
            </span>
            <span className="text-black font-Poppins text-45  font-extrabold leading-normal">
              Content
            </span>
            <span className="text-black font-Poppins text-45  font-extrabold leading-normal">
              Speakers
            </span>
          </div>
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
