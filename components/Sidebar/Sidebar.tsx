import Image from "next/image";

const Sidebar = () => {
  return (
    <div
      className="position-relative top-0 start-0 text-white"
      style={{ background: "#1C185BBF", height: "100vh" }}
    >
      <div className="p-3 d-flex flex-column justify-content-between h-100">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <Image
            src="/assets/backicon.png"
            alt="Back Icon"
            width={26}
            height={26}
          />
          <Image
            src="/assets/textmsg.png"
            alt="Text Message"
            width={30}
            height={30}
          />
          <Image
            src="/assets/calender.png"
            alt="Calendar"
            width={30}
            height={30}
          />
          <Image src="/assets/notes.png" alt="Notes" width={30} height={30} />
          <Image src="/assets/chart.png" alt="Chart" width={30} height={30} />
          <Image src="/assets/image.png" alt="Image" width={30} height={30} />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <Image src="/assets/dots.png" alt="Dots" width={30} height={30} />
          <Image
            src="/assets/settings.png"
            alt="Settings"
            width={30}
            height={30}
          />
          <Image
            src="/assets/module.jpg"
            alt="Profile Picture"
            className="rounded-circle"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
