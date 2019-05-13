import * as actionTypes from '../actions/actionTypes';
import { updateObject, reddit } from '../../shared/utility';
import snoowrap from 'snoowrap';

export const getPost = ( data ) => {
    return dispatch => {       
        // reddit.getHot()
        //     .then( response => {
        //         dispatch(initPost(response));
        //     }); 
        dispatch(initPost(data));       

    };
};

export const initPost = ( post ) => {
    return {
        type: actionTypes.INIT_POST,
        post: post
    };
};