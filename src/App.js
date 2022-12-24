import About from "./About";
import "./App.css";
import Exp from "./Exp";
import Header from "./Header";
import Hero from "./Hero";
import Port from "./Port";

function App() {
	return (
		<main className="bg-red-white h-screen  text-dark">
			<div className=" shadow-lg">
				<Header />
			</div>
			<div className="px-[100px]">
				<Hero />
				<About />
				<Exp />
				<Port />
			</div>
		</main>
	);
}

export default App;
