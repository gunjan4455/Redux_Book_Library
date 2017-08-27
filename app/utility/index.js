import React from 'react';
import Book from '../components/shared/Book';


export const renderBooksList = (booksArray) => {
    return booksArray.map((eachBook, i) => (<Book book={eachBook} key={i} index={i}/>));
}
    
