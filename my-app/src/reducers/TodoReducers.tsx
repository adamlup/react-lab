import { ISingleTodo } from '../entities/ISingleTodo';
import * as actionTypes from '../actions/actionTypes/TodoTypes';

export interface ITodoReducer {
    todosList: ISingleTodo[];
}

const defaultState = (): ITodoReducer => ({
    todosList: [],
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_TODOS: {
            const data: actionTypes.ITodoTypes['GET_TODOS'] = action;
            return {
                ...state,
                todosList: data.todosList
            }
        }

        default: {
            return state;
        }
    }
}