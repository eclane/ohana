import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("../../public/media/loading.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function LoadingScreen() {
  return (
    <div
      className="hidden w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-50"
    >
      <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
        <Lottie options={defaultOptions} height={400} width={400} />
      </span>
    </div>
  );
}
