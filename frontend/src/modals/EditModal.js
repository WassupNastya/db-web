import React, { useState } from "react";
import { Modal } from "../shared/Modal";
import { getInputs } from "../heplers";
import { edit } from "../actions/apply";

export const EditModal = ({ id, tableName, setModal, update }) => {
  const [newModel, setNewModel] = useState({});

  const footer = (
    <div>
      <button
        className="btn btn-success mr-4"
        onClick={() => {
          edit({ id, newModel, tableName });
          update(tableName);
          setNewModel({});
          setModal({ show: false, id: 0 });
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

  return (
    <Modal
      header="Edit"
      footer={footer}
      onCancel={() => {
        setModal({ show: false, id: 0 });
        setNewModel({});
      }}
    >
      {getInputs({ tableName, newModel, setNewModel })}
    </Modal>
  );
};
