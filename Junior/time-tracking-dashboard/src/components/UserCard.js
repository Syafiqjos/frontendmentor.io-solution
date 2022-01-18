function UserCard(props) {
    console.log(props);
    return (
        <section className={` ${props.className}`}>
            User Card
        </section>
    )
}

export default UserCard;