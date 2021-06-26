import { ISingleAlbum } from '../../entities/ISingleAlbum';

export const GET_ALBUMS = 'GET_ALBUMS';

export interface IAlbumTypes {
    GET_ALBUMS: {
        albumsList: ISingleAlbum[];
    };
}