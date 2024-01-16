import React, { useState } from 'react';
import '../sign-up-modal/SignUpModal.css'; 
import axios from 'axios';

const SignUpModal = ({ onClose }) => {
  const [formData, setFormData] = useState({//Create structure for the data inside the form
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e) => {//Update the structure for the data according to the values of the input
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUpSubmit = async (e) => {//Make a request to the server side application
    e.preventDefault();

    try {
      // Make a POST request to backend endpoint
      const response = await axios.post('http://localhost:8080/user/add', formData);

      // Handle successful authentication response
      console.log('Sign Up successful:', response.data);
     
      onClose();//Close the modal
    } catch (error) {
      // Handle authentication failure or other errors
      console.error('Sign Up failed:', error.response.data);
    }
  };

  return (
    <div className='modal-overlay'>
      
      <div className='sign-up-modal'>
      <div className='header-sign-up'>
        <h1>Sign Up</h1>
      </div>
        <form onSubmit={handleSignUpSubmit} className='sign-up-form'>
        <label className='FN-label'>
            First Name:
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          <label className='LN-label'>
            Last Name:
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>
          <label className='U-label'>
            Username:
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label className='P-label'>
            Password:
            <input
              type='text'
              name='password'
              value={formData.password}
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

export default SignUpModal;
