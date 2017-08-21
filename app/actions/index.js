import * as types from '../api/constant';

export const getBooksAsync = () => {
    return {
        type: types.GET_BOOKS_ASYNC
    }
};

export const editBookByIdAsync = (id, data) => {
    return {
        type: types.EDIT_BOOK_ASYNC,
        id: id,
        formData : data
    }
};

export const getBookByIdAsync = (id) => {
    return {
        type: types.GET_BOOK_BY_ID_ASYNC,
        id:id
    }
};

export const getFilteredBooks = (key) => {
    return {
        type: types.GET_FILTERED_BOOKS_ASYNC,
        key:key
    }
};

export const isSuccess = (check) => {
    return {
        type: types.CHECK_SUCCESS,
        check:check
    }
};


