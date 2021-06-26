import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/AlbumTypes';
import { ISingleAlbum } from '../entities/ISingleAlbum';

export const GetAlbums = (): Promise<ISingleAlbum[]> => ((dispatch: Dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/albums')
        .then(reponse => reponse.json())
        .then((albumsList: ISingleAlbum[]) => {
            dispatch({
                type: actionTypes.GET_ALBUMS,
                albumsList
            })
        })
}) as any;