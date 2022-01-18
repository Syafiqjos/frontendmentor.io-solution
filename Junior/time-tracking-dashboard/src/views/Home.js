import UserCard from '../components/UserCard';
import Card from '../components/Card';

function Home() {
    return (
        <section className="grid grid-cols-4">
            <UserCard className="row-span-2" />
            <Card />
            <Card />
            <Card />

            <Card />
            <Card />
            <Card />
        </section>
    );
}

export default Home;