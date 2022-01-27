function UserCard({
	profileImage = null,
	fullName = null,
	filterTrigger = null,
	filterStatus = null,
}) {
	const invokeFilterTrigger = (filter) => {
		if (typeof filterTrigger === "function") {
			filterTrigger(filter);
		}
	};

	return (
		<section className="row-span-2 font-rubik bg-neutral-dark-blue rounded-xl text-white overflow-hidden flex flex-col justify-between">
			<div className="flex flex-row sm:flex-col bg-primary-blue rounded-xl p-6 grow">
				<div className="flex justify-start items-center mr-5 shrink-0">
					<img
						className="my-auto w-16 border border-white border-2 rounded-full shadow-md sm:mb-4"
						src={profileImage}
						alt="Profile"
					/>
				</div>
				<div className="flex flex-col shrink-1">
					<span className="text-xs text-neutral-pale-blue mb-1">
						Report for
					</span>
					<span className="font-light text-3xl mb-0 md:mb-4">
						{fullName}
					</span>
				</div>
			</div>
			<div className="flex flex-col p-2 py-6 sm:p-6">
				<ul className="sm:flex sm:flex-col grid grid-cols-3 gap-2">
					<li className="text-center sm:text-left">
						<button
							onClick={() => invokeFilterTrigger("day")}
							className={`text-sm ${
								filterStatus === "day"
									? "text-white"
									: "text-neutral-desaturated-blue"
							}`}
						>
							Daily
						</button>
					</li>
					<li className="text-center sm:text-left">
						<button
							onClick={() => invokeFilterTrigger("week")}
							className={`text-sm ${
								filterStatus === "week"
									? "text-white"
									: "text-neutral-desaturated-blue"
							}`}
						>
							Weekly
						</button>
					</li>
					<li className="text-center sm:text-left">
						<button
							onClick={() => invokeFilterTrigger("month")}
							className={`text-sm ${
								filterStatus === "month"
									? "text-white"
									: "text-neutral-desaturated-blue"
							}`}
						>
							Monthly
						</button>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default UserCard;
