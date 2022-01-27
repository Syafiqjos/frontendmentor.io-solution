import { useState } from "react";

import UserCard from "../components/UserCard";
import Card from "../components/Card";

import profileImage from "../images/image-jeremy.png";

function Home() {
	const [timerSelection, setTimerSelection] = useState("week");

	const timerData = [
		{
			backgroundColor: "bg-primary-work",
			backgroundIcon: "bg-icon-work",
			title: "Work",
			time: "32hrs",
			durationTime: "Last Week",
			durationDesc: "36hrs",
		},
		{
			backgroundColor: "bg-primary-play",
			backgroundIcon: "bg-icon-play",
			title: "Play",
			time: "10hrs",
			durationTime: "Last Week",
			durationDesc: "8hrs",
		},
		{
			backgroundColor: "bg-primary-study",
			backgroundIcon: "bg-icon-study",
			title: "Study",
			time: "4hrs",
			durationTime: "Last Week",
			durationDesc: "7hrs",
		},
		{
			backgroundColor: "bg-primary-exercise",
			backgroundIcon: "bg-icon-exercise",
			title: "Work",
			time: "4hrs",
			durationTime: "Last Week",
			durationDesc: "5hrs",
		},
		{
			backgroundColor: "bg-primary-social",
			backgroundIcon: "bg-icon-social",
			title: "Social",
			time: "5hrs",
			durationTime: "Last Week",
			durationDesc: "10hrs",
		},
		{
			backgroundColor: "bg-primary-self-care",
			backgroundIcon: "bg-icon-self-care",
			title: "Self Care",
			time: "2hrs",
			durationTime: "Last Week",
			durationDesc: "2hrs",
		},
		{
			backgroundColor: "bg-primary-work",
			backgroundIcon: "bg-icon-work",
			title: "Work",
			time: "2hrs",
			durationTime: "3 days ago",
			durationDesc: "2hrs",
		},
		{
			backgroundColor: "bg-primary-exercise",
			backgroundIcon: "bg-icon-exercise",
			title: "Exercise",
			time: "2hrs",
			durationTime: "Yesterday",
			durationDesc: "2hrs",
		},
		{
			backgroundColor: "bg-primary-social",
			backgroundIcon: "bg-icon-social",
			title: "Social",
			time: "2hrs",
			durationTime: "2 days ago",
			durationDesc: "2hrs",
		},
		{
			backgroundColor: "bg-primary-study",
			backgroundIcon: "bg-icon-study",
			title: "Study",
			time: "4hrs",
			durationTime: "Last Month",
			durationDesc: "7hrs",
		},
	];

	return (
		<section className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 h-full w-full md:max-w-[800px] gap-5 p-6">
			<UserCard
				filterTrigger={setTimerSelection}
				profileImage={profileImage}
				fullName="Jeremy Robson"
			/>
			{timerData
				.filter((element) => {
					return (
						element.durationTime
							.toLowerCase()
							.indexOf(timerSelection) !== -1
					);
				})
				.map((element) => {
					return <Card {...element} />;
				})}
		</section>
	);
}

export default Home;
