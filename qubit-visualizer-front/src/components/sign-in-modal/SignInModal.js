import React, { useState } from 'react';
import '../sign-in-modal/SignInModal.css'; 
import axios from 'axios';

const SignInModal = ({ onClose, updateSelectedGate  }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {//Update the structure for the data according to the values of the input
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignInSubmit = async (e) => {//Make a request to the server side application
    e.preventDefault();

    try {
      // Make a POST request to the backend endpoint
      const response = await axios.post('http://localhost:8080/user/login', formData);

      // Handle successful authentication response
      console.log('Authentication successful:', response.data);
      const selectedGate = response.data.selectedGate;
      updateSelectedGate(selectedGate);
      onClose();
    } catch (error) {
      // Handle authentication failure or other errors
      console.error('Authentication failed:', error.response.data);
    }
  };

  return (
    <div className='modal-overlay'>
       
      <div className='sign-in-modal'>

      <div className='header-sign-in'>
        <h1>Sign Up</h1>
      </div>
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

export default SignInModal;
