import React from "react";
import "../Style/Login.css";

const Login = (props) => {
  return (
    <div className="login">
      <img
        src="https://as1.ftcdn.net/jpg/01/72/68/16/500_F_172681633_rLNC8wL3lMgFBjUG4n8fMLGH5gX8TYWB.jpg"
        alt="quiz word"
      />
      <form onSubmit={() => props.setSign(true)}>
        <input
          placeholder="Enter your name"
          onChange={(e) => props.setUser(e.target.value)}
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
