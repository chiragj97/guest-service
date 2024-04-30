import React, { ReactNode } from "react";
import UserCard from "../UserCard/UserCard";

interface UserListProps {
  children: ReactNode;
  icons?: ReactNode;
}

const UserList: React.FC<UserListProps> = ({ children, icons }) => {
  return (
    <div
      className="col-md-4 border border-start-0 border-top-0 overflow-auto"
      style={{ maxHeight: "100vh" }}
    >
      <div className="p-3">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 w-100 rounded-pill border"
        />
      </div>
      <ul className="list-unstyled p-2">
        {[...Array(20)].map((_, index) => (
          <UserCard key={index} icons={icons}>
            {children}
          </UserCard>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
