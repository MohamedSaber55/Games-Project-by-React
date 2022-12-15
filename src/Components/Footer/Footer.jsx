import React from 'react'
import { Link } from 'react-router-dom'
import footerImg from '../../images/logo-footer.png'

export default function Footer() {
  return (
    <>
      <div className="footer pt-4 text-center text-md-start">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 mb-2 mb-md-0">
              <p>
                <Link to="#">About Us</Link>
              </p>
              <p>
                <Link to="#">API</Link>
              </p>
              <p>
                <Link to="#">Contact Us</Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 mb-2 mb-md-0">
              <p>
                <Link to="#">Help/FAQ</Link>
              </p>
              <p>
                <Link to="#">Support & Bugs</Link>
              </p>
              <p>
                <Link to="#">Feature Request</Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 mb-2 mb-md-0">
              <p>
                <Link to="#">Privacy Policy</Link>
              </p>
              <p>
                <Link to="#">Cookies Policy</Link>
              </p>
              <p>
                <Link to="#">Terms of Use</Link>
              </p>
            </div>
            <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 mb-2 mb-md-0">
              <img src={footerImg} alt="footerImg" />
            </div>
            <hr style={{ color: 'gray' , marginTop:18 }} />

            <div className="footer-bottom row  p-0 align-items-center">
              <div className="col-md-7 col-lg-8">
                <p className=" text-md-left footer-bottom-p ">© 2022 Digiwalls Media, all rights reserved. All trademarks are property of their respective owners.</p>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0">
                <div className="text-center text-md-center">
                  <ul className="list-unstyled  text-end d-flex justify-content-center justify-content-md-end ">
                    <li className="mx-2"> <a href="" aria-label="Facebook" rel="”noopener”" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1"> <i className="fab fa-facebook-f"></i> </a> </li>
                    <li className="mx-2"> <a href="" aria-label="Twitter" rel="”noopener”" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1"> <i className="fab fa-twitter"></i> </a> </li>
                    <li className="mx-2"> <a rel="nofollow" type=" application/rss+xml" aria-label="RSS" href="" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1"> <i className="fas fa-rss"></i> </a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
