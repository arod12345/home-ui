import React from "react";
import Link from "next/link";

const Adminauth = () => {
  return (
    <div className="admin-login-wrapper flex">
      <div className="card-form-part flex">
        <h1>Admin Log In</h1>
        <form className="flex" action="" method="">
          <input
            type="email"
            name=""
            id=""
            placeholder="please Enter your email"
          />
          <input type="password" name="" id="" placeholder="password" />
          <button type="submit">Login</button>
          <Link href="/Admin">admin</Link>
        </form>
      </div>
    </div>
  );
};

export default Adminauth;
