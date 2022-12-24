import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Hero = () => {
	// const particlesInit = useCallback(async (engine) => {
	// 	console.log(engine);
	// 	// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
	// 	// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
	// 	// starting from v2 you can add only the features you need reducing the bundle size
	// 	await loadFull(engine);
	// }, []);

	// const particlesLoaded = useCallback(async (container) => {
	// 	await console.log(container);
	// }, []);
	return (
		<section className="grid grid-cols-12 gap-4 h-full mt-1 w-2/3">
			<div className="col-start-2 col-span-10 py-20 h-[600px]">
				<div>
					<h1 className=" font-bold text-5xl">
						I'm <span className=" text-primary">Dimuthu</span> Dhanushka
					</h1>
					<h2 className=" text-3xl font-bold mt-4">
						Software Engineer | Designer
					</h2>
					<p className=" text-xl mt-7 font-sp">
						I design and develop services for customers of all sizes,
						specializing in creating stylish, modern websites, web services and
						online stores.
					</p>

					<div className="mt-12">
						<button className="tracking-wider px-5 py-3 rounded-md bg-primary text-white font-bold border-2 border-primary hover:bg-white hover:border-primary hover:text-primary">
							DOWNLOAD CV
						</button>
					</div>
				</div>
			</div>
		</section>
		// <div>
		// 	<Particles
		// 		id="tsparticles"
		// 		init={particlesInit}
		// 		style={{
		// 			position: "absolute",
		// 			width: "100%",
		// 			height: "100%",
		// 			zIndex: -1,
		// 		}}
		// 		loaded={particlesLoaded}
		// 		options={{
		// 			// fullScreen: {
		// 			// 	enable: true,
		// 			// 	zIndex: -1,
		// 			// },
		// 			background: {
		// 				color: {
		// 					value: "#0d47a1",
		// 				},
		// 			},
		// 			fpsLimit: 120,
		// 			interactivity: {
		// 				events: {
		// 					onClick: {
		// 						enable: true,
		// 						mode: "push",
		// 					},
		// 					onHover: {
		// 						enable: true,
		// 						mode: "repulse",
		// 					},
		// 					resize: true,
		// 				},
		// 				modes: {
		// 					push: {
		// 						quantity: 4,
		// 					},
		// 					repulse: {
		// 						distance: 200,
		// 						duration: 0.4,
		// 					},
		// 				},
		// 			},
		// 			particles: {
		// 				color: {
		// 					value: "#ffffff",
		// 				},
		// 				links: {
		// 					color: "#ffffff",
		// 					distance: 150,
		// 					enable: true,
		// 					opacity: 0.5,
		// 					width: 1,
		// 				},
		// 				collisions: {
		// 					enable: true,
		// 				},
		// 				move: {
		// 					directions: "none",
		// 					enable: true,
		// 					outModes: {
		// 						default: "bounce",
		// 					},
		// 					random: false,
		// 					speed: 6,
		// 					straight: false,
		// 				},
		// 				number: {
		// 					density: {
		// 						enable: true,
		// 						area: 800,
		// 					},
		// 					value: 80,
		// 				},
		// 				opacity: {
		// 					value: 0.5,
		// 				},
		// 				shape: {
		// 					type: "circle",
		// 				},
		// 				size: {
		// 					value: { min: 1, max: 5 },
		// 				},
		// 			},
		// 			detectRetina: true,
		// 		}}
		// 	/>
		// </div>
	);
};

export default Hero;
