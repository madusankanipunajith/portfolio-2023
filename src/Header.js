import React from "react";

const Header = () => {
	const navListItemStyle = "inline px-3 text-sm hover:text-primary pb-3 hover:border-b-2 border-primary";

	return (
		<section className="grid grid-cols-12 gap-4">
			<div className="col-start-2 col-span-10">
				<div className=" flex flex-row pb-5 pt-2 justify-between items-center cursor-pointer">
					{/* LOGO */}
					<div className="flex items-center">
						<div className="flex flex-col rounded-full w-16 h-16 text-center justify-center bg-primary">
							<p className=" text-white font-bold text-2xl">DD</p>
						</div>
						<div className="ml-3">
							<p className="font-bold">D. Dhanushka</p>
							<p>Personal</p>
						</div>
					</div>

					{/* NAVBAR */}
					<nav>
						<ul className="list-none">
							<li className={navListItemStyle}>
								<a href="">Home</a>
							</li>
							<li className={navListItemStyle}>
								<a href="#">About me</a>
							</li>
							<li className={navListItemStyle}>
								<a href="#">Education</a>
							</li>
							<li className={navListItemStyle}>
								<a href="#">Experience</a>
							</li>
							<li className={navListItemStyle}>
								<a href="#">Portfolio</a>
							</li>
							<li className={navListItemStyle}>
								<a href="#">Skills</a>
							</li>
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
