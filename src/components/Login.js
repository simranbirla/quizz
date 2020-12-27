import React from "react";

const Login = (props) => {
  return (
    <div>
      <input
        placeholder="Enter your name"
        onChange={(e) => props.setUser(e.target.value)}
      />
      <button onClick={() => props.setSign(true)}>Login</button>
    </div>
  );
};

export default Login;
