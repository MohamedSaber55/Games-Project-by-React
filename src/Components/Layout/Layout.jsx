
import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout({userData, logOut}) {
    return (
        <>
            <Navbar userData={userData} logOut={logOut} />
            <div className="container mt-5 pt-5 outLet-container"><Outlet></Outlet></div>
            <Footer/>
        </>
    )
}

