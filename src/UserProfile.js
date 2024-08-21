// src/components/UserProfile.js
import React, { useState, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './UserProfile.css';
import AccountModal from './AccountModal';

function UserProfile() {
  const [showModal, setShowModal] = useState(false);
  const accountRef = useRef(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="user-profile" style={{marginLeft: '96px'}}>
      <div className="profile-info">
      <i className="bi bi-person-circle profile-icon"></i> {/* Icon used instead of an image */}
      <div>
          <h2>John Doe</h2>
          <p>UI/UX Designer</p>
        </div>
      </div>
      <ul className="user-options">
        <li ref={accountRef} onClick={handleOpenModal}>
          <i className="bi bi-person-circle user-icon"></i>
          Account Setting
        </li>
        <li>
          <i className="bi bi-box-arrow-right user-icon"></i>
          Logout
        </li>
      </ul>
      <AccountModal
        show={showModal}
        handleClose={handleCloseModal}
        anchorRef={accountRef}
      />
    </div>
  );
}

export default UserProfile;
