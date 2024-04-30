import Image from "next/image";
import React, { ReactNode } from "react";

interface UserCardProps {
  children: ReactNode;
  icons?: ReactNode;
}

const UserCard: React.FC<UserCardProps> = ({ children, icons }) => {
  return (
    <li className="d-flex align-items-center justify-content-between p-2 user user:hover cursor-pointer">
      <div className="me-3">
        <Image
          src="/assets/module.jpg"
          alt="User"
          width={50}
          height={50}
          className="rounded-circle"
        />
      </div>
      <div className="d-flex flex-column">{children}</div>
      <div className="text-end ms-auto">
        {icons ? (
          <div>{icons}</div>
        ) : (
          <p className="small text-muted mb-0" style={{ fontSize: "12px" }}>
            Mon, 9:00 AM
          </p>
        )}
      </div>
    </li>
  );
};

export default UserCard;
