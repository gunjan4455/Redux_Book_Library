import React from 'react';
import {call,put} from "redux-saga/effects";
import * as sagas from '../../sagas';
import * as types from '../../api/constant';
import apiCall from '../../api/apiRequest';
import endPoints from '../../api/endPoints';
import sagaHelper from 'redux-saga-testing';

describe('Testing book saga', () => {
    const it = sagaHelper(sagas.getBooksAsync());
    it('should return call', result => {
        expect(result).toEqual(call(apiCall,{
            method: 'get',
            endpoint: endPoints.books
        }));
    });

    //it('and then 43', result => {
    //    expect(result).toEqual(put({type: types.GET_BOOKS, books: [{
    //        title: "2 states done",
    //        imageUrl: "2_states.jpg",
    //        author: "Illiam Cruze",
    //        id: "2"
    //    }, {
    //        title: "2 states done",
    //        imageUrl: "2_states.jpg",
    //        author: "Illiam Cruze",
    //        id: "2"
    //    }]}));
    //});
    //
    //// Same here
    //it('and then 44', result => {
    //    expect(result).toBe(44);
    //});
    //
    //// Now the generator doesn't yield anything, so we can test we arrived at the end
    //it('and then nothing', result => {
    //    expect(result).toBeUndefined();
    //});
});