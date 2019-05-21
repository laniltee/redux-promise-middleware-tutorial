import * as USER_ACTION_TYPES from '../constants/actions/userActionTypes.js';

const initialState = {
    data: [],
    loaded: false,
    loading: false,
    error: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.GET_USERS_PENDING:
            return {
                ...state,
                data: [],
                loading: true,
            };
        case USER_ACTION_TYPES.GET_USERS_FULFILLED:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                loaded: true
            };
        case USER_ACTION_TYPES.GET_USERS_REJECTED:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default userReducer;
