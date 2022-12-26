import React from "react";
import defaultImg from "./../images/undraw_progressive_app_m-9-ms.svg";

const ProjectCard = ({ title, description, img, link }) => {
	return (
		<div className="col-span-4 shadow-md p-8 rounded-md flex flex-col mb-5 lg:mt-5">
			<img src={img ? img : defaultImg} alt="img" />
			<h2 className="mt-10 mb-5 font-bold text-xl">{title}</h2>
			<p className="">{description}</p>
			<a
				className="transition self-end mt-5 text-sm text-white hover:text-primary  border-2 bg-primary hover:bg-white border-primary rounded px-3 py-2"
				href={link}
			>
				VIEW PROJECT
			</a>
		</div>
	);
};

export default ProjectCard;
