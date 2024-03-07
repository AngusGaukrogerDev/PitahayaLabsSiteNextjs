import Lottie from "lottie-react";
import animationData from "@/lotties/call.json";

const CallLottie: React.FC = () => {
  return (
    <Lottie animationData={animationData} loop={true} height={100} width={100} />
  );
};

export default CallLottie;