function UserCard({ profileImage = null, fullName = null }) {
	return (
		<section className="row-span-2 font-rubik bg-neutral-dark-blue rounded-xl text-white overflow-hidden flex flex-col justify-between">
			<div className="flex flex-col bg-primary-blue rounded-xl p-6 grow">
				<img
					className="w-16 border border-white border-2 rounded-full shadow-md mb-4"
					src={profileImage}
					alt="Profile"
				/>
				<span className="text-xs text-neutral-pale-blue mb-1">
					Report for
				</span>
				<span className="font-light text-3xl mb-4">{fullName}</span>
			</div>
			<div className="flex flex-col p-6">
				<ul className="flex flex-col gap-2">
					<li>
						<button className="text-sm text-neutral-desaturated-blue">
							Daily
						</button>
					</li>
					<li>
						<button className="text-sm">Weekly</button>
					</li>
					<li>
						<button className="text-sm text-neutral-desaturated-blue">
							Monthly
						</button>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default UserCard;
