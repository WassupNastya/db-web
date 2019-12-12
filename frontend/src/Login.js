import React, { useState } from "react";
import App from "./App";
import logo from "./logo.jpg";
import "./Login.css";

function Login() {
  const [model, setModel] = useState("");
  const [goNext, setGoNext] = useState(false);
  console.log(logo);
  return (
    <div>
      {!goNext && (
        <div className="container">
          <div className="card login-form">
            <img
              src={logo}
              className="img-fluid image"
              alt="Responsive image"
            />
            <h4>Guten Tag!</h4>
            <hr />
            <p>To start enter the name of database</p>
            <input
              className="form-control"
              onChange={e => setModel(e.target.value)}
            ></input>
            <button
              className="btn btn-secondary button-start"
              onClick={() => setGoNext(true)}
            >
              Create database
            </button>
          </div>
        </div>
      )}
      {goNext && <App setGoNext={setGoNext} />}
    </div>
  );
}

export default Login;
