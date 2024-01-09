import logoImage from "../../assets/images/Genesis_logo.svg";
import { useState } from "react";

export default function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<>
			<div className="flex flex-col w-full gap-3 p-3">
				<nav className="flex-col md:flex-row flex justify-between w-full">
					<div className="w-full flex justify-between items-center">
						<div className="md:hidden hover:drop-shadow-md">
							<button
								type="button"
								className="text-white hover:text-gray-300 focus:outline-none"
								onClick={toggleDropdown}
							>
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							</button>
						</div>
						<div>
							<img
								src={logoImage}
								alt="Logo"
								className="p-5 w-5/6 sm:w-6/7 h-auto mx-auto"
							/>
						</div>
						<div className="hidden md:flex md:w-[40%] space-x-0 p-4 gap-3 justify-between text-white font-light text-xl">
							{/* Links for larger screens */}
							<a
								href="#home"
								className="hover:underline hover:text-gray-300 font-normal"
							>
								Home
							</a>
							<a
								href="#about"
								className="hover:underline hover:text-gray-300 font-normal"
							>
								About Us
							</a>
							<a
								href="#faqs"
								className="hover:underline hover:text-gray-300 font-normal"
							>
								FAQs
							</a>
							<a
								href="#contact"
								className="hover:underline hover:text-gray-300 font-normal"
							>
								Contact
							</a>
						</div>
						<div className="hidden md:flex">
							<button className=" rounded-full py-3 px-8 bg-gradient-to-r from-purple-800 to-black tracking-wider font-bold text-white text-xl hover:underline">
								REGISTER
							</button>
						</div>
					</div>
					{isDropdownOpen && (
						<div className="md:hidden drop-shadow-md sticky z-20">
							<div className="flex flex-col gap-3 items-center mt-2">
								<a
									href="#home"
									className="text-white hover:underline hover:text-gray-300 font-light py-2"
								>
									Home
								</a>
								<a
									href="#about"
									className="text-white hover:underline hover:text-gray-300 font-light py-2"
								>
									About Us
								</a>
								<a
									href="#faqs"
									className="text-white hover:underline hover:text-gray-300 font-light py-2"
								>
									FAQs
								</a>
								<a
									href="#contact"
									className="text-white hover:underline hover:text-gray-300 font-light py-2"
								>
									Contact
								</a>
								<button className=" h-[50px] rounded-full px-10 py-2 tracking-wider font-bold text-white bg-gradient-to-r from-purple-800 to-black text-sm md:text-xl hover:underline">
									REGISTER
								</button>
							</div>
						</div>
					)}
				</nav>
			</div>
		</>
	);
}
