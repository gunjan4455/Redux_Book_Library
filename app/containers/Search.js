import { connect } from 'react-redux';
import {getBooksAsync,getFilteredBooks} from '../actions';
import LibrarySearch from '../components/LibrarySearch';

const mapStateToProps = ({state}) => {
    return {
        books: state.library.books
    }
};

const mapDispatchToProps = dispatch => ({
    getBooksAsync: () =>dispatch(getBooksAsync()),
    getFilteredBooks: (key) => dispatch(getFilteredBooks(key))
});

const Search = connect(mapStateToProps, mapDispatchToProps)(LibrarySearch);
export default Search;