import { useState, useEffect } from "react";
import ellipsisIcon from "../images/icon-ellipsis.svg";

function Card({
	backgroundColor = null,
	backgroundIcon = null,
	title = null,
	time = null,
	durationTime = null,
	durationDesc = null,
}) {
	const [onLoadClasses, setOnLoadClasses] = useState("opacity-0");
	useEffect(() => {
		const timeout = setTimeout(() => {
			setOnLoadClasses("opacity-100");
		}, 300);

		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	}, []);

	return (
		<section
			className={`transition ease-in-out duration-300 ${onLoadClasses} font-rubik rounded-xl text-white overflow-hidden ${backgroundColor}`}
		>
			<div
				className={`bg-[right_8px_top] h-8 bg-no-repeat bg-[length:3rem] ${backgroundIcon}`}
			></div>
			<div className="bg-neutral-dark-blue hover:cursor-pointer hover:bg-neutral-dark-blue/80 flex flex-col p-6">
				<div className="flex flex-row justify-between mb-2 sm:mb-6">
					<span className="text-xs">{title}</span>
					<div className="flex justify-center aligns-center">
						<button>
							<img
								className="hover:text-white hover:cursor-pointer"
								width="16px"
								src={ellipsisIcon}
								alt="Show More"
							/>
						</button>
					</div>
				</div>
				<div className="flex flex-row justify-between sm:flex-col sm:justify-start items-center sm:items-start">
					<div className="text-4xl font-light sm:mb-2 mr-12">
						{time}
					</div>
					<div className="text-xs font-light text-neutral-pale-blue">
						{durationTime} - {durationDesc}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Card;
