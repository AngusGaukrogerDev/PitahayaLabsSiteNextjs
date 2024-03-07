import Lottie from "lottie-react";
import animationData from "@/lotties/Lottie.json";

const DevelopmentLottie: React.FC = () => {
  return (
    <Lottie animationData={animationData} loop={true} height={400} width={400} />
  );
};

export default DevelopmentLottie;