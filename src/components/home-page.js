import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

import BookSlider from './books-sliders'
import Footer from './footer'
import Header from './header'

function HomePage(props) {

      console.log(props.array)

      const festivals = [
            { title: 'SAVANNAH BOOK FESTIVAL', date: 'February 17–20, 2022', description: 'Created in 2008, the Savannah Book Festival has aimed to host national, regional, and local authors. It is an annual free festival that is open to the public, offering dozens of author events.', image: 'https://www.savannahbookfestival.org/wp-content/uploads/2019/10/sharer.png' },
            { title: 'BROOKLYN BOOK FESTIVAL', date: 'Fall 2022, dates TBA (to be announced)', description: 'The Brooklyn Book Festival is New York’s largest free book festival and one of the largest book festivals in the United States. It usually consists of eight days worth of literary events — including a Festival Day and Children’s Day — with hundreds of authors and publishers (both major and independent) attending. ', image: 'https://www.publishersweekly.com/images/data/NEWS_BRIEFS/image/000/003/3623-1.JPG' },
            { title: 'PORTLAND BOOK FESTIVAL', date: 'November 2022, exact dates TBA', description: 'I attended the Portland Book Festival a few years ago, and it was a wonderful experience to see prominent authors, such as Karen Russell, from the northwest and west coast and to learn more about literary magazines and small presses based there. While a city event, the Portland Book Festival has a smaller feel to it, which makes it comfortable to those who might be overwhelmed by the vastness of other major city festivals.', image: 'https://portlandartmuseum.org/wp-content/uploads/2021/11/pdxfest-2021.png' }
      ]

      const [viewedFestival, setViewedFestival] = useState([festivals[0]])
      const [activeButton, setActiveButton] = useState('SAVANNAH BOOK FESTIVAL')

      console.log(viewedFestival)

      return (
            <div className='home-page shadow-bottom mb-300px'>
                  <Header />
                  <div className='w-100 main-section vh-100 position-relative'>
                        <div className='w-100 h-100 opacity-75 bg-black position-absolute top-0 start-0'></div>
                        <div className='w-100 h-100 opacity-75 bg-brown-dark position-absolute top-0 start-0'></div>
                        <div className='w-100 h-100 position-absolute d-flex justify-content-center align-items-center flex-column'>
                              <div className='text-start mx-5'>
                                    <h1 className='display-1 text-beige'>Discover new worlds with books</h1>
                                    <h1 className='display-6 fs-2 text-orange'>It's a chance to reach worldwide only in a few steps</h1>
                              </div>
                              <a href='#second-section' className='text-decoration-none text-beige text-center position-absolute bottom-0 mb-4 cursor-pointer'>
                                    <h1 className='display-6 mb-0 fs-5'>scroll down</h1>
                                    <IoIosArrowDown className='fs-6' />
                              </a>
                        </div>
                  </div>
                  <div className='w-100 min-vh-100 bg-beige' id='second-section'>
                        <div className='container py-5 text-orange'>
                              <h1 className='display-2 text-center mb-5'>World's Library Festivals</h1>
                              <div className='row justify-content-center align-items-center'>
                                    {festivals.map((festival, index) => (
                                          <div className='col-lg-4 col-md-12 col-sm-12 g-2' key={index}>
                                                <button onClick={() => { setViewedFestival([festivals[index]]); setActiveButton(festival.title) }} className={activeButton === festival.title ? 'btn w-100 bg-brown-dark text-beige' : 'btn w-100 bg-brown text-beige'}>{festival.title}</button>
                                          </div>
                                    ))}
                              </div>
                              {
                                    viewedFestival.map((festival, index) => (
                                          <div className='row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 text-lg-start g-2 text-sm-center justify-content-center align-items-center events my-5' key={index}>
                                                <div className='col mb-5' >
                                                      <h1 className='display-4'>
                                                            {festival.title}
                                                      </h1>
                                                      <h1 className='display-6 text-brown-dark'>
                                                            Date: {festival.date}
                                                      </h1>
                                                </div>
                                                <div className='col d-flex justify-content-center align-items-center'>
                                                      <div className='frame overflow-hidden d-flex justify-content-center align-items-center'>
                                                            <img alt='event' src={festival.image} className='h-100' />
                                                      </div>
                                                </div>
                                                <div className='col-12 w-100 my-5'>
                                                      <p className='display-6 fs-2'>
                                                            {festival.description}
                                                      </p>
                                                </div>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
                  <div className='books-recommendations w-100 min-vh-100 bg-brown-dark text-beige text-center position-relative py-5  overflow-hidden'>
                        <div className='w-100 h-100 opacity-75 bg-black position-absolute top-0 start-0'></div>
                        <div className='w-100 h-100 opacity-75 bg-brown-dark position-absolute top-0 start-0'></div>
                        <div className='w-100 h-100 position-absolute books top-0 start-0 d-flex justify-content-center align-items-center flex-column'>
                              <div className='w-100 row row-cols-1 px-3 d-flex justify-content-end align-content-center flex-column'>
                                    <div className='my-5'>
                                          <h1 className='display-3'>Our books recommendations for you</h1>
                                          <h1 className='display-6 text-orange'>we choose them carefully for you</h1>
                                    </div>
                                    <div className='w-100 mb-3 d-flex justify-content-center align-items-center flex-column books-div '>
                                          <BookSlider books={props.array} allBooks={props.allBooks} setBookIndex={(value) => props.setIndex(value)} />
                                          <div className='w-100 overflow-hidden d-flex justify-content-center position-relative shelf-frame'>
                                                <img className='w-75 position-absolute bottom-50 shelf' src='https://www.pngmart.com/files/7/Shelf-PNG-Clipart.png' alt='shelf' />
                                          </div>
                                    </div>
                              </div>
                              <Link className='position-absolute bottom-0 mb-5 text-beige cursor-pointer text-decoration-none fw-light' to='/books-list'>Discover more books <IoIosArrowForward /></Link>
                        </div>
                  </div>
                  <Footer />
            </div>
      )
}
export default HomePage