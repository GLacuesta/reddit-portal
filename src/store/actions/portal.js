import * as actionTypes from '../actions/actionTypes';
import { updateObject, reddit } from '../../shared/utility';

export const fetchHot = () => {
    return dispatch => {  
        reddit.getHot()
            .then( response => {
                dispatch(initPosts(response));
            });
    };
};

export const initPosts = ( posts ) => {
    return {
        type: actionTypes.INIT_POSTS,
        posts: posts
    };
};