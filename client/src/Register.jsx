import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-red-50 h-screen flex items-center">
      <form className="w-64 mx-auto">
        <h1 className="">Login</h1>

        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="Username"
          className="block w-full  rounded-full p-2 mb-2 border shadow"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="text"
          placeholder="Password "
          className="block w-full rounded-full p-2 mb-2 border shadow"
        />
        <button className="bg-red-500 text-white block w-full rounded-full p-2">
          Register
        </button>
      </form>
    </div>
  );
}
