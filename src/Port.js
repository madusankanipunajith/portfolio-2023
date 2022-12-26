import React from "react";
import ProjectCard from "./components/ProjectCard";
import Fade from "react-reveal/Fade";

const Port = () => {
	return (
		<div id="portfolio">
			<h1 className=" text-3xl font-bold text-center pb-10 mt-6 ">Portfolio</h1>
			<section className="lg:grid grid-cols-12 gap-4 min-h-[600px] pb-28 p-10 lg:p-0">
				<ProjectCard
					link="#"
					title="OntoBot"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				ultricies mattis est ultricies feugiat. Proin vel sagittis nunc, quis
				maximus nibh. Nullam ornare nisi eu urna eleifend, sit amet sagittis
				lorem molestie. Ut eu sollicitudin augue. Donec in accumsan mauris.
				Aeneanr.Lorem ipsum dolor sit amet,"
				/>
				<ProjectCard
					link="#"
					title="OntoBot"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				ultricies mattis est ultricies feugiat. Proin vel sagittis nunc, quis
				maximus nibh. Nullam ornare nisi eu urna eleifend, sit amet sagittis
				lorem molestie. Ut eu sollicitudin augue. Donec in accumsan mauris.
				Aeneanr.Lorem ipsum dolor sit amet,"
				/>
				<ProjectCard
					link="#"
					title="OntoBot"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				ultricies mattis est ultricies feugiat. Proin vel sagittis nunc, quis
				maximus nibh. Nullam ornare nisi eu urna eleifend, sit amet sagittis
				lorem molestie. Ut eu sollicitudin augue. Donec in accumsan mauris.
				Aeneanr.Lorem ipsum dolor sit amet,"
				/>
				<ProjectCard
					link="#"
					title="OntoBot"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				ultricies mattis est ultricies feugiat. Proin vel sagittis nunc, quis
				maximus nibh. Nullam ornare nisi eu urna eleifend, sit amet sagittis
				lorem molestie. Ut eu sollicitudin augue. Donec in accumsan mauris.
				Aeneanr.Lorem ipsum dolor sit amet,"
				/>
			</section>
		</div>
	);
};

export default Port;
