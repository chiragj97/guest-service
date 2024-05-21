import Image from "next/image";
import styles from "./CoverImage.module.css";

const CoverImage = () => {
  return (
    <div className={styles.container}>
      <Image src="/assets/chef.png" alt="Chef" fill className={styles.image} />
    </div>
  );
};

export default CoverImage;
