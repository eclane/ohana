import { MicrophoneIcon, PaperAirplaneIcon, PaperClipIcon } from "@heroicons/react/24/outline";

export default function ChatMessage({ handleSubmit, handleInputChange, input }) {
    return (
        <section className="px-4 fixed bottom-8 left-0 z-50 w-full">
            <div className="mt-6 mx-auto max-w-screen-lg">
                <form onSubmit={handleSubmit}>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white px-3">

                        <button type="button" className="inline-block text-gray-700 focus:relative pr-1">
                            <PaperClipIcon className="w-5 h-5" />
                        </button>
                        <button type="button" className="inline-block text-gray-700 focus:relative">
                            <MicrophoneIcon className="w-5 h-5" />
                        </button>
                        <textarea id="chat" rows="1" className="block p-2.5 w-full text-sm text-gray-900 border-0 bg-transparent focus:ring-0 focus:border-none resize-none" placeholder="Your message..."
                            value={input}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="inline-block text-gray-700 focus:relative">
                            <PaperAirplaneIcon className="w-5 h-5" />
                        </button>

                    </div>
                </form>
            </div>
        </section>
    )
}