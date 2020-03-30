import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetail = ({ book }) => {
  const { deleteBook } = useContext(BookContext);
  return (
    <li onClick={() => deleteBook(book.id)}>
      <div>{book.title}</div>
      <div>{book.author}</div>
    </li>
  );
};

export default BookDetail;
