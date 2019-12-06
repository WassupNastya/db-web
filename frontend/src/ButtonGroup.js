import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Modal } from "./Modal.js";

import "./ButtonGroup.css";

function ButtonGroup() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
      <button className="btn btn-primary mr-4">Search</button>
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
        ></Modal>
      )}
      {showDeleteModal && (
        <Modal
          header="Delete"
          footer={footerDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
        ></Modal>
      )}
    </div>
  );
}

export default ButtonGroup;
