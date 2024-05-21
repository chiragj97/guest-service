import ModuleCard from "@/components/ModuleCard/ModuleCard";
import CoverImage from "@/components/CoverImage/CoverImage";
import Image from "next/image";

const Module = () => {
  // Array of card data
  const cardData = [
    { imageUrl: "/assets/module.jpg", title: "Card 1", height: "16vh" },
    { imageUrl: "/assets/module.jpg", title: "Card 2", height: "16vh" },
    { imageUrl: "/assets/module.jpg", title: "Card 3", height: "16vh" },
    { imageUrl: "/assets/module.jpg", title: "Card 4", height: "16vh" },
    { imageUrl: "/assets/module.jpg", title: "Card 5", height: "16vh" },
    { imageUrl: "/assets/module.jpg", title: "Card 6", height: "16vh" },
    { imageUrl: "/assets/module.jpg", title: "Card 7", height: "16vh" },
    { imageUrl: "/assets/module.jpg", title: "Card 8", height: "16vh" },
    // Add more card data as needed
  ];

  return (
    <div className="d-flex flex-column align-items-center">
      <CoverImage />
      <div className="d-flex flex-column align-items-center">
        <div className="p-4">
          <Image
            src="/assets/hotel-name.png"
            alt="Hotel Name"
            width={220}
            height={60}
          />
        </div>
      </div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gap-x-12 gap-y-4 mt-4">
        {cardData.map((card, index) => (
          <ModuleCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            height={card.height}
          />
        ))}
      </div>
    </div>
  );
};

export default Module;
