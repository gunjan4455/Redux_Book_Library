import React from 'react';
import { connect } from 'react-redux';
import {getBooksAsync, getFilteredBooks} from '../actions';
import HomeComponent from '../components/Home';

const mapStateToProps = ({state}) => {
    return {
        books: state.library.books
    }
};

const mapDispatchToProps = dispatch => ({
    getBooksAsync: () =>dispatch(getBooksAsync()),
    getFilteredBooks: (key) => dispatch(getFilteredBooks(key))
});

const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
export default Home;
