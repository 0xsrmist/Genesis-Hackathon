import conference from "../../assets/images/conference.svg";
import SectionTitle from "../../ui/sectiontitle/SectionTitle";

function Conference() {
	return (
		<div className="flex flex-col gap-y-12">
			<div className="w-full flex justify-center md:justify-end md:px-96">
				<SectionTitle name={"CONFERENCE"} />
			</div>
			<div className="flex flex-col items-center md:items-start md:flex-row justify-evenly">
				<img className="w-96 h-96" src={conference} alt="" />
				<div className="w-[70%] text-center md:text-start md:w-[40%] text-white py-16 font-bold">
					Indulge in Genesis' enlightening side sessions, curated by our Join us
					for an engaging conference experience at Genesis, featuring
					illuminating side sessions led by our sponsors. Participants can delve
					into exclusive insights, providing a unique opportunity to expand
					their knowledge beyond the realms of blockchain and web3 technologies.
				</div>
			</div>
		</div>
	);
}

export default Conference;
