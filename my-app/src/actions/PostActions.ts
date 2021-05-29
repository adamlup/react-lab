import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/postTypes';
import { ISinglePost } from '../entities/ISinglePost';

export const getPosts = (): Promise<ISinglePost[]> => ((dispatch: Dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/posts')
        .then(reponse => reponse.json())
        .then((postsList: ISinglePost[]) => {
            dispatch({
                type: actionTypes.GET_POSTS,
                postsList
            })
        })
}) as any;