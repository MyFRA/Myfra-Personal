export default function PageMain() {
    return (
        <div className="min-h-screen" style={{ backgroundImage: 'url(/batik.jpg)' }}>
            <div className="min-h-screen py-16 bg-black bg-opacity-5">
                <div className="top-0 left-0 w-full px-10 py-2.5 bg-white fixed">
                    <ul className="flex gap-6">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                    </ul>
                </div>

                <div className="w-5/12 mx-auto">
                    <div className="p-10 rounded-sm bg-white">
                        <div className="flex justify-between gap-7 items-center">
                            <div className="flex-[4.75]">
                                <h1 className="text-2xl font-semibold">Hello World</h1>
                                <p>Trying to create software that feels magical</p>
                                <p className="text-[15px] mt-1.5 text-gray-500">
                                    Hi, I'am a theme for Astro, an example of how you can use this starter to create a personal blog. If you want to know more
                                    about how you can customise me, add more posts, and make it your own, click on the github icon link below and it will take
                                    you to my repo.
                                </p>
                            </div>
                            <div className="flex-[1]">
                                <img src="/sakura.png" className="w-full rounded-full" alt="" />
                            </div>
                        </div>

                        <hr className="my-5" />

                        <div>
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-lg">Projects</h1>
                                <a href="">View All</a>
                            </div>
                            <ul>
                                <li>
                                    <a href="" className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-semibold">Lorem, ipsum dolor.</h3>
                                            <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tenetur.</p>
                                        </div>
                                        <p>2023</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <hr className="my-5" />

                        <div className="mt-5">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-lg">Blogs</h1>
                                <a href="">View All</a>
                            </div>
                            <ul className="mt-3 flex flex-col gap-4">
                                {[0, 1].map((e) => (
                                    <li>
                                        <a href="" className="flex gap-5 justify-between items-start">
                                            <p className="w-20">2023</p>
                                            <div className="w-full">
                                                <h3 className="font-semibold">Lorem, ipsum dolor.</h3>
                                                <p className="text-[15px]">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tenetur. Lorem ipsum dolor sit amet
                                                    consectetur adipisicing elit. Quis, tenetur.
                                                </p>
                                            </div>
                                            <p>11/9</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
