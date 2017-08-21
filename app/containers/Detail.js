import {getBookByIdAsync, editBookByIdAsync, isSuccess} from '../actions';
import { connect } from 'react-redux';
import LibraryDetail from '../components/LibraryDetail';

const mapStateToProps = ({state}) => {
    return {
        book: state.library.book,
        books: state.library.books,
        isSuccess: state.library.isSuccess
    }
};

const mapDispatchToProps = dispatch => ({
    getBookById: (id) =>dispatch(getBookByIdAsync(id)),
    editBookById: (id, formData) => dispatch(editBookByIdAsync(id, formData)),
    isSuccessAction: () => dispatch(isSuccess(false))
});

const Detail = connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
export default Detail;

