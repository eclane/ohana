
const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]

export default function AppServices() {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Explore our AI Solutions</h2>
                <p className="mt-3 text-gray-500">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((stat) => (
                        <a href="" className="group relative block h-64 sm:h-80 lg:h-96" key={stat.name}>
                            <span className="absolute inset-0"></span>

                            <div
                                className="relative flex h-full transform items-end bg-gray-100 rounded-lg"
                            >
                                <div
                                    className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10 sm:h-12 sm:w-12"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
                                </div>

                                <div
                                    className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                                >
                                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

                                    <p className="mt-4 text-sm sm:text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                                        omnis atque culpa repellendus.
                                    </p>

                                    <p className="mt-8 font-bold">Read more</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </dl>
            </div>
        </section>
    )
}
