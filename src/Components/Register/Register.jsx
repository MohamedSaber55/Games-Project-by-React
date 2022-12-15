import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Joi from 'joi';
// import logo from '../../images/logo.png'






export default function Register() {
    let navigate = useNavigate();
    const [errorList, setErrorList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState('');
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: 0,
        email: '',
        password: '',
    });

    function getUserData(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }

    async function sendRegistrationDataToApi() {
        let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signup`, user);
        console.log(data.message);
        if (data.message === 'success') {
            setIsLoading(false);
            navigate('/login');
            console.log("jjj");
        }
        else {
            setError(data.message);
            setIsLoading(false);
        }
    }

    function submitRegistrationForm(e) {
        e.preventDefault();//to prevent reload.
        setIsLoading(true);

        let validationResult = validateRegistrationForm();
        // console.log(validationResult);
        if (validationResult.error) {
            setIsLoading(false);
            setErrorList(validationResult.error.details);
        }
        else {
            sendRegistrationDataToApi();
        }
    }

    function validateRegistrationForm() {
        let schema = Joi.object({
            first_name: Joi.string().min(3).max(15).required(),
            last_name: Joi.string().min(3).max(15).required(),
            age: Joi.number().min(16).max(80).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().pattern(/^[A-Z][a-z]{3,6}/),
        });
        return schema.validate(user, { abortEarly: false });
    }





    return (
        <div className="row m-5 m-lg-5 mx-0 login-form">
            <div className="col-lg-6 login-img"></div>
            <div className="col-lg-6 ">
                <div className="">
                    <div className="row justify-content-center align-items-center text-center">

                        <form className='my-4' onSubmit={submitRegistrationForm}>
                            <h2 className="my-4 fw-bold h4 text-muted">Create My Account!</h2>
                            {/* {errorList.map((err, index) => {
                                if (err.context.label === 'email') {
                                    if(errorList.filter((err) => err.context.label === 'first_name')[0]?.message ===""){
                                        return  <div key={index} className="alert alert-danger my-2">email do not match</div>
                                    }
                                    return <div key={index} className="alert alert-danger my-2">email is empty</div>
                                }
                                else {
                                    return "";
                                }
                            })} */}
                            <div className="row">
                                <div className="col-md-6">
                                    <input onChange={getUserData} type="text" className="form-control mt-3  bg-transparent text-light" name="first_name" id="first_name" placeholder="First Name" />

                                    {errorList.filter((err) => err.context.label === 'first_name')[0] ? <div className="alert alert-warning p-1 mb-0 mt-1 fs-6">
                                        <p className="m-0">{errorList.filter((err) => err.context.label === 'first_name')[0]?.message}</p>
                                    </div> : ''}
                                </div>
                                <div className="col-md-6">
                                    <input onChange={getUserData} type="text" className="form-control mt-3 bg-transparent text-light" name="last_name" id="last_name" placeholder="Last Name" />

                                    {errorList.filter((err) => err.context.label === 'last_name')[0] ? <div className="alert alert-warning p-1 mb-0 mt-1 fs-6">
                                        <p className="m-0 ">{errorList.filter((err) => err.context.label === 'last_name')[0]?.message}</p>
                                    </div> : ''}
                                </div>
                            </div>

                            <input onChange={getUserData} type="email" className="form-control py-2 mt-3  bg-transparent text-light" name="email" id="email" placeholder="Email Address" />

                            {errorList.filter((err) => err.context.label === 'email')[0] ? <div className="alert alert-warning mt-1 fs-6 p-1">
                                <small className="m-0 text-danger">{errorList.filter((err) => err.context.label === 'email')[0]?.message}</small>
                            </div> : ''}

                            <input onChange={getUserData} type="number" className="form-control py-2 mt-3  bg-transparent text-light" name="age" id="age" placeholder="Age" />

                            {errorList.filter((err) => err.context.label === 'age')[0] ? <div className="alert alert-warning mt-1 fs-6 p-1">
                                <p className="m-0">{errorList.filter((err) => err.context.label === 'age')[0]?.message}</p>
                            </div> : ''}

                            <input onChange={getUserData} type="password" className="form-control py-2 mt-3  bg-transparent text-light" name="password" id="password" placeholder="Password" />

                            {errorList.filter((err) => err.context.label === 'password')[0] ? <div className="alert alert-warning mb-0 mt-1 fs-6 p-1">
                                <p className="m-0">Password Should Start by Capital letter and 3 : 6 small letters.</p>
                            </div> : ''}

                            <button type="submit" className="btn btn-gray mt-3  w-100">{isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Sign Up'}</button>
                        </form>
                        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        <hr/>
                        <p className="mb-5">Already a member ? <Link className='text-info' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>

        </div>


    )
}
