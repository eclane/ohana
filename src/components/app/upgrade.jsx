
export default function AppUpgrade() {
    return (
        <section className="mx-auto max-w-screen-xl lg:px-4">
            <div className="relative isolate overflow-hidden bg-gray-100 py-8 sm:py-8 lg:py-12 lg:rounded-lg">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h1 className="text-2xl font-bold text-gray-900">Upgrade Account</h1>
                            <p className="mt-4 leading-7 text-gray-500">
                                You have no subscription at the moment. Please select a subscription plan or a token pack.
                            </p>
                            <p className="my-4 leading-7 text-gray-500">
                                Total <span className='font-bold'>Unlimited</span> word and <span className='font-bold'>33,156</span> image tokens left.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4 items-center">

                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Choose a Plan
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Select Token Pack <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
