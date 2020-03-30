import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducer/bookReducers";
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(
    bookReducer,
    [{ title: "asd", author: "sdasd" }],
    () => {
      const localData = localStorage.getItem('book');
      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem('book', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
