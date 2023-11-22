import logoImage from '../../assets/images/Group 16.svg';
import React, { useState } from 'react';

function navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="flex flex-col gap-2 p-2">
                <nav className="bg-gray-1000 p-7">
                    <div className="container mx-auto flex justify-between items-center">
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
                            <img src={logoImage} alt="Logo" className="p-5 w-5/6 sm:w-6/7 h-auto mx-auto w-full" />
                        </div>
                        <div className="hidden md:flex space-x-0 p-4 gap-[50px] text-white font-light lg:text-xl text-l">
                            {/* Links for larger screens */}
                            <a href="#home" className="hover:underline hover:text-gray-300">
                                Home
                            </a>
                            <a href="#about" className="hover:underline hover:text-gray-300">
                                About Us
                            </a>
                            <a href="#faqs" className="hover:underline hover:text-gray-300">
                                FAQs
                            </a>
                            <a href="#contact" className="hover:underline hover:text-gray-300">
                                Contact
                            </a>
                        </div>
                        <div className="flex p-4">
                            <button className="md:w-[160px] hidden md:flex md:h-[50px] rounded-[25px] tracking-wider font-bold text-white bg-gradient-to-r from-purple-800 to-black text-sm md:text-xl hover:underline">
                                REGISTER
                            </button>
                        </div>
                    </div>
                    {isDropdownOpen && (
                        <div className="md:hidden drop-shadow-md">
                            <div className="flex flex-col items-center mt-2">
                                <a href="#home" className="text-white hover:underline hover:text-gray-300 font-light py-2">
                                    Home
                                </a>
                                <a href="#about" className="text-white hover:underline hover:text-gray-300 font-light py-2">
                                    About Us
                                </a>
                                <a href="#faqs" className="text-white hover:underline hover:text-gray-300 font-light py-2">
                                    FAQs
                                </a>
                                <a href="#contact" className="text-white hover:underline hover:text-gray-300 font-light py-2">
                                    Contact
                                </a>
                                <button className="w-[90%] h-[50px] rounded-[6px] tracking-wider font-bold text-white bg-gradient-to-r from-purple-800 to-black text-sm md:text-xl hover:underline">
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

export default App;
