import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Contact() {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [message, setMessage] = useState(' ');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }


  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('Name is required')
    }
    if (!email) {
      setErrorMessage('Email is required')
    }
    if (!message) {
      setErrorMessage('Message is required')
    }
    if (!validateEmail(email)) {
      setErrorMessage('Your Email is invalid');
      return;
    } 

    alert(`Thanks ${name}`);
    setName(' ');
    setEmail(' ');
    setMessage(' ');
    setErrorMessage(' ');



  };

  return (
    <div class="p-4 ">
      <h3>Contact</h3>
      <form>
        <div class="form-group">
          <label for="exampleInputName1">Name: </label>
          <input 
            value={name} 
            name='name'
            onChange={handleInputChange}
            type="text" 
            class="form-control" 
            id="exampleInputName1" placeholder="Name">

          </input>
        </div>
        
        
        <div class='form-group'>
          <label for='exampleInputEmail1'>Email address: </label>
          
          <input 
            value={email} 
            name='email' 
            onChange={handleInputChange} 
            type='email' class='form-control' 
            id='exampleInputEmail1' 
            aria-describedby='emailHelp' 
            placeholder="Enter email">
            
          </input>
          
        </div>
        
        <div class="form-group">
          <label for="exampleInputMessage1">Message: </label>
          <input 
            value={message} 
            name='message'
            onChange={handleInputChange}
            type="text" 
            class="form-control" 
            id="exampleInputMessage1" placeholder="message">

          </input>
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleFormSubmit} >Submit</button>


      </form>
      {errorMessage && (
            <div>
              <small id="emailHelp" class="form-text text-muted">{errorMessage}</small>
            </div>
          )}


    </div>
  )




} 

export default Contact;

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact</h1>
//       <p>
//         Form
//       </p>
//     </div>
//   );
// }
    