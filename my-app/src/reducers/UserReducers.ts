import { ISingleUser } from '../entities/ISingleUser';
import * as actionTypes from '../actions/actionTypes/userTypes';

export interface IUserReducer {
    userList: ISingleUser[];
    someData: string;
}

const defaultState = (): IUserReducer => ({
    userList: [],
    someData: ''
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                userList: data.usersList
            }
        }

        case actionTypes.PUSH_DATA: {
            const data: actionTypes.IUserTypes['PUSH_DATA'] = action;
            return {
                ...state,
                someData: data.someData
            }
        }

        default: {
            return state;
        }
    }
}