"use client";
import { useEffect, useState } from 'react'
import type { AlbumWithPhotos } from '@/types/albums';

import { getAlbums } from '@/app/api/albums';
import { getPhotos } from '@/app/api/photos';

const useAlbums = ({userId}:{userId?:number}) => {
    const [AlbumWithPhotos,setAlbumWithPhotos]=useState<AlbumWithPhotos[]>([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState<string|null>(null);

    useEffect(()=>{
        const fetchAlbums = async ()=>{
            setLoading(true);
            setError(null);
            try{
                const albums = await getAlbums({userId:userId});
                const photos = await getPhotos();
                const AlbumWithPhotos:AlbumWithPhotos[]= albums.map((album)=>{
                    const albumPhotos=photos.filter(photo=>photo.albumId===album.id);
                    return{
                        ...album,
                        photos:albumPhotos
                    }
                })
                
                setAlbumWithPhotos(AlbumWithPhotos);
            }catch(error){
                console.log(error);
                setError(error instanceof Error?error.message:"Failed to get Albums with photos");
            }finally{
                setLoading(false)
            }
        }
       
        fetchAlbums();
    },[userId])

    return {AlbumWithPhotos,loading,error}
}

export default useAlbums
