import Lottie from "lottie-react";
import animationData from "@/lotties/Lottie.json";

const DevelopmentLottie: React.FC = () => {
  return (
    <Lottie animationData={animationData} loop={true} height={500} width={500} />
  );
};

export default DevelopmentLottie;