import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { Dropdown } from 'react-bootstrap'


function Header() {
      const [scroll, setScroll] = useState(0)

      useEffect(() => {
            const onScroll = () => {
                  const scrollCheck = window.scrollY > 90;
                  setScroll(scrollCheck);
            };

            document.addEventListener("scroll", onScroll);
            return () => {
                  document.removeEventListener("scroll", onScroll);
            };
      }, [scroll, setScroll]);


      return (
            <div className={`header ${scroll ? `text-brown-dark bg-beige position-sticky shadow` : `text-beige position-absolute`} top-0 start-0 py-2 my-2 w-100`}>
                  <div className='row w-100 justify-content-center align-items-center'>
                        <div className='col-5'>
                              <Link to='/' className=' text-decoration-none display-6 fs-4 d-flex mx-0 px-0 justify-content-center align-items-center'>Book<span className='text-orange fs-6'>the</span>World</Link>
                        </div>
                        <div className='col-7 d-flex justify-content-around align-items-center'>
                              <Link to='/' className=' text-decoration-none'>
                                    Home
                              </Link>
                              <Link to='/books-list' className=' text-decoration-none'>
                                    Books List
                              </Link>
                              {
                                    localStorage.getItem('token') && <Link to='/add-book' className='text-decoration-none'>Add Book</Link>
                              }
                              {
                                    localStorage.getItem('login') ?
                                          <div className=''>
                                                <Dropdown>
                                                      <Dropdown.Toggle className='d-flex justify-content-center align-items-center fw-light bg-none' id="dropdown-basic">
                                                            <BiUserCircle className='fs-4' /><span className='mx-2 display-6 fs-6'>welcome, {JSON.parse(localStorage.getItem('login')).firstName}</span>
                                                      </Dropdown.Toggle>

                                                      <Dropdown.Menu className={scroll ? 'bg-beige' : 'bg-brown-dark'}>
                                                            <Dropdown.Item onClick={() => {
                                                                  localStorage.removeItem('login')
                                                                  if (localStorage.getItem('token'))
                                                                        localStorage.removeItem('token')
                                                                  window.location.reload()

                                                            }} >Sign Out</Dropdown.Item>
                                                      </Dropdown.Menu>
                                                </Dropdown>
                                          </div>
                                          :
                                          <Link to='/register-login' className='btn bg-orange rounded-4 text-decoration-none'>
                                                Login
                                          </Link>
                              }
                        </div>
                  </div>
            </div>
      )
}
export default Header