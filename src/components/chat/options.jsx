import { CheckCircleIcon } from "@heroicons/react/24/outline";

const options = [
  {
    title: "Smart",
    description: "Nifty OpenAI text pro, acing human-like talk and tasks",
  },
  {
    title: "Genius",
    description: "Text whiz, nails questions and understands text like a champ",
  },
  {
    title: "Research",
    description:
      "Handles big text like a boss, great for digging into documents",
  },
  {
    title: "GPT-4",
    description:
      "Fresh and upgraded, churns out top-notch text for all your needs",
  },
];

export const ChatOptions = ({ user, model, setModel }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <img
          alt="User"
          src="someimage.png"
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-medium text-gray-900">Oscar John</h3>

          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-500">
                  {" "}
                  Twitter{" "}
                </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-500">
                  {" "}
                  GitHub{" "}
                </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-500">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mt-6">
        {options.map((option) => (
          <a
            onClick={() => setModel(option.title)}
            key={option.title}
            className={
              model === option.title
                ? "block h-full rounded-lg border p-4 hover:bg-gray-200 bg-gray-100 border-[#148499] relative cursor-pointer"
                : "block h-full rounded-lg border-none p-4 hover:bg-gray-200 bg-gray-100 relative cursor-pointer"
            }
          >
            {model === option.title && (
              <div className="absolute top-0 right-0 pt-2 pr-2">
                <CheckCircleIcon className="h-5 text-[#148499]" />
              </div>
            )}
            <strong className="font-medium text-gray-900">
              {option.title}
            </strong>

            <p className="mt-1 text-xs font-medium text-gray-500">
              {option.description}
            </p>
          </a>
        ))}
      </div>
    </>
  );
};
