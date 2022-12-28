import React from "react";
import Slide from "react-reveal/Fade";
import TimelineCard from "./components/TimelineCard";

const Exp = () => {
	return (
		<section
			className="grid grid-cols-12 gap-4 mb-10 min-h-[600px]"
			id="experience"
		>
			<div className="col-start-2 col-span-10 ">
				<h1 className=" text-3xl font-bold text-center pb-10 mt-6">
					Experience
				</h1>
				<Slide bottom>
					<TimelineCard
						type="Bachelors Degree"
						title="BSc. (HONS) in Computer Science"
						place="University of Colombo"
						date="2019 - 2023"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies mattis est ultricies feugiat. Proin vel sagittis nunc, quis maximus nibh. Nullam"
					/>
					<TimelineCard
						type="School Education"
						title="GCE O/L and A/L"
						place="Bandaranayake College"
						date="2014 - 2017"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies mattis est ultricies feugiat. Proin vel sagittis nunc, quis maximus nibh. Nullam"
					/>
				</Slide>
			</div>
		</section>
	);
};

export default Exp;
