import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function AppBreadcrumb() {

    return (
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8 max-w-screen-xl" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <HomeIcon className="w-5 h-5 me-2.5" aria-hidden="true" />
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                        <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Dashboard</a>
                    </div>
                </li>
            </ol>
        </nav>
    )
}