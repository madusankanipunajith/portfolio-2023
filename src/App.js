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
import bgImgLeft from "./images/undraw_feeling_proud_qne1.svg"

function App() {
	return (
		<main className="h-screen text-dark">
			<div className="px-[100px] bg-white/60 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-30">
				<div className="">
					<Header />
				</div>
			</div>
			<div className="px-[100px] relative">
				<Hero />
				<div classname="">
					<img
						className="absolute bottom-0 right-0 w-1/2 opacity-95"
						src={bgImg}
						alt="img"
					/>
					<img
						className="absolute -bottom-10 -left-10 w-1/3 opacity-10"
						src={bgImgLeft}
						alt="img"
					/>
				</div>
			</div>
			<div className=" px-[100px] relative bg-gradient-to-b from-[#BBDBFF] to-white">
				<About />
			</div>
			<div className="px-[100px]">
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
