import React from "react";
import {
  candidateInputs,
  abstractInputs,
  offerInputs,
  reviewInputs,
  interviewInputs
} from "./const";

export function objectToQueryString(obj) {
  return Object.keys(obj)
    .map(key => key + "=" + obj[key])
    .join("&");
}

export const getInputs = ({ tableName, newModel, setNewModel }) => {
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
