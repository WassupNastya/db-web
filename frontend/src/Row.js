import React from 'react';
import './Row.css';

function Row({children, ...props}) {
  return (
    <div className="row d-flex align-items-center table-row">
        {children}
    </div>
  );
}

export default Row;