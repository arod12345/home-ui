import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { LoginIllustration } from "../assets";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [succesful, setSuccesful] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        username,
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
          <Image alt="" className="illustration" src={LoginIllustration} />
        </div>
        <div className="card-form-part flex">
          <h1>Log In</h1>
          <form className="flex" onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                placeholder="Username"
                required="required"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
            <p>
              Doesnt Have an Account?<Link href="/signin">Sign Up.</Link>
            </p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {succesful && (
              <p
                style={{
                  color: "#6495ed",
                  font: "20px",
                }}
              >
                {JSON.stringify(succesful)}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
