import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'

function BookPage(props) {
      return (
            <div className='w-100 min-vh-100'>
                  {
                        props.book ?
                              <div className='w-100 h-100 p-5'>
                                    <div className='row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 justify-content-center align-content-center text-brown-dark my-5'>
                                          <div className='col d-flex justify-content-center align-items-center height200px'>
                                                <img className='shadow-lg h-100' src={props.book.simple_thumb} alt={props.book.title} />
                                          </div>
                                          <div className='col d-flex justify-content-center align-items-center'>
                                                <h1 className='display-2'>{props.book.title}</h1>
                                          </div>
                                    </div>
                                    <div className='row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 justify-content-center align-content-center bg-brown-dark text-beige my-5 py-5'>
                                          <div className='col d-flex justify-content-center align-items-center overflow-hidden'>
                                                <h1 className='display-6'>Author: {props.book.author}</h1>
                                          </div>
                                          <div className='col d-flex justify-content-center align-items-center'>
                                                <h1 className='display-6'>Kind: {props.book.kind}</h1>
                                          </div>
                                          <div className='col-12 w-100 text-center my-3'>
                                                <h1 className='display-6 fs-4'>Full Sort Key: {props.book.full_sort_key}</h1>
                                                <h1 className='display-6 fs-4'>Has Audio: {props.book.has_audio ? 'Yes' : 'No'}</h1>
                                                <h1 className='display-6 fs-4'>Genre: {props.book.genre}</h1>
                                          </div>
                                          <div style={{ backgroundColor: `${props.book.cover_color}` }} className='col-12 w-100 text-center py-3'>
                                                <h1 className='display-6 fs-4'>Color: {props.book.cover_color}</h1>
                                          </div>

                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                          <Link to='/books-list' className='btn bg-brown-dark rounded-5 text-beige d-flex justify-content-center align-items-center overflow-hidden text-decoration-none'><IoIosArrowBack className='fs-5 me-2' /> List</Link>
                                          <Link to='/' className='btn bg-brown-dark rounded-5 text-beige d-flex justify-content-center align-items-center overflow-hidden text-decoration-none'><AiOutlineHome className='fs-5 me-2' /> Home</Link>
                                    </div>
                              </div>
                              :
                              <Navigate replace to="/books-list" />
                  }
            </div>
      )
}
export default BookPage;