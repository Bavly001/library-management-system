// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




// Routes
import HomePage from './components/home-page';
import BooksList from './components/books-list';
import RegisterLoginPage from './components/register-login-page';
import BookPage from './components/book-page';
import LoginRoutes from './components/login-routes';
import AddBook from './components/add-book-page';
import NonLoginRoutes from './components/non-login-routes';
import IsAdmin from './components/is-admin';
import PageNotFound from './components/page-not-found';


function App() {

  // Books arrays
  const [booksArrayLocal, setBooksArrayLocal] = useState([])
  const [booksArrayAPI, setBooksArrayAPI] = useState([])
  const [booksArray, setBooksArray] = useState([])
  const [viewedBooks, setViewedBooks] = useState([])

  // Get Books from API
  useEffect(() => {
    fetch('https://wolnelektury.pl/api/books/')
      .then(res => res.json())
      .then(books => setBooksArrayAPI(books))
  },
    [])

  // Set the local books
  useEffect(() => {
    setBooksArrayLocal(JSON.parse(localStorage.getItem('local-books')));
  },
    [booksArrayLocal.length])

  let allBooks = [];
  if (booksArrayLocal.length > 0) allBooks = booksArrayLocal.concat(booksArrayAPI);

  if (localStorage.getItem('deleted-books')) {
    JSON.parse(localStorage.getItem('deleted-books')).map(bookIndex => {
      allBooks = allBooks.filter((book, index) => index !== bookIndex)
    })
  }

  const [reload, setReload] = useState(false)

  const reloading = () => {
    setReload(!reload)
  }

  useEffect(() => {
    setBooksArray(allBooks);
  },
    [allBooks.length])


  // Set Random Books
  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * booksArray.length);
      const item = booksArray[randomIndex];
      newArray.push(item);
    }
    setViewedBooks(newArray);
  },
    [booksArray])

  const [index, setIndex] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginRoutes />}>
          <Route path='/books-list' exact element={<BooksList reloading={reloading} superAdmin={localStorage.getItem('token') === '"superadmin"' ? true : false} array={booksArray} setIndex={(value) => setIndex(value)} />} />
          <Route path='/book-page' exact element={<BookPage book={booksArray[index]} />} />

          <Route element={<IsAdmin />}>
            < Route path='/add-book' exact element={<AddBook />} />
          </Route>
        </Route>

        <Route element={<NonLoginRoutes />}>
          <Route path='/register-login' exact element={<RegisterLoginPage />} />
        </Route>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path='/home' exact element={<HomePage array={viewedBooks} allBooks={booksArray} setIndex={(value) => setIndex(value)} />} />
        <Route path='*' exact element={<PageNotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
