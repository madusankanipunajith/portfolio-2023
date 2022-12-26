import React from "react";
import avatar from "./images/avatar 1.png";
import { BsLinkedin, BsGithub, BsBehance } from "react-icons/bs";

const About = () => {
	return (
		<section
			className="lg:grid grid-cols-12 gap-4 min-h-[500px] items-center"
			id="about"
		>
			<div className="col-start-2 col-span-10">
				<h1 className=" text-3xl font-bold text-center p-14">About me</h1>
				<div className="flex lg:flex-row flex-col pt-0 pb-20 px-10 lg:px-0 items-center">
					<div className="flex items-center lg:w-1/2">
						<div>
							{/* img */}
							<img src={avatar} className=" h-48" alt="avatar" />
						</div>
						<div className="ml-5">
							<h3 className="">Software Engineer</h3>
							<p className=" font-bold text-xl">Dimuthu Dhanushka</p>
							<div className="flex mt-8">
								<a href="#">
									<BsLinkedin className=" text-3xl mr-4 transition hover:text-primary" />
								</a>
								<a href="#">
									<BsGithub className=" text-3xl mr-4 transition hover:text-primary" />
								</a>
								<a href="#">
									<BsBehance className=" text-3xl mr-4 transition hover:text-primary" />
								</a>
							</div>
						</div>
					</div>
					<div className="lg:w-1/2 leading-8 mt-10 lg:mt-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						ultricies mattis est ultricies feugiat. Proin vel sagittis nunc,
						quis maximus nibh. Nullam ornare nisi eu urna eleifend, sit amet
						sagittis lorem molestie. Ut eu sollicitudin augue. Donec in accumsan
						mauris. Aeneanr.Lorem ipsum dolor sit amet, consecvel sagittis nunc,
						quis maximus nibh. Nullam ornare nisi eu urna eleifend, sit amet
						sagittis lorem molestie. Ut eu sollicitudin augue. Donec in accumsan
						mauris. Aeneanr.
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
