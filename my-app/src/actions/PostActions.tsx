import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/PostTypes';
import { ISinglePost } from '../entities/ISinglePost';

export const GetPosts = (): Promise<ISinglePost[]> => ((dispatch: Dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/posts')
        .then(reponse => reponse.json())
        .then((postsList: ISinglePost[]) => {
            dispatch({
                type: actionTypes.GET_POSTS,
                postsList
            })
        })
}) as any;