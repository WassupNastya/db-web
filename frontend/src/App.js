import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./app/Header";
import ButtonGroup from "./app/ButtonGroup";
import Table from "./app/Table";
import { headers } from "./const";
import {
  getCandidates,
  getAbstracts,
  getOffers,
  getReviews,
  getInterviews
} from "./actions/get";

function App({ setGoNext }) {
  const [title, setTitle] = useState("Abstracts");
  const [content, setContent] = useState([]);

  function objectToQueryString(obj) {
    return Object.keys(obj)
      .map(key => key + "=" + obj[key])
      .join("&");
  }

  async function createDB(data) {
    let url = "http://localhost:3000/createDB";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  function updateTable(content) {
    setContent(content);
  }

  useEffect(() => {
    switch (title) {
      case "Candidates":
        getCandidates(updateTable);
        break;
      case "Abstracts":
        getAbstracts(updateTable);
        break;
      case "Offers":
        getOffers(updateTable);
        break;
      case "Reviews":
        getReviews(updateTable);
        break;
      case "Interviews":
        getInterviews(updateTable);
        break;
    }
  }, [title]);

  function update(tableName) {
    switch (tableName) {
      case "Candidates":
        getCandidates(updateTable);
        break;
      case "Abstracts":
        getAbstracts(updateTable);
        break;
      case "Offers":
        getOffers(updateTable);
        break;
      case "Reviews":
        getReviews(updateTable);
        break;
      case "Interviews":
        getInterviews(updateTable);
        break;
    }
  }

  return (
    <div>
      <div className="main-screen">
        <Header changeTitle={title => setTitle(title)}></Header>
        <div className="d-flex justify-content-between">
          <h2 className="page-title">{title}</h2>
          <ButtonGroup
            page={title}
            updateTable={data => updateTable(data)}
            tableName={title}
            update={update}
            setGoNext={setGoNext}
          ></ButtonGroup>
        </div>
        <div className="table-background">
          <Table
            tableName={title}
            headers={headers[title]}
            content={content}
            updateTable={data => updateTable(data)}
            update={update}
          ></Table>
        </div>
      </div>
    </div>
  );
}

export default App;
