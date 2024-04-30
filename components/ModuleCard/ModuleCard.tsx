import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  height: string;
}

const ModuleCard: React.FC<CardProps> = ({ imageUrl, title, height }) => {
  const width = `calc(${height} * 1.6)`;
  return (
    <div
      className="position-relative rounded-lg overflow-hidden transition-transform duration-300 transform hover-scale-105 cursor-pointer"
      style={{ height: height, width: width }}
    >
      <img src={imageUrl} alt={title} className="img-fluid object-cover" />
      <div className="position-absolute bottom-0 start-0 w-100 bg-white bg-opacity-90 text-black p-2 d-flex align-items-center justify-content-center">
        <p className="text-lg font-weight-bold">{title}</p>
      </div>
    </div>
  );
};

export default ModuleCard;
