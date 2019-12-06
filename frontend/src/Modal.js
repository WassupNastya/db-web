import React, { useLayoutEffect } from 'react';

import './Modal.css';

export const Modal = ({ className, header, footer, onCancel, noHeight, children, size, ...other }) => {
  useLayoutEffect(() => {
    document.body.classList.toggle('modal-open');
    return () => {
      document.body.classList.toggle('modal-open');
    };
  }, []);
  return (
    <>
      <div className="app-modal modal fade show" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{header}</h5>
              <button type="button" className="close" aria-label="Close" onClick={onCancel}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};
