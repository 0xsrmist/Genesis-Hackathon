import hackathonimage from "../../assets/images/hackathon.svg";
import SectionTitle from "../../ui/sectiontitle/SectionTitle";

function Hackathon() {
	return (
		<div className="flex flex-col gap-y-12">
			<div className="w-full flex justify-center md:justify-start md:px-80">
				<SectionTitle name={"HACKATHON"} />
			</div>
			<div className="flex flex-col-reverse items-center md:items-start md:flex-row justify-evenly">
				<div className="w-[70%] text-center md:text-start md:w-[40%] text-white py-16 font-bold">
					Experience the pulse of innovation during the 2-day Genesis hackathon,
					where students collaborate to unlock the potential of blockchain and
					web3 technologies. This transformative event invites participants to
					showcase their skills, fostering a dynamic atmosphere that propels
					India's web3 culture forward. Seize the opportunity to be a catalyst
					for technological advancement and win some amazing bounties alongside.
				</div>
				<img className="w-96 h-96" src={hackathonimage} alt="" />
			</div>
		</div>
	);
}

export default Hackathon;
