import SectionTitle from "../../ui/sectiontitle/SectionTitle";

const ContactUsSection = () => {
	return (
		<div id="contact" className="flex flex-col gap-y-6">
			<div className="flex items-center justify-center">
				<SectionTitle name={"CONTACT US"} />
			</div>
			<div className="flex flex-col lg:flex-row w-full gap-y-6 gap-x-20 justify-evenly items-center">
				<div className="md:w-[400px]">
					<div
						style={{
							backgroundColor: "#ffffff",
							padding: "20px",
							marginBottom: "20px",
							color: "black",
						}}
						className="rounded-md"
					>
						<h3 className="text-xl font-bold mb-5">Contact Information</h3>
						<div>
							<span className=" font-semibold">Email:</span>
							<span> tphsrmist@gmail.com</span>
						</div>
						<span className=" font-semibold">Phone:</span>
						<span> +91-9352917041, +91-6393221408</span>
					</div>
					<div
						style={{
							backgroundColor: "#ffffff",
							padding: "20px",
							color: "black",
						}}
						className="rounded-md"
					>
						<h3 className="text-xl font-bold mb-5">Address</h3>

						<p>SRM University</p>
						<p>Kattankulathur, Chennai</p>
					</div>
				</div>
				<div>
					<img
						src="src\assets\images\Picture1.png"
						alt="Contact"
						style={{
							borderRadius: "10px",
							height: "450px",
							width: "450px",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactUsSection;
