import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';


function BookSlider(props) {

      const [startIndex, setStartIndex] = useState(0);
      const [middleIndex, setMiddleIndex] = useState(1);
      const [endIndex, setEndIndex] = useState(2);

      const viewedBooks = props.books[0] !== undefined && [props.books[startIndex], props.books[middleIndex], props.books[endIndex]]
      console.log(viewedBooks);

      const backBook = () => {
            setStartIndex(startIndex - 1);
            setMiddleIndex(middleIndex - 1);
            setEndIndex(endIndex - 1);
            if (startIndex === 0) setStartIndex(props.books.length - 1)
            else if (middleIndex === 0) setMiddleIndex(props.books.length - 1)
            else if (endIndex === 0) setEndIndex(props.books.length - 1)
      }

      const forwardBook = () => {
            setStartIndex(startIndex + 1);
            setMiddleIndex(middleIndex + 1);
            setEndIndex(endIndex + 1);
            if (startIndex === props.books.length - 1) setStartIndex(0)
            else if (middleIndex === props.books.length - 1) setMiddleIndex(0)
            else if (endIndex === props.books.length - 1) setEndIndex(0)
      }

      useEffect(() => {
            const interval = setInterval(() => {
                  forwardBook();
            }, 8000)
            return () => clearInterval(interval)
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [startIndex])

      return (
            <>
                  <div className='w-75 d-flex justify-content-center align-items-center'>
                        <div onClick={backBook}>
                              <IoIosArrowBack className='cursor-pointer text-beige me-2 fs-3' />
                        </div>
                        <div className='d-flex justify-content-end align-items-end'>
                              {
                                    viewedBooks.length > 0 && viewedBooks.map((book, index) => (
                                          <Link to='/book-page' onClick={() => props.setBookIndex(props.allBooks.indexOf(book))} key={index} className='text-decoration-none text-beige d-flex justify-content-center align-items-center flex-column cursor-pointer mx-2'>
                                                <h1 className='display-6 fs-6 w-75 text-nowrap text-truncate mb-3 w-75 overflow-hidden'>{book.title}</h1>
                                                <div className=' d-flex justify-content-center align-items-center overflow-hidden books-covers cursor-pointer'>
                                                      <img className='h-100 d-flex justify-content-center align-items-center shadow-lg book-cover' src={book.simple_thumb} alt={book.title} />
                                                </div>
                                          </Link>
                                    ))
                              }
                        </div>
                        <div onClick={forwardBook}>
                              <IoIosArrowForward className='cursor-pointer text-beige ms-2 fs-3' />
                        </div>
                  </div>
            </>
      )
}
export default BookSlider