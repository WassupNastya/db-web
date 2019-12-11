import React, { useState } from "react";
import Row from "./Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { EditModal } from "./EditModal";
import "./Table.css";

function Table({ tableName, headers, content, ...props }) {
  const [editModal, setEditModal] = useState({ show: false, id: 0 });

  const rows = {
    Candidates: x => (
      <React.Fragment>
        <div className="col">{x.candidateid}</div>
        <div className="col">{x.surname}</div>
        <div className="col">{x.name}</div>
        <div className="col">{x.patronymic ? x.patronymic : ""}</div>
        <div className="col">{x.skill ? x.skill : ""}</div>
        <div className="col">{x.source ? x.source : ""}</div>
        <div className="col">{x.status ? x.status : ""}</div>
        <button
          className="btn col"
          onClick={() => setEditModal({ show: true, id: x.candidateid })}
        >
          <FontAwesomeIcon icon={faEdit} color="white" />
        </button>
      </React.Fragment>
    ),
    Abstracts: x => (
      <React.Fragment>
        <div className="col">{x.abstractid}</div>
        <div className="col">{x.salary ? x.salary : ""}</div>
        <div className="col">{x.english ? x.english : ""}</div>
        <div className="col">{x.hours ? x.hours : ""}</div>
        <button className="btn col edit-icon">
          <FontAwesomeIcon
            icon={faEdit}
            color="white"
            onClick={() => setEditModal({ show: true, id: x.abstractid })}
          />
        </button>
      </React.Fragment>
    ),
    Offers: x => (
      <React.Fragment>
        <div className="col">{x.offerid}</div>
        <div className="col">
          {x.isproposed ? (
            x.isproposed == 1 ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )
          ) : (
            ""
          )}
        </div>
        <div className="col">
          {x.isadopted ? (
            x.isadopted == 1 ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )
          ) : (
            ""
          )}
        </div>
        <button
          className="btn col"
          onClick={() => setEditModal({ show: true, id: x.offerid })}
        >
          <FontAwesomeIcon icon={faEdit} color="white" />
        </button>
      </React.Fragment>
    ),
    Reviews: x => (
      <React.Fragment>
        <div className="col">{x.reviewid}</div>
        <div className="col">{x.conductedby ? x.conductedby : ""}</div>
        <div className="col">{x.comments ? x.comments : ""}</div>
        <button
          className="btn col"
          onClick={() => setEditModal({ show: true, id: x.reviewid })}
        >
          <FontAwesomeIcon icon={faEdit} color="white" />
        </button>
      </React.Fragment>
    ),
    Interviews: x => (
      <React.Fragment>
        <div className="col">{x.interviewid}</div>
        <div className="col">{x.candidateid}</div>
        <div className="col">{x.abstractid}</div>
        <div className="col">{x.reviewid}</div>
        <div className="col">{x.offerid}</div>
        <div className="col">{x.date ? x.date : ""}</div>
        <div className="col">{x.place ? x.place : ""}</div>
        <div className="col">{x.dd ? x.dd : ""}</div>
        <button
          className="btn col"
          onClick={() => setEditModal({ show: true, id: x.interviewid })}
        >
          <FontAwesomeIcon icon={faEdit} color="white" />
        </button>
      </React.Fragment>
    )
  };

  return (
    <div className="table">
      <div className="row d-flex align-items-center header-row">
        {headers.map(x => (
          <div className="col" key={x.id}>
            {x.title}
          </div>
        ))}
      </div>
      {content.map((x, i) => (
        <Row key={i} children={rows[tableName](x)}></Row>
      ))}
      {editModal.show && (
        <EditModal setModal={setEditModal} tableName={tableName} id={editModal.id} />
      )}
    </div>
  );
}

export default Table;
