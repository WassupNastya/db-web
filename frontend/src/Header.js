import React, { useState } from "react";
import "./Header.css";

function Header({changeTitle, ...props}) {
  const [model, setModel] = useState(1);

  return (
    <div className="header">
      <a
        className={model === 0 ? "active-link" : "link"}
        href="/#"
        onClick={() => {
          setModel(0); changeTitle("Candidates");
        }}
      >
        Candidates
      </a>
      <a
        className={model === 1 ? "active-link" : "link"}
        href="/#"
        onClick={() => {setModel(1); changeTitle('Abstracts')}}
      >
        Abstracts
      </a>
      <a
        className={model === 2 ? "active-link" : "link"}
        href="/#"
        onClick={() => {setModel(2); changeTitle('Offers')}}
      >
        Offers
      </a>
      <a
        className={model === 3 ? "active-link" : "link"}
        href="/#"
        onClick={() => {setModel(3); changeTitle('Reviews')}}
      >
        Reviews
      </a>
      <a
        className={model === 4 ? "active-link" : "link"}
        href="/#"
        onClick={() => {setModel(4); changeTitle('Interviews')}}
      >
        Interviews
      </a>
    </div>
  );
}

export default Header;
