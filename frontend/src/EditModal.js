import React, { useState } from "react";
import { Modal } from "./Modal";

export const EditModal = ({ id, tableName, setModal }) => {
  const [newModel, setNewModel] = useState({});

  const getInputs = tableName => {
    switch (tableName) {
      case "Candidates": {
        return candidateInputs.map(x => (
          <div key={x.label} className="form-group">
            <label>{x.label}</label>
            <input
              className="form-control"
              onChange={e =>
                setNewModel({ ...newModel, [x.field]: e.target.value })
              }
            ></input>
          </div>
        ));
      }
      case "Abstracts": {
        return abstractInputs.map(x => (
          <div key={x.label} className="form-group">
            <label>{x.label}</label>
            <input
              className="form-control"
              onChange={e =>
                setNewModel({ ...newModel, [x.field]: e.target.value })
              }
            ></input>
          </div>
        ));
      }
      case "Offers": {
        return offerInputs.map(x => (
          <div key={x.label} className="form-group">
            <label>{x.label}</label>
            <input
              className="form-control"
              onChange={e =>
                setNewModel({ ...newModel, [x.field]: e.target.value })
              }
            ></input>
          </div>
        ));
      }
      case "Reviews": {
        return reviewInputs.map(x => (
          <div key={x.label} className="form-group">
            <label>{x.label}</label>
            <input
              className="form-control"
              onChange={e =>
                setNewModel({ ...newModel, [x.field]: e.target.value })
              }
            ></input>
          </div>
        ));
      }
      case "Interviews": {
        return interviewInputs.map(x => (
          <div key={x.label} className="form-group">
            <label>{x.label}</label>
            <input
              className="form-control"
              onChange={e =>
                setNewModel({ ...newModel, [x.field]: e.target.value })
              }
            ></input>
          </div>
        ));
      }
    }
  };

  const edit = tableName => {
    switch (tableName) {
      case "Candidates":
        setCandidate(newModel);
        break;
      case "Abstracts":
        setAbstract(newModel);
        break;
      case "Offers":
        setOffer(newModel);
        break;
      case "Reviews":
        setReview(newModel);
        break;
      case "Interviews":
        setInterview(newModel);
        break;
    }
  };

  const footer = (
    <div>
      <button
        className="btn btn-success mr-4"
        onClick={() => {
          edit(tableName);
          setModal({ show: false, id: 0 });
          setNewModel({});
        }}
      >
        Edit
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setModal({ show: false, id: 0 });
          setNewModel({});
        }}
      >
        Cancel
      </button>
    </div>
  );

  async function setCandidate(data) {
    let url = "http://localhost:3000/setCandidate";
    url += "?" + objectToQueryString({ candidateId: id, ...data });
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  async function setAbstract(data) {
    let url = "http://localhost:3000/setAbstract";
    url += "?" + objectToQueryString({ abstractId: id, ...data });
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  async function setOffer(data) {
    let url = "http://localhost:3000/setOffer";
    url += "?" + objectToQueryString({offerId: id, ...data});
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  async function setReview(data) {
    let url = "http://localhost:3000/setReview";
    url += "?" + objectToQueryString({reviewId: id, ...data});
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  async function setInterview(data) {
    let url = "http://localhost:3000/setInterview";
    url += "?" + objectToQueryString({interviewId: id, ...data});
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  function objectToQueryString(obj) {
    return Object.keys(obj)
      .map(key => key + "=" + obj[key])
      .join("&");
  }

  return (
    <Modal
      header="Edit"
      footer={footer}
      onCancel={() => {
        setModal({ show: false, id: 0 });
        setNewModel({});
      }}
    >
      {getInputs(tableName)}
    </Modal>
  );
};

const candidateInputs = [
  { label: "Surname", field: "surname" },
  { label: "Name", field: "name" },
  { label: "Patronymic", field: "patronymic" },
  { label: "Skill", field: "skill" },
  { label: "Source", field: "source" },
  { label: "Status", field: "status" }
];
const abstractInputs = [
  { label: "Desired Salary", field: "salary" },
  { label: "English Level", field: "english" },
  { label: "Hours Per Week", field: "hours" }
];
const offerInputs = [
  { label: "Is Proposed", field: "isProposed" },
  { label: "Is Adopted", field: "isAdopted" }
];
const reviewInputs = [
  { label: "Conducted By", field: "conductedBy" },
  { label: "Comments", field: "comments" }
];
const interviewInputs = [
  { label: "Candidate Id", field: "candidateId" },
  { label: "Abstract Id", field: "abstractId" },
  { label: "Review Id", field: "reviewId" },
  { label: "Offer Id", field: "offerId" },
  { label: "Date", field: "date" },
  { label: "Place", field: "place" },
  { label: "Delivery Director", field: "dd" }
];
