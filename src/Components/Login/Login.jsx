import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Joi from 'joi';
import logo from '../../images/logo.png'





export default function Login({ saveUserData }) {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function sendLoginDataToApi() {
    let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signin`, user);
    // console.log(data);
    if (data.message === 'success') {
      setIsLoading(false);
      localStorage.setItem('userToken', data.token);
      saveUserData();
      navigate('/home');

    }
    else {
      setError(data.message);
      setIsLoading(false);
    }
  }

  function submitLoginForm(e) {
    e.preventDefault();//to prevent reload.
    setIsLoading(true);

    let validationResult = validateLoginForm();
    // console.log(validationResult);
    if (validationResult.error) {
      setIsLoading(false);
      setErrorList(validationResult.error.details);
    }
    else {
      sendLoginDataToApi();
    }
  }

  function validateLoginForm() {
    let schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().pattern(/^[A-Z][a-z]{3,6}/),
    });
    return schema.validate(user, { abortEarly: false });
  }

  function forgetLoginData() {
    alert('ههه اعمل اكونت جديد')
  }




  return (
    <div className="row  login-form">
      <div className="col-md-6 login-img"></div>
      <div className="col-md-6">
        <div className="container">
          <div className="row text-center">
            {/* {errorList.map((err, index) => {
              if (err.context.label === 'password') {
                return <div key={index} className="alert alert-danger my-2">Password do not match</div>
              }
              else {
                return <div key={index} className="alert alert-danger my-2">{err.message}</div>
              }
            })} */}

            <form className='my-4' onSubmit={submitLoginForm}>
              <div className="img-box"><img className="logo-form" src={logo} alt="" /></div>
              <h2 className="my-4 fw-bold h4 text-muted">Log in to GameOver</h2>

              <input onChange={getUserData} type="email" className="form-control py-2 mt-3  bg-transparent text-light" name="email" id="email" placeholder="Email" />

              {errorList.filter((err) => err.context.label === 'email')[0] ? <div className="alert alert-danger mt-1 p-1">
                <p className="m-0">{errorList.filter((err) => err.context.label === 'email')[0]?.message}</p>
              </div> : ''}

              <input onChange={getUserData} type="password" className="form-control py-2 mt-3  bg-transparent text-light" name="password" id="password" placeholder="Password" />

              {errorList.filter((err) => err.context.label === 'password')[0] ? <div className="alert alert-danger mt-1 p-1">
                <p className="m-0">Password do not match, Should Start by Capital letter</p>
              </div> : ''}

              <button type="submit" className="btn btn-gray mt-3  w-100">{isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}</button>
            </form>

            <hr />

            <Link onClick={forgetLoginData} className='text-info my-2'>Forgot Password?</Link>
            <p className="mb-5">Not a member yet ? <Link className='text-info' to='/'>Create Account</Link></p>

          </div>
        </div>
      </div>


    </div>
  )
}

