import {getAllUsersFromApi} from '../api/userApi';
import createAction from './createAction';
import * as USER_ACTION_TYPES from '../constants/actions/userActionTypes.js';

export function getAllUsers() {
    return createAction(USER_ACTION_TYPES.GET_USERS, getAllUsersFromApi());
}
