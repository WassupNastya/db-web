import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faReply } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Modal } from "./Modal.js";

import "./ButtonGroup.css";

function ButtonGroup({ tableName, onChange }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    switch (tableName) {
      case "Candidates":
        setLabel("surname");
        break;
      case "Abstracts":
        setLabel("english");
        break;
      case "Offers":
        setLabel("proposed");
        break;
      case "Reviews":
        setLabel("conducted");
        break;
      case "Interviews":
        setLabel("place");
        break;
    }
  });

  const [newModel, setNewModel] = useState({});

  function objectToQueryString(obj) {
    return Object.keys(obj)
      .map(key => key + "=" + obj[key])
      .join("&");
  }

  async function getAbstractByEnglish(data) {
    let url = "http://localhost:3000/getAbstractByEnglish";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getCandidateBySurname(data) {
    let url = "http://localhost:3000/getCandidateBySurname";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getOfferByIsProposed(data) {
    let url = "http://localhost:3000/getOfferByIsProposed";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getReviewByConductedBy(data) {
    let url = "http://localhost:3000/getReviewByConductedBy";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getInterviewByPlace(data) {
    let url = "http://localhost:3000/getInterviewByPlace";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getCandidates() {
    fetch("http://localhost:3000/candidates")
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getAbstracts() {
    fetch("http://localhost:3000/abstracts")
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getOffers() {
    return fetch("http://localhost:3000/offers")
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getReviews() {
    return fetch("http://localhost:3000/reviews")
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getInterviews() {
    return fetch("http://localhost:3000/interviews")
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  function getBy() {
    switch (tableName) {
      case "Candidates":
        getCandidateBySurname({ surname: value });
        setValue("");
        setShowSearchModal(false);
        break;
      case "Abstracts":
        getAbstractByEnglish({ english: value });
        setValue("");
        setShowSearchModal(false);
        break;
      case "Offers":
        getOfferByIsProposed({ isProposed: value });
        setValue("");
        setShowSearchModal(false);
        break;
      case "Reviews":
        getReviewByConductedBy({ conductedBy: value });
        setValue("");
        setShowSearchModal(false);
        break;
      case "Interviews":
        getInterviewByPlace({ place: value });
        setValue("");
        setShowSearchModal(false);
        break;
    }
  }

  function skip() {
    switch (tableName) {
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
  }

  async function addCandidate(data) {
    let url = "http://localhost:3000/addCandidate";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  async function addAbstract(data) {
    let url = "http://localhost:3000/addAbstract";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  async function addOffer(data) {
    let url = "http://localhost:3000/addOffer";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  async function addReview(data) {
    let url = "http://localhost:3000/addReview";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  async function addInterview(data) {
    let url = "http://localhost:3000/addInterview";
    url += "?" + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  const add = tableName => {
    switch (tableName) {
      case "Candidates":
        addCandidate(newModel);
        break;
      case "Abstracts":
        addAbstract(newModel);
        break;
      case "Offers":
        addOffer(newModel);
        break;
      case "Reviews":
        addReview(newModel);
        break;
      case "Interviews":
        addInterview(newModel);
        break;
    }
  };

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

  const footerAddModal = (
    <div>
      <button
        className="btn btn-success mr-4"
        onClick={() => {
          add(tableName);
          setShowAddModal(false);
          setNewModel({});
        }}
      >
        Add
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setShowAddModal(false);
          setNewModel({});
        }}
      >
        Cancel
      </button>
    </div>
  );

  const footerSearchModal = (
    <div>
      <button className="btn btn-primary mr-4" onClick={() => getBy()}>
        Search
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setShowSearchModal(false)}
      >
        Cancel
      </button>
    </div>
  );

  const footerDeleteModal = (
    <div>
      <button className="btn btn-danger mr-4">Delete</button>
      <button
        className="btn btn-secondary"
        onClick={() => setShowDeleteModal(false)}
      >
        Cancel
      </button>
    </div>
  );

  return (
    <div className="button-group">
      <button className="btn add-button" onClick={() => skip()}>
        <FontAwesomeIcon icon={faReply} className="icon-add" />
        Skip
      </button>
      <button className="btn add-button" onClick={() => setShowAddModal(true)}>
        <FontAwesomeIcon icon={faPlus} className="icon-add" />
        Add new
      </button>
      <button
        className="btn search-button"
        onClick={() => setShowSearchModal(true)}
      >
        <FontAwesomeIcon icon={faSearch} className="icon-search" />
      </button>
      <button
        className="btn delete-button"
        onClick={() => setShowDeleteModal(true)}
      >
        <FontAwesomeIcon icon={faTrashAlt} className="icon-delete" />
      </button>
      {showAddModal && (
        <Modal
          header="Add"
          footer={footerAddModal}
          onCancel={() => {
            setShowAddModal(false);
            setNewModel({});
          }}
        >
          {getInputs(tableName)}
        </Modal>
      )}
      {showSearchModal && (
        <Modal
          header="Search"
          footer={footerSearchModal}
          onCancel={() => setShowSearchModal(false)}
        >
          <div className="form-group">
            <label
              style={{ marginBottom: "5px" }}
            >{`Search by ${label}`}</label>
            <input
              value={value}
              onChange={v => setValue(v.target.value)}
              type="text"
              className="form-control"
              placeholder={label}
            ></input>
          </div>
        </Modal>
      )}
      {showDeleteModal && (
        <Modal
          header="Delete"
          footer={footerDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
        >
          <div>
            {" "}
            <input
              className="form-check-input"
              type="radio"
              checked={false}
              id="delete"
              onChange={() => {}}
            ></input>
            <label className="form-check-label">Table</label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              checked={false}
              id="delete"
              onChange={() => {}}
            ></input>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ButtonGroup;

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

function objectToQueryString(obj) {
  return Object.keys(obj)
    .map(key => key + "=" + obj[key])
    .join("&");
}
