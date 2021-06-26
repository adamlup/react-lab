import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/UserTypes';
import { ISingleUser } from '../entities/ISingleUser';

export const GetUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(reponse => reponse.json())
        .then((usersList: ISingleUser[]) => {
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            })
        })
}) as any;

export const getSomeData = (someData: string): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {
    dispatch({
        type: actionTypes.PUSH_DATA,
        someData
    })
}) as any;