import { useState } from "react";
import arrow from "../../assets/icons/arrow.svg";
import SectionTitle from "../../ui/sectiontitle/SectionTitle";

// eslint-disable-next-line react/prop-types
const FaqItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			style={{
				background: "linear-gradient(90deg, #9359d4, #5d59d4, #60aae6)", // Linear gradient with three colors
				borderRadius: "10px",
				marginBottom: "10px",
				overflow: "hidden",
				position: "relative",
			}}
			className={`faq-item ${isOpen ? "open" : ""}`}
		>
			<div
				style={{
					padding: "25px",
					cursor: "pointer",
					fontWeight: "bold",
					color: "#ffffff",
				}}
				onClick={toggleAccordion}
				className="faq-question"
			>
				{question}
				<span
					style={{
						position: "absolute",
						top: "37px",
						right: "15px",
						transform: `translateY(-50%) rotate(${isOpen ? "0deg" : "180deg"})`, // Rotate arrow for open/close state
						transition: "",
						fontSize: "1.5em",
					}}
				>
					<img src={arrow} />
				</span>
			</div>
			{isOpen && (
				<div
					style={{
						paddingLeft: "25px",
						paddingRight: "25px",
						paddingBottom: "25px",
						color: "#ffffff",
					}}
					className="faq-answer"
				>
					{answer}
				</div>
			)}
		</div>
	);
};

const FaqSection = () => {
	const faqData = [
		{
			question: "What is Genesis ?",
			answer:
				"Genesis is a PAN India 2-day hybrid hackathon organized by TPHxSRMIST aimed at empowering the web3 culture in the Indian space. The event is a unique opportunity for students to learn, collaborate, and showcase their skills in the field of blockchain and web3 technologies.",
		},
		{
			question: "Who can participate ?",
			answer:
				"Unleash your potential and embrace boundless opportunities! Whether you're a passionate enthusiast or a seasoned expert, a curious developer or a visionary entrepreneur, we extend a heartfelt invitation to join Genesis. If you harbor a profound interest in Web3 and an unwavering determination to shape its future, we warmly welcome you to embark on this transformative journey with us.",
		},
		{
			question: "Is the hackathon offline or online ?",
			answer:
				"The hackathon will be in hybrid mode. Students from Chennai will be attending the hackathon in offline mode whereas students from other regions will be joining us online.",
		},
		{
			question: "Can we participate as an individual ?",
			answer:
				"Certainly, while individual participation is allowed, we highly recommend joining a team. Collaborating with others not only enhances the learning experience but also fosters a rich exchange of ideas and skills.",
		},
		{
			question: "Did we miss something ?",
			answer:
				"Please reach out to us at tphsrmist@gmail.com if you have any questions that we might have missed.",
		},

		// Add more FAQ items as needed
	];

	return (
		<div
			id="faqs"
			style={{
				width: "70%",
				margin: "20px auto",
			}}
			className="flex flex-col gap-5 max-w-[800px]"
		>
			<div className="flex items-center justify-center">
				<SectionTitle name={"FAQs"} />
			</div>
			{faqData.map((item, index) => (
				<FaqItem key={index} question={item.question} answer={item.answer} />
			))}
		</div>
	);
};

export default FaqSection;
