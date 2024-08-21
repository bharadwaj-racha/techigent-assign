// src/components/AccountModal.js
import React from 'react';
// import './AccountModal.css';

function AccountModal({ show, handleClose, anchorRef }) {
  if (!show) return null;

  const styles = {
    position: 'absolute',
    top: anchorRef.current?.offsetTop + anchorRef.current?.offsetHeight + 5,
    left: 1124,
    zIndex: 1000,
  };

  return (
    <div className="account-modal" style={styles}>
      <div className="modal-header">
        <h5 className="modal-title">Account Settings</h5>
        <button onClick={handleClose} className="close-button">×</button>
      </div>
      <div className="modal-body">
        <div className="profile-section">
          <i className="bi bi-person-circle profile-icon"></i> {/* Icon used instead of an image */}
          <h2>John Doe</h2>
          <p>UI/UX Designer</p>
        </div>
        <div className="buttons-section">
          <button className="modal-button">
            <i className="bi bi-gear"></i> Account Setting
          </button>
          <button className="modal-button">
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountModal;
