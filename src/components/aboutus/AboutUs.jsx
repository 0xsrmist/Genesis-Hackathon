import SectionTitle from "../../ui/sectiontitle/SectionTitle";
import genesis_logo from "../../assets/images/Genesis_title.png";

const AboutUs = () => {
	return (
		<div id="about" className="flex flex-col gap-y-16">
			<div className="flex items-center justify-center">
				<SectionTitle name={"ABOUT GENESIS"} />
			</div>
			<div className="flex items-center gap-y-6 flex-col-reverse md:flex-row md:justify-evenly">
				<div className="text-white text-base w-[60%] md:w-[40%] font-bold">
					Genesis is a PAN India 2-day hybrid hackathon organized by TPHxSRMIST
					aimed at empowering the web3 culture in the Indian space. The event is
					a unique opportunity for students to learn, collaborate, and showcase
					their skills in the field of blockchain and web3 technologies.
				</div>
				{/* <div className="bg-[#D9D9D9] w-[40vw] h-52"></div> */}
				<img src={genesis_logo} className="w-96 h-44 mb-10" alt="" />
			</div>
		</div>
	);
};

export default AboutUs;
