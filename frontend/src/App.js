import React from "react";
import "./App.css";

import Header from "./Header";
import ButtonGroup from "./ButtonGroup";

const getItems = () => {
  fetch("http://localhost:3000/crud", {surname: 'Ivanov'})
    .then(response => response.json())
    .then(items => console.log(items))
    .catch(err => console.log(err));
};

function App() {
  getItems();
  return (
    <div>
      <div className="main-screen">
        <Header></Header>
        <div className="d-flex justify-content-between">
        <h2 className="page-title">Candidates</h2>
        <ButtonGroup></ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
