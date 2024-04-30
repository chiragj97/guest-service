import Image from "next/image";
import CoverImage from "@/components/CoverImage/CoverImage";
import Login from "@/components/Login/Login";

const LoginPage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <CoverImage />
      <div className="flex flex-col items-center">
        <div className="p-4">
          <Image
            src="/assets/hotel-name.png"
            alt="Hotel Name"
            width={220}
            height={60}
          />
        </div>
      </div>
      <Login />
    </div>
  );
};

export default LoginPage;
