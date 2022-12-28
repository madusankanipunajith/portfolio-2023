import React from "react";
import SkillCard from "./components/SkillCard";

const Skills = () => {
	return (
		<>
			<h1 className=" text-3xl font-bold text-center pb-10 mt-20">Skills</h1>
			<section
				className="lg:grid flex flex-col grid-cols-12 gap-4 mb-10 "
				id="skills"
			>
				<SkillCard
					title="Programming languages"
					items={[
						"JavaScript",
						"Python",
						"C++",
						"C",
						"Java",
						"PHP",
						"CSS/Sass",
					]}
				/>
				<SkillCard
					title="Libraries & Frameworks"
					items={[
						"React",
						"ReactNative",
						"Node.js",
						"Express",
						"Flask",
						"jQuery",
					]}
				/>
				<SkillCard
					title="Tools & Platforms"
					items={["Git", "Firebase", "Wordpress"]}
				/>
				<SkillCard
					title="Other"
					items={["Figma", "AdobeXD", "MySQL", "PostgresSQL", "MongoDB"]}
				/>
			</section>
		</>
	);
};

export default Skills;
