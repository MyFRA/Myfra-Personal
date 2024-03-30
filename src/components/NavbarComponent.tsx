export default function NavbarComponent() {
    return (
        <nav className="top-0 left-0 w-full py-2 bg-white fixed">
            <ul className="flex gap-3.5 lg:gap-6 items-center container mx-auto text-sm px-3">
                <li>
                    <a href="/" className="hover:underline">
                        <img src="/sakura.png" alt="Sakura" className="w-7 lg:w-8" />
                    </a>
                </li>
                <li>
                    <a href="/" className="text-sm lg:text-base hover:underline">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/blogs" className="text-sm lg:text-base hover:underline">
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    )
}
