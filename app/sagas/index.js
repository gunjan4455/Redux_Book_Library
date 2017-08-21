import {delay} from "redux-saga";
import {call,put,takeEvery,all,race,take,select} from "redux-saga/effects";
import apiCall from '../api/apiRequest';
import endPoints from '../api/endPoints';
import * as types from '../api/constant';

export function* getBooksAsync() {
    const books = yield call(apiCall,{
        method: 'get',
        endpoint: endPoints.books
    });
    yield put({type: types.GET_BOOKS, books: books});
}

export function* getBookByIdAsync(obj) {
    const endpoint = `${endPoints.book}/${obj.id}`;
    const book = yield call(apiCall, {
        method: 'get',
        endpoint: endpoint
    });
    yield put({type: types.GET_BOOK_BY_ID, book: book});
}

//To get already stored books in the store
export const getSearchedBooks = ({state}) => {
    if (state.library.books.length > 20)
        return (state.library.books);
    else
        return [];
};

export function* getFilteredBooks(action) {
    let books = yield select(getSearchedBooks);
    if (books.length) {
        const filteredBooks = books.filter(function (book) {
            return book.title.toLowerCase().search(action.key) !== -1;
        });
        yield put({type: types.GET_FILTERED_BOOKS, books: filteredBooks});
    } else {
        const books = yield call(apiCall, {
            method: 'get',
            endpoint: endPoints.books
        });
        const filteredBooks = books.filter(function (book) {
            return book.title.toLowerCase().search(action.key) !== -1;
        });
        yield put({type: types.GET_FILTERED_BOOKS, books: filteredBooks});
    }

}

export function* editBookByIdAsync(action) {
    const endpoint = `${endPoints.book}/${action.id}`;
    const book = yield call(apiCall, {
        method: 'put',
        endpoint: endpoint,
        payload: action.formData
    });
    yield put({type: types.EDIT_BOOK, book: book});
    yield put({type: types.CHECK_SUCCESS, check: true});
}

export function* watchGetBooks() {
    yield takeEvery(types.GET_BOOKS_ASYNC, getBooksAsync)
}

export function* watchGetBookById() {
    yield takeEvery(types.GET_BOOK_BY_ID_ASYNC, getBookByIdAsync)
}

export function* watchFilteredBooks() {
    yield takeEvery('GET_FILTERED_BOOKS_ASYNC', getFilteredBooks)
}

export function* watchEditBook() {
    yield takeEvery('EDIT_BOOK_ASYNC', editBookByIdAsync)
}

export default function* rootSaga() {
    yield all([
        watchGetBooks(),
        watchGetBookById(),
        watchFilteredBooks(),
        watchEditBook()
    ])
}