function MainContent(props) {
    return (
        <main className="rounded-xl min-w-[90%] min-h-screen bg-white mt-[100px] p-4">
            {props.children}
        </main>
    );
}

export default MainContent;