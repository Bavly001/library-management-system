import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function PageNotFound() {
      return (
            <div className='w-100 min-vh-100 d-flex justify-content-center align-items-center flex-column text-brown-dark'>
                  <h1>Error 404, Page Not Found</h1>
                  <img src='https://i.gifer.com/origin/e4/e4cd0639b5a5c1e164aeff4370ed2365.gif' className='my-5' alt='Error' />
                  <Link to='/' className='btn bg-brown-dark rounded-5 text-beige d-flex justify-content-center align-items-center overflow-hidden text-decoration-none'><AiOutlineHome className='fs-5 me-2' /> Home</Link>
            </div>
      )
}
export default PageNotFound