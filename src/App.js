import About from "./About";
import "./App.css";
import Edu from "./Edu";
import Exp from "./Exp";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Port from "./Port";
import Skills from "./Skills";
import bgImg from "./images/undraw_hello_re_3evm.svg";
import bgImgLeft from "./images/undraw_feeling_proud_qne1.svg";
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
} from "react-scroll";

function App() {
	return (
		<main className="h-screen text-dark">
			<div className="lg:px-[100px] bg-white/60 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-30">
				<div className="">
					<Header />

				</div>
			</div>
			<div className="md:px-[100px] relative">
				<Hero />
				<div classname="">
					<img
						className="absolute bottom-0 right-0 lg:w-1/2 w-full opacity-20 lg:opacity-95 z-1"
						src={bgImg}
						alt="img"
					/>
					<img
						className="absolute -bottom-20 opacity-10 -left-10 w-1/3  z-1 hidden lg:block"
						src={bgImgLeft}
						alt="img"
					/>
				</div>
			</div>
			<div className=" md:px-[100px] relative bg-gradient-to-b from-[#BBDBFF] to-white">
				<About />
			</div>
			<div className="md:px-[100px]">
				<Edu />
				<Exp />
				<Port />
				<Skills />
			</div>
			<Footer />
		</main>
	);
}

export default App;
