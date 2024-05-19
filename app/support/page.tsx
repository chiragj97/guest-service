import React from "react";
import Image from "next/image";
import "../globals.css";
import { SearchIcon } from "../../components/icons/icons";
import TextMessage from "@/components/Message/TextMessage";
import Layout from "@/components/Layout/Layout";
import UserList from "@/components/UserList/UserList";

export default function Support() {
  return (
    <Layout>
      <div className="container-fluid d-flex">
        <UserList>
          <p className="small fw-bold dark:text-white mb-0">User</p>
          <p className="xs mb-0">Last message from User </p>
        </UserList>

        {/* Main Content */}
        <div className="col-md-8 border border-end-0 border-top-0 p-2 d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between p-2">
            <div className="me-3">
              <Image
                src="/assets/module.jpg"
                alt="User"
                width={60}
                height={60}
                className="rounded-circle"
              />
            </div>
            <div className="d-flex flex-column cursor-pointer">
              <p className="small fw-bold mb-0"></p>
              <p className="small fw-bold mb-0">Anirudh Jonnalagadda </p>
              <span className="xxs mb-0">Front Office Manager </span>
              <span className="xxs mb-0">Front Office </span>
            </div>
            <div className="text-end ms-auto">
              <div
                className="small text-muted mb-0 d-flex gap-3"
                style={{ fontSize: "12px" }}
              >
                <div className="p-1 user user:hover">
                  <SearchIcon />
                </div>
                <div className="p-1 user user:hover">
                  <SearchIcon />
                </div>
                <div className="p-1 user user:hover">
                  <SearchIcon />
                </div>
                <div className="p-1 user user:hover">
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow-1 overflow-auto py-2 px-3 d-flex flex-column-reverse">
            <TextMessage
              guest={true}
              message="I need 2 bottles of water. Could  you please send them up to my
              room?"
            />
            <TextMessage
              guest={false}
              message="Good morning! How may I assist you?"
            />
          </div>
          <div className="p-2 d-flex align-items-center">
            <input
              type="text"
              placeholder="Write your message"
              className="p-2 flex-grow-1 rounded border form-control"
            />
            <div className="ms-3">
              <SearchIcon />
            </div>
            <div className="ms-3">
              <SearchIcon />
            </div>
            <div className="ms-3">
              <SearchIcon />
            </div>
            <div className="ms-3">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
