import React from "react";

interface MessageProps {
  message: string;
  guest: boolean;
}

const TextMessage: React.FC<MessageProps> = (props) => {
  // Determine which corners should be rounded based on the value of props.guest
  const roundedCorners = props.guest
    ? "rounded-bottom-5 rounded-start-5"
    : "rounded-bottom-5 rounded-end-5";

  // Determine which side should have the background color based on the value of props.guest
  const backgroundColorClass = props.guest
    ? "bg-dark-subtle"
    : "bg-body-secondary";

  return (
    <div>
      <div className={`d-flex ${props.guest ? "justify-content-end" : ""} p-2`}>
        <div
          className={`${backgroundColorClass} ${
            props.guest ? "" : "ml-auto"
          } ${roundedCorners} position-relative`}
          style={{ maxWidth: "60%" }} // Set maximum width to 60%
        >
          <div className="w-100 px-3 py-2 xs">{props.message}</div>
          {/* Date and time */}
          {/* <div className="position-absolute bottom-0 end-0 mb-1 me-1 text-muted text-xs">
            {new Date().toLocaleString()}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TextMessage;
