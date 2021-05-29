import { ISinglePost } from '../entities/ISinglePost';
import * as actionTypes from '../actions/actionTypes/postTypes';

export interface IPostReducer {
    postsList: ISinglePost[];
}

const defaultState = (): IPostReducer => ({
    postsList: [],
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_POSTS: {
            const data: actionTypes.IPostTypes['GET_POSTS'] = action;
            return {
                ...state,
                postsList: data.postsList
            }
        }

        default: {
            return state;
        }
    }
}