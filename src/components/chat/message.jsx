export default function ChatMessage() {
    return (
        <section className="px-4 fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
            <div className="mt-2 mx-auto max-w-screen-xl">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        multiple
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="janesmith"
                    />
                </div>
            </div>
        </section>
    )
}