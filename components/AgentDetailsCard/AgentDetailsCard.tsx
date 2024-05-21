import Image from "next/image";
import { SearchIcon } from "../icons/icons";

const AgentDetailsCard = () => {
  return (
    <div className="w-50">
      <div
        className="rounded-top d-flex flex-column justify-content-center align-items-center pt-2 pb-1"
        style={{ background: "#1C185BA3" }}
      >
        <div className="image-container">
          <Image
            src="/assets/module.jpg"
            alt="User"
            width={80}
            height={80}
            className="rounded-circle"
          />
        </div>
        <span className="fw-bold text-white">User Name</span>
        <span className="xs text-white-50">Senior UI/UX Designer</span>
        <span className="xs text-white-50">Front Office</span>
        <span className="xs text-white-50">Concierge</span>
        <span className="xs text-white-50 pt-1">
          Reporting To: <span className="text-white fw-bold ">User Name</span>{" "}
        </span>
      </div>
      <div
        className="rounded-bottom px-4 py-2 d-flex justify-content-between align-items-center text-white"
        style={{ background: "#1C185B" }}
      >
        <div className="col-xs-3 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <SearchIcon />
            <p className="mb-0 xs">Call</p>
          </div>
        </div>
        <div className="col-xs-3 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <SearchIcon />
            <p className="mb-0 xs">Chat</p>
          </div>
        </div>
        <div className="col-xs-3 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <SearchIcon />
            <p className="mb-0 xs">Video</p>
          </div>
        </div>
        <div className="col-xs-3 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <SearchIcon />
            <p className="mb-0 xs">More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetailsCard;
