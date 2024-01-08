import SectionTitle from "../../ui/sectiontitle/SectionTitle";
import { useState } from "react";

export default function Timeline() {
	const [step, setstep] = useState(0);

	const day1Details = [
		{
			time: "10 AM - 12 PM",
			topic: "Inauguration ceremony/ Keynote sessions",
		},
		{
			time: "12 PM onwards",
			topic: "Hacking commences",
		},
		{
			time: "2 PM onwards",
			topic: "Side sessions begins",
		},
	];

	const day2Details = [
		{
			time: "3 PM",
			topic: "Hackathon ends",
		},
		{
			time: "4 PM - 5 PM",
			topic: "Closing and Award ceremony",
		},
	];

	return (
		<div className="flex flex-col gap-12 items-center justify-center">
			<SectionTitle name={"TIMELINE"} />
			<div className="flex flex-col gap-8 justify-center items-center">
				<div className="flex items-center text-blue-200 gap-16 md:gap-40">
					<button
						onClick={() => {
							setstep(0);
						}}
						className={`day1 border-b-2 px-2 p-3 ${
							step === 0
								? "border-purple-600 text-purple-600"
								: "border-white text-white"
						}`}
					>
						<div className="flex flex-col">
							<span className="flex-shrink-0 font-Poppins text-2xl font-bold">
								DAY 01
							</span>
							<span className="font-Poppins text-sm font-semibold">
								30 January
							</span>
						</div>
					</button>
					<button
						onClick={() => {
							setstep(1);
						}}
						className={`day1 border-b-2 px-2 p-3 ${
							step === 1
								? "border-purple-600 text-purple-600"
								: "border-white text-white"
						}`}
					>
						<div className="flex flex-col">
							<span className="flex-shrink-0 font-Poppins text-2xl font-bold">
								DAY 02
							</span>
							<span className="font-Poppins text-sm font-semibold">
								31 January
							</span>
						</div>
					</button>
				</div>
				<div className="max-w-[900px] flex flex-col gap-4 flex-shrink-0 rounded-2xl bg-gray-300 overflow-hidden pb-6">
					{/* Heading */}
					<div className="relative">
						<div
							className="absolute inset-0 py-6"
							style={{
								opacity: 0.72,
								background:
									"linear-gradient(180deg, #FF09E6 -41.73%, #2422FF )",
							}}
						></div>
						<div className="flex flex-row py-3 pl-14 justify-between pr-24 absolute inset-0">
							<span className="text-black font-Poppins text-xl font-extrabold ">
								Time
							</span>
							<span className="text-black font-Poppins text-xl font-extrabold leading-normal">
								Topic
							</span>
						</div>
					</div>

					{/* Content */}
					<div className="flex flex-col mt-16 gap-8 pl-10 pr-8">
						{step === 0
							? day1Details.map((item, index) => (
									<div
										key={index}
										className="flex gap-8 items-center justify-between"
									>
										<p className="font-bold w-1/2">{item.time}</p>

										<p className="font-medium w-1/2">{item.topic}</p>
									</div>
							  ))
							: day2Details.map((item, index) => (
									<div
										key={index}
										className="flex gap-8 items-center justify-between"
									>
										<p className="font-bold w-1/2">{item.time}</p>

										<p className=" font-medium w-1/2 ">{item.topic}</p>
									</div>
							  ))}
					</div>
				</div>
			</div>
		</div>
	);
}
