import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import * as Scroll from "react-scroll";
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
} from "react-scroll";

const Header = () => {
	const navListItemStyle =
		"inline px-3 text-sm hover:text-primary pb-3  border-primary cursor-pointer transition duration-300";
	const active = {
		color: "#2958FF",
		borderBottomWidth: "2px",
	};
	const activeMobileMenuItem =
		"transition duration-500 p-5 block hover:bg-primary/30  text-xl text-center";

	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

	return (
		<>
			<section className="md:grid grid-cols-12 gap-4">
				<div className="col-start-2 col-span-10">
					<div className=" flex flex-row py-3 px-5 lg:px-0 justify-between items-center">
						{/* LOGO */}
						<div className="flex items-center">
							<div className="flex flex-col rounded-full w-16 h-16 text-center justify-center bg-primary">
								<p className=" text-white font-bold text-2xl  ">DD</p>
							</div>
							<div className="ml-3">
								<p className="font-bold">D. Dhanushka</p>
								<p>Personal</p>
							</div>
						</div>

						{/* Mobile */}
						<button
							className="block lg:hidden"
							onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
						>
							{mobileMenuVisible ? (
								<IoCloseOutline className=" text-primary text-3xl hover:text-dark" />
							) : (
								<GiHamburgerMenu className=" text-primary text-3xl hover:text-dark " />
							)}
						</button>

						{/* NAVBAR */}
						<nav className="hidden lg:block ">
							<ul className="list-none">
								{[
									["Home", "home"],
									["About", "about"],
									["Education", "education"],
									["Experience", "experience"],
									["Portfolio", "portfolio"],
									["Skills", "skills"],
								].map(([title, url]) => (
									<Link
										className={navListItemStyle}
										activeStyle={active}
										to={url}
										spy={true}
										smooth={true}
										offset={-160}
										duration={500}
									>
										{title}
									</Link>
								))}
							</ul>
						</nav>

						{/* <p>Talk now</p> */}
					</div>
				</div>
			</section>
			{mobileMenuVisible && (
				<nav className="block lg:hidden ">
					<ul className="list-none h-screen">
						{[
							["Home", "home"],
							["About", "about"],
							["Education", "education"],
							["Experience", "experience"],
							["Portfolio", "portfolio"],
							["Skills", "skills"],
						].map(([title, url]) => (
							<Link
								className={activeMobileMenuItem}
								onClick={() =>
									setTimeout(() => {
										setMobileMenuVisible(false);
									}, 1000)
								}
								to={url}
								spy={true}
								smooth={true}
								offset={-160}
								duration={500}
							>
								{title}
							</Link>
						))}
					</ul>
				</nav>
			)}
		</>
	);
};

export default Header;
