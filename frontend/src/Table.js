import React from "react";
import Row from "./Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Table.css";

function Table({ tableName, headers, content, ...props }) {
  return (
    <div className="table">
      <div className="row d-flex align-items-center header-row">
        {headers.map(x => (
          <div className="col" key={x.id}>
            {x.title}
          </div>
        ))}
      </div>
      {content.map(x => (
        <Row key={x.id} children={rows[tableName](x)}></Row>
      ))}
    </div>
  );
}

export default Table;

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
    </React.Fragment>
  ),
  Abstracts: x => (
    <React.Fragment>
      <div className="col">{x.abstractid}</div>
      <div className="col">{x.salary ? x.salary : ""}</div>
      <div className="col">{x.english ? x.english : ""}</div>
      <div className="col">{x.hours ? x.hours : ""}</div>
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
    </React.Fragment>
  ),
  Reviews: x => (
    <React.Fragment>
      <div className="col">{x.reviewid}</div>
      <div className="col">{x.conductedby ? x.conductedby : ""}</div>
      <div className="col">{x.comments ? x.comments : ""}</div>
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
    </React.Fragment>
  )
};
