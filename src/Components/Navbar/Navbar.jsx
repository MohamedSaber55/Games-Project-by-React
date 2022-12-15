import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo2.png'
// import style from './Navbar.module.css'


export default function Navbar({ userData, logOut }) {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container py-2 flex-wrap">
                    <Link className="navbar-brand">
                        <img className="w-100" src={logo} alt="Game Over Logo" />
                    </Link>
                    <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i onClick={toggleClass} className={isActive ? 'fa-solid fa-xmark navbar-toggler fs-2' : 'fa-solid fa-bars navbar-toggler fs-2'}></i>
                        {/* <i className="fa-solid fa-xmark fs-2"></i> */}
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {userData ? <>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="home"><small className="fs-6 m-0 sm">Home</small></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="all">All</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Platforms</Link>
                                    <ul className="dropdown-menu bg-dark">
                                        <li><Link className="dropdown-item text-muted" to="platforms/pc">Pc</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="platforms/browser">Browser</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By
                                    </Link>
                                    <ul className="dropdown-menu bg-dark">
                                        <li><Link className="dropdown-item text-muted" to="sort_by/release_date">Release Date</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="sort_by/popularity">Popularity</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="sort_by/alphabetical">Alphabetical</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="sort_by/relevance">Relevance</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown ">
                                    <Link className="nav-link dropdown-toggle " to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</Link>
                                    <ul className="dropdown-menu bg-dark">
                                        <li><Link className="dropdown-item text-muted" to="categories/racing">Racing</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/social">Social</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/shooter">Shooter</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/open_world">Open World</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/zombie">Zombie</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/fantasy">Fantasy</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/action_rpg">Action RPG</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/action">Action</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/flight">Flight</Link></li>
                                        <li><Link className="dropdown-item text-muted" to="categories/battle_royal">Battle Royal</Link></li>
                                    </ul>
                                </li>
                            </> : ''}
                        </ul>
                        <div className="right-nav navbar-nav ms-auto mb-2 mb-lg-0">
                            <ul className="navbar-nav">
                                {userData ? <>
                                    <li className="nav-item mx-0 mx-lg-3 mb-3 my-lg-0 "><Link className="nav-link btn btn-outline-info mx-lg-0 py-2" to="search"><i className="fa fa-search"></i> </Link></li>
                                    <li className="nav-item logout">
                                        <span onClick={logOut} className="nav-link btn btn-outline-warning" aria-current="page"><small>Log Out</small></span>
                                    </li>
                                </> : <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-center my-2 my-lg-0" aria-current="page" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn border-info text-info  ms-2" aria-current="page" to="">Join Free</Link>
                                    </li>
                                </>}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
