// frontend/src/reducers/session_reducer.js

import {
    RECEIVE_CURRENT_USER,
} from '../util/session_api_util';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                id: action.payload.id,
                handle: action.payload.handle,
                email: action.payload.email
            };
        default:
            return state;
    }
};

export default sessionReducer;