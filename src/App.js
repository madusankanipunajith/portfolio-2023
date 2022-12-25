import About from "./About";
import "./App.css";
import Exp from "./Exp";
import Header from "./Header";
import Hero from "./Hero";
import Port from "./Port";

function App() {
	return (
		<main className="h-screen text-dark">
			<div className="px-[100px] shadow-lg">
				<Header />
			</div>
			<div className="px-[100px]">
				<Hero />
			</div>
			<div className=" px-[100px] bg-gradient-to-b from-[#BBDBFF] to-white">
				<About />
			</div>
			<div className="px-[100px]">
				<Exp />
				<Port />
			</div>
		</main>
	);
}

export default App;
