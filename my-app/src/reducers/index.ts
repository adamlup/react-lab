import { combineReducers } from 'redux';
import comments, { ICommentReducer } from './commentReducers';
import users, { IUserReducer } from './userReducers';
import posts, { IPostReducer } from './postReducers';

export default combineReducers({
    users,
    comments,
    posts
})

export interface IState {
    users: IUserReducer
    comments: ICommentReducer
    posts: IPostReducer
}