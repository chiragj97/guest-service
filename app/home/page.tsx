import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <div className="flex justify-between items-center mt-3 pl-14">
        <div className="bg-white w-40 border p-2 rounded-tr-[50px] rounded-br-[50px]">
          First
        </div>
        <div className="bg-white rounded-3xl px-3 py-1.5 border flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_228_2544)">
              <path
                d="M20.48 11.74C20.48 16.567 16.567 20.48 11.74 20.48C6.91303 20.48 3 16.567 3 11.74C3 6.91303 6.91303 3 11.74 3C16.567 3 20.48 6.91303 20.48 11.74Z"
                stroke="black"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M18.0298 18.03L20.9998 21"
                stroke="black"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_228_2544">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="matrix(0 1 1 0 0 0)"
                />
              </clipPath>
            </defs>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="outline-none flex-grow ml-2"
          />
          <p className="tex-sm opacity-50 mr-2">Filter</p>
          <Image
            src="/assets/filtericon.png"
            alt="Filter Icon"
            width={25}
            height={25}
            className="opacity-80"
          />
        </div>
        <div className="form-check form-switch form-check-reverse">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckReverse"
          />
          {/* <label
            className="form-check-label"
            htmlFor="flexSwitchCheckReverse"
          ></label> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
