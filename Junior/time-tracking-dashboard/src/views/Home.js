import UserCard from "../components/UserCard";
import Card from "../components/Card";

function Home() {
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
			title: "Work",
			time: "5hrs",
			durationTime: "Last Week",
			durationDesc: "10hrs",
		},
		{
			backgroundColor: "bg-primary-self-care",
			backgroundIcon: "bg-icon-self-care",
			title: "Work",
			time: "2hrs",
			durationTime: "Last Week",
			durationDesc: "2hrs",
		},
	];

	return (
		<section className="grid grid-cols-4 h-full gap-5">
			<UserCard className="row-span-2" />
			{timerData.map((element) => {
				return <Card {...element} />;
			})}
		</section>
	);
}

export default Home;