import { ISingleTodo } from '../../entities/ISingleTodo';

export const GET_TODOS = 'GET_TODOS';

export interface ITodoTypes {
    GET_TODOS: {
        todosList: ISingleTodo[];
    };
}