import React, { useState } from 'react';
import '../sign-in-modal/SignInModal.css'; // Update the path to your CSS file

const SignInModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling sign-in form submission
    console.log('Form submitted:', formData);
    // Close the sign-in modal
    onClose();
  };

  return (
    <div className='modal-overlay'>
       
      <div className='sign-in-modal'>
      <h1 className='header'>Sign In</h1>
        <form onSubmit={handleSignInSubmit} className='sign-in-form'>
          <label>
            Username:
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            First Name:
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>
          <div className='modal-buttons'>
            <button type='submit'>Submit</button>
            <button type='button' onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
