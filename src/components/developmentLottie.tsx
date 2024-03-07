import Lottie from "lottie-react";
import animationData from "@/lotties/Lottie.json";

const DevelopmentLottie: React.FC = () => {
    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    },
};
  return (
    <Lottie animationData={animationData} loop={true} height={400} width={400} />
  );
};

export default DevelopmentLottie;