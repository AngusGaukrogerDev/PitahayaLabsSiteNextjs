import React from 'react';

interface ServicesTileProps {
  number: number;
  title: string;
  description: string;
}

const ServicesTile: React.FC<ServicesTileProps> = ({ number, title, description }) => {
  return (
    <div className="bg-pitahaya-beige w-10/12 sm:w-2/3 md:w-1/2 xl:w-1/4 services-card-height-md flex flex-col justify-center xl:justify-center items-center px-5 xl:px-2 py-10 xl:py-2 rounded-md text-center gap-5 xl:gap-2">
      <div className="flex flex-row justify-center items-center gap-0 h-16 md:h-28 ">
        <h3 className="rotate-ninety relative bg-pitahaya-yellow text-pitahaya-white px-2 py-1 z-0">Step</h3>
        <h3 className="font-bold text-6xl md:text-7xl text-pitahaya-black">{number.toString().padStart(2, '0')}</h3>
      </div>
      <h2 className="text-pitahaya-black lg:h-16">{title}</h2>
      <h3 className="text-pitahaya-black lg:w-full lg:h-28">{description}</h3>
    </div>
  );
}

export default ServicesTile;
