import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";
import { AiOutlineLoading3Quarters, AiFillGithub } from "react-icons/ai";
import { MdPlace, MdEmail } from "react-icons/md";
const Contact = () => {
	const [params, setParams] = useState({
		subject: "",
		firstname: "",
		email: "",
		phone: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleSendMsg = () => {
		if (validateEmail(params.email) === false) {
			console.log("error mail");
			alert.show("Email error", {
				type: "error",
			});
			return;
		}
		if (
			params.firstname === "" ||
			params.subject === "" ||
			params.message === ""
		) {
			alert.show("Empty fields", {
				type: "error",
			});
			console.log("empty fields");
			return;
		}
		console.log("all good");
		// send mail
		sendMail();
		setParams({
			subject: "",
			firstname: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	function validateEmail(mail) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
			return true;
		}
		return false;
	}

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

	const formTextBoxStyle =
		"rounded-md mb-3 transition border-2 border-gray-200 focus:border-primary outline-none py-2 px-3 text-sm w-full";
	const labelStyle = " text-sm mb-2 text-gray-600";

	return (
		<section
			className="grid grid-cols-12 gap-4 lg:mt-24 mb-10 min-h-[600px] "
			id="contact"
		>
			<div className="col-start-2 col-span-10 ">
				<h1 className=" text-3xl font-bold text-center pb-10 mt-6">
					Contact me
				</h1>

				<div className="flex lg:flex-row flex-col ">
					<div className="lg:w-1/2 flex flex-col ">
						<label className={labelStyle}>Subject:</label>
						<input
							type="text"
							className={formTextBoxStyle}
							placeholder="Subject"
							onChange={(e) =>
								setParams({ ...params, subject: e.target.value })
							}
							value={params.subject}
						/>
						<label className={labelStyle}>Name:</label>
						<input
							type="text"
							className={formTextBoxStyle}
							placeholder="Name"
							onChange={(e) =>
								setParams({ ...params, firstname: e.target.value })
							}
							value={params.firstname}
						/>
						<label className={labelStyle}>Email:</label>
						<input
							type="email"
							className={formTextBoxStyle}
							placeholder="Email"
							onChange={(e) => setParams({ ...params, email: e.target.value })}
							value={params.email}
						/>
						<label className={labelStyle}>Message:</label>
						<textarea
							className={formTextBoxStyle}
							rows="4"
							placeholder="Your message . . ."
							onChange={(e) =>
								setParams({ ...params, message: e.target.value })
							}
							value={params.message}
						/>
						{loading ? (
							<AiOutlineLoading3Quarters className="self-end animate-spin mr-3 text-3xl text-primary mt-5" />
						) : (
							<button
								onClick={() => handleSendMsg()}
								className="self-end mt-5 transition duration-500 flex flex-row items-center tracking-wider px-5 py-3 rounded-md bg-primary text-white font-bold border-2 border-primary hover:bg-white hover:border-primary hover:text-primary"
							>
								SEND MESSAGE
							</button>
						)}
					</div>

					<div className="lg:w-1/2 flex flex-col px-5 py-3 mt-5 lg:mt-0">
						<p>
							Here is a good spot for a message to your readers to let them know
							how best to reach out to you.
						</p>
						<div className="flex items-center mt-4">
							<MdEmail className=" text-dark text-2xl mr-3" />
							<a href="mailto: dmtdhanushka@gmail.com">
								dmtdhanushka@gmail.com
							</a>
						</div>
						<div className="flex items-center mt-4">
							<MdPlace className=" text-dark text-2xl mr-3" />
							<p>Western Province, Sri Lanka</p>
						</div>
						<div className="flex items-center mt-4">
							<AiFillGithub className=" text-dark text-2xl mr-3" />

							<a href="http://github.com/ddhanushka" target="_blank">
								github.com/ddhanushka
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
