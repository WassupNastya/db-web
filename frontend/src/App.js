import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./Header";
import ButtonGroup from "./ButtonGroup";
import Table from "./Table";

function App() {
  const [title, setTitle] = useState("Abstracts");
  const [content, setContent] = useState([]);

  function objectToQueryString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
  }

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

  
async function getCandidateBySurname(data) {
  let url ="http://localhost:3000/getCandidateBySurname";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function getAbstractByEnglish(data) {
  let url ="http://localhost:3000/getAbstractByEnglish";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function getOfferByIsProposed(data) {
  let url ="http://localhost:3000/getOfferByIsProposed";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function getReviewByConductedBy(data) {
  let url ="http://localhost:3000/getReviewByConductedBy";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function getInterviewByPlace(data) {
  let url ="http://localhost:3000/getInterviewByPlace";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function addCandidate(data) {
  let url ="http://localhost:3000/addCandidate";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function addAbstract(data) {
  let url ="http://localhost:3000/addAbstract";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function addOffer(data) {
  let url ="http://localhost:3000/addOffer";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function addReview(data) {
  let url ="http://localhost:3000/addReview";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function addInterview(data) {
  let url ="http://localhost:3000/addInterview";
  url += '?' + objectToQueryString(data);
  fetch(url)
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
        //getCandidateBySurname({surname : "Ivanov"});
        //addCandidate({surname:'Test',name:'Ivan',patronymic:'Ivanovich',skill:'C',source:'SP',status:'in process',result:'bad'});
        break;
      case "Abstracts":
        getAbstracts();
        //getAbstractByEnglish({english : "Upper Intermediate"});
        //addAbstract({salary:100000,english:'Begin',hours:40});
        break;
      case "Offers":
        getOffers();
        //getOfferByIsProposed({isProposed: '0'});
        //addOffer({isProposed:'0',isAdopted:'0'});
        break;
      case "Reviews":
        getReviews();
        //getReviewByConductedBy({conductedBy:'Sidorov'});
        //addReview({conductedBy:'QWERTY',comments:'YTREWQ'});
        break;
      case "Interviews":
        getInterviews();
        //getInterviewByPlace({place:'NN'});
        //addInterview({candidateId:12,reviewId:15,abstractId:11,offerId:10,date:'2019-02-02',place:'NN',dd:'Mark'});
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
