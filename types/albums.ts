import type { Photo } from "./photos"

export interface Album{
    userId:number,
    id:number,
    title:string
}

export interface AlbumsParams{
    userId?:number,
    id?:number,
    title?:string
}

export interface AlbumWithPhotos extends Album{
    photos:Photo[];
}