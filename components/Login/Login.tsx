"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response: AxiosResponse = await axios.post(
        "http://65.0.7.4:7777/guestModule/admin_login",
        { username, password }
      );

      console.log("Login successful:", response.data);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Server responded with error:", error.response.data);
        // Handle server error (e.g., display error message to user)
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        // Handle network error (e.g., display error message to user)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Request setup error:", error.message);
        // Handle other types of errors (e.g., display generic error message)
      }
    }
  };

  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ width: "20rem" }}
    >
      <div className="d-flex justify-content-center flex-column">
        <input
          placeholder="Username"
          type="text"
          style={{ width: "320px" }}
          className="mb-3 mt-3 rounded-pill border border-gray-300 px-4 py-2"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          placeholder="Password"
          type="password"
          style={{ width: "320px" }}
          className="rounded-pill border border-gray-300 px-4 py-2"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <span
        className="text-sm p-2 pe-0 font-semibold cursor-pointer ml-auto d-flex justify-content-end"
        style={{ color: "#1C185B" }}
      >
        Forgot Password?
      </span>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="mt-4">
          <Image
            src="/assets/fingerprint.png"
            alt="Fingerprint"
            height={50}
            width={50}
          />
        </div>
        <div className="flex justify-center w-96 mt-4">
          <button
            onClick={handleLogin}
            className="btn btn-primary rounded-pill px-4"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
