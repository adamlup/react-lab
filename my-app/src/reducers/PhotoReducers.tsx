import { ISinglePhoto } from '../entities/ISinglePhoto';
import * as actionTypes from '../actions/actionTypes/PhotoTypes';

export interface IPhotoReducer {
    photosList: ISinglePhoto[];
}

const defaultState = (): IPhotoReducer => ({
    photosList: [],
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOS: {
            const data: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                photosList: data.photosList
            }
        }

        default: {
            return state;
        }
    }
}