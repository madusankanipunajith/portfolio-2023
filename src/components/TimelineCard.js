import React from "react";
import { MdOutlinePlace, MdOutlineDateRange } from "react-icons/md";

const TimelineCard = ({ type, title, place, date, description }) => {
	return (
		<div className="flex flex-row bg-light p-6 mb-5 rounded-md">
			<div className="w-2/5">
				<h2 className="font-bold text-xl">{type}</h2>
				<div className="flex flex-row items-center ">
					<MdOutlinePlace className="text-xl mt-3" />
					<p className="mt-3 ml-2">{place}</p>
				</div>
				<div className="flex flex-row items-center ">
					<MdOutlineDateRange className="text-xl mt-2" />
					<p className="mt-2 ml-2">{date}</p>
				</div>
			</div>
			<div className="w-3/5">
				<h2 className="font-bold text-xl">{title}</h2>
				<p className=" leading-8 mt-3">{description}</p>
			</div>
		</div>
	);
};

export default TimelineCard;
