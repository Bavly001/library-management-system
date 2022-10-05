import React, { useEffect, useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'


function BooksList(props) {

      console.log(props.superAdmin)

      const [filteredBooks, setFilteredBooks] = useState([])
      const [sortedBy, setSortedBy] = useState(null)

      useEffect(() => {
            setFilteredBooks(props.array)
      },
            [props.array.length])

      const handleSelectChange = (e) => {
            setFilteredBooks(props.array)
            if (e.target.value !== '') {
                  if (e.target.value === 'Cover Color') {
                        const options = [];
                        [...new Map(props.array.map(item => [item.cover_color, item])).values()].map(item => options.push(item.cover_color))
                        setSortedBy(options)
                        setFilteredBooks(props.array.filter(book => book.cover_color === options[0]))
                  }
                  else if (e.target.value === 'Alphabetic') {
                        setSortedBy(['A-Z', 'Z-A'])
                        const copy = [...props.array];
                        setFilteredBooks(copy.sort((x, y) => (
                              x.title.replace(/^\s+/g, '') > y.title.replace(/^\s+/g, '') ? 1 : -1
                        )))
                  }
                  else if (e.target.value === 'Kind') {
                        const options = [];
                        [...new Map(props.array.map(item => [item.kind, item])).values()].map(item => options.push(item.kind))
                        setSortedBy(options)
                        setFilteredBooks(props.array.filter(book => book.kind === options[0]))
                  }
                  else if (e.target.value === 'Has Audio') {
                        setSortedBy(['Yes', 'No'])
                        setFilteredBooks(props.array.filter(book => book.has_audio === true))
                  }
            }
            else setSortedBy(null)

      }


      const handleSelectChangeType = (e) => {
            setFilteredBooks(props.array)
            if (e.target.value !== '') {
                  if (sortedBy[0].includes('#')) {
                        setFilteredBooks(props.array.filter(book => book.cover_color === e.target.value))
                  }
                  else if (sortedBy[0] === 'A-Z') {
                        setFilteredBooks(props.array)
                        if (e.target.value === 'A-Z') {
                              const copy = [...props.array];

                              setFilteredBooks(copy.sort((x, y) => (
                                    x.title.replace(/^\s+/g, '') > y.title.replace(/^\s+/g, '') ? 1 : -1
                              )))
                        }
                        else {
                              const copy = [...props.array];

                              setFilteredBooks(copy.sort((x, y) => (
                                    x.title.replace(/^\s+/g, '') > y.title.replace(/^\s+/g, '') ? -1 : 1
                              )))
                        }
                  }
                  else if (sortedBy[0] === 'Yes') {
                        if (e.target.value === 'Yes') {
                              setFilteredBooks(props.array)

                              setFilteredBooks(props.array.filter(book => book.has_audio === true))
                        }
                        else {
                              setFilteredBooks(props.array)

                              setFilteredBooks(props.array.filter(book => book.has_audio === false))
                        }

                  }
                  else {
                        setFilteredBooks(props.array.filter(book => book.kind === e.target.value))
                  }
            }
      }

      const handleInput = (e) => {
            setFilteredBooks(props.array)
            if (e.target.value !== '') {
                  setFilteredBooks(props.array.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase().replace(/^\s+/g, ''))))
            }
            else setFilteredBooks(props.array)

      }


      const [page, setPage] = useState(1)
      const [numberOfPages, setNumberOfPages] = useState(0)

      useEffect(() => {
            setNumberOfPages(Math.ceil(filteredBooks.length / 15))
      },
            [filteredBooks.length])

      const pageNumberLimit = 6
      const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(6)
      const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)


      // console.log(numberOfPages)

      const books = filteredBooks.slice((page * 15) - 15, page * 15)

      const pages_numbers = [];
      for (let index = 1; index <= numberOfPages; index++) { pages_numbers.push(index); }

      // console.log(pages_numbers)


      const backwardPage = () => {
            setPage(page - 1);
            if ((page - 1) % pageNumberLimit === 0) {
                  setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                  setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
            }
            console.log(maxPageNumberLimit)
            console.log(minPageNumberLimit)
      }
      const forwardPage = () => {
            setPage(page + 1);
            if (page >= maxPageNumberLimit) {
                  setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
                  setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
            }
            console.log(maxPageNumberLimit)
            console.log(minPageNumberLimit)
      }

      const handleDel = (index) => {
            let delBooks = [];
            if (localStorage.getItem('deleted-books')) delBooks = JSON.parse(localStorage.getItem('deleted-books'))

            delBooks.push(index);
            localStorage.setItem('deleted-books', JSON.stringify(delBooks));
            props.reloading();
      }
      console.log(props)

      return (
            <div className='books-list-route bg-brown-dark text-beige pt-4 min-vh-100 w-100 shadow-bottom mb-300px'>
                  <Header />
                  <div className='mt-5 nav nav-bar bg-orange-dark w-100 p-4'>
                        <div className='row row-cols-lg-3 row-cols-md-1 row-cols-sm-1 gy-md-2 gy-sm-2 justify-content-center align-items-center w-100 text-brown-dark mx-auto'>
                              <div className='col'>
                                    <select className="form-control w-100" onChange={handleSelectChange}>
                                          <option defaultValue value=''>Sort By ... </option>
                                          <option>Cover Color</option>
                                          <option>Alphabetic</option>
                                          <option>Kind</option>
                                          <option>Has Audio</option>
                                    </select>
                              </div>
                              <div className='col'>
                                    <select className={`form-control w-100 ${sortedBy === null && 'opacity-50'}`} disabled={sortedBy === null} defaultValue={sortedBy !== null ? sortedBy[0] : ''} onChange={handleSelectChangeType}>
                                          {sortedBy === null ? <option value=''>Choose what you sort by first ... </option> :
                                                sortedBy.map((option, index) => {
                                                      let style = null;
                                                      if (option.includes('#')) {
                                                            style = { backgroundColor: `${option}` }
                                                      }
                                                      else style = null;
                                                      return (
                                                            <option className={option.includes('#') && 'text-beige'} value={option === '' ? '' : option} style={style} key={index}>{option !== '' ? option : 'Not Categorized'}</option>
                                                      )
                                                })
                                          }
                                    </select>
                              </div>
                              <div className='col'>
                                    <input type="text" className=" form-control w-100" placeholder="Search by title ..." onChange={handleInput} />
                              </div>
                        </div>
                  </div>
                  <div className='container'>

                        <div className='w-100'>
                              <div className='row justify-content-start align-items-center books-list'>

                                    {
                                          books.length > 0 ? books.map(
                                                (book, index) => (
                                                      <div key={index} className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center text-center position-relative book-col'>
                                                            {props.superAdmin && <button className='btn bg-orange text-beige position-absolute rounded-circle del-btn cursor-pointer d-flex justify-content-center align-items-center' onClick={() => handleDel(index)}><TiDelete /></button>}
                                                            <Link to='/book-page' onClick={() => props.setIndex(props.array.indexOf(book))} className='text-decoration-none d-flex justify-content-center align-items-center text-center py-5 book'>
                                                                  <div className='cursor-pointer d-flex justify-content-center align-items-center flex-column'>
                                                                        <div className='book-image-frame overflow-hidden d-flex justify-content-center align-items-center'>
                                                                              <img className='book-cover shadow-lg' src={book.simple_thumb} alt={book.title} />
                                                                        </div>
                                                                        <h1 className='display-6 fs-4 text-truncate book-title mt-2 w-75 overflow-hidden text-beige'>{book.title}</h1>
                                                                        <h1 className='display-6 fs-6 text-truncate text-orange book-title w-100 overflow-hidden text-beige'>{book.author}</h1>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                )
                                          )
                                                :
                                                <h1 className='display-4 text-center py-5 text-orange'>No Books Here</h1>
                                    }
                              </div>
                              <div className='pages-numbers w-100 d-flex justify-content-center align-items-center text-center'>
                                    <button className={`btn bg-brown cursor-pointer ${page === 1 ? 'disabled' : ''}`} onClick={backwardPage}><IoIosArrowBack /></button>
                                    <div className='d-flex justify-content-center align-items-start overflow-y-hidden py-5 mx-2'>
                                          {
                                                pages_numbers.map((button, index) => {
                                                      if (button < maxPageNumberLimit + 1 && button > minPageNumberLimit) {
                                                            return (
                                                                  <button key={index} onClick={() => { setPage(button) }} className={`mx-1 btn cursor-pointer ${button === page ? 'bg-orange' : 'bg-brown '}`}>
                                                                        {button}
                                                                  </button>
                                                            )
                                                      }
                                                      else return null;
                                                })

                                          }
                                    </div>
                                    <button className={`btn bg-brown cursor-pointer ${page === numberOfPages ? 'disabled' : ''}`} onClick={forwardPage}><IoIosArrowForward /></button>
                              </div>
                        </div>
                  </div>
                  <Footer />
            </div>
      )
}
export default BooksList