import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus, faReply } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Modal } from "../shared/Modal";
import { getInputs } from "../heplers";
import { add } from "../actions/apply";
import {
  getAbstractByEnglish,
  getCandidateBySurname,
  getOfferByIsProposed,
  getReviewByConductedBy,
  getInterviewByPlace,
  getCandidates,
  getAbstracts,
  getOffers,
  getReviews,
  getInterviews
} from "../actions/get";
import {
  deleteCandidateBySurname,
  deleteAbstractByEnglish,
  deleteOfferByIsProposed,
  deleteReviewByConductedBy,
  deleteInterviewByPlace,
  deleteAllCandidates,
  deleteAllAbstracts,
  deleteAllOffers,
  deleteAllReviews,
  deleteAllInterviews
} from "../actions/delete";

import "./ButtonGroup.css";

function ButtonGroup({ tableName, updateTable, update }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [typeDelete, setTypeDelete] = useState(1);
  const [label, setLabel] = useState("");
  const [newModel, setNewModel] = useState({});
  const [value, setValue] = useState("");

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

  function getBy() {
    switch (tableName) {
      case "Candidates":
        getCandidateBySurname({ data: { surname: value }, updateTable });
        setValue("");
        setShowSearchModal(false);
        break;
      case "Abstracts":
        getAbstractByEnglish({ data: { english: value }, updateTable });
        setValue("");
        setShowSearchModal(false);
        break;
      case "Offers":
        getOfferByIsProposed({ data: { isproposed: value }, updateTable });
        setValue("");
        setShowSearchModal(false);
        break;
      case "Reviews":
        getReviewByConductedBy({ data: { conductedby: value }, updateTable });
        setValue("");
        setShowSearchModal(false);
        break;
      case "Interviews":
        getInterviewByPlace({ data: { place: value }, updateTable });
        setValue("");
        setShowSearchModal(false);
        break;
    }
  }

  function deleteBy() {
    switch (tableName) {
      case "Candidates":
        typeDelete == 1
          ? deleteAllCandidates()
          : deleteCandidateBySurname({ surname: value });
        setValue("");
        setShowDeleteModal(false);
        break;
      case "Abstracts":
        typeDelete == 1
          ? deleteAllAbstracts()
          : deleteAbstractByEnglish({ english: value });
        setValue("");
        setShowDeleteModal(false);
        break;
      case "Offers":
        typeDelete == 1
          ? deleteAllOffers()
          : deleteOfferByIsProposed({ isProposed: value });
        setValue("");
        setShowDeleteModal(false);
        break;
      case "Reviews":
        typeDelete == 1
          ? deleteAllReviews()
          : deleteReviewByConductedBy({ conductedBy: value });
        setValue("");
        setShowDeleteModal(false);
        break;
      case "Interviews":
        typeDelete == 1
          ? deleteAllInterviews()
          : deleteInterviewByPlace({ place: value });
        setValue("");
        setShowDeleteModal(false);
        break;
    }
  }

  const footerAddModal = (
    <div>
      <button
        className="btn btn-success mr-4"
        onClick={() => {
          add({ tableName, newModel });
          setShowAddModal(false);
          setNewModel({});
          update(tableName)
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
      <button className="btn btn-danger mr-4" onClick={() => {deleteBy(); update(tableName)}}>
        Delete
      </button>
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
      <button className="btn add-button" onClick={() => update(tableName)}>
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
          {getInputs({ tableName, newModel, setNewModel })}
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
          <div className="content-modal-delete">
            <div className="form-check">
              <input
                name="delete"
                value="option1"
                className="form-check-input"
                checked={typeDelete === 1}
                type="radio"
                id="delete1"
                onChange={e =>
                  e.target.checked ? setTypeDelete(1) : setTypeDelete(0)
                }
              ></input>
              <label className="form-check-label" htmlFor="delete1">
                Table
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                name="delete"
                value="option2"
                className="form-check-input"
                checked={typeDelete == 2}
                type="radio"
                id="delete2"
                onChange={e =>
                  e.target.checked ? setTypeDelete(2) : setTypeDelete(0)
                }
              ></input>
              <label
                className="form-check-label"
                htmlFor="delete2"
              >{`Delete by field "${label}"`}</label>
              {typeDelete == 2 && (
                <input
                  style={{ width: "15rem", marginLeft: "2rem" }}
                  value={value}
                  onChange={v => setValue(v.target.value)}
                  type="text"
                  className="form-control"
                  placeholder={label}
                ></input>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ButtonGroup;