import Faqs from "./components/faqs/Faqs.jsx";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutus/AboutUs";
import Conference from "./components/conference/Conference";
import Footer from "./components/footer/Footer";
import Sponsors from "./components/sponsors/Sponsors.jsx";
import Prizes from "./components/prizes/Prizes.jsx";
import Hackathon from "./components/hackathon/Hackathon.jsx";
import ContactUsSection from "./components/contactus/ContactUs.jsx";
import Timeline from "./components/timeline/Timeline.jsx";
function App() {
	return (
		<>
			<div className="justify-center items-center flex flex-col gap-y-20 p-2 w-full">
				<Navbar />
				<Hero />
				<AboutUs />
				<Conference />
				<Hackathon />
				{/* <Prizes /> */}
				<Timeline />
				<Sponsors />
				<Faqs />
				<ContactUsSection />
				<Footer />
			</div>
		</>
	);
}

export default App;
