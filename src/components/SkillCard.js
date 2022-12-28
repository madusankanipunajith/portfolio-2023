import React from "react";

const SkillCard = ({ title, items }) => {
	return (
		<div className="lg:col-span-3 p-5 rounded-md flex flex-col items-center bg-light">
			<h2 className="font-light mb-5 text-lg text-primary text-center">
				{title}
			</h2>

			{items.map((it) => (
				<p>{it}</p>
			))}
		</div>
	);
};

export default SkillCard;
