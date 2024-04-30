import Image from "next/image";

const Login = () => {
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
          className="mb-3 mt-5 rounded-3xl border border-gray-300 px-4 py-2"
        />
        <input
          placeholder="Password"
          type="text"
          style={{ width: "320px" }}
          className="rounded-3xl border border-gray-300 px-4 py-2"
        />
      </div>
      <span
        className="text-sm p-2 font-semibold cursor-pointer ml-auto"
        style={{ color: "#1C185B" }}
      >
        Forgot Password?
      </span>
      <div className="mt-4">
        <Image
          src="/assets/fingerprint.png"
          alt="Fingerprint"
          height={50}
          width={50}
        />
      </div>
      <div className="flex justify-center w-96 mt-4">
        <button className="rounded-full bg-blue-500 text-white py-2 px-6 border border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-700">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
