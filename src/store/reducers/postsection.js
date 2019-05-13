import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    post: null
};

const initPost = (state, action) => {
    return updateObject( state, {
        post: { ...action.post }
    } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INIT_POST: return initPost( state, action );
        default: return state;
    }
};

export default reducer;