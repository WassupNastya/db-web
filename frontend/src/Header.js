import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [model, setModel] = useState('0');

  return (
    <div className="header">
        <a className={model == 0? "active-link" : "link"} href="#" onClick={() => setModel(0)}>Candidates</a>
        <a className={model == 1? "active-link" : "link"} href="#" onClick={() => setModel(1)}>Abstracts</a>
        <a className={model == 2? "active-link" : "link"} href="#" onClick={() => setModel(2)}>Offers</a>
        <a className={model == 3? "active-link" : "link"} href="#" onClick={() => setModel(3)}>Reviews</a>
        <a className={model == 4? "active-link" : "link"} href="#" onClick={() => setModel(4)}>Interviews</a>
    </div>
  );
}

export default Header;