import Header from '../components/Header';

function MainBody(props) {
    return (
        <div className="bg-custom-mobile bg-top bg-contain flex flex-col bg-no-repeat">
            <Header />
            {props.children}
        </div>
    );
}

export default MainBody;