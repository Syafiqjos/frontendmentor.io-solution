function Card(props) {
    return (
        <section class="rounded-xl w-[80%] p-4 flex flex-col items-center bg-white mt-[100px]">
            {props.children}
        </section>
    )
}

export default Card;