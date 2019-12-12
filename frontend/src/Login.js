import React, { useState } from "react";
import App from "./App";
import logo from "./logo.jpg";
import "./Login.css";

function Login() {
  const [model, setModel] = useState("");
  const [goNext, setGoNext] = useState(false);
  const [loading, setLoading] = useState(false);

  function objectToQueryString(obj) {
    return Object.keys(obj)
      .map(key => key + "=" + obj[key])
      .join("&");
  }
  async function createDB() {
    let url = "http://localhost:3000/createDB";
    url += "?" + objectToQueryString({ name: model });
    fetch(url)
      .then(response => createSchema())
      .catch(err => console.log(err));
  }
  async function createSchema() {
    let url = "http://localhost:3000/createSchema";
    url += "?" + objectToQueryString({ name: model });
    fetch(url)
      .then(response => {})
      .catch(err => console.log(err));
    setTimeout(() => {
      setGoNext(true);
    }, 3000);
  }
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
              onClick={() => {
                createDB();
                setLoading(true);
              }}
            >
              {loading && (
                <span
                  style={{ marginRight: "0.5rem" }}
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
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
