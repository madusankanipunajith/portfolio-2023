import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
	const [params, setParams] = useState({
		subject: "TEST-subject",
		firstname: "fname",
		lastname: "lname",
		email: "email",
		phone: "phone",
		message: "msg here",
	});

	const [loading, setLoading] = useState(false);

	const sendMail = () => {
		setLoading(true);
		emailjs
			.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				params,
				process.env.REACT_APP_USER_ID
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
					alert.show("Sent successfully", {
						type: "success",
					});
					setLoading(false);
				},
				(err) => {
					console.log("FAILED...", err);
					alert.show("Failed", {
						type: "error",
					});
					setLoading(false);
				}
			);
	};

	const alert = useAlert();

	return (
		<section
			className="grid grid-cols-12 gap-4 lg:mt-24 mb-10 min-h-[600px] "
			id="contact"
		>
			<div className="col-start-2 col-span-10 ">
				<h1 className=" text-3xl font-bold text-center pb-10 mt-6">
					Contact me
				</h1>
				{loading && (
					<AiOutlineLoading3Quarters className="animate-spin mr-3 text-xl text-primary" />
				)}

				<div className="w-1/2 flex flex-col ">
					<input
						type="text"
						className="rounded-md mt-3 transition border-2 border-gray-200 focus:border-primary outline-none py-2 px-4 text-lg w-full"
						placeholder="Name"
					/>
					<input
						type="email"
						className="rounded-md mt-3 transition border-2 border-gray-200 focus:border-primary outline-none py-2 px-4 text-lg w-full"
						placeholder="Email"
					/>
					<textarea
						className="rounded-md mt-3 transition border-2 border-gray-200 focus:border-primary outline-none py-2 px-4 text-lg w-full"
						rows="4"
						placeholder="Your message . . ."
					/>
					<button
						onClick={() => sendMail()}
						className="self-end mt-5 transition duration-500 flex flex-row items-center tracking-wider px-5 py-3 rounded-md bg-primary text-white font-bold border-2 border-primary hover:bg-white hover:border-primary hover:text-primary"
					>
						SEND MESSAGE
					</button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
