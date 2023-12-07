import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setEmail: setLoggedInEmail, setId } = useContext(UserContext);

  async function register(ev) {
    ev.preventDefault();
    const { data } = await axios.post("/register", {
      fullName,
      email,
      password,
    });
    setLoggedInEmail(email);
    setId(data.id);
  }

  return (
    <div className="bg-red-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <h1 className=" text-4xl font-bold text-center mb-8"> Register </h1>
        <input
          value={fullName}
          onChange={(ev) => setFullName(ev.target.value)}
          type="text"
          placeholder="Full name"
          className="block w-full  rounded-full p-2 mb-2 border shadow"
        />

        <input
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          type="email"
          placeholder="your@email.com"
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
        <div className="text-center mt-3">
          Already a user?{"  "}
          <a
            className="bg-red-500 px-3 py-2 text-white cursor-pointer shadow rounded-full"
            href=""
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
}
