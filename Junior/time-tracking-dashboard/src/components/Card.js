import ellipsisIcon from "../images/icon-ellipsis.svg";

function Card({
	backgroundColor = null,
	backgroundIcon = null,
	title = null,
	time = null,
	durationTime = null,
	durationDesc = null,
}) {
	return (
		<section
			className={`font-rubik rounded-xl text-white overflow-hidden ${backgroundColor}`}
		>
			<div
				className={`bg-[right_8px_top] h-8 bg-no-repeat bg-[length:3rem] ${backgroundIcon}`}
			></div>
			<div className="bg-neutral-dark-blue flex flex-col p-6">
				<div className="flex flex-row justify-between mb-6">
					<span className="text-xs">{title}</span>
					<div className="flex justify-center aligns-center">
						<button>
							<img width="16px" src={ellipsisIcon} alt="more" />
						</button>
					</div>
				</div>
				<div className="text-4xl font-light mb-2 mr-12">{time}</div>
				<div className="text-xs font-light text-neutral-pale-blue">
					{durationTime} - {durationDesc}
				</div>
			</div>
		</section>
	);
}

export default Card;
