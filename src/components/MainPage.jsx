import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const MainPage = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let message = '';

    switch (name) {
      case 'username':
        if (!value) {
          message = 'Username is required';
        }

        break;
      case 'email':
        if (!value) {
          message = 'Email is required';
        
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          message = 'Email is invalid';
        }
        break;
      case 'password':
        if (!value) {
          message = 'Password is required';
        } else if (value.length < 6) {
          message = 'Password should be at least 6 characters';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          message = 'Please confirm your password';
        } else if (value !== formData.password) {
          message = 'Passwords do not match';
        }
        break;
      default:
        break;
    }

    setError((prevError) => ({ ...prevError, [name]: message }));
    return message === '';
  };

  const validateForm = () => {
    const newError = {};

   if (!formData.username) {
    newError.username='username is required';
   }

   if(!formData.email) {
    newError.email='email is required';
   }

   if(!formData.password){
    newError.password='password is required';
   }

   if(!formData.confirmPassword){
    newError.confirmPassword='confirm pass is required';
   }

   setError(newError);

    return Object.keys(newError).length === 0
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/');
    }
  }

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  }

  useEffect(() => {
    console.log(formData, error, Object.keys(error).length==0);
  }, [formData, error]);

// console.log('SURR ', error)
return (
  <div className="registration-form">
    <h2>Registration Form</h2>
    <form onSubmit={handleOnSubmit}>
      <label>UserName: </label>
      <input 
        type="text"
        name="username"
        onChange={handleOnchange}
        value={formData.username}
      />
      {error.username && <p style={{color: 'red'}}>{error.username}</p>}
      <label>Email: </label>
      <input 
        type="email"
        name="email"
        onChange={handleOnchange}
        value={formData.email}
      />
      {error.email && <p style={{color: 'red'}}>{error.email}</p>}

      <label>Password: </label>
      <input 
        type="password"
        name="password"
        onChange={handleOnchange}
        value={formData.password}
      />
      {error.password && <p style={{color: 'red'}}>{error.password}</p>}

      <label>Confirm - Password: </label>
      <input 
        type="password"
        name="confirmPassword"
        onChange={handleOnchange}
        value={formData.confirmPassword}
      />
      {error.confirmPassword && <p style={{color: 'red'}}>{error.confirmPassword}</p>}

      <button type="submit">Submit</button>
    </form>
    <Link to='/'>Back to Home</Link>

  </div>  

)
}

export default MainPage;