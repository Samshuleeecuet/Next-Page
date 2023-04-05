import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Book = () => {
    // const [books,setBooks] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.itbook.store/1.0/new')
    //     .then(res => res.json())
    //     .then(data=> console.log(data));
    // },[])
    const booksData = useLoaderData();
    const {books,total} = booksData;
    // console.log(books);
    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">             
            {
               books.map(book=> 
               <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2'>
                    <img src={book.image} alt=""  className='object-cover w-full h-56 md:h-64 xl:h-80'/>

                    <div className='bg-black bg-opacity-75 text-gray-300 absolute opacity-0 hover:opacity-100 inset-0 transition-opacity px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl flex flex-col'>
                        <p>{book.title}</p><br></br>
                        <p>{book.subtitle.substring(0,45)} ...</p><br></br>
                        <p className='mt-auto'> Price: {book.price}</p>
                    </div>
               </div>
               
                ) 
            }

            </div>
        </div>
    );
};

export default Book;