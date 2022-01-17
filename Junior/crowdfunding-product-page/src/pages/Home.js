import MainBody from '../layouts/MainBody';
import Card from '../components/Card';

function Home() {
    return (
        <MainBody>
            <Card>
                <h1 className="font-bold text-xl mt-8 mb-4">Mastercraft Bamboo Monitor Riser</h1>
                <h2 className="text-neutral-gray mb-2">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</h2>
            </Card>
        </MainBody>
    )
}

export default Home;