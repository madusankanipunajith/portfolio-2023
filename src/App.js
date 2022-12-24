import About from "./About";
import "./App.css";
import Exp from "./Exp";
import Header from "./Header";
import Hero from "./Hero";
import Port from "./Port";

function App() {
	return (
		<main className="bg-red-white h-screen px-[100px] text-dark">
			<Header />
			<Hero />
			<About />
			<Exp />
			<Port />
		</main>
	);
}

export default App;
