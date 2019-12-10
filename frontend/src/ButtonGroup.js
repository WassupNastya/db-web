import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faReply, faRecycle, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Modal } from "./Modal.js";

import "./ButtonGroup.css";

function ButtonGroup({tableName,onChange}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('');
  
  useEffect(() => {
    switch (tableName) {
      case "Candidates":
        setLabel('surname');
       break;
      case "Abstracts":
        setLabel('english');
        break;
      case "Offers":
        setLabel('proposed');
        break;
      case "Reviews":
          setLabel('conducted');
        break;
      case "Interviews":
        setLabel('place');
        break;
    }
  });


  function objectToQueryString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
  }

  async function getAbstractByEnglish(data) {
    let url ="http://localhost:3000/getAbstractByEnglish";
    url += '?' + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  async function getCandidateBySurname(data) {
    let url ="http://localhost:3000/getCandidateBySurname";
    url += '?' + objectToQueryString(data);
    fetch(url)
      .then(response => response.json())
      .then(data => onChange(data))
      .catch(err => console.log(err));
  }

  
async function getOfferByIsProposed(data) {
  let url ="http://localhost:3000/getOfferByIsProposed";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => onChange(data))
    .catch(err => console.log(err));
}

async function getReviewByConductedBy(data) {
  let url ="http://localhost:3000/getReviewByConductedBy";
  url += '?' + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => onChange(data))
    .catch(err => console.log(err));
}

async function getInterviewByPlace(data) {
  let url ="http://localhost:3000/getInterviewByPlace";
  url += '?' + objectToQueryString(data);
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
        getCandidateBySurname({surname : value})
        setValue('');
        setShowSearchModal(false);
       break;
      case "Abstracts":
       getAbstractByEnglish({english : value})
       setValue('');
       setShowSearchModal(false);
        break;
      case "Offers":
          getOfferByIsProposed({isProposed : value})
          setValue('');
          setShowSearchModal(false);
        break;
      case "Reviews":
        getReviewByConductedBy({conductedBy: value});
        setValue('');
        setShowSearchModal(false);
        break;
      case "Interviews":
          getInterviewByPlace({place: value});
          setValue('');
          setShowSearchModal(false);
        break;
    }
  };

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
  };

  const footerAddModal = (
    <div>
      <button className="btn btn-success mr-4">Add</button>
      <button
        className="btn btn-secondary"
        onClick={() => setShowAddModal(false)}
      >
        Cancel
      </button>
    </div>
  );

  const footerSearchModal = (
    <div>
      <button className="btn btn-primary mr-4" onClick={()=>getBy()}>Search</button>
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
    <button className="btn add-button" onClick={()=>skip()}>
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
          onCancel={() => setShowAddModal(false)}
        ></Modal>
      )}
      {showSearchModal && (
        <Modal  
          header="Search"
          footer={footerSearchModal}
          onCancel={() => setShowSearchModal(false)}
        ><div className='form-group'>
          <label style={{marginBottom:'5px'}}>{`Search by ${label}`}</label>
          <input value={value} onChange={v=>setValue(v.target.value)} type='text' className='form-control' placeholder={label}></input>
        </div>    
        </Modal>
      )}
      {showDeleteModal && (
        <Modal
          header="Delete"
          footer={footerDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
        >
          <div> <input
        className="form-check-input"
        type="radio"
        checked={false}
        id='delete'
        onChange={()=>{}}
        ></input> 
        <label className="form-check-label">Table</label>
        </div>
        <div>
        <input
        className="form-check-input"
        type="radio"
        checked={false}
        id='delete'
        onChange={()=>{}}
        ></input>
        </div></Modal>
      )}
    </div>
  );
}

export default ButtonGroup;
