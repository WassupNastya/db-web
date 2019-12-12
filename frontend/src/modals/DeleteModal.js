import React, { useState } from "react";
import { Modal } from "../shared/Modal";
import { getInputs } from "../heplers";
import { edit } from "../actions/apply";
import { deleteById } from "../actions/apply";

export const DeleteModal = ({ id, tableName, setModal, update }) => {
  const [newModel, setNewModel] = useState({});
console.log(id)
  const footer = (
    <div className="d-flex">
      <button
        className="btn btn-danger mr-4"
        onClick={() => {
            
          deleteById({id,tableName});
          update(tableName);
          setModal({ show: false, id: 0 });
          update(tableName);
        }}
      >
        Delete
      </button>
      <button
        className="btn btn-secondary"
        onClick={() =>  setModal({ show: false, id: 0 })}
      >
        Cancel
      </button>
    </div>
  );

  return (
    <Modal
      header="Delete by id"
      footer={footer}
      onCancel={() => {
        setModal({ show: false, id: 0 });
        setNewModel({});
      }}
    >
    <div className="message-for-delete">
        <p>By deleting this data, you can also delete the data associated with it. 
       </p>
       <div>
        Are you sure you want to delete?
      </div>
      </div>
    </Modal>
  );
};
