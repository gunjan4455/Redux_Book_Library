import React from 'react';
import { connect } from 'react-redux';
import {getBooksAsync, getFilteredBooks} from '../actions';
import LibraryHome from '../components/LibraryHome';

const mapStateToProps = ({state}) => {
    console.log("state=====",state)
    return {
        books: state.library.books
    }
};

const mapDispatchToProps = dispatch => ({
    getBooksAsync: () =>dispatch(getBooksAsync()),
    getFilteredBooks: (key) => dispatch(getFilteredBooks(key))
});

const Library = connect(mapStateToProps,mapDispatchToProps)(LibraryHome);
export default Library;
