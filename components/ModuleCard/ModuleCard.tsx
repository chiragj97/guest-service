import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  height: string;
}

const ModuleCard: React.FC<CardProps> = ({ imageUrl, title, height }) => {
  const width = `calc(${height} * 1.6)`;
  return (
    <div
      className="relative rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      style={{ height: height, width: width }}
    >
      <Image src={imageUrl} alt={title} fill className="object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-black p-2 flex items-center justify-center">
        <p className="text-l font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default ModuleCard;
