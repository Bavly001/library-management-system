import React from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'


export default function AddBook() {
      const { register, handleSubmit, reset } = useForm()

      return (
            <div className='add-book-page min-vh-100 w-100 bg-brown-dark d-flex justify-content-center align-items-center'>
                  <div className='w-50 h-75'>
                        <form className='was-validated' onSubmit={handleSubmit((data) => {
                              data.full_sort_key = Math.random().toString(36).substring(2, 20)
                              if (data.has_audio === 'Yes') data.has_audio = true
                              else data.has_audio = false

                              let books = [];
                              if (localStorage.getItem('local-books')) {
                                    books = JSON.parse(localStorage.getItem('local-books'))
                                    books.push(data)
                              }
                              else books.push(data);

                              localStorage.setItem('local-books', JSON.stringify(books));
                              reset();
                        })}>
                              <h1 className="display-5 text-beige d-flex justify-content-between align-items-center">Add Book Form
                                    <Link to='/' className='btn bg-orange rounded-5 text-beige d-flex justify-content-center align-items-center overflow-hidden text-decoration-none'><AiOutlineHome className='fs-5 me-2' /> Home</Link>
                              </h1>
                              <input
                                    type='text'
                                    placeholder="Please Enter book's title ..."
                                    {...register('title')}
                                    className="form-control my-4"
                                    required
                                    autoComplete='off' />
                              <input
                                    type='text'
                                    placeholder="Please Enter book's author name ..."
                                    {...register('author')}
                                    className="form-control my-4"
                                    required
                                    autoComplete='off' />
                              <input
                                    type='text'
                                    placeholder="Please Enter book's kind ..."
                                    {...register('kind')}
                                    className="form-control my-4"
                                    required
                                    autoComplete='off' />
                              <input
                                    type='text'
                                    placeholder="Please Enter book's genre ..."
                                    {...register('genre')}
                                    className="form-control my-4"
                                    required
                                    autoComplete='off' />
                              <input
                                    type='text'
                                    placeholder="Please Enter book's cover color ..."
                                    {...register('cover_color')}
                                    className="form-control my-4"
                                    required
                                    autoComplete='off' />
                              <input
                                    type='text'
                                    placeholder="Please Enter book's cover photo ..."
                                    {...register('simple_thumb')}
                                    className="form-control my-4"
                                    required
                                    autoComplete='off' />
                              <select defaultValue='' className='form-control' {...register('has_audio')} required>
                                    <option value=''>Has audio book ... ?</option>
                                    <option>Yes</option>
                                    <option>No</option>
                              </select>
                              <button type="submit" className="btn bg-orange text-brown-dark my-5 w-100">Submit</button>
                        </form>
                  </div>
            </div>
      )
}
