/**
 * Created by root on 5/23/17.
 */
export const ADD_TYPE='ADD_TYPE';
export function add(content) {
    return dispatch => dispatch({
        type: ADD_TYPE,
        content
    });
}

export const DONE_TYPE='DONE_TYPE';
export function done(id) {
    return dispatch => dispatch ({
        type: DONE_TYPE,
        id
    });
}

export const REOPEN_TYPE='REOPEN_TYPE';
export function reopen(id) {
    return dispatch => dispatch ({
        type: REOPEN_TYPE,
        id
    });
}

export const FILTER_TYPE='FILTER_TYPE';
export function filter(fl) {
    return  dispatch => dispatch ({
        type: FILTER_TYPE,
        fl
    });
}