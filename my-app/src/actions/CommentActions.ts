import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/commentTypes';
import { ISingleComment } from '../entities/ISingleComment';

export const getComments = (): Promise<ISingleComment[]> => ((dispatch: Dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/comments')
        .then(reponse => reponse.json())
        .then((commentsList: ISingleComment[]) => {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                commentsList
            })
        })
}) as any;