import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    posts: null
};

const initPosts = (state, action) => {
    return updateObject( state, {
        posts: [ ...action.posts ]
    } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INIT_POSTS: return initPosts( state, action );
        default: return state;
    }
};

export default reducer;