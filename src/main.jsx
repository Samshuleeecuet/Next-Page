import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Book from './components/Book';
import EachBook from './components/EachBook';
import LoadingSpinner from './components/LoadingSpinner';

const router = createBrowserRouter ([
  {
   path: '/',
   element: <App></App>,
   children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'about',
      element: <About></About>
    },
    {
      path: 'book',
      element: <Book></Book>,
      loader: () => fetch('https://api.itbook.store/1.0/new'),
    },
    {
      path: 'book/:id',
      element: <EachBook></EachBook>,
      loader: ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)

    }
   ]
  },
  {
    path: 'loader',
    element: <LoadingSpinner></LoadingSpinner>,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
