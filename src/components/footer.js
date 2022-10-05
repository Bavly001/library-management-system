import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
      return (
            <div className='footer pt-5 text-brown-dark w-100 bg-beige position-fixed bottom-0 start-0 d-flex justify-content-between align-items-center flex-column'>
                  <div className='container'>
                        <div className='row row-cols-lg-3 row-cols-md-1 row-cols-sm-1 justify-content-center align-items-center'>
                              <div className='col'>
                                    <Link to='/' className=' text-decoration-none display-6 d-flex mx-0 px-0 justify-content-center align-items-center flex-column'>Book<span className='text-orange fs-4'>the</span>World</Link>
                              </div>
                              <div className='col d-flex justify-content-center align-items-center flex-column'>
                                    <div className='col d-flex justify-content-start align-items-center flex-column'>

                                          <h1 className='display-6 fw-light fs-2 mb-3'>Contact US</h1>
                                          <h1 className='display-6 fw-light fs-5 d-flex justify-content-center align-items-center'><FaFacebook /></h1>
                                          <h1 className='display-6 fw-light fs-5 d-flex justify-content-center align-items-center'><FaInstagram /></h1>
                                          <h1 className='display-6 fw-light fs-5 d-flex justify-content-center align-items-center'><FaWhatsapp /></h1>
                                          <h1 className='display-6 fw-light fs-5 d-flex justify-content-center align-items-center'><FaGithub /></h1>


                                    </div>
                              </div>
                              <div className='col d-flex justify-content-center align-items-center flex-column'>
                                    <div className='col d-flex justify-content-center align-items-center flex-column'>

                                          <h1 className='display-6 fw-light fs-2 mb-3'>More Info</h1>
                                          <h1 className='display-6 fw-light fs-6 text-decoration-underline d-flex justify-content-center align-items-center'>About Us</h1>
                                          <h1 className='display-6 fw-light fs-6 text-decoration-underline d-flex justify-content-center align-items-center'>Cookies</h1>
                                          <h1 className='display-6 fw-light fs-6 text-decoration-underline d-flex justify-content-center align-items-center'>Why Us ..?</h1>
                                          <h1 className='display-6 fw-light fs-6 text-decoration-underline d-flex justify-content-center align-items-center'>Future Plans</h1>


                                    </div>
                              </div>

                        </div>
                  </div>
                  <div className='w-100 bg-orange py-3 d-flex justify-content-center align-items-center'>
                        <h1 className='display-6 fw-light fs-6 d-flex justify-content-center align-items-center'><BiCopyright className='me-1' />2022 Copyright | Designed by: <span className='text-beige fw-bold ms-1'>Bavly Ashraf</span></h1>
                  </div>
            </div>
      )
}
export default Footer