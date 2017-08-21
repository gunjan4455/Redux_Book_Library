import {getBooksAsync} from '../actions';
import * as types from '../api/constant';

const initialState = {
    books:[],
    book:{},
    isSuccess:false
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOOKS':
            return {
                ...state,
                books:action.books
            };
        case 'GET_FILTERED_BOOKS':
            return {
                ...state,
                books:action.books
            };
        case 'GET_BOOK_BY_ID':
            return {
                ...state,
                book:action.book
            };
        case 'EDIT_BOOK':
            return {
                ...state,
                book:action.book
            };
        case 'CHECK_SUCCESS':
            return {
                ...state,
                isSuccess:action.check
            };
        default:
            return state
    }
};
