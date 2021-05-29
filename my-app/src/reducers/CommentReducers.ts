import { ISingleComment } from '../entities/ISingleComment';
import * as actionTypes from '../actions/actionTypes/commentTypes';

export interface ICommentReducer {
    commentsList: ISingleComment[];
}

const defaultState = (): ICommentReducer => ({
    commentsList: [],
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
            const data: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentsList: data.commentsList
            }
        }

        default: {
            return state;
        }
    }
}