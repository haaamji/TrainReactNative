/* eslint-disable prettier/prettier */
//실행될때 가장 기본이 되는 파일
//counterListContainer에 increment

import * as types from './ActionTypes';

export const increment = (index) => ({
    index,
    type: types.INCREMENT,
});

export const decrement = (index) => ({
    index,
    type: types.DECREMENT,
});

export const add = () => ({
    type: types.ADD,
});

export const remove = () => ({
    type: types.REMOVE,
});
