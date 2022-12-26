import React from "react";
import { MdOutlinePlace, MdOutlineDateRange } from "react-icons/md";

const TimelineCard = ({ type, title, place, date, description }) => {
	return (
		<div className="flex lg:flex-row flex-col bg-light p-6 mb-5 rounded-md items">
			<div className="lg:w-2/5">
				<h2 className="font-light text-xl text-primary tracking-wider">{type.toUpperCase()}</h2>
				<div className="flex flex-row items-center ">
					<MdOutlinePlace className="text-xl mt-3" />
					<p className="mt-3 ml-2">{place}</p>
				</div>
				<div className="flex flex-row items-center ">
					<MdOutlineDateRange className="text-xl mt-2" />
					<p className="mt-2 ml-2">{date}</p>
				</div>
			</div>
			<div className="lg:w-3/5">
				<h2 className="font-bold text-xl mt-5 lg:mt-0">{title}</h2>
				<p className=" leading-8 mt-2">{description}</p>
			</div>
		</div>
	);
};

export default TimelineCard;
