import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./Header";
import ButtonGroup from "./ButtonGroup";
import Table from "./Table";

function App() {
  const [title, setTitle] = useState("Abstracts");
  const [content, setContent] = useState([]);

  async function getCandidates() {
    fetch("http://localhost:3000/candidates")
      .then(response => response.json())
      .then(data => updateTable(data))
      .catch(err => console.log(err));
  }

  async function getAbstracts() {
    fetch("http://localhost:3000/abstracts")
      .then(response => response.json())
      .then(data => updateTable(data))
      .catch(err => console.log(err));
  }

  async function getOffers() {
    return fetch("http://localhost:3000/offers")
      .then(response => response.json())
      .then(data => updateTable(data))
      .catch(err => console.log(err));
  }

  async function getReviews() {
    return fetch("http://localhost:3000/reviews")
      .then(response => response.json())
      .then(data => updateTable(data))
      .catch(err => console.log(err));
  }

  async function getInterviews() {
    return fetch("http://localhost:3000/interviews")
      .then(response => response.json())
      .then(data => updateTable(data))
      .catch(err => console.log(err));
  }

  function updateTable(content) {
    setContent(content);
  }

  useEffect(() => {
    switch (title) {
      case "Candidates":
        getCandidates();
        break;
      case "Abstracts":
        getAbstracts();
        break;
      case "Offers":
        getOffers();
        break;
      case "Reviews":
        getReviews();
        break;
      case "Interviews":
        getInterviews();
        break;
    }
  }, [title]);

  return (
    <div>
      <div className="main-screen">
        <Header changeTitle={title => setTitle(title)}></Header>
        <div className="d-flex justify-content-between">
          <h2 className="page-title">{title}</h2>
          <ButtonGroup></ButtonGroup>
        </div>
        <div className="table-background">
          <Table
            tableName={title}
            headers={headers[title]}
            content={content}
          ></Table>
        </div>
      </div>
    </div>
  );
}

export default App;

const headers = {
  Candidates: [
    { id: 1, title: "ID" },
    { id: 2, title: "Surname" },
    { id: 3, title: "Name" },
    { id: 4, title: "Patronymic" },
    { id: 5, title: "Skill" },
    { id: 6, title: "Source" },
    { id: 7, title: "Status" },
  ],
  Abstracts: [
    { id: 1, title: "ID" },
    { id: 2, title: "Desired Salary" },
    { id: 3, title: "English Level" },
    { id: 4, title: "Hours Per Week" }
  ],
  Offers: [
    { id: 1, title: "ID" },
    { id: 2, title: "Is Proposed" },
    { id: 3, title: "Is Adopted" }
  ],
  Reviews: [
    { id: 1, title: "ID" },
    { id: 2, title: "Conducted By" },
    { id: 3, title: "Comments" }
  ],
  Interviews: [
    { id: 1, title: "ID" },
    { id: 2, title: "Candidate ID" },
    { id: 3, title: "Abstract ID" },
    { id: 4, title: "Review ID" },
    { id: 5, title: "Offer ID" },
    { id: 6, title: "Date" },
    { id: 7, title: "Place" },
    { id: 8, title: "D. Director" }
  ]
};
