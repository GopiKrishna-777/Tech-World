import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle login/signup

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isLogin ? <Login /> : <Signup />}
      
      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{
          marginTop: "10px",
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
      </button>
    </div>
  );
};

export default Auth;
