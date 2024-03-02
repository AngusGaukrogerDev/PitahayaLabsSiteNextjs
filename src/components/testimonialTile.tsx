import React from 'react';

interface TestimonialTileProps {
  number: number;
  title: string;
  description: string;
}

const TestimonialTile: React.FC<TestimonialTileProps> = ({ number, title, description }) => {
  return (
    <div className="bg-pitahaya-beige w-full h-72 flex flex-col justify-center items-center px-2 py-5 text-center">
     
    </div>
  );
}

export default TestimonialTile;