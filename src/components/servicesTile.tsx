import React from 'react';

interface ServicesTileProps {
  number: number;
  title: string;
  description: string;
}

const ServicesTile: React.FC<ServicesTileProps> = ({ number, title, description }) => {
  return (
    <div className="bg-pitahaya-beige w-10/12 h-72 flex flex-col justify-center items-center px-2 py-5 text-center">
      <div className="flex flex-row justify-center items-center gap-0 h-32">
        <h2 className="-rotate-90 bg-pitahaya-yellow text-pitahaya-white px-2 py-1 z-0">Step</h2>
        <h2 className="font-bold text-7xl text-pitahaya-black">{number.toString().padStart(2, '0')}</h2>
      </div>
      <h2 className="text-pitahaya-black">{title}</h2>
      <h3 className="text-pitahaya-black">{description}</h3>
    </div>
  );
}

export default ServicesTile;
