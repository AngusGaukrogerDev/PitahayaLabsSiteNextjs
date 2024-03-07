import Lottie from "lottie-react";
import animationData from "@/lotties/call.json";

const CallLottie: React.FC = () => {
  return (
    <Lottie className="h-4/5 w-4/5" animationData={animationData} loop={true} height={100} width={100} />
  );
};

export default CallLottie;