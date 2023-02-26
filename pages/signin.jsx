import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { SignIllustration } from "../assets";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [succesful, setSuccesful] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/signup", {
        username,
        email,
        password
      });
      console.log(response.data);
      setSuccesful(response.data);
    } catch (err) {
      setErrorMessage(err.message);
    }
    Router.push("/");
  };

  return (
    <div className="sgn-wrapper flex">
      <div className="sgn-card flex">
        <div className="card-pic-part flex">
          <Image className="illustration" alt=""src={SignIllustration} />
        </div>
        <div className="card-form-part flex">
          <h1>Sign Up</h1>
          <form className="flex" onSubmit={handleSignUp}>
            <div>
              <input
                type="text"
                required="required"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                required="required"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                required="required"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
            <p>
              Have an account already?
              <Link href="/login">Login.</Link>
            </p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {succesful && (
              <button
                style={{
                  color: "#fff",
                  font: "20px",
                  backgroundColor: "orangered",
                  width: "12em"
                }}
              >
                {succesful}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
