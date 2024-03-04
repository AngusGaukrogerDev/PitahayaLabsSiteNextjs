import React from 'react';

interface ServicesTileProps {
  number: number;
  title: string;
  description: string;
}

const ServicesTile: React.FC<ServicesTileProps> = ({ number, title, description }) => {
  return (
    <div className="bg-pitahaya-beige w-10/12 md:w-2/3 h-64 md:h-80 sm:h-60 flex flex-col justify-center items-center px-5 py-10 rounded-md text-center gap-5">
      <div className="flex flex-row justify-center items-center gap-0 h-16 ">
        <h3 className="rotate-ninety relative bg-pitahaya-yellow text-pitahaya-white px-2 py-1 z-0">Step</h3>
        <h3 className="font-bold text-6xl md:text-7xl text-pitahaya-black">{number.toString().padStart(2, '0')}</h3>
      </div>
      <h2 className="text-pitahaya-black">{title}</h2>
      <h3 className="text-pitahaya-black">{description}</h3>
    </div>
  );
}

export default ServicesTile;
