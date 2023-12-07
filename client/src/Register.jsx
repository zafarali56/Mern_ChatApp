import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("/register", {
        fullName,
        email,
        password,
      });
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration failed", error);
    }
  }

  return (
    <div className="bg-red-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <h1 className=" text-4xl font-bold text-center mb-8"> Register </h1>
        <input
          value={fullName}
          onChange={(ev) => setFullName(ev.target.value)}
          type="text"
          placeholder="Full Name"
          className="block w-full  rounded-full p-2 mb-2 border shadow"
        />

        <input
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          type="text"
          placeholder="Email "
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
          Submit
        </button>
      </form>
    </div>
  );
}
