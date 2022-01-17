import Header from '../components/Header';

function MainBody(props) {
    return (
        <div className="bg-custom-mobile bg-top bg-contain flex flex-col bg-no-repeat items-center font-commisioner">
            <Header />
            <main className="rounded-xl min-h-screen bg-white mt-[100px] flex flex-col items-center">
                {props.children}
            </main>
        </div>
    );
}

export default MainBody;