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
				<div className="flex items-center text-blue-200 gap-16">
					<button
						onClick={() => {
							setstep(0);
						}}
						className={`day1 border-b-2 px-2 p-3 ${step === 0
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
						className={`day1 border-b-2 px-2 p-3 ${step === 1
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
				<div className="max-h-fit lg:h-[300px] w-[80vw] max-w-[1000px] flex flex-col gap-4 flex-shrink-0 rounded-2xl bg-gray-300 overflow-hidden pb-6">
					{/* Heading */}
					<div style={{
						background: "linear-gradient(180deg, rgba(255, 9, 230, 0.72) -41.73%, rgba(36, 34, 255, 0.72))",
					}} className="grid grid-cols-2 py-3 pl-10 pr-8 text-center">
						<div>
							<span className="text-black font-Poppins text-xl font-extrabold ">
								Time
							</span>
						</div>
						<div>
							<span className="text-black font-Poppins text-xl font-extrabold leading-normal">
								Topic
							</span>
						</div>
					</div>

					{/* Content */}
					<div className="flex flex-col mt-8 gap-8 text-2xl pl-10 pr-8">
						{step === 0
							? day1Details.map((item, index) => (
								<div
									key={index}
									className="grid grid-cols-2 gap-4 text-center"
								>
									<p className="font-bold">{item.time}</p>

									<p className="font-medium">{item.topic}</p>
								</div>
							))
							: day2Details.map((item, index) => (
								<div
									key={index}
									className="grid grid-cols-2 gap-4 text-center"
								>
									<p className="font-bold">{item.time}</p>

									<p className=" font-medium">{item.topic}</p>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
