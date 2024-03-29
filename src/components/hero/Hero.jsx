import devfolio from "../../assets/icons/devfolio.png";
import heroPhoto from "../../assets/images/heroSection.svg";
import clipPathIcon from "../../assets/icons/clipPath.png";
import discordIcon from "../../assets/icons/discordIcon.svg";
import heroSmallPhoto from "../../assets/images/hero_smallbox.svg";
import calendar from "../../assets/images/calendar.png";

export default function Hero() {
	return (
		<div
			id="home"
			className="Hero-section flex flex-col md:flex-row lg:px-16  h-auto"
		>
			<div className="section1 p-4 lg:p-16 lg:w-3/5 flex flex-col gap-y-10">
				<div className="about flex flex-col text-center lg:text-start">
					<h1 className=" text-7xl flex-shrink-0 font-poppins font-bold tracking-wide bg-gradient-to-r from-indigo-800 to-teal-400  bg-clip-text text-transparent mb-2">
						GENESIS
					</h1>
					<div className="flex flex-col items-center justify-center flex-shrink-0 text-white font-poppins text-20 font-semibold leading-normal pr-107">
						Join us for the Genesis experience, a 2-day journey at TPHxSRMIST&apos;s
						newest hackfest. Harness your talent and dive into the realm of
						blockchain and web3 technologies, and be part in shaping India&apos;s
						web3 culture. Join hands with fellow students, learn, create, and
						showcase your skills in this electrifying event. Be a trailblazer in
						the future of technology
					</div>
				</div>

				<div className="flex flex-col w-full justify-center md:flex-row lg:flex-col gap-3 ">
					<div className="flex gap-x-2 items-center">
						<img className="w-12" src={calendar} alt="date of the event" />
						<span className="text-white font-poppins font-bold leading-normal">
							30<sup>TH</sup> TO 31<sup>ST</sup>JAN 2024
						</span>
					</div>
					<div className="flex flex-row gap-x-4 items-center ml-[-10px]">
						<img className="w-12" src={clipPathIcon} alt="venue" />
						<span className="text-white font-bold leading-normal">
							MINI HALL-2
						</span>
					</div>
				</div>

				<div className="hero-buttons -pl-10 flex flex-col gap-y-4 sm:flex-row justify-center lg:justify-start">
					<button
						className="w-90 h-12 flex-shrink-0 rounded-full bg-[#1A72FF] px-4 py-8 flex items-center justify-center font-semibold max-w-1/2 w-auto mr-2"
						onClick={() =>
							window.open("https://genesis-tphsrmist.devfolio.co/", "_blank")
						}
					>
						<img
							src={devfolio}
							alt="devfolio"
							className="w-8 h-8 flex-shrink-0"
						/>
						<span className="ml-1">Apply from Devfolio</span>
					</button>

					<button
						className="w-90 h-12 flex-shrink-0 rounded-full bg-[#5865F2] px-6 py-8 font-semibold ml-3 flex justify-center items-center max-w-1/2 w-auto"
						onClick={() =>
							window.open("https://discord.com/invite/p4FAJdhQRv", "_blank")
						}
					>
						<img
							src={discordIcon}
							alt="Discord"
							className="w-8 h-8 flex-shrink-0"
						/>
						<span className="ml-4">Join Discord</span>
					</button>
				</div>
			</div>
			<div className="section2 hidden lg:flex flex-col items-center justify-center">
				<img
					src={heroPhoto}
					alt="hero"
					className="inline-flex pt-12"
				/>
			</div>
		</div>
	);
}
