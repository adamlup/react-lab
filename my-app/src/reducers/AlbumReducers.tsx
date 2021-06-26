import { ISingleAlbum } from '../entities/ISingleAlbum';
import * as actionTypes from '../actions/actionTypes/AlbumTypes';

export interface IAlbumReducer {
    albumsList: ISingleAlbum[];
}

const defaultState = (): IAlbumReducer => ({
    albumsList: [],
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_ALBUMS: {
            const data: actionTypes.IAlbumTypes['GET_ALBUMS'] = action;
            return {
                ...state,
                albumsList: data.albumsList
            }
        }

        default: {
            return state;
        }
    }
}