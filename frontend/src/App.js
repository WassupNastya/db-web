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

async function setCandidate(data) {
  let url ="http://localhost:3000/setCandidate";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function setAbstract(data) {
  let url ="http://localhost:3000/setAbstract";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function setOffer(data) {
  let url ="http://localhost:3000/setOffer";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function setReview(data) {
  let url ="http://localhost:3000/setReview";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function setInterview(data) {
  let url ="http://localhost:3000/setInterview";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function deleteCandidateById(data) {
  let url ="http://localhost:3000/deleteCandidateById";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function deleteAbstractById(data) {
  let url ="http://localhost:3000/deleteAbstractById";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function deleteOfferById(data) {
  let url ="http://localhost:3000/deleteOfferById";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function deleteReviewById(data) {
  let url ="http://localhost:3000/deleteReviewById";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function deleteInterviewById(data) {
  let url ="http://localhost:3000/deleteInterviewById";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

async function deleteCandidateBySurname(data) {
  let url ="http://localhost:3000/deleteCandidateBySurname";
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
        //setCandidate({candidateId:11, surname:'Petrov',name:'Ivan',patronymic:'Ivanovich',skill:'SQL',source:'HH',status:'in process',result:'bad'});
        //deleteCandidateById({candidateId: 12});
        //deleteCandidateBySurname({surname:'Test'});
        break;
      case "Abstracts":
        getAbstracts();
        //getAbstractByEnglish({english : "Upper Intermediate"});
        //addAbstract({salary:100000,english:'Begin',hours:40});
        //setAbstract({abstractId:10,salary:15000,english:'Adva',hours:40});
        //deleteAbstractById({abstractId:9});
        break;
      case "Offers":
        getOffers();
        //getOfferByIsProposed({isProposed: '0'});
        //addOffer({isProposed:'0',isAdopted:'0'});
        //setOffer({offerId:8,isProposed:'1',isAdopted:'1'});
        //deleteOfferById({offerId:9});
        break;
      case "Reviews":
        getReviews();
        //getReviewByConductedBy({conductedBy:'Sidorov'});
        //addReview({conductedBy:'QWERTY',comments:'YTREWQ'});
        //setReview({reviewId:7, conductedBy:'Ivan',comments:'TEST'});
        //deleteReviewById({reviewId:7});
        break;
      case "Interviews":
        getInterviews();
        //getInterviewByPlace({place:'NN'});
        //addInterview({candidateId:13,reviewId:15,abstractId:11,offerId:10,date:'2019-02-02',place:'Ekb',dd:'Mark'});
        //setInterview({interviewId:29 ,candidateId:10,reviewId:7,abstractId:9,offerId:8,date:'2019-10-02',place:'EKAT',dd:'Nick'});
        //deleteInterviewById({interviewId:36});
        break;
    }
  }, [title]);

  return (
    <div>
      <div className="main-screen">
        <Header changeTitle={title => setTitle(title)}></Header>
        <div className="d-flex justify-content-between">
          <h2 className="page-title">{title}</h2>
          <ButtonGroup tableName={title} onChange={data=>updateTable(data)}></ButtonGroup>
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
    { id: 8, title:"Action"}
  ],
  Abstracts: [
    { id: 1, title: "ID" },
    { id: 2, title: "Desired Salary" },
    { id: 3, title: "English Level" },
    { id: 4, title: "Hours Per Week" },
    { id: 5, title:"Action"}
  ],
  Offers: [
    { id: 1, title: "ID" },
    { id: 2, title: "Is Proposed" },
    { id: 3, title: "Is Adopted" },
    { id: 4, title:"Action"}
  ],
  Reviews: [
    { id: 1, title: "ID" },
    { id: 2, title: "Conducted By" },
    { id: 3, title: "Comments" },
    { id: 4, title:"Action"}
  ],
  Interviews: [
    { id: 1, title: "ID" },
    { id: 2, title: "Candidate ID" },
    { id: 3, title: "Abstract ID" },
    { id: 4, title: "Review ID" },
    { id: 5, title: "Offer ID" },
    { id: 6, title: "Date" },
    { id: 7, title: "Place" },
    { id: 8, title: "D. Director" },
    { id: 9, title:"Action"}
  ]
};
