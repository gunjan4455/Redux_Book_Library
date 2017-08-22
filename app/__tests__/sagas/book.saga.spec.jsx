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
});