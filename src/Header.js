import React, { useState } from "react";
import { GiHamburgerMenu, GiProgression } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import {
	AiOutlineHome,
	AiOutlineInfoCircle,
	AiOutlineExperiment,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { MdOutlineSchool } from "react-icons/md";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
	const navListItemStyle =
		"inline px-3 text-sm hover:text-primary pb-3  border-primary cursor-pointer transition duration-300";
	const active = {
		color: "#2958FF",
		borderBottomWidth: "2px",
	};
	const activeMobileMenuItem =
		"transition duration-500 p-5 block hover:bg-primary/30  text-xl text-center";
	const mobileMenuIconStyle = "text-2xl mr-4";
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
							[
								"Home",
								"home",
								<AiOutlineHome className={mobileMenuIconStyle} />,
							],
							[
								"About",
								"about",
								<AiOutlineInfoCircle className={mobileMenuIconStyle} />,
							],
							[
								"Education",
								"education",
								<MdOutlineSchool className={mobileMenuIconStyle} />,
							],
							[
								"Experience",
								"experience",
								<AiOutlineExperiment className={mobileMenuIconStyle} />,
							],
							[
								"Portfolio",
								"portfolio",
								<GrProjects className={mobileMenuIconStyle} />,
							],
							[
								"Skills",
								"skills",
								<GiProgression className={mobileMenuIconStyle} />,
							],
						].map(([title, url, icon]) => (
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
								<div className="flex justify-center items-center">
									{icon}
									{title}
									{/* <AiOutlineHome className="text-2xl mr-4" /> */}
								</div>
							</Link>
						))}
					</ul>
				</nav>
			)}
		</>
	);
};

export default Header;
