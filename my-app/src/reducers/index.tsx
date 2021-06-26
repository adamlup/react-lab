import { combineReducers } from 'redux';
import comments, { ICommentReducer } from './CommentReducers';
import users, { IUserReducer } from './UserReducers';
import posts, { IPostReducer } from './PostReducers';
import albums, { IAlbumReducer } from './AlbumReducers';
import photos, { IPhotoReducer } from './PhotoReducers';
import todos, {ITodoReducer} from './TodoReducers';

export default combineReducers({
    users,
    comments,
    posts,
    albums,
    photos,
    todos
})

export interface IState {
    users: IUserReducer
    comments: ICommentReducer
    posts: IPostReducer
    albums: IAlbumReducer
    photos: IPhotoReducer
    todos: ITodoReducer
}