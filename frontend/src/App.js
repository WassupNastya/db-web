import React, { useState } from "react";
import "./App.css";

import Header from "./Header";
import ButtonGroup from "./ButtonGroup";
import Row from "./Row";

const getItems = () => {
  fetch("http://localhost:3000/crud", { surname: "Ivanov" })
    .then(response => response.json())
    .then(items => console.log(items))
    .catch(err => console.log(err));
};

const items = [
  {
    id: 1,
    surname: "Ivanov",
    name: "Ivan"
  },
  {
    id: 2,
    surname: "Sidorov",
    name: "Sergey"
  },
  {
    id: 3,
    surname: "Sidorov",
    name: "Sergey"
  },
  {
    id: 4,
    surname: "Sidorov",
    name: "Sergey"
  },
  {
    id: 5,
    surname: "Sidorov",
    name: "Sergey"
  },
  {
    id: 6,
    surname: "Sidorov",
    name: "Sergey"
  },
  {
    id: 7,
    surname: "Sidorov",
    name: "Sergey"
  },
  {
    id: 8,
    surname: "Sidorov",
    name: "Sergey"
  }
];

function App() {
  const [title, setTitle] = useState("Candidates");

  getItems();
  return (
    <div>
      <div className="main-screen">
        <Header changeTitle={(title) => setTitle(title)}></Header>
        <div className="d-flex justify-content-between">
          <h2 className="page-title">{title}</h2>
          <ButtonGroup></ButtonGroup>
        </div>
        <div className="table-background">
          {items.map(x => (
            <Row key={x.id}></Row>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
