import React from "react";
import * as Scroll from "react-scroll";
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

const Header = () => {
	const navListItemStyle =
		"inline px-3 text-sm hover:text-primary pb-3  border-primary cursor-pointer transition duration-300";
	const active = {
		color: "#2958FF",
		borderBottomWidth: "2px",
	};
	return (
		<section className="grid grid-cols-12 gap-4">
			<div className="col-start-2 col-span-10">
				<div className=" flex flex-row py-3 justify-between items-center">
					{/* LOGO */}
					<div className="flex items-center">
						<div className="flex flex-col rounded-full w-16 h-16 text-center justify-center bg-primary">
							<p className=" text-white font-bold text-2xl ">DD</p>
						</div>
						<div className="ml-3">
							<p className="font-bold">D. Dhanushka</p>
							<p>Personal</p>
						</div>
					</div>

					{/* NAVBAR */}
					<nav>
						<ul className="list-none">
							<Link
								className={navListItemStyle}
								activeStyle={active}
								to="home"
								spy={true}
								smooth={true}
								offset={-160}
								duration={500}
							>
								Home
							</Link>
							<Link
								className={navListItemStyle}
								activeStyle={active}d
								to="about"
								spy={true}
								smooth={true}
								offset={-80}
								duration={500}
							>
								About
							</Link>
							<Link
								className={navListItemStyle}
								activeStyle={active}
								to="education"
								spy={true}
								smooth={true}
								offset={-110}
								duration={500}
							>
								Education
							</Link>
							<Link
								className={navListItemStyle}
								activeStyle={active}
								to="experience"
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
							>
								Experience
							</Link>
							<Link
								className={navListItemStyle}
								activeStyle={active}
								to="portfolio"
								spy={true}
								smooth={true}
								offset={-120}
								duration={500}
							>
								Portfolio
							</Link>
							<Link
								className={navListItemStyle}
								activeStyle={active}
								to="skills"
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
							>
								Skills
							</Link>
						</ul>
					</nav>

					{/* TALK NOW */}
					{/* <p>Talk now</p> */}
				</div>
			</div>
		</section>
	);
};

export default Header;
