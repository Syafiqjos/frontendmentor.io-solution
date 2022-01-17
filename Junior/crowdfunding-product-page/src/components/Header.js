function Header() {
    return (
        <header className="flex flex-row justify-between p-4 bg-neutral-black">
            <div>
                <img src="/images/logo.svg" className="" alt="" />
            </div>
            <nav>
                <img src="/images/icon-hamburger.svg" className="" alt="" />
            </nav>
        </header>
    );
}

export default Header;