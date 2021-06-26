import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/TodoTypes';
import { ISingleTodo } from '../entities/ISingleTodo';

export const GetTodos = (): Promise<ISingleTodo[]> => ((dispatch: Dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/todos')
        .then(reponse => reponse.json())
        .then((todosList: ISingleTodo[]) => {
            dispatch({
                type: actionTypes.GET_TODOS,
                todosList
            })
        })
}) as any;