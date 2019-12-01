import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

import "./ButtonGroup.css";

function ButtonGroup() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="button-group">
      <button className="btn add-button">
        <FontAwesomeIcon icon={faPlus} className="icon-add" />
        Add new
      </button>
      <button className="btn search-button">
        <FontAwesomeIcon
          icon={faSearch}
          className="icon-search"
          onClick={() => setShowSearchModal(true)}
        />
      </button>
      <button className="btn delete-button">
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="icon-delete"
          onClick={() => {
            setShowDeleteModal(true);
            console.log("click");
          }}
        />
      </button>
    </div>
  );
}

export default ButtonGroup;
