import Image from 'next/image';
import { useState } from 'react';

const ImageGrid: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(4).fill(false));

  const toggleCheckbox = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row w-50 border rounded p-1">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="col-md-6">
            <div className="image-container position-relative p-2">
              <Image
                src={`/assets/module.jpg`}
                alt={`Image`}
                height={100}
                width={150}
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
              <div className="position-absolute start-0 bottom-0 px-3 py-1">
                <input
                  type="checkbox"
                  checked={checkedItems[index]}
                  onChange={() => toggleCheckbox(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
