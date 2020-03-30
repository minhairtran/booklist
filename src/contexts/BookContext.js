import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick', id: uuid()},
        {title: 'how to win friends and influence people', author: 'dale', id: uuid()}
    ])

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    }

    const deleteBook = (id) => {
        const newBooks = books.filter((book) => book.id !== id)
        setBooks(newBooks);
    }
    return ( 
        <BookContext.Provider value={{books, addBook, deleteBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;

